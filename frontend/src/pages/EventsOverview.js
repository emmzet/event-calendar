import axios from "axios";
import {useEffect, useState} from "react";

import EventCard from "../components/EventCard";
import styled from "styled-components";
import FilterBox from "../components/Filterbox";


export default function EventsOverview() {

    const [events, setEvents] = useState([])

    const [eventFilter, setEventFilter] = useState({
    })
    console.log(eventFilter)

    const getEvents = () => {
        return axios.get('api/event', {
            params: {
                name: eventFilter.name,
                city: eventFilter.city,
                genre: eventFilter.genre
            }})
            .then(response => response.data)
    }

    useEffect(() => {
        getEvents()
            .then(events => setEvents(events))
            .catch(error => console.error(error.message))
    }, [eventFilter])

    return (<>
        <FilterBox setEventFilter={setEventFilter}/>
        <EventsListContainer>
            {events.map(event => {
                return (
                    <li key={event.id}>
                        <EventCard event={event} />
                    </li>
                )
            })}
    </EventsListContainer>
    </>)
}

const EventsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
`
