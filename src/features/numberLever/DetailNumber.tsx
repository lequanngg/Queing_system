import HeadMainView from "../../components/mainview/HeadMainView";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import AddSquare from "../../assets/svg/add-square.svg";
import { Router, useNavigate } from "react-router-dom";
import { addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../hooks/config";
import { rows } from "./data";
import { query, collection, getDocs } from "firebase/firestore";

const TitleDevice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ff9138;
  margin-bottom: 20px;
`;

const DetailNumber = () => {
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

  const [infoRow, setInfoRow] = useState<any>({});
  const docRef = doc(db, "number", window.location.search.substring(1));

  const getData = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setInfoRow(docSnap.data());
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // async function addNumber() {
  //   let aa = 0;
  //   for (const data of rows) {
  //     try {
  //       const docRef = await addDoc(collection(db, "number"), {
  //         email: data.email,
  //         hanSuDung: data.hansudung,
  //         nguonCap: data.nguonCap,
  //         soDienThoai: data.sdt,
  //         soThuTu: data.soThuTu,
  //         tenDichVu: data.tenDichVu,
  //         tenKhachHang: data.tenKhachHang,
  //         thoiGianCap: data.thoigiancap,
  //         trangThai: data.trangThai,
  //       });  
  //       aa = aa + 1;
  //       console.log(aa);
  //       // navigate("/home/thietbi");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }
  // addNumber()
  return (
    <div className="detail-device">
      <div className="add-device ">
        <HeadMainView
          active={2}
          titleFirst="Cấp số"
          titleSecond="Danh sách cấp số"
          titleThird="Chi tiết cấp số"
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Quản lý cấp số</TitleDevice>
            <div className="main-detail">
              <div className="full-item">
                <div className="title-small">Thông tin cấp số</div>
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Họ tên:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow?.tenKhachHang || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                  <div className="right-row">
                    <div className="sub-title">Nguồn cấp:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.nguonCap || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                </div>
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Tên dịch vụ:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.tenDichVu || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                  <div className="right-row">
                    <div className="sub-title">Trạng thái:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.trangThai || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                </div>
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Số thứ tự:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.soThuTu || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                  <div className="right-row">
                    <div className="sub-title">Số điện thoại:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.soDienThoai || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                </div>{" "}
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Thời gian cấp:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.thoiGianCap || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                  <div className="right-row">
                    <div className="sub-title">Địa chỉ email</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.email || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                </div>
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">Hạn sử dụng:</div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic"
                      disabled
                      value={infoRow.hanSuDung || ""}
                      placeholder="Nhập mã cấp số"
                      required
                    />
                  </div>
                </div>
                <div className="text-bottom"></div>
              </div>
              <div
                className="add-device update-device-btn"
                onClick={() =>
                  navigate(
                    `/home/themthietbi?${window.location.search.substring(1)}`
                  )
                }
              >
                {" "}
                <img src={AddSquare} alt="" />
                <div className="add-device-1">Quay Lại</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNumber;
