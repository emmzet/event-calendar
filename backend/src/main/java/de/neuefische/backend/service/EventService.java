package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.model.Genre;
import de.neuefische.backend.repo.EventRepo;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class EventService {

    private final EventRepo eventRepo;

    public EventService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    public Event addEvent(Event event) {
        return eventRepo.save(event);
    }

    public List<Event> getEvents(String name, String city, Genre genre) {


        ExampleMatcher exampleMatcher = ExampleMatcher.matching()
                .withMatcher("name", ExampleMatcher.GenericPropertyMatchers.contains())
                .withMatcher("city", ExampleMatcher.GenericPropertyMatchers.contains())
                .withMatcher("genre", ExampleMatcher.GenericPropertyMatchers.contains());

        // Find by Example (null values are ignored)
        Example<Event> example = Example.of(Event.builder()
                .name(name)
                .city(city)
                .genre(genre)
                .build(), exampleMatcher);

        return eventRepo.findAll(example);
    }

    public void deleteEvent(String id) {
        eventRepo.deleteById(id);
    }

    public Event updateEvent(Event event) {

        if (eventRepo.existsById(event.getId())) {
            return eventRepo.save(event);
        } else {
            throw new NoSuchElementException("Could not update element! Element with id does not exist: " + event.getId());
        }
    }
}
