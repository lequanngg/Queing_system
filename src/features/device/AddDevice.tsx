import HeadMainView from "../../components/mainview/HeadMainView";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
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
  const [infoRow, setInfoRow] = useState<any>({});
  const [age, setAge] = useState(infoRow.tenThietBi || "Kiosk");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const navigate = useNavigate();

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
      const docRef = doc(db, "device", window.location.search.substring(1));
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
                    placeholder={infoRow.maThietBi || "Nhập mã thiết bị"}
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
                    defaultValue={infoRow.tenThietBi || ""}
                    variant="outlined"
                    id="outlined-basic"
                    {...register("a2", { required: true })}
                    placeholder={infoRow.tenThietBi || "Nhập tên thiết bị"}
                    required
                  />
                </div>
                <div className="right-row">
                  <div className="sub-title">
                    Tên đăng nhập:::<span>*</span>
                  </div>

                  <TextField
                    variant="outlined"
                    defaultValue={infoRow.tenDangNhap || ""}
                    placeholder={infoRow.tenDangNhap || "Nhập tài khoản"}
                    {...register("a3", { required: true })}
                    id="outlined-basic"
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
                    defaultValue={infoRow.diaChiIP || ""}
                    id="outlined-basic"
                    {...register("a4", { required: true })}
                    required
                    placeholder={infoRow.diaChiIP || "Nhập địa chỉ IP"}
                  />
                </div>
                <div className="right-row">
                  <div className="sub-title">
                    Mật khẩu:::<span>*</span>
                  </div>

                  <TextField
                    {...register("a5", { required: true })}
                    placeholder={infoRow.matKhau || "Nhập mật khẩu"}
                    defaultValue={infoRow.matKhau || ""}
                    variant="outlined"
                    id="outlined-basic"
                    required
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
                    defaultValue={infoRow.dichVuSuDung || ""}
                    {...register("a6", { required: true })}
                    placeholder={infoRow.dichVuSuDung || "Nhập dịch vụ sử dụng"}
                    required
                    id="outlined-basic"
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
                  {window.location.search.substring(1)
                    ? "Cập Nhật"
                    : "Thêm thiết bị"}
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
