import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { ArrowProps } from "../../types/types";

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
  left: ${(props) => (props.side === "left" ? "10px" : "auto")};
  right: ${(props) => (props.side === "right" ? "10px" : "auto")};
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Img = styled.img`
  height: 80%;
`;
const Information = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button``;

const Slider = () => {
  return (
    <Container>
      <Arrow side="left">
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Img src="assets/img1.PNG" />
          </ImageContainer>
          <Information>
            <Title>Discover Your Brands</Title>
            <Description>
              Where would you like to start? Women Men Kids
            </Description>
            <Button>Shop Now</Button>
          </Information>
        </Slide>
      </Wrapper>
      <Arrow side="right">
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
