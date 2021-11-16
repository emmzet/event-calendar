import axios from "axios";
import {useEffect, useState} from "react";

import EventCard from "../components/EventCard";
import styled from "styled-components";


export default function EventsOverview() {

    const [events, setEvents] = useState([])

    const getEvents = () => {
        return axios.get('api/event')
            .then(response => response.data)
    }

    useEffect(() => {
        getEvents()
            .then(events => setEvents(events))
            .catch(error => console.error(error.message))
    }, [])

    return (<EventsListContainer>
            {events.map(event => {
                return (
                    <li key={event.id}>
                        <EventCard event={event} />
                    </li>
                )
            })}
    </EventsListContainer>)
}

const EventsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
`
