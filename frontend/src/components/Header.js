import logo from '../images/we-calent.png';
import styled from 'styled-components'

export default function Header(props){
    return(
        <HeaderContainer>
            <img src={logo} alt="we calent logo"/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;
  `