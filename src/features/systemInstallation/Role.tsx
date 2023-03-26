import HeadMainView from "../../components/mainview/HeadMainView";
import { useState } from "react";
import styled from "styled-components";
import { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddSquare from "../../assets/svg/add-square.svg";
import { rows1 } from "./data";
import dayjs, { Dayjs } from "dayjs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainHome = styled.div`
  margin-top: -88px;
  display: flex;
  gap: 30px;
  .left-db {
    margin-top: 88px;
    width: 100%;
    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: #ff9138;
      margin-bottom: 20px;
    }
    .full-item {
      display: flex;
      justify-content: space-between;
      gap: 13px;
      .item {
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 10px;
        padding-bottom: 12px;
        cursor: pointer;
        .head-item {
          display: flex;
          align-items: center;
          gap: 12px;
          .title {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #535261;
            margin: 0;
            padding-right: 35px;
          }
        }

        .bot-item {
          display: flex;
          margin-top: 12px;
          justify-content: space-between;
          align-items: center;
          .number {
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 45px;
            color: #535261;
          }
          .up-down {
            padding-top: 5px;
          }
        }
      }
    }
    .chart {
      background: white;
      margin-top: 16px;
      border-radius: 12px;
    }
  }
`;

const Role = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const navigate = useNavigate();

  return (
    <div className="device">
      <HeadMainView
        active={1}
        titleFirst="Cài đặt hệ thống"
        titleSecond="Quản lý vai trò"
      />
      <MainHome>
        <div className="left-db">
          <div className="title">Danh sách vai trò</div>
          <div className="full-item">
            <div className="item item-1">
              {/* <div className="left-select">
                <div className="">
                  <div className="title-box">Trạng thái hoạt động</div>
                  <FormControl
                    sx={{ m: 1, minWidth: 250, bgcolor: "white" }}
                    size="small"
                  >
                    <Select
                      value={option1}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Tất cả</em>
                      </MenuItem>
                      <MenuItem value={20}>Hoạt động</MenuItem>
                      <MenuItem value={30}>Ngưng hoạt động</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="">
                  <div className="title-box">Chọn Thời Gian</div>
                  <LocalizationProvider dateAdapter={AdapterDayjs} size="small">
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        defaultValue={dayjs("2022-04-17")}
                      />
                      <DatePicker
                        value={value}
                        onChange={(newValue: any) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div> */}
            </div>
            <div className="item item-2">
              <div className="item-2-content">
                <div className="right-filed">
                  <div className="title-box">Từ khoá</div>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Nhập từ khóa"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                  </Paper>
                </div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="main-table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tên vai trò</TableCell>
                    <TableCell>Số người dùng</TableCell>
                    <TableCell>Mô tả</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows1
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow
                        key={index}
                        style={
                          index % 2
                            ? {
                                background: "#FFF2E7",
                              }
                            : {}
                        }
                      >
                        <TableCell>{row.maThietBi}</TableCell>
                        <TableCell>{row.tenThietBi}</TableCell>
                        <TableCell>{row.moTa}</TableCell>
                        <TableCell
                          style={{
                            color: "#4277FF",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            onClick={() => navigate("/home/chitietvaitro?test")}
                            style={{ cursor: "pointer" }}
                          >
                            {row.y}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
            <div
              className="add-device"
              onClick={() => navigate("/home/themvaitro")}
            >
              {" "}
              <img src={AddSquare} alt="" />
              <div className="add-device-1">Thêm vai trò</div>
            </div>
          </div>
        </div>
      </MainHome>
    </div>
  );
};

export default Role;
