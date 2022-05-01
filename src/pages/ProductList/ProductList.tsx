import { useState } from "react";
import { useParams } from "react-router-dom";
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
  const catName = useParams();

  const [filters, setFilters] = useState({ Color: "", Size: "" });
  const [sort, setSort] = useState("newest");

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };
  console.log(filters);

  return (
    <Container>
      <Navbar />
      <Banner />
      <Title>Items</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Items: </FilterText>
          <Select name="Color" onChange={handleFilters}>
            <Option disabled>Select Color</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
            <Option>White</Option>
          </Select>
          <Select name="Size" onChange={handleFilters}>
            <Option disabled>Select Size</Option>
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
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">New Arrival</Option>
            <Option value="desc">Price - High to Low</Option>
            <Option value="asc">Price - Low to High</Option>
            <Option value="orders">Most Orders</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={catName.category} filters={filters} sort={sort} />
      <CustomerOfffers />
      <Footer />
    </Container>
  );
};

export default ProductList;
