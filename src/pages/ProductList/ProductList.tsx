import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import CustomerOfffers from "../../components/CustomerOfffers/CustomerOfffers";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Title>Items</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Items: </FilterText>
          <Select>
            <Option disabled selected>
              Select Color
            </Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Select Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Items: </FilterText>
          <Select>
            <Option selected>New Arrival</Option>
            <Option>Price - High to Low</Option>
            <Option>Price - Low to High</Option>
            <Option>Most Orders</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <CustomerOfffers />
      <Footer />
    </Container>
  );
};

export default ProductList;
