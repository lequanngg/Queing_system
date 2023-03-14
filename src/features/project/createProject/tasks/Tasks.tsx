/* eslint-disable @typescript-eslint/no-unused-vars */
import { Checkbox, Collapse, ListItemButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../redux/reducer/store";
import { GetAllTask } from "../../../../redux/actions/task";
import TabPanel from "@mui/lab/TabPanel";
import {
  pushTask,
  removeTask,
  updateBillable,
} from "../../../../redux/reducer/project/ProjectReducer";
import { ITaskReq } from "../../../../api/task/type";
import { UseFormRegister } from "react-hook-form";
import { NewProject } from "../../../../api/project/TypeProjectApi";

const OtherTask = styled.div`
  align-items: center;

  height: 39px;
  padding-top: 5px;
`;
const RightTask = styled.div`
  width: 50%;
`;

interface ITaskStep {
  register: UseFormRegister<NewProject>;
  taskList: any;
}
export const Tasks = ({ register, taskList }: ITaskStep) => {
  const dispatch = useAppDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [check, setCheck] = React.useState<boolean>(false);

  const selectTasks = useSelector(
    (state: RootState) => state.project.selectTasks
  );
  const filterTasks = useSelector(
    (state: RootState) => state.project.filterTasks
  );

  const [openViewTask, setOpenViewTask] = React.useState(true);

  const handleClickSelectTask = () => {
    setOpenViewTask(!openViewTask);
  };


  const handleRemoveTask = (task: ITaskReq) => {
    dispatch(removeTask(task));
  };

  useEffect(() => {
    dispatch(GetAllTask());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickPushTask = (task: ITaskReq) => {
    dispatch(pushTask(task));
  };

  return (
    <TabPanel value="3">
      <div style={{ overflowY: "scroll", height: "395px" }}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f9f9f9",
              fontSize: "90%",
              height: "60px",
            }}
          >
            <p
              style={{ width: "500px", fontWeight: "600", marginLeft: "10px" }}
            >
              Tasks
            </p>
            <div>
              <p
                style={{
                  height: "10px",
                  padding: "0",
                  margin: "0",
                  fontWeight: "600",
                  fontSize: "90%",
                }}
              >
                Billable
              </p>
              <Checkbox {...label} />
            </div>
          </div>

          {selectTasks.map((item) => (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "500px",
                  marginLeft: "10px",
                }}
              >
                <ClearIcon onClick={() => handleRemoveTask(item)} />
                <p>{item.name}</p>
              </div>

              <Checkbox
                color="error"
                value={check}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCheck(event.target.checked);
                  dispatch(
                    updateBillable({
                      ...item,
                      billable: event.target.checked,
                    })
                  );
                }}
              />
            </div>
          ))}
        </div>
        <ListItemButton style={{ background: "#f9f9f9" }} onClick={handleClick}>
          <p style={{ width: "900px", background: "#f9f9f9" }}>Select task</p>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse
          in={open}
          sx={{ padding: "0 10px" }}
          timeout="auto"
          unmountOnExit
        >
          <OtherTask>
            {filterTasks.map((item) => (
              <div
                style={{
                  display: "flex",
                  borderTop: "1px solid #eee",
                  background: "#f9f9f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "500px",
                    marginLeft: "10px",
                  }}
                  onClick={() => handleClickPushTask(item)}
                >
                  <AddCircleOutlineIcon sx={{ padding: "0 10px" }} />
                  <p style={{ width: "450px" }}>{item.name}</p>
                </div>

                <RightTask>
                  {item.type === 1 ? <p>Other Task</p> : <p>Common Task</p>}
                  {/* <TextView>Other Task</TextView> */}
                </RightTask>
              </div>
            ))}
          </OtherTask>
        </Collapse>
      </div>
    </TabPanel>
  );
};
