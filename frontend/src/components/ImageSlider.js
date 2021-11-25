import {SliderData} from "./Slider Data";
import {useState} from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/all";
import styled from "styled-components";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const lenght = slides.length;

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght -1 : current - 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <Slider>

            <LeftArrow>
                <FaArrowAltCircleLeft onClick={prevSlide}/>
            </LeftArrow>

            <RightArrow>
            <FaArrowAltCircleRight onClick={nextSlide}/>
            </RightArrow>

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}
                         key={index}
                         >
                        {index === current && (
                            <Image src={slide.image} alt='event images'/>
                        )}
                    </div>
                    )
            })}
        </Slider>
    )
}

export default ImageSlider

const Slider = styled.section`
    position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: beige;
  
  .slide{
    opacity: 0;
    transition-duration: 1s ease;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
    `

const Image = styled.img`
  width: 350px;
  height: 300px;
  border-radius: 10px;
    `

const RightArrow = styled.div`
position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: beige;
    `

const LeftArrow = styled.div`
position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: beige;
    `

