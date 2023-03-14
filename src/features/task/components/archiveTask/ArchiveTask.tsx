import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styled from "styled-components";
import { ITaskReq } from "../../../../api/task/type";
import { useDispatch } from "react-redux";
import { archiveTask } from "../../../../redux/actions/task";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "478px",
  bgcolor: "#fff2f5",
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

const ArchiveTask: React.FC<{ task: ITaskReq }> = ({ task }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleArchive = (id: number) => {
    dispatch(archiveTask(id));
    handleClose();
  };
  return (
    <div>
      <Button
        style={{
          height: "30px",
          background: "",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Archive
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
          <TextDescription>Archive :{task.name} ?</TextDescription>
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
              onClick={() => handleArchive(task.id)}
            >
              Yes
            </Button>
          </StyleButton>
        </Box>
      </Modal>
    </div>
  );
};
export default ArchiveTask;
