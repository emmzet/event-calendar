import logo from '../images/we-calent.png';
import styled from 'styled-components'
import NavBar from "./NavBar";

export default function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="we calent logo"/>
            <NavBar />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: beige;
  `