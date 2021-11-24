package de.neuefische.backend;


import de.neuefische.backend.model.Event;
import de.neuefische.backend.model.Genre;
import de.neuefische.backend.repo.EventRepo;
import de.neuefische.backend.service.EventService;
import org.junit.jupiter.api.Test;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


public class EventServiceTest {
    private final EventRepo eventRepo = mock(EventRepo.class);
    private final EventService eventService = new EventService(eventRepo);

    @Test
    void addEventTest() {

        // GIVEN
        Event expected = new Event(null, "Fußball", "Hamburg", Genre.Sport, "November 30th 2021, 10:00 pm");
        when(eventRepo.save(expected)).thenReturn(expected);

        // WHEN
        Event actual = eventService.addEvent(expected);

        // THEN
        assertEquals(actual, expected);
        verify(eventRepo).save(expected);
    }

    @Test
    void getEvents() {

        ExampleMatcher exampleMatcher = ExampleMatcher.matching()
                .withMatcher("name", ExampleMatcher.GenericPropertyMatchers.contains())
                .withMatcher("city", ExampleMatcher.GenericPropertyMatchers.contains())
                .withMatcher("genre", ExampleMatcher.GenericPropertyMatchers.contains());

        Example<Event> example = Example.of(Event.builder()
                .name(null)
                .city(null)
                .genre(null)
                .build(), exampleMatcher);

        // GIVEN
        List<Event> expected = List.of(new Event(null, "Basketball", "Berlin", Genre.Sport, "November 30th 2021, 10:00 pm"));
        when(eventRepo.findAll(example)).thenReturn(expected);

        // WHEN
        List<Event> actual = eventService.getEvents(null, null, null);

        // THEN
        assertEquals(actual, expected);
        verify(eventRepo).findAll(example);

    }

    @Test
    void deleteEvent() {

        // GIVEN
        Event expected = new Event("1", "Handball", "Hamburg", Genre.Sport, "November 30th 2021, 10:00 pm");

        // WHEN
        eventService.deleteEvent("1");

        // THEN
        verify(eventRepo).deleteById(expected.getId());
    }

}
