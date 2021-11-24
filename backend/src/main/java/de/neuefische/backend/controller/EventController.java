package de.neuefische.backend.controller;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.model.Genre;
import de.neuefische.backend.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/event")

public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public Event addEvent(@RequestBody Event event){
        return eventService.addEvent(event);
    }

    @GetMapping
    public List<Event> getEvents( @RequestParam (required = false) String name,@RequestParam (required = false) String city, @RequestParam (required = false) Genre genre){
        return eventService.getEvents(name, city, genre);
    }

    @DeleteMapping({"{id}"})
    public void deleteEvent(@PathVariable String id) { eventService.deleteEvent(id); }
}