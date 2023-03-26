import HeadMainView from "../../components/mainview/HeadMainView";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Checkbox, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

const AddService = () => {
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
    try {
      const docRef = await addDoc(collection(db, "service"), {
        maDichVu: data.a1,
        tenDichVu: data.a2,
        moTa: data.a6,
        tangTuDongTu: data.a111,
        prefix: data.a112,
        surfix: data.a113,
        resetMoiNgay: data.a114,
        input1: data.a11,
        input2: data.b1,
        input3: data.a12,
        input4: data.a13,
        input5: data.a14,
      });
      // navigate("/home/thietbi");
    } catch (e) {
      console.log(e);
    }
//     let aa = 0
// for(const data of rows){
//     try {
//       const docRef = await addDoc(collection(db, "service"), {
//         maDichVu: data.maThietBi,
//         tenDichVu: data.tenThietBi,
//         moTa: data.moTa,
//         tangTuDongTu: true,
//         prefix: true,
//         surfix: true,
//         resetMoiNgay: true,
//         input1: '0001',
//         input2: '9999',
//         input3: '0001',
//         input4: '0001',
//         input5: 'Ví dụ: 201-2001',
//       });
//       aa = aa+ 1
//       console.log(aa)
//       // navigate("/home/thietbi");
//     } catch (e) {
//       console.log(e);
//     }
//   }

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
    <div className="add-device add-service">
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeadMainView
          active={2}
          titleFirst="Dịch vụ"
          titleSecond="Danh sách dịch vụ"
          titleThird="Thêm dịch vụ"
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Quản lý dịch vụ</TitleDevice>
            <div className="full-item">
              <div className="title-small">Thông tin dịch vụ</div>
              <div className="row-1">
                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">
                      Mã dịch vụ:<span>*</span>
                    </div>

                    <TextField
                      variant="outlined"
                      id="outlined-basic" 
                      {...register("a1", { required: true })}
                      placeholder={infoRow.maDichVu || "Nhập mã dịch vụ"}
                      defaultValue={infoRow.maDichVu}
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">
                      Tên dịch vụ::<span>*</span>
                    </div>

                    <TextField
                      defaultValue={infoRow.tenThietBi || ""}
                      variant="outlined"
                      id="outlined-basic"
                      {...register("a2", { required: true })}
                      placeholder={infoRow.tenDichVu || "Nhập tên dịch vụ"}
                    />
                  </div>
                </div>

                <div className="row-content row-end">
                  <div className="left-row">
                    <div className="sub-title">Mô tả:</div>

                    <textarea
                      defaultValue={infoRow.moTa || ""}
                      {...register("a6")}
                      placeholder={"Mô tả dịch vụ"}
                      id="outlined-basic"
                    />
                  </div>
                </div>
              </div>

              <div className="title-small title-small-2">Quy tác cấp số</div>
              <div className="rules">
                <div className="rule">
                  <Checkbox {...register("a111")} {...label} />
                  <div className="right-checkbox">Tăng tự động từ</div>
                  <input type="text" {...register("a11")} defaultValue={infoRow.input1} />
                  <div className="den">Đến</div>
                  <input type="text" {...register("b1")} defaultValue={infoRow.input2} />
                </div>
                <div className="rule">
                  <Checkbox {...register("a112")} {...label}  />
                  <div className="right-checkbox">Prefix:</div>
                  <input {...register("a12")} type="text" defaultValue={infoRow.input3} />
                </div>
                <div className="rule">
                  <Checkbox {...register("a113")} {...label}  />
                  <div className="right-checkbox">Surfix:</div>
                  <input {...register("a13")} type="text" defaultValue={infoRow.input4} />
                </div>
                <div className="rule">
                  <Checkbox {...register("a114")} {...label}  />
                  <div className="right-checkbox">Reset mỗi ngày</div>
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
                    : "Thêm dịch vụ"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
