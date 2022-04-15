import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { ArrowProps } from "../../types/types";
import { useState } from "react";
import SingleSlide from "./SingleSlide";
import { sliderItems } from "../../sliderItems";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: #dfdfdf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  left: ${(props) => (props.side === "left" ? "10px" : "auto")};
  right: ${(props) => (props.side === "right" ? "10px" : "auto")};
`;

const Wrapper = styled.div<ArrowProps>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slide! * -100}vw);
  transition: all 1.5s ease;
`;

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
    } else {
      setSlide(slide < 2 ? slide + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow side="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper slide={slide}>
        {sliderItems.map((item) => (
          <SingleSlide key={item.id} item={item} />
        ))}
      </Wrapper>
      <Arrow side="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
