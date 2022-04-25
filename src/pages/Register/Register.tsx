import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(186, 85, 85, 0.3),
      rgba(29, 171, 29, 0.2)
    ),
    url("https://www.athletadesk.com/wp-content/uploads/2016/08/join-background.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: aliceblue;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 11px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  background-color: #066b8f;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Registration</Title>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Surname" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm password" />
          <Agreement>
            By Creating an account you agree to our <b>Terms of Use</b> and{" "}
            <b>Privacy Policy</b>
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
