import HeadMainView from "../../components/mainview/HeadMainView";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../hooks/config";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TitleDevice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ff9138;
  margin-bottom: 20px;
`;

const AddNumber = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [infoRow, setInfoRow] = useState<any>({});
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log(data, age, "data");
    setOpen(true);
    // try {
    //   const docRef = await addDoc(collection(db, "device"), {
    //     tenThietBi: age,
    //     diaChiIP: data.a4,
    //     dichVuSuDung: data.a6,
    //     maThietBi: data.a1,
    //     trangThaiHoatDong: "Đang hoạt động",
    //     trangThaiKetNoi: "Kết nối",
    //     chiTiet: "Chi tiết",
    //     capNhat: "Cập nhật",
    //     tenDangNhap: data.a3,
    //     matKhau: data.a5,
    //   });
    //   navigate("/home/thietbi");
    // } catch (e) {
    //   console.log(e);
    // }
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
//   useEffect(() => {
//     getData();
//   }, []);

  return (
    <div className="add-device add-number">
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeadMainView
          active={2}
          titleFirst="Cấp số"
          titleSecond="Danh sách cấp số"
          titleThird="Cấp số mới"
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Quản lý cấp số</TitleDevice>
            <div className="full-item">
              <div className="title-small">CẤP SỐ MỚI</div>
              <div className="row-content">
                <div className="right-row">
                  <div className="sub-title">Dịch vụ khách hàng lựa chọn</div>
                  <FormControl fullWidth>
                    <Select value={age} onChange={handleChange}>
                      <MenuItem value="">Chọn dịch vụ</MenuItem>
                      <MenuItem value={1}>Khám tim mạch</MenuItem>
                      <MenuItem value={2}>Khám sản - Phụ khoa</MenuItem>
                      <MenuItem value={3}>Khám răng hàm mặt</MenuItem>
                      <MenuItem value={4}>Khám tai mũi họng</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div style={{ display: "flex", margin: "70px 0 200px 0" }}>
                <div className="btn-submit">
                  <div className="cancel">Hủy bỏ</div>{" "}
                  <button className="submit" type="submit">
                    {window.location.search.substring(1)
                      ? "Cập Nhật"
                      : "Thêm cấp số"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="top">
            <div className="title-add-number">Số thứ tự được cấp</div>
            <div className="number-add-number">2001201</div>
            <div className="des-add-number">
              DV: Khám răng hàm mặt (tại quầy số 1)
            </div>
          </div>
          <div className="time-add-number">
            <div className="time">Thời gian cấp: 09:30 11/10/2021</div>
            <div className="time">Hạn sử dụng: 09:30 11/10/2021</div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddNumber;
