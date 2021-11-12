import {NavLink} from "react-router-dom";
import styled from "styled-components";


export default function NavBar(props) {
    return (
        <NavBarContainer>
            <NavLink to="/">
                Show all Events
            </NavLink>
            <NavLink to="/add-event">
                Add Event
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