import React from "react";
import styled from "styled-components";
import LoginForm from "./form/loginForm";
import logo from "../../assets/png/image-login.png";
const Wrapper = styled.div`
  background: #F7F7F7;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

const ContentLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40%;
`; 

const ImageRight = styled.div`
background: #ffffff;
display: flex;
align-items: center;
justify-content: center;
width: 60%;
img {

}
`;
const Login: React.FC = () => {
  console.log("test");
  return (
    <Wrapper>
      <ContentLeft> 
      <LoginForm />
      </ContentLeft>
      <ImageRight>
        <img src={logo} alt="login" />
      </ImageRight>
    </Wrapper>
  );
};

export default Login;
