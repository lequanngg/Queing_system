import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Modal } from "@mui/material";
import styled from "styled-components";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useAppDispatch } from "../../../redux/reducer/store";
import { deleteProject, getAllProject } from "../../../redux/actions/Project";
import { IProject } from "../../../api/project/TypeProjectApi";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const StyleButton = styled.div`
  padding-top: 29px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const TextTitle = styled.div`
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 10px;
  font-size: 27px;
  font-weight: 600;
`;
const TextDescription = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
`;

export const DeleteProject:React.FC<{project: IProject}> = ({project}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useAppDispatch();
  
  const handleDispatch = () => {
    dispatch((deleteProject(project.id)));
    handleClose();
    dispatch(getAllProject({status: 0}));


  }

  useEffect(() => {
    dispatch(getAllProject({status: 0}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div>
      <MenuItem onClick={handleOpen} disableRipple>
        <DeleteIcon />
        Delete
      </MenuItem>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "478px",
            bgcolor: "background.paper",
            boxShadow: 24,
            padding: "16px",
            borderRadius: "5px",
          }}
        >
          <Form>
            <ErrorOutlineIcon
              sx={{
                color: "#f8bb86",
                fontSize: "120px",
                paddingBottom: "15px",
              }}
            />
            <TextTitle>Are you sure?</TextTitle>
            <TextDescription>
              Delete project :'{project.name}' ?
            </TextDescription>
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
                onClick={() => handleDispatch()}
              >
                Yes
              </Button>
            </StyleButton>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};
