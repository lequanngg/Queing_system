import HeadMainView from "../../components/mainview/HeadMainView";
import { useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { rows } from "./data";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../hooks/config";

const TitleDevice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ff9138;
  margin-bottom: 20px;
`;

const AddDevice = () => {
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

  const onSubmit = async (data: any) => {
    try {
      const docRef = await addDoc(collection(db, "device"), {
        tenThietBi: age,
        diaChiIP: data.a4,
        dichVuSuDung: data.a3,
        maThietBi: data.a1,
        trangThaiHoatDong: "Đang hoạt động",
        trangThaiKetNoi: "Kết nối",
        chiTiet: "Chi tiết",
        capNhat: "Cập nhật",
        tenDangNhap: "ten dang nhap",
        matKhau: "mat khau"
      });
      // console.log("Document written with ID: ", docRef.id);
      navigate("/home/thietbi");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="add-device">
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeadMainView
          active={2}
          titleFirst="Thiết bị"
          titleSecond="Danh sách thiết bị"
          titleThird="Thêm thiết bị"
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Quản lý thiết bị</TitleDevice>
            <div className="full-item">
              <div className="title-small">Thông tin thiết bị</div>
              <div className="row-content">
                <div className="left-row">
                  <div className="sub-title">
                    Mã thiết bị:<span>*</span>
                  </div>

                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    {...register("a1", { required: true })}
                    placeholder="Nhập mã thiết bị"
                    required
                  />
                </div>
                <div className="right-row">
                  <div className="sub-title">
                    Loại thiết bị::<span>*</span>
                  </div>

                  <FormControl fullWidth>
                    <Select
                      value={age}
                      onChange={handleChange}
                      required
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Kiosk"}>Kiosk</MenuItem>
                      <MenuItem value={"Display counter"}>
                        Display counter
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row-content">
                <div className="left-row">
                  <div className="sub-title">
                    Tên thiết bị::<span>*</span>
                  </div>

                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    {...register("a2", { required: true })}
                    placeholder="Nhập tên thiết bị"
                    required
                  />
                </div>
                <div className="right-row">
                  <div className="sub-title">
                    Tên đăng nhập:::<span>*</span>
                  </div>

                  <TextField
                    variant="outlined"
                    {...register("a3", { required: true })}
                    id="outlined-basic"
                    placeholder="Nhập tài khoản"
                    required
                  />
                </div>
              </div>
              <div className="row-content">
                <div className="left-row">
                  <div className="sub-title">
                    Địa chỉ IP::<span>*</span>
                  </div>

                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    {...register("a4", { required: true })}
                    required
                    placeholder="Nhập địa chỉ IP"
                  />
                </div>
                <div className="right-row">
                  <div className="sub-title">
                    Mật khẩu:::<span>*</span>
                  </div>

                  <TextField
                    {...register("a5", { required: true })}
                    variant="outlined"
                    id="outlined-basic"
                    required
                    placeholder="Nhập mật khẩu"
                  />
                </div>
              </div>
              <div className="row-content row-end">
                <div className="left-row">
                  <div className="sub-title">
                    Dịch vụ sử dụng::<span>*</span>
                  </div>

                  <TextField
                    variant="outlined"
                    {...register("a6", { required: true })}
                    required
                    id="outlined-basic"
                    placeholder="Nhập dịch vụ sử dụng"
                  />
                </div>
              </div>
              <div className="text-bottom">
                <span>*</span>Là trường thông tin bắt buộc
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="btn-submit">
                <div className="cancel">Hủy bỏ</div>{" "}
                <button className="submit" type="submit">
                  Thêm thiết bị
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDevice;
