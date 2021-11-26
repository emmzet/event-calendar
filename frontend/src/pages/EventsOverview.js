import axios from "axios";
import {useEffect, useState} from "react";

import EventCard from "../components/EventCard";
import styled from "styled-components";
import FilterBox from "../components/Filterbox";

export default function EventsOverview({onDelete}) {

    const [events, setEvents] = useState([])

    const [eventFilter, setEventFilter] = useState({})

    const getEvents = () => {
        return axios.get('api/event', {
            params: {
                name: eventFilter.name,
                city: eventFilter.city,
                genre: eventFilter.genre
            }
        })
            .then(response => response.data)
            .then(events => setEvents(events))
    }

    useEffect(() => {
        getEvents()
            .catch(error => console.error(error.message))
    }, [eventFilter])

    return (
        <Wrapper>
            <Details>
                <Summary><p>Use Filter</p></Summary>
                <FilterBox setEventFilter={setEventFilter}/>
            </Details>
            <EventsListContainer>
                {events.map(event => {
                    return (
                        <ListElement key={event.id}>
                            <EventCard event={event} onDelete={onDelete} getEvents={getEvents}/>
                        </ListElement>
                    )
                })}
            </EventsListContainer>
        </Wrapper>)
}

const EventsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  background-color: beige;
`

const ListElement = styled.li`
  list-style: none;
`

const Summary = styled.summary`
  background-color: #e2a765;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  box-shadow: 1px 2px 8px #666;
  margin-bottom: 20px;
`

const Details = styled.details`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 10px;
`