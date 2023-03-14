import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
  /* margin: 70px 0 0 300px; */
  margin: 0 0 0 200px;
  font-family: Roboto, Arial, Tahoma, sans-serif;
  font-size: 14px;
  transition: all 500ms;
  padding: 0 0 0 24px;
  box-sizing: border-box;
`;

const Main = styled.div`
  min-height: 100vh;
`;

const Mainview: React.FC = () => {
  return (
    <Container>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
export default Mainview;
