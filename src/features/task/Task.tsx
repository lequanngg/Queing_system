import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CreateTask } from "./components/createTask/createTask";
import { SearchTask } from "./components/searchTask/searchTask";
import { CommonTask } from "./components/commonTask/commonTask";
import { OtherTask } from "./components/otherTask/OtherTask";
import { useEffect} from "react";
import { useDispatch} from "react-redux";
import { GetAllTask } from "../../redux/actions/task";

const Container = styled.div`
`;

const TextTask = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.35);
  padding: 15px;
  font-weight: 400;
  font-size: 18px;
  p {
    margin: 0px;
    color: #292929;
  }
`;
const HeaderTask = styled.div``;
const MoreVertIcon2 = styled(MoreVertIcon)`
color: #414141
position: absolute;
right: 40px;
top: 115px;
z-index: 1;
`;
const MainTask = styled.div`
  padding: 20px;
`;
const ControlTask = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Task = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllTask());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <HeaderTask>
        <TextTask>
          <p> Manage Tasks </p>

          <MoreVertIcon2 style={{ position: "absolute" }} />
        </TextTask>
      </HeaderTask>
      <MainTask>
        <ControlTask>
          <CreateTask />
          <SearchTask />
        </ControlTask>
        <CommonTask />
        <OtherTask />
      </MainTask>
    </Container>
  );
};

export default Task;
