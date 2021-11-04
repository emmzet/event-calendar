import {NavLink} from "react-router-dom";
import styled from "styled-components";


export default function NavBar(props) {
    return (
        <NavBarContainer>
            <NavLink to="/">
                Add Event
            </NavLink>
            <NavLink to="/">
                Add Location
            </NavLink>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
  display: grid;
  justify-content: center;
  `