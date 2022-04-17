import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MailLockOutlined,
  Map,
  PhoneAndroid,
  RoomOutlined,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { ArrowProps } from "../../types/types";
import FooterList from "./FooterList";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const SocialIconContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div<ArrowProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #f5ede0;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>Shoppers Club.</Logo>
          <Description>
            Error excepturi aperiam quaerat enim eaque, sit ipsam corrupt.
          </Description>
          <SocialIconContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="8a3ab9">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="5182ad">
              <LinkedIn />
            </SocialIcon>
            <SocialIcon color="687580">
              <GitHub />
            </SocialIcon>
          </SocialIconContainer>
        </Left>
        <Center>
          <Title>Handy Links</Title>
          <FooterList />
        </Center>
        <Right>
          <Title>Contact Us</Title>
          <ContactItem>
            <RoomOutlined style={{ marginRight: "10px" }} />
            Leipziger Strasse 14, 45145 Essen, Germany.
          </ContactItem>
          <ContactItem>
            <PhoneAndroid style={{ marginRight: "10px" }} />
            +49 (0) 176 420 492 16
          </ContactItem>
          <ContactItem>
            <MailLockOutlined style={{ marginRight: "10px" }} />
            contact@shoppers-club.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
      <footer
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "200",
        }}
      >
        Made with 💖 from Rizwan K. ⌛ {new Date().getFullYear()} ⌛{" "}
      </footer>
    </>
  );
};

export default Footer;
