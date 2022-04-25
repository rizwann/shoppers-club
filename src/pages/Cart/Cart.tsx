import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Container = styled.div``;

const Wrapper = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>Your Cart</Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
