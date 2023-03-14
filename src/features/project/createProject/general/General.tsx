/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Checkbox,
  Stack,
  TextField,
} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import React, { useEffect, useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import styled from "styled-components";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { ButtonAdd } from "./button/ButtonAdd";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../redux/reducer/store";
import { getAllCustomer } from "../../../../redux/actions/Project";
import { useForm, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { NewProject } from "../../../../api/project/TypeProjectApi";

const RowCreate = styled.div`
  display: flex;
  height: 80px;

  p {
    width: 150px;
    font-weight: 600;
    font-size: 85%;
  }
`;

const FullRow = styled.div`
  p {
    width: 150px;
  }
  overflow-y: scroll;
  height: 350px;
`;

const FormControl2 = styled.div`
  display: flex;
`;

const To = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface useForm {
  register: UseFormRegister<NewProject>;
  setValue: UseFormSetValue<NewProject>;
}



export const General: React.FC<useForm> = ({ register, setValue }) => {
  const dispatch = useAppDispatch();

  const [check, setCheck] = React.useState<boolean>(true);
  const [customer, setCustomer] = useState('')
  console.log(customer)
  const [value2, setValue2] = React.useState<Date | null>(
    new Date("2022-02-28T21:11:54")
  );
  const [value3, setValue3] = React.useState<Date | null>(
    new Date("2022-02-28T21:11:54")
  );

  const [activeButton, setActiveButton] = useState("fixedFee");
  const listCustomer = useSelector(
    (state: RootState) => state.project.customers
  );

  useEffect(() => {
    dispatch(getAllCustomer());
  }, [dispatch]);

  const handleChange1 = (newValue: Date | null) => {
    setValue2(newValue);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCustomer(event.target.value as string);
  };


const [values, setValues] = useState('')
  const onKeyUp = (e: React.KeyboardEvent) => {
      console.log(values);
  };

  const [valuess, setValuess] = useState('')
  const onKeyUps = (e: React.KeyboardEvent) => {
      console.log(valuess);
  };

  const [valuesss, setValuesss] = useState('')


  return (
    <TabPanel value="1">
      <FullRow>
        <RowCreate>
          <p>Client*</p>

          <Box sx={{ minWidth: 400 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                choose a client...
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={customer}
                label="Age"
                {...register("customerId", { required: true })}
                onChange={handleChange}
                
              >
                {listCustomer.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <ButtonAdd />
        </RowCreate>
        <RowCreate>
          <p>Project Name*</p>
          <TextField
            sx={{ minWidth: 400 }}
            id="outlined-basic"
            label="Project name"
            {...register("name")}
            variant="outlined"
            onChange={(e) => setValues(e.target.value)}
              onKeyUp={onKeyUp}

          />
        </RowCreate>
        <RowCreate>
          <p>Project Code*</p>
          <TextField
            id="outlined-basic"
            label="Project code"
            {...register("code")}
            variant="outlined"
            onChange={(e) => setValuess(e.target.value)}
              onKeyUp={onKeyUps}
          />
        </RowCreate>
        <RowCreate>
          <p>Dates*</p>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Start at"
                {...register("timeStart")}
         
                inputFormat="MM/dd/yyyy"
                value={value2}
                onChange={handleChange1}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <To>to</To>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Start end"
            
                inputFormat="MM/dd/yyyy"
                {...register("timeEnd")}
                value={value3}
                onChange={handleChange1}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </RowCreate>
        <RowCreate>
          <p>Note</p>
          <TextField

           onKeyUp={onKeyUps}
            sx={{ minWidth: 700 }}
            {...register("note")}
            id="outlined-basic"
            label="  "
            variant="outlined"
          />
        </RowCreate>
        <RowCreate>
          <p>All User</p>


          <Checkbox
         
           {...register("isAllUserBelongTo")}
          
          sx={{ height: "47px" }} defaultChecked />


          <p style={{ width: "600px" }}>
            Auto add user as a member of this project when creating new user
          </p>
        </RowCreate>
        <RowCreate>
          <p>Project Type</p>
          <FormControl2>
            <Button
              type="button"
              style={{
                marginRight: "10px",
                width: "130px",
                height: "50px",
                color: "black",
                textTransform: "none",
                borderRadius: "8px",
                border: "1px solid#c1c1c1",
                whiteSpace: "nowrap",
                background:
                  activeButton === "timeMaterials" ? "#f36c00" : "#ffffff",
              }}
              variant="contained"
              onClick={() => {
                setActiveButton("timeMaterials");
                setValue("projectType", 0);
              }}
            >
              Time & Materials
            </Button>
            <Button
              style={{
                marginRight: "10px",
                width: "130px",
                height: "50px",
                color: "black",
                textTransform: "none",
                border: "1px solid#c1c1c1",
                borderRadius: "8px",
                background: activeButton === "fixedFee" ? "#f36c00" : "#ffffff",
              }}
              variant="contained"
              onClick={() => {
                setActiveButton("fixedFee");
                setValue("projectType", 1);
              }}
            >
              Fixed Fee
            </Button>
            <Button
              style={{
                marginRight: "10px",
                width: "130px",
                height: "50px",
                color: "black",
                textTransform: "none",
                border: "1px solid#c1c1c1",
                borderRadius: "8px",
                background:
                  activeButton === "Non-Billable" ? "#f36c00" : "#ffffff",
              }}
              variant="contained"
              onClick={() => {
                setActiveButton("Non-Billable");
                // setValue("projectType", 2);
                setValue("projectType", 2);
              }}
            >
              Non-Billable
            </Button>
            <Button
              // {...register("projectType")}
              style={{
                marginRight: "10px",
                width: "130px",
                height: "50px",
                color: "black",
                textTransform: "none",
                border: "1px solid#c1c1c1",
                borderRadius: "8px",
                background: activeButton === "ODC" ? "#f36c00" : "#ffffff",
              }}
              variant="contained"
              onClick={() => {
                setActiveButton("ODC");
                // setValue("projectType", 3);
                setValue("projectType", 3);
              }}
            >
              ODC
            </Button>
          </FormControl2>
        </RowCreate>
      </FullRow>
    </TabPanel>
  );
};
