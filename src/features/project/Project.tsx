/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { CreateProject } from "./createProject/CreateProject";
import { SearchProject } from "./searchProject/SearchProject";
import { SelectProject } from "./selectProject/SelectProject";
import { ListProject } from "./listProject/ListProject";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/reducer/store";
import { getAllProject } from "../../redux/actions/Project";

const Container = styled.div`
  padding: 20px 0;
`;
const Title = styled.div`
  p {
    margin: 0 15px 15px 15px;
    color: #292929;
  }
  border-bottom: 1px solid rgba(204, 204, 204, 0.35);
  font-weight: 400;
  font-size: 18px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export default function Project() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProject({status: 0}));
  }, []);



  return (
    <Container>
      <Title>
        <p>Manage Projects</p>
      </Title>
      <Header>
        <CreateProject />
        <SelectProject />
        <SearchProject />
      </Header>

      <ListProject/>
    </Container>
  );
}
