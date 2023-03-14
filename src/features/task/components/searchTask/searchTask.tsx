import Search from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../../redux/reducer/store";
import { setSearchName } from "../../../../redux/reducer/task/taskReducer";

const TextField2 = styled(TextField)`
  input {
    height: 16px;
    width: 400px;
  }
`;
const Content = styled.div`
  padding-right: 300px;
`;
export const SearchTask = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  dispatch(setSearchName({ searchName: search }));

  const onKeyUp = (e: React.KeyboardEvent) => {};

  return (
    <Content>
      <TextField2
        id="outlined-basic"
        label="Search by name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={onKeyUp}
      />
    </Content>
  );
};
