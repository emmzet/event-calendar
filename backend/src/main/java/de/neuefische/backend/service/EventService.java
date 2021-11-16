package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.EventRepo;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.UUID;

@Service
public class EventService {

    private final EventRepo eventRepo;

    public EventService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    public Event addEvent(Event event) {
        String id = UUID.randomUUID().toString();
        event.setId(id);
        return eventRepo.save(event);
    }

    public List<Event> getEvents(String name,String city, String genre) {

        // Find by Example (null values are ignored)
        Example<Event> example = Example.of(Event.builder()
                .name(name)
                .city(city)
                .genre(genre)
                .build());

        return eventRepo.findAll(example);
    }
}
