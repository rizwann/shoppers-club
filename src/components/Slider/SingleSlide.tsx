import styled from "styled-components";
import { ArrowProps, sliderItem } from "../../types/types";

const Slide = styled.div<ArrowProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.color};
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

const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  background-color: transparent;

  cursor: pointer;
  &:hover {
    background-color: #c2ce39;
  }
`;

const SingleSlide = ({ item }: { item: sliderItem }) => {
  return (
    <Slide color={item.bg}>
      <ImageContainer>
        <Img src={item.img} />
      </ImageContainer>
      <Information>
        <Title>{item.title}</Title>
        <Description>{item.desc}</Description>
        <Button>Shop Now</Button>
      </Information>
    </Slide>
  );
};

export default SingleSlide;
