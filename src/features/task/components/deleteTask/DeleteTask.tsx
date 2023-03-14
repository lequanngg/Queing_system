import { Box, Button, Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useDispatch } from "react-redux";
import { ITaskReq } from "../../../../api/task/type";
import { deleteTask } from "../../../../redux/actions/task";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "478px",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "16px",
  borderRadius: "5px",
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const TextTitle = styled.div`
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.65);
  align-items: center;
  margin: 0 auto;
  font-size: 27px;
  font-weight: 600;
`;
const TextDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
`;

const StyleButton = styled.div`
  padding-top: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const DeleteTask: React.FC<{ task: ITaskReq }> = ({ task }) => {
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);

  const handleDispatch = (id: number) => {
    dispatch(deleteTask(id));
    console.log(task.id)

    handleClose();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div style={{padding:" 0 10px"}}>
      <Button
        style={{
          height: "30px",
          background: "",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Form>
            <ErrorOutlineIcon
              sx={{
                color: "#f8bb86",
                fontSize: "120px",
                paddingBottom: "15px",
              }}
            />
          </Form>
          <TextTitle>Are you sure?</TextTitle>
          <TextDescription>Delete task :{task.name} ?</TextDescription>
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
              onClick={() => handleDispatch(task.id)
              }
            >
              Yes
            </Button>
          </StyleButton>
        </Box>
      </Modal>
    </div>
  );
};
