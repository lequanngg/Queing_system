/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { removeAccessToken } from "../../utils/localStorageService";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/png/alta.png";
import HomeIcon from "../../assets/svg/dashboard.svg";
import ThietBiIcon from "../../assets/svg/5.svg";
import DichVuIcon from "../../assets/svg/3.svg";
import CapSoIcon from "../../assets/svg/4.svg";
import BaoCaoIcon from "../../assets/svg/baocao.svg";
import CaiDatHeThongIcon from "../../assets/svg/setting.svg";
import logout from "../../assets/svg/2.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  position: fixed;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
`;
const SidebarTop = styled.div`
  height: 150px;
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: red;
  img {
    max-width: 100px;
  }
`;
const SidebarList = styled.div`
  width: 200px;
  top: 156px;
  height: calc(100vh - 230px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const SidebarBottom = styled.div`
  background: #ffffff;
  border-top: 1px solid #eee;
  height: 73px;
  display: flex;
  line-height: 0px;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  width: 200px;
  .logout {
    width: 176px;
    height: 48px;
    background: #fff2e7;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    color: #ff7506;
    cursor: pointer;
    img {
      margin: 0 12px;
    }
  }
`;

const Avatar = styled.div`
  img {
    width: 60px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  line-height: 5px;
  font-size: 15px;
  color: white;
`;

const StyleLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  .css-cveggr-MuiListItemIcon-root {
    min-width: 40px;
  }
`;
const ListItemTextStyle = styled(ListItemText)`
  color: #7e7d88;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleclickLogout = () => {
    removeAccessToken();
    navigate("/");
  };

  return (
    <Container>
      <SidebarTop>
        <Avatar>
          <img src="" alt="" />
        </Avatar>
        <Info>
          <img src={logo} />
        </Info>
      </SidebarTop>
      <SidebarList>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            ></ListSubheader>
          }
        >
          <StyleLink to="/home">
            <ListItemButton
              style={
                location.pathname === "/home"
                  ? {
                      background: "#FF9138",
                    }
                  : {}
              }
            >
              <ListItemIcon>
                <img src={HomeIcon} />
              </ListItemIcon>
              <ListItemTextStyle
                primary="Dashboard"
                style={
                  location.pathname === "/home"
                    ? {
                        color: "white",
                      }
                    : {}
                }
              />
            </ListItemButton>
          </StyleLink>

          <StyleLink to="/home/thietbi">
            {/* style={{textDecoration: 'none', color: 'black'}} */}
            <ListItemButton
              style={
                location.pathname === "/home/thietbi"
                  ? {
                      background: "#FF9138",
                    }
                  : {}
              }
            >
              <ListItemIcon>
                <img src={ThietBiIcon} />
              </ListItemIcon>
              <ListItemTextStyle
                primary="Thiết bị"
                style={
                  location.pathname === "/home/thietbi"
                    ? {
                        color: "white",
                      }
                    : {}
                }
              />
            </ListItemButton>
          </StyleLink>
          <StyleLink to="/home/dichvu">
            {/* style={{textDecoration: 'none', color: 'black'}} */}
            <ListItemButton
              style={
                location.pathname === "/home/dichvu"
                  ? {
                      background: "#FF9138",
                    }
                  : {}
              }
            >
              <ListItemIcon>
                <img src={DichVuIcon} />
              </ListItemIcon>
              <ListItemTextStyle
                style={
                  location.pathname === "/home/dichvu"
                    ? {
                        color: "white",
                      }
                    : {}
                }
                primary="Dịch vụ"
              />
            </ListItemButton>
          </StyleLink>
          <StyleLink to="/home/capso">
            <ListItemButton
              style={
                location.pathname === "/home/capso"
                  ? {
                      background: "#FF9138",
                    }
                  : {}
              }
            >
              <ListItemIcon>
                <img src={CapSoIcon} />
              </ListItemIcon>
              <ListItemTextStyle
                primary="Cấp số"
                style={
                  location.pathname === "/home/capso"
                    ? {
                        color: "white",
                      }
                    : {}
                }
              />
            </ListItemButton>
          </StyleLink>
          <StyleLink to="/home/baocao">
            <ListItemButton
              style={
                location.pathname === "/home/baocao"
                  ? {
                      background: "#FF9138",
                    }
                  : {}
              }
            >
              <ListItemIcon>
                <img src={BaoCaoIcon} />
              </ListItemIcon>
              <ListItemTextStyle
                primary="Báo cáo"
                style={
                  location.pathname === "/home/baocao"
                    ? {
                        color: "white",
                      }
                    : {}
                }
              />
            </ListItemButton>
          </StyleLink>
          <StyleLink to="/home/caidathethong">
            <ListItemButton
              style={
                location.pathname === "/home/caidathethong"
                  ? {
                      background: "#FF9138",
                    }
                  : {}
              }
            >
              <ListItemIcon>
                <img src={CaiDatHeThongIcon} />
              </ListItemIcon>
              <ListItemTextStyle
                primary="Cài đặt hệ thống"
                style={
                  location.pathname === "/home/caidathethong"
                    ? {
                        color: "white",
                      }
                    : {}
                }
              />
            </ListItemButton>
          </StyleLink>
        </List>
      </SidebarList>
      <SidebarBottom>
        <div className="logout" onClick={handleclickLogout}>
          <img src={logout} alt="" />
          Đăng Xuất
        </div>
      </SidebarBottom>
    </Container>
  );
};

export default Sidebar;
