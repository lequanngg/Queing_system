import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { getAllProject } from "../../../redux/actions/Project";
import { setHideStatus } from "../../../redux/reducer/project/ProjectReducer";
import { useAppDispatch } from "../../../redux/reducer/store";

export const SelectProject = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [select, setSelect] = useState("");
  console.log(select)

  const dispatch = useAppDispatch();
  const handleShowListActive = () => {
    dispatch(getAllProject({ status: 0 }));
    dispatch(setHideStatus(true));
  };

  const handleShowListDeActive = () => {
    dispatch(getAllProject({ status: 1 }));
    dispatch(setHideStatus(true));
  };

  const handleShowAllProject = () => {
    dispatch(getAllProject({}));
    dispatch(setHideStatus(false));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">All Projects</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Action"
          // onChange={handleChange}
        >
          <MenuItem value={0} onClick={handleShowListActive}>
            Active Projects
          </MenuItem>
          <MenuItem value={1} onClick={handleShowListDeActive}>
            Deactive Projects
          </MenuItem>
          <MenuItem value={2} onClick={handleShowAllProject}>
            All Projects
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
