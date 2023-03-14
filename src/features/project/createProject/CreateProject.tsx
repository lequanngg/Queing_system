/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import * as React from "react";
import Tab from "@mui/material/Tab";
import { Tasks } from "./tasks/Tasks";
import { General } from "./general/General";
import { Team } from "./team/Team";
import { NewProject } from "../../../api/project/TypeProjectApi";
import { SubmitHandler, useForm } from "react-hook-form";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Modal from "@mui/material/Modal";
import { RootState, useAppDispatch } from "../../../redux/reducer/store";
import { useSelector } from "react-redux";
import { getAllProject, saveProject } from "../../../redux/actions/Project";
import { resetProgress } from "../../../redux/reducer/project/ProjectReducer";
import { Alert, Snackbar } from "@mui/material";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "90vh",
  bgcolor: "#fff",
  boxShadow: 24,
  padding: "16px",
  borderRadius: "5px",
};

const TextTitle = styled.div`
  margin: 0 auto;
  font-size: 30px;
  font-weight: 600;
  padding: 20px 0 20px 10px;
  border-bottom: 1px solid #eee;
`;

const StyleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 25px;
`;

export const CreateProject: React.FC = () => {
  const [valueTab, setValueTab] = React.useState("1");
  const { register, handleSubmit, reset, setValue } = useForm<NewProject>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValueTab(newValue);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  
  const taskList: any = [];
  const dispatch = useAppDispatch();

  const taskTask = useSelector((state: RootState) => state.project.selectTasks);
  const progress = useSelector((state: RootState) => state.project.progress);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleOpenSnackbar = () => {
    setOpen(false);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  console.log(taskTask);
  let tasks: { id: number; taskId: number; billable?: boolean }[] = [];
  taskTask.forEach((task) => {
    tasks.push({ taskId: task.id, id: 0, billable: task.billable || false });
  });

  const memberMember = useSelector(
    (state: RootState) => state.project.selectedMembers
  );
  let members: { userId: number; id: number; type?: number }[] = [];
  memberMember.forEach((member) =>
    members.push({
      id: 0,
      userId: member.id,
      type: typeof member.projectType === "undefined" ? 1 : member.projectType,
    })
  );

  const onSaveProject= (props: NewProject) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    const newProject: NewProject = {
      name: props.name,
      code: props.code,
      status: props.status,
      timeStart: props.timeStart,
      timeEnd: props.timeEnd,
      note: props.note,
      projectType: props.projectType || 1,
      customerId: props.customerId,
      tasks: tasks,
      users: members,
      projectTargetUsers: props.projectTargetUsers,
      isAllUserBelongTo: props.isAllUserBelongTo,
    };
    // dispatch(saveProject(newProject));
    reset();
    handleClose()
    dispatch(saveProject(newProject));
    dispatch(getAllProject({status: 0}));

  };

  useEffect(() => {
    if (progress === "done1" && open) {
      dispatch(resetProgress());
      setOpen(false);
      handleOpenSnackbar();

    }
  }, [progress, open, dispatch]);


  return (
    <div>
          <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert
          variant="filled"
          severity="success"
          onClose={handleSnackbarClose}
        >
          Create Project Success
        </Alert>
      </Snackbar>
      <Button
        style={{
          background: "#f24b50",
          height: "50px",
          width: "170px",
          alignItems: "center",
        }}
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        New Project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <TextTitle>Create Project</TextTitle>
          <form onSubmit={handleSubmit(onSaveProject)}>
            <TabContext value={valueTab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab sx={{ width: "160px" }} label="General" value="1" />
                  <Tab sx={{ width: "160px" }} label="Team" value="2" />
                  <Tab sx={{ width: "160px" }} label="Tasks" value="3" />
                  <Tab sx={{ width: "160px" }} label="Notification" value="4" />
                </TabList>
              </Box>
              <General register={register} setValue={setValue} />
              <Team />
              <Tasks register={register} taskList={taskList} />
            </TabContext>

            <StyleButton>
            <Button
              variant="outlined"
              sx={{ color: "black", right: "10px" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="outlined"
              sx={{ color: "black", background: "#7cd1f9" }}
            
            >
              Save
            </Button>
          </StyleButton>
          </form>
        
        </Box>
      </Modal>
    </div>
  );
};
