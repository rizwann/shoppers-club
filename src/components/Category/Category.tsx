import styled from "styled-components";
import { mobile } from "../../responsive";
import { category } from "../../types/types";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Information = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: white;
  color: #484242;
  &:hover {
    background-color: #c2ce39;
  }
`;

const Category = ({ category }: { category: category }) => {
  return (
    <Container>
      <Img src={category.img} />

      <Information>
        <Title>{category.title}</Title>
        <Button>Shop Now</Button>
      </Information>
    </Container>
  );
};

export default Category;
