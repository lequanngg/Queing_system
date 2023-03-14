import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import Search from "@mui/icons-material/Search";
import { useAppDispatch } from "../../../redux/reducer/store";
import { setSearchName } from "../../../redux/reducer/project/ProjectReducer";

export const SearchProject = () => {
  const [search, setSearch] = React.useState("")
  const dispatch = useAppDispatch();

  dispatch(setSearchName({ searchName: search }));

  const onKeyUp = (e: React.KeyboardEvent) => {
    
   
  };
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label="Search by Task Name"
      style={{ width: "500px" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      onChange={(e) => setSearch(e.target.value)}
      onKeyUp={onKeyUp}
    />
  );
};
