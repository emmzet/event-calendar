import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import {SliderData} from "../components/Slider Data";


export default function LandingPage(){
    return (
        <LandingPageContainer>
            <LandingPageText>Open Source Event Calendar</LandingPageText>
            <ImageSlider slides={SliderData}/>
        </LandingPageContainer>
    )
}

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: beige;
  `

const LandingPageText = styled.h2`
    color: black;
  display: flex;
  justify-content: center;
align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`