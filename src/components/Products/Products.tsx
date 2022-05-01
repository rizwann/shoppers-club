import axios from "axios";
import { useEffect, useState } from "react";
import { Params } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../../fakeData";
import Product from "../Product/Product";

type PropTypes = {
  cat?: string;
  sort?: string;
  filters?: {
    Color: string;
    Size: string;
  };
};
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, sort, filters }: PropTypes) => {
  const url = "http://localhost:5000/api/v1/products";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(cat ? ` ${url}?category=${cat}` : url);

        console.log(response.data);

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [cat]);

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
