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
import { rows2 } from "./data";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

const Diary = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
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
        titleFirst="Dịch vụ"
        titleSecond="Danh sách dịch vụ"
      />
      <MainHome>
        <div className="left-db">
          <div className="title">Quản lý dịch vụ</div>
          <div className="full-item">
            <div className="item item-1">
              <div className="left-select">
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
                    <TableCell>Tên đăng nhập</TableCell>
                    <TableCell>Thời gian tác động</TableCell>
                    <TableCell>IP thực hiện</TableCell>
                    <TableCell>Thao tác thực hiện</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2
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
                        <TableCell>{row.tendangnhap}</TableCell>
                        <TableCell>{row.thoigiantacdong}</TableCell>
                        <TableCell>{row.ipthuchien}</TableCell>
                        <TableCell>{row.thaotacthuchien}</TableCell>
                       
                    
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={rows2.length}
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
              <div className="add-device-1">Thêm dịch vụ</div>
            </div>
          </div>
        </div>
      </MainHome>
    </div>
  );
};

export default Diary;
