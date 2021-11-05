import {NavLink} from "react-router-dom";
import styled from "styled-components";


export default function NavBar(props) {
    return (
        <NavBarContainer>
            <NavLink to="/add-event">
                Add Event
            </NavLink>
            <NavLink to="/add-location">
                Add Location
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