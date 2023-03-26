import HeadMainView from "../../components/mainview/HeadMainView";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Checkbox,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../hooks/config";
import { rows } from "./data";

const TitleDevice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ff9138;
  margin-bottom: 20px;
`;

const AddAccount = () => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setOption1(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setOption2(event.target.value as string);
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

  const onSubmit = async (data: any) => {
    console.log(data, "data");
    // try {
    //   const docRef = await addDoc(collection(db, "service"), {
    //     maDichVu: data.a1,
    //     tenDichVu: data.a2,
    //     moTa: data.a6,
    //     tangTuDongTu: data.a111,
    //     prefix: data.a112,
    //     surfix: data.a113,
    //     resetMoiNgay: data.a114,
    //     input1: data.a11,
    //     input2: data.b1,
    //     input3: data.a12,
    //     input4: data.a13,
    //     input5: data.a14,
    //   });
    navigate("/home/quanlytaikhoan");
    // } catch (e) {
    //   console.log(e);
    // }
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
    <div className="add-device add-service add-role">
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeadMainView
          active={2}
          titleFirst="Cài đặt hệ thống"
          titleSecond="Quản lý tài khoản"
          titleThird={`${
            window.location.search.substring(1)
              ? "Cập nhật tài khoản"
              : "Thêm tài khoản"
          }`}
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Quản lý tài khoản</TitleDevice>
            <div className="full-item">
              <div className="title-small">Thông tin tài khoản</div>
              <div className="row-1">
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">
                      Họ tên:<span>*</span>
                    </div>

                    <TextField
                      variant="outlined"
                      required
                      id="outlined-basic"
                      {...register("a1", { required: true })}
                      placeholder={infoRow.maDichVu || "Nhập họ tên"}
                      defaultValue={
                        window.location.search.substring(1)
                          ? "Nguyen Van A"
                          : ""
                      }
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">
                      Số điện thoại:<span>*</span>
                    </div>

                    <TextField
                      required
                      variant="outlined"
                      id="outlined-basic"
                      {...register("a2", { required: true })}
                      placeholder={infoRow.maDichVu || "Nhập mã dịch vụ"}
                      defaultValue={
                        window.location.search.substring(1) ? "0902345678" : ""
                      }
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">
                      Email:<span>*</span>
                    </div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      required
                      {...register("a3", { required: true })}
                      placeholder={infoRow.maDichVu || "Nhập mã dịch vụ"}
                      defaultValue={
                        window.location.search.substring(1)
                          ? "NguyenA154@gmail.com"
                          : ""
                      }
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">
                      Vai trò:<span>*</span>
                    </div>
                    <FormControl
                      sx={{ m: 1, minWidth: 250, bgcolor: "white" }}
                      size="small"
                    >
                      <Select
                        value={option2}
                        onChange={handleChange2}
                        required
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>Tất cả</em>
                        </MenuItem>

                        <MenuItem value={20}>Kế toán</MenuItem>
                        <MenuItem value={30}>Quản lý</MenuItem>
                        <MenuItem value={30}>Admin</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="text-bottom">
                    <span>*</span>Là trường thông tin bắt buộc
                  </div>
                </div>

                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">
                      Tên đăng nhập<span>*</span>
                    </div>
                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      required
                      {...register("a4", { required: true })}
                      placeholder={infoRow.maDichVu || "Nhập mã dịch vụ"}
                      defaultValue={
                        window.location.search.substring(1)
                          ? "tuyetnguyen123"
                          : ""
                      }
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">
                      Mật khẩu:<span>*</span>
                    </div>
                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      required
                      {...register("a5", { required: true })}
                      placeholder={infoRow.maDichVu || "Nhập mã dịch vụ"}
                      defaultValue={
                        window.location.search.substring(1)
                          ? "tuyetnguyen123"
                          : ""
                      }
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">
                      Nhập lại mật khẩu<span>*</span>
                    </div>
                    <TextField
                      variant="outlined"
                      required
                      id="outlined-basic"
                      {...register("a6  ", { required: true })}
                      placeholder={infoRow.maDichVu || "Nhập mã dịch vụ"}
                      defaultValue={
                        window.location.search.substring(1)
                          ? "tuyetnguyen123"
                          : ""
                      }
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">
                      Tình trạng<span>*</span>
                    </div>
                    <FormControl
                      sx={{ m: 1, minWidth: 250, bgcolor: "white" }}
                      size="small"
                    >
                      <Select
                        value={option1}
                        onChange={handleChange}
                        required
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
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="btn-submit">
                <div className="cancel">Hủy bỏ</div>{" "}
                <button className="submit" type="submit">
                  {window.location.search.substring(1) ? "Cập Nhật" : "Thêm"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
