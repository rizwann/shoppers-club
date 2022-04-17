import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const FooterList = () => {
  return (
    <List>
      <ListItem>Home</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>Men Fashion</ListItem>
      <ListItem>Women Fashion</ListItem>
      <ListItem>Accessories</ListItem>
      <ListItem>My Account</ListItem>
      <ListItem>Track Order</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Privacy Policy</ListItem>
      <ListItem>Terms & Conditions</ListItem>
    </List>
  );
};

export default FooterList;
