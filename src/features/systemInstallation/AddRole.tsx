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

const AddRole = () => {
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
      navigate("/home/quanlyvaitro  ");
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
          titleSecond="Quản lý vai trò"
          titleThird={`${
            window.location.search.substring(1)
              ? "Cập nhật vai trò"
              : "Thêm vai trò"
          }`}
        />
        <div>
          <div className="left-db">
            <TitleDevice className="title">Danh sách vai trò</TitleDevice>
            <div className="full-item">
              <div className="title-small">Thông tin vai trò</div>
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
                      defaultValue={
                        window.location.search.substring(1) ? "Kế Toán" : ""
                      }
                    />
                  </div>
                  <div className="left-row">
                    <div className="sub-title">Mô tả:</div>

                    <textarea
                      defaultValue={infoRow.moTa || ""}
                      {...register("a6")}
                      placeholder={"Mô tả dịch vụ"}
                      id="outlined-basic"
                    />
                  </div>
                  <div className="text-bottom">
                    <span>*</span>Là trường thông tin bắt buộc
                  </div>
                </div>

                <div className="row-content">
                  <div className="left-row">
                    <div className="sub-title">
                      Phân quyền chức năng<span>*</span>
                    </div>
                    <div className="right-add-role">
                      <div className="left-row">
                        <div className="sub-title">Nhóm chức năng A</div>

                        <div className="list-check">
                          <Checkbox
                            {...label}
                            defaultChecked={window.location.search.length !== 0}
                          />{" "}
                          Tất cả
                        </div>
                        <div className="list-check">
                          <Checkbox
                            {...label}
                            defaultChecked={window.location.search.length !== 0}
                          />{" "}
                          Chức năng x
                        </div>
                        <div className="list-check">
                          <Checkbox
                            {...label}
                            defaultChecked={window.location.search.length !== 0}
                          />{" "}
                          Chức năng y
                        </div>
                        <div className="list-check">
                          <Checkbox
                            {...label}
                            defaultChecked={window.location.search.length !== 0}
                          />{" "}
                          Chức năng z
                        </div>
                      </div>

                      <div className="left-row">
                        <div className="sub-title">Nhóm chức năng B</div>

                        <div className="list-check">
                          <Checkbox {...label} /> Tất cả
                        </div>
                        <div className="list-check">
                          <Checkbox {...label} /> Chức năng x
                        </div>
                        <div className="list-check">
                          <Checkbox {...label} /> Chức năng y
                        </div>
                        <div className="list-check">
                          <Checkbox {...label} />
                          Chức năng z
                        </div>
                      </div>
                    </div>
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

export default AddRole;
