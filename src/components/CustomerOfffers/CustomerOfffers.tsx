import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #fcf5f5;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 20px;
  ${mobile({ fontSize: "2.5rem" })}
`;

const Description = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  gap: 10px;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  color: white;
  border: none;
  background-color: #c2ce39;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomerOfffers = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Description>
      <InputContainer>
        <Input placeholder="Your E-mail" />
        <Button>
          <SendRoundedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default CustomerOfffers;
