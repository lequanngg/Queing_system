import { Box, Button, Modal, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useDispatch } from "react-redux";
import {  SaveTask } from "../../../../redux/actions/task";

const Button2 = styled(Button)`
  height: 36px;
  width: 116px;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "250px",
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
  color: rgba(0, 0, 0, 0.65);

  font-size: 25px;
  font-weight: 600;
`;

const StyleButton = styled.div`
  padding-top: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Option = styled.div`
  padding: 15px 30px 30px 30px;
`;

export const CreateTask = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [option, setOption] = useState(0);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    setOption(0);
    setName("");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCreateTask = () => {
    const newTask = {
      name: name,
      type: option,
      id: 0,
    };
    dispatch(SaveTask(newTask));
    handleClose();
  };

  return (
    <div>
      <Button2
        onClick={handleOpen}
        style={{ fontSize: "11px", background: "#f24b50" }}
        startIcon={<AddIcon />}
        variant="contained"
      >
        New Task
      </Button2>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Form></Form>
          <TextTitle>New Task?</TextTitle>

          <Option>
            <TextField
              id="outlined-basic"
              onChange={(e) => setName(e.target.value)}
              label="Name"
              variant="standard"
              style={{
                width: "100%",
              }}
            ></TextField>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native" />
              <NativeSelect onChange={(e) => setOption(Number(e.target.value))}>
                <option value={0}>Common Task</option>
                <option value={1}>Other Task</option>
              </NativeSelect>
            </FormControl>
          </Option>

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
              onClick={() => handleCreateTask()}
            >
              Save
            </Button>
          </StyleButton>
        </Box>
      </Modal>
    </div>
  );
};
