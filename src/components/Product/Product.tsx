import styled from "styled-components";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { SingleProduct } from "../../types/types";

const Information = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.4s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  position: relative;

  &:hover ${Information} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Img = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.4s ease;

  &:hover {
    background-color: #c2ce39;
    transform: scale(1.1);
  }
`;

const Product = ({ item }: { item: SingleProduct }) => {
  return (
    <Container>
      <Circle />
      <Img src={item.image} alt={"productImg"} />
      <Information>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <StarOutlineOutlinedIcon />
        </Icon>
      </Information>
    </Container>
  );
};

export default Product;
