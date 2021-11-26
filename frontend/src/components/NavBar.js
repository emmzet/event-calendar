import {NavLink} from "react-router-dom";
import styled from "styled-components";


export default function NavBar(props) {
    return (
        <NavBarContainer>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/add-event">
                Add Event
            </NavLink>
            <NavLink to="/events-overview">
                Show Events
            </NavLink>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 5px;
`