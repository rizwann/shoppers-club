import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { mobile } from "../../responsive";
import { CartPageProps } from "../../types/types";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button<CartPageProps>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.variant === "filled" && "none"};
  background-color: ${(props) =>
    props.variant === "filled" ? "black" : "transparent"};
  color: ${(props) => props.variant === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const CartInfo = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductImage = styled.img`
  width: 40%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div<CartPageProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 22px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const CartSummary = styled.div`
  flex: 1;
  border: 0.5px solid #ede1e1;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const CartSummaryTitle = styled.h1`
  font-weight: 200;
`;

const CartSummaryItem = styled.div<CartPageProps>`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const CartSummaryItemText = styled.span``;

const CartSummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Back to Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (5)</TopText>
            <TopText>Wishlist (2) </TopText>
          </TopTexts>
          <TopButton variant="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <CartInfo>
            <Product>
              <ProductDetail>
                <ProductImage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Nike Air Max 270
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 4556456454
                  </ProductId>
                  <ProductColor color="black" />

                  <ProductSize>
                    <b>Size: </b> 46.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount> 3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>€34.99</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetail>
                <ProductImage src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Philz T-Shirt
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 4556456454
                  </ProductId>
                  <ProductColor color="grey" />

                  <ProductSize>
                    <b>Size: </b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount> 1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>€14.99</ProductPrice>
              </PriceDetail>
            </Product>
          </CartInfo>
          <CartSummary>
            <CartSummaryTitle>Order Summary</CartSummaryTitle>
            <CartSummaryItem>
              <CartSummaryItemText>Subtotal: </CartSummaryItemText>
              <CartSummaryItemPrice>€49.98</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem>
              <CartSummaryItemText>Est. Shipping: </CartSummaryItemText>
              <CartSummaryItemPrice>€4.99</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem>
              <CartSummaryItemText>Shipping Discount: </CartSummaryItemText>
              <CartSummaryItemPrice>€-4.99</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem type="total">
              <CartSummaryItemText>Total: </CartSummaryItemText>
              <CartSummaryItemPrice>€49.98</CartSummaryItemPrice>
            </CartSummaryItem>
            <Button>Checkout Now</Button>
          </CartSummary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
