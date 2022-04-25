import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(186, 85, 85, 0.3),
      rgba(29, 171, 29, 0.2)
    ),
    url("https://browsecat.net/sites/default/files/login-backgrounds-128292-582688-5068137.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: aliceblue;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  background-color: #066b8f;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #6d3606;
  text-decoration: underline;
  font-size: 13px;
  font-weight: 200;
  margin: 5px 0;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input type="text" placeholder="Username or Email" />

          <Input type="text" placeholder="Password" />

          <Button>Sign In</Button>
          <Link>Forget Your Password?</Link>
          <Link>Create an Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
