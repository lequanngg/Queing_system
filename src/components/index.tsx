import React from "react";
import Sidebar from "./sidebar/sidebar";
// import Header from "./header/header";
import styled from "styled-components";
import Mainview from "./mainview/mainview";



const Home: React.FC = () => {
  const Content = styled.div`
    display: flex;
  `;

  return (
    <div>
      {/* <Header /> */}
      <Content>
        <Sidebar />
        <Mainview />
      </Content>
    </div>
  );
};

export default Home;
