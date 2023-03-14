import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { EditTask } from "../editTask/EditTask";
import { RootState } from "../../../../redux/reducer/store";
import { DeleteTask } from "../deleteTask/DeleteTask";

const Title = styled.div`
  h5 {
    font-size: 14px;
    font-weight: 700;
  }
  p {
    border-bottom: 1px solid #eee;
  }
`;
const StyledButton = styled.div`
  display: flex;
  align-items: center;
`;
const style = {
  display: "flex",
  alignItems: "center",
  border: '0px'
 
  
};

const style2 = {
  width: '953px',
  display: "flex",
  justifyContent: "space-between",
  border: '1px solid #eee'
};





export const OtherTask: React.FC = (resultOther: any) => {
  const list = useSelector((state: RootState) => state.task.tasks);
  const listOther = list.filter((task) => task.type === 1);

  const taskSearch = useSelector((state: RootState) => state.task.searchName);

  const listSearch = listOther.filter((task) => task.name.includes(taskSearch));

  return (
    <div>
      <Title>
        <h5>
          Other Task ({listSearch.length})<div> </div>
        </h5>
        <p>These tasks are automatically added to all new projects</p>
        <h4>Name</h4>
      </Title>

      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>

          {listSearch.map((item) => {
            return (
              <TableBody>
                <TableRow style = {style2}>
                  <TableCell style={style}>
                    <EditTask />
                    {item.name}
                  </TableCell>
                  <TableCell style={style}>
                    <StyledButton>
                      {/* <ArchiveTask /> */}
                      <DeleteTask task={item} />
                    </StyledButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};
