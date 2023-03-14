import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  createCustomer,
  getAllCustomer,
} from "../../../../../redux/actions/Project";

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
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
`;

const Option = styled.div`
  padding: 15px 30px 30px 30px;
`;

export const ButtonAdd = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = () => {
    setOpen(false);
    setName("");
    setAddress("");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCreateClient = () => {
    const newClient = {
      name: name,
      address: address,
      id: 0,
    };
    dispatch(createCustomer(newClient));
    handleClose();
  };

  useEffect(() => {
    dispatch(getAllCustomer());
  }, [dispatch]);


  const onKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log(name);
    }
  };

  const onKeyUp2 = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log(address);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ height: "55px", marginLeft: "50px" }}
        startIcon={<AddIcon />}
        variant="contained"
      >
        New Client
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Form></Form>
          <TextTitle>New Client</TextTitle>

          <Option>
            <TextField
              id="outlined-basic"
              onChange={(e) => setName(e.target.value)}
              onKeyUp={onKeyUp}
              label="Name*"
              variant="standard"
              style={{
                width: "100%",
              }}
            ></TextField>
            <FormControl fullWidth>
              <TextField
                multiline
                onChange={(e) => setAddress(e.target.value)}
                onKeyUp={onKeyUp2}
                rows={1}
                id="standard-basic"
                label="Address"
                variant="standard"
              />
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
              onClick={() => handleCreateClient()}
            >
              Save
            </Button>
          </StyleButton>
        </Box>
      </Modal>
    </div>
  );
};
