import HeadMainView from "../../components/mainview/HeadMainView";
import { useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddSquare from "../../assets/svg/add-square.svg";
import Red from "../../assets/svg/red.svg";
import Green from "../../assets/svg/green.svg";
import { rows } from "./data";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";

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

const NumberLever = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOption1(event.target.value as string);
  };
  const handleChangeConnect = (event: SelectChangeEvent) => {
    setOption2(event.target.value as string);
  };

  return (
    <div className="device">
      <HeadMainView
        active={1}
        titleFirst="Cấp số"
        titleSecond="Danh sách cấp số"
      />
      <MainHome>
        <div className="left-db">
          <div className="title">Quản lý cấp số</div>
          <div className="full-item">
            <div className="item item-1">
              <div className="left-select">
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
                  <div className="title-box">Trạng thái kết nối</div>
                  <FormControl
                    sx={{ m: 1, minWidth: 250, bgcolor: "white" }}
                    size="small"
                  >
                    <Select
                      value={option2}
                      onChange={handleChangeConnect}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Tất cả</em>
                      </MenuItem>
                      <MenuItem value={20}>Kết nối</MenuItem>
                      <MenuItem value={30}>Mất kết nối</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
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
                      placeholder="Search Google Maps"
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
                    <TableCell>STT</TableCell>
                    <TableCell>Tên khách hàng</TableCell>
                    <TableCell>Tên dịch vụ </TableCell>
                    <TableCell>Thời gian cấp</TableCell>
                    <TableCell>Hạn sử dụng</TableCell>
                    <TableCell>Trạng thái</TableCell>
                    <TableCell>Nguồn cấp</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
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
                        <TableCell>{row.soThuTu}</TableCell>
                        <TableCell>{row.tenKhachHang}</TableCell>
                        <TableCell>{row.tenDichVu}</TableCell>
                        <TableCell>{row.thoigiancap}</TableCell>
                        <TableCell>{row.hansudung}</TableCell>
                        <TableCell>
                          <img
                            src={row.trangThai === "Đang chờ" ? Red : Green}
                            alt=""
                          />{" "}
                          {row.trangThai}
                        </TableCell>
                        <TableCell>{row.nguonCap}</TableCell>
                        <TableCell
                          style={{
                            color: "#4277FF",
                            textDecoration: "underline",
                          }}
                        >
                          <div style={{ cursor: "pointer" }}>{row.x}</div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={rows.length}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10]}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
            <div className="add-device">
              {" "}
              <img src={AddSquare} alt="" />
              <div className="add-device-1">Cấp số mới</div>
            </div>
          </div>
        </div>
      </MainHome>
    </div>
  );
};

export default NumberLever;
