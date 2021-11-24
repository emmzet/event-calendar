import styled from "styled-components";

export default function EventCard({event}) {
    return (
        <EventCardContainer>
            <h3>{event.name}</h3>
            <h3>{event.genre}</h3>
            <h3>{event.city}</h3>
            <h3>{event.date}</h3>
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
`