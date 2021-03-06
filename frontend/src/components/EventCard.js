import styled from "styled-components";
import {AiOutlineStar, BiTime, GiPartyPopper, GoLocation} from "react-icons/all";
import axios from "axios";
import {deleteEvent} from "../service/eventApiService";

export default function EventCard({event, getEvents}) {

    const handleDelete = () => {
        deleteEvent(event.id).then(getEvents)

    }

    return (
        <EventCardContainer>
            <H2> {event.name}</H2>
            <h3><AiOutlineStar/>{event.genre}</h3>
            <h3><GoLocation/>{event.city}</h3>
            <h4><BiTime/>{event.date}</h4>
            <button onClick={handleDelete}>Delete</button>
        </EventCardContainer>
    )
}

const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  text-align: center;
  justify-content: center;
  border: 1px solid #333;
  border-radius: 10px;
  box-shadow: 1px 2px 8px #666;
  background-color: #e2a765;
  color: black;
  margin-bottom: 20px;
  gap: 20px;
`

const H2 = styled.h2`
  margin-top: 10px`