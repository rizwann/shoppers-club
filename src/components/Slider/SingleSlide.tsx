import styled from "styled-components";
import { ArrowProps, sliderItem } from "../../types/types";

const Slide = styled.div<ArrowProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.color};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const SingleSlide = ({ item }: { item: sliderItem }) => {
  return (
    <Slide color={item.bg} key={item.id}>
      <ImgContainer>
        <Image src={item.img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>SHOW NOW</Button>
      </InfoContainer>
    </Slide>
  );
};

export default SingleSlide;
