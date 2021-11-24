package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.EventRepo;
import org.springframework.stereotype.Service;

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

    public List<Event> getEvents() {
        return eventRepo.findAll();
    }
}
