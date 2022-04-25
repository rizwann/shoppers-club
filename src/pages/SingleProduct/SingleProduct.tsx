import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import CustomerOfffers from "../../components/CustomerOfffers/CustomerOfffers";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { ArrowProps } from "../../types/types";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: #109571c1;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div<ArrowProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

const FilterSize = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const FilterSizeOption = styled.option``;

const ChoiceContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemAmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 3px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #e4e5e0;
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <ImgContainer>
          <Img src="assets/img1.PNG" />
        </ImgContainer>
        <InfoContainer>
          <Title> Punjabi Kurta </Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            accusantium odio quibusdam error itaque totam, similique numquam.
          </Description>
          <Price>€ 100</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="grey" />
              <FilterColor color="darkblue" />
              <FilterColor color="black" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <ChoiceContainer>
            <ItemAmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </ItemAmountContainer>
            <Button>Add to Cart</Button>
          </ChoiceContainer>
        </InfoContainer>
      </Wrapper>
      <CustomerOfffers />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
