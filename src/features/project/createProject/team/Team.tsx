/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Checkbox,
  Collapse,
  FormControl,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Avatar,
} from "@mui/material";
import React, { useEffect } from "react";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../redux/reducer/store";
import { getUserNotPagging } from "../../../../redux/actions/Project";
import SelectBranch from "./selectTeam/SelectTeam";
import { pushMember } from "../../../../redux/reducer/project/ProjectReducer";
import { IUser } from "../../../../api/project/TypeProjectApi";
import ViewHeader from "./listViewSelect/ViewHeader";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const NameMember = styled.div`
padding; 0 5px;
font-size: 85%;
`;
const P = styled.div`
  font-weight: 600;
`;

const FormControl3 = styled(FormControl)`
  width: 200px;
`;

const Avata = styled.div`
  width: 59px;
  height: 59px;
  background: pink;
  border-radius: 50%;
  margin: 0 3px;
`;
const Address = styled.div`
  background: #f44336 !important;
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;
const Address1 = styled.div`
  background: #4caf50 !important;
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;
const Address2 = styled.div`
  background: #2196f3 !important;
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;
const Address3 = styled.div`
  background: #ff9800 !important;
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;

const TypeMember = styled.div`
  background: #f44336 !important;
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;
const TypeMember1 = styled.div`
  background: #4caf50 !important;
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;
const TypeMember2 = styled.div`
  background: #2196f3 !important;
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;

const StyledLevelIntern0 = styled.div`
  font-weight: 600;
  background-color: rgb(178, 190, 181);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelIntern1 = styled.div`
  font-weight: 600;
  background-color: rgb(143, 151, 121);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelIntern2 = styled.div`
  font-weight: 600;
  background-color: rgb(102, 93, 30);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelPrefresher0 = styled.div`
  font-weight: 600;
  background-color: rgb(119, 119, 119);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelFresher1 = styled.div`
  font-weight: 600;
  background-color: rgb(33, 150, 243);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelFresher2 = styled.div`
  font-weight: 600;
  background-color: rgb(137, 207, 240);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelFresher3 = styled.div`
  font-weight: 600;
  background-color: rgb(49, 140, 231);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelJunior0 = styled.div`
  font-weight: 600;
  background-color: rgb(191, 175, 178);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelJunior1 = styled.div`
  font-weight: 600;
  background-color: rgb(165, 113, 100);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelJunior2 = styled.div`
  font-weight: 600;
  background-color: rgb(59, 47, 47);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelMiddle0 = styled.div`
  font-weight: 600;
  background-color: rgb(164, 198, 57);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelMiddle1 = styled.div`
  font-weight: 600;
  background-color: rgb(141, 182, 0);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelMiddle2 = styled.div`
  font-weight: 600;
  background-color: rgb(0, 128, 0);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelSenior0 = styled.div`
  font-weight: 600;
  background-color: rgb(241, 156, 187);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelSenior1 = styled.div`
  font-weight: 600;
  background-color: rgb(171, 39, 79);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;
const StyledLevelSenior2 = styled.div`
  font-weight: 600;
  background-color: rgb(229, 43, 80);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
`;

const LeverMember = styled.div`
  background: rgb(165, 113, 100);
  border-radius: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 70%;
  margin: 0 3px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  height: 59px;
  background: #f9f9f9;
  padding-top: 5px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const Team = () => {
  const handlePushMember = (user: IUser) => {
    dispatch(pushMember(user));
  };

  const dispatch = useAppDispatch();

  const UserNotPagging = useSelector((state: RootState) => state.project.users);
  const filteredUsers = useSelector(
    (state: RootState) => state.project.filteredUsers
  );
  const members = useSelector(
    (state: RootState) => state.project.selectedMembers
  );

  console.log(members);

  useEffect(() => {
    dispatch(getUserNotPagging());
  }, [dispatch]);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return (
    <TabPanel value="2">
      <div style={{ height: "380px", overflowY: "scroll" }}>
        <div style={{ padding: "0px", marginBottom: "20px" }}>
          <ListItemButton
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
            }}
            onClick={handleClick}
          >
            <P>Team </P>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Checkbox {...label} /> <P>Show deactive member</P>{" "}
            </div>
            <P>Member Type</P>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {members.map((item) => {
              return <ViewHeader key={item.id} selectedMember={item} />;
            })}
          </Collapse>
        </div>
        <div>
          <ListItemButton
            sx={{ borderBottom: "1px solid #eee", borderTop: "1px solid #eee" }}
            onClick={handleClick2}
          >
            <ListItemText primary="Select team member" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open2} timeout="auto" unmountOnExit>
            <SelectBranch />
          </Collapse>

          <Collapse in={open2} timeout="auto" unmountOnExit>
            {filteredUsers.map((user) => (
              <Member>
                <AddCircleOutlineIcon onClick={() => handlePushMember(user)} />
                <Avatar
                  sx={{ width: "59px", height: "59px" }}
                />

                <NameMember>{user.name}</NameMember>

                {user.branch === 0 ? (
                  <Address>Hà Nội</Address>
                ) : user.branch === 1 ? (
                  <Address1>Đà Nẵng</Address1>
                ) : user.branch === 2 ? (
                  <Address2>Hồ Chí Minh</Address2>
                ) : (
                  <Address3>Vinh</Address3>
                )}

                {user.type === 0 ? (
                  <TypeMember>Staff</TypeMember>
                ) : user.type === 1 ? (
                  <TypeMember1>Internship</TypeMember1>
                ) : user.type === 2 ? (
                  <TypeMember2>Collaborator</TypeMember2>
                ) : null}

                {user.level === 0 ? (
                  <StyledLevelIntern0>Intern_0</StyledLevelIntern0>
                ) : user.level === 1 ? (
                  <StyledLevelIntern1>Intern_1</StyledLevelIntern1>
                ) : user.level === 2 ? (
                  <StyledLevelIntern2>Intern_2</StyledLevelIntern2>
                ) : user.level === 3 ? (
                  <StyledLevelPrefresher0>Prefresher</StyledLevelPrefresher0>
                ) : user.level === 4 ? (
                  <StyledLevelFresher1>Fresher-</StyledLevelFresher1>
                ) : user.level === 5 ? (
                  <StyledLevelFresher2>Fresher+</StyledLevelFresher2>
                ) : user.level === 6 ? (
                  <StyledLevelFresher3>Fresher+</StyledLevelFresher3>
                ) : user.level === 7 ? (
                  <StyledLevelJunior0>Junior-</StyledLevelJunior0>
                ) : user.level === 8 ? (
                  <StyledLevelJunior1>Junior</StyledLevelJunior1>
                ) : user.level === 9 ? (
                  <StyledLevelJunior2>Junior+</StyledLevelJunior2>
                ) : user.level === 10 ? (
                  <StyledLevelMiddle0>Middle-</StyledLevelMiddle0>
                ) : user.level === 11 ? (
                  <StyledLevelMiddle1>Middle</StyledLevelMiddle1>
                ) : user.level === 12 ? (
                  <StyledLevelMiddle2>Middle+</StyledLevelMiddle2>
                ) : user.level === 13 ? (
                  <StyledLevelSenior0>Senior-</StyledLevelSenior0>
                ) : user.level === 14 ? (
                  <StyledLevelSenior1>Senior</StyledLevelSenior1>
                ) : user.level === 15 ? (
                  <StyledLevelSenior2>Senior+</StyledLevelSenior2>
                ) : null}
              </Member>
            ))}
          </Collapse>
        </div>
      </div>
    </TabPanel>
  );
};
