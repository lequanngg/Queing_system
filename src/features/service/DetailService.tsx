import HeadMainView from "../../components/mainview/HeadMainView";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Red from "../../assets/svg/red.svg";
import Green from "../../assets/svg/green.svg";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Box,
  Checkbox,
  IconButton,
  InputBase,
  InputLabel,
  TextField,
} from "@mui/material";
import Divider from "@mui/material/Divider";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AddSquare from "../../assets/svg/add-square.svg";
import { ref, set } from "firebase/database";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../hooks/config";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { GridSearchIcon } from "@mui/x-data-grid";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";
import { rows } from "./data";

const TitleDevice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ff9138;
  margin-bottom: 20px;
`;

const DetailService = () => {
  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [infoRow, setInfoRow] = useState<any>({});
  const [age, setAge] = useState(infoRow.tenThietBi || "Kiosk");
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();
  const [option1, setOption1] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const handleChange = (event: SelectChangeEvent) => {
    setOption1(event.target.value as string);
  };
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  const onSubmit = async (data: any) => {
    try {
      console.log(data, "data");
      const docRef = await addDoc(collection(db, "device"), {
        tenThietBi: age,
        diaChiIP: data.a4,
        dichVuSuDung: data.a6,
        maThietBi: data.a1,
        trangThaiHoatDong: "Đang hoạt động",
        trangThaiKetNoi: "Kết nối",
        chiTiet: "Chi tiết",
        capNhat: "Cập nhật",
        tenDangNhap: data.a3,
        matKhau: data.a5,
      });
      navigate("/home/thietbi");
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    if (window.location.search.substring(1)) {
      const docRef = doc(db, "service", window.location.search.substring(1));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInfoRow(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="add-device add-service detail-service">
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeadMainView
          active={2}
          titleFirst="Dịch vụ"
          titleSecond="Danh sách dịch vụ"
          titleThird="Chi tiết"
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Quản lý dịch vụ</TitleDevice>
            <div className="container">
              <div className="full-item">
                <div className="title-small">Thông tin dịch vụ</div>
                <div className="row-1">
                  <div className="row-content">
                    <div className="left-row">
                      <div className="sub-title">Mã dịch vụ:</div>

                      <input
                        id="outlined-basic"
                        {...register("a1", { required: true })}
                        placeholder={infoRow.maDichVu || "Nhập mã dịch vụ"}
                        required
                        disabled
                        defaultValue={infoRow.maDichVu }
                      />
                    </div>
                    <div className="left-row">
                      <div className="sub-title">Tên dịch vụ:</div>

                      <input
                        defaultValue={infoRow.tenDichVu || ""}
                        id="outlined-basic"
                        {...register("a2", { required: true })}
                        placeholder={infoRow.tenThietBi || "Nhập tên dịch vụ"}
                        required
                        disabled
                      />
                    </div>
                    <div className="left-row">
                      <div className="sub-title">Mô tả:</div>

                      <input
                        defaultValue={infoRow.moTa || ""}
                        {...register("a6", { required: true })}
                        placeholder={"Mô tả dịch vụ"}
                        required
                        disabled
                        id="outlined-basic"
                      />
                    </div>
                  </div>
                </div>

                <div className="title-small title-small-2">Quy tác cấp số</div>
                <div className="rules">
                  <div className="rule">
                    <div className="right-checkbox">Tăng tự động</div>
                    <input type="text" value={infoRow.input1} />
                    <div className="den">Đến</div>
                    <input type="text" value={infoRow.input2} />
                  </div>
                  <div className="rule">
                    <div className="right-checkbox">Tăng tự động từ</div>
                    <input type="text" value={infoRow.input3} />
                  </div>
                  <div>Reset mỗi ngày</div>
                  <div> {infoRow.resetMoiNgay} </div>
                </div>
              </div>
              <div className="full-item full-item-2">
                <div className="full-item full-item-child">
                  <div className="item item-1">
                    <div className="left-select">
                      <div className="">
                        <div className="title-box">Trạng thái hoạt động</div>
                        <FormControl
                          sx={{ m: 1, minWidth: 150, bgcolor: "white" }}
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
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          size="small"
                        >
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}
                          >
                            <DatePicker defaultValue={dayjs("2022-04-17")} />
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
                            width: 150,
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
                            <GridSearchIcon />
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
                    <table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Số Thứ Tự</TableCell>
                          <TableCell>Trạng Thái</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
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
                              <TableCell>
                                <img
                                  src={
                                    row.trangThaiHoatDong === "Ngưng hoạt động"
                                      ? Red
                                      : Green
                                  }
                                  alt=""
                                />{" "}
                                {row.trangThaiHoatDong}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </table>
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
                </div>
              </div>
              <div className="btn-detail">
                <div
                  className="add-device"
                  onClick={() => navigate("/home/themdichvu")}
                >
                  {" "}
                  <img src={AddSquare} alt="" />
                  <div className="add-device-1">Cập nhật danh sách</div>
                </div>
                <div
                  className="add-device"
                  onClick={() => navigate("/home/themdichvu")}
                >
                  {" "}
                  <img src={AddSquare} alt="" />
                  <div className="add-device-1">Quay lại</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailService;
