import HeadMainView from "../../components/mainview/HeadMainView";
import { useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AddSquare from "../../assets/svg/add-square.svg";
import { infoRow, rows } from "./data";
import { useNavigate } from "react-router-dom";

const TitleDevice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ff9138;
  margin-bottom: 20px;
`;

const DetailDevice = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const navigate = useNavigate();

  return (
    <div className="detail-device">
      <div className="add-device ">
        <HeadMainView
          active={2}
          titleFirst="Thiết bị"
          titleSecond="Danh sách thiết bị"
          titleThird="Chi tiết thiết bị"
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Quản lý thiết bị</TitleDevice>
            <div className="main-detail">
              <div className="full-item">
                <div className="title-small">Thông tin thiết bị</div>
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Mã thiết bị:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.maThietBi || ""}
                      placeholder="Nhập mã thiết bị"
                      required
                    />
                  </div>
                  <div className="right-row">
                    <div className="sub-title">Loại thiết bị:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.tenThietBi || ""}
                      placeholder="Nhập mã thiết bị"
                      required
                    />
                  </div>
                </div>
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Tên thiết bị:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.tenThietBi || ""}
                      placeholder="Nhập mã thiết bị"
                      required
                    />
                  </div>
                  <div className="right-row">
                    <div className="sub-title">Tên đăng nhập::</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.tenDangNhap || ""}
                      placeholder="Nhập mã thiết bị"
                      required
                    />
                  </div>
                </div>
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Địa chỉ IP:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.diaChiIP || ""}
                      placeholder="Nhập mã thiết bị"
                      required
                    />
                  </div>
                  <div className="right-row">
                    <div className="sub-title">Mật khẩu:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.matKhau || ""}
                      placeholder="Nhập mã thiết bị"
                      required
                    />
                  </div>
                </div>
                <div className="row-content row-end">
                  <div className="left-row">
                    <div className="sub-title">Dịch vụ sử dụng:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.dichVuSuDung || ""}
                      placeholder="Nhập mã thiết bị"
                      required
                    />
                  </div>
                </div>
                <div className="text-bottom"></div>
              </div>
              <div
                className="add-device update-device-btn"
                onClick={() => navigate("/home/themthietbi")}
              >
                {" "}
                <img src={AddSquare} alt="" />
                <div className="add-device-1">Cập nhật thiết bị</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDevice;
