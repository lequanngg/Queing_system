/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AuthenticateAction } from "../../../redux/actions/auth";
import { FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { getAccessToken } from "../../../utils/localStorageService";
import { IAuthenticateReq } from "../../../api/auth/types";
import logo from "../../../assets/png/alta.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import InputLabel from "@mui/material/InputLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FullBox = styled(Box)`
  width: 400px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  img {
    max-width: 100px;
  }
`;

const Extra = styled.div`
  width: 300px;
  color: #e73f3f;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
`;

const LoginForm: React.FC = () => {
  const [pass, setPass] = useState("1");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [error, setError] = useState(false);
  const accessToken = getAccessToken();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const onSubmit = (props: IAuthenticateReq) => {
    if (props.userNameOrEmailAddress === "1" && props.password === pass) {
      navigate("/home");
    } else {
      setError(true);
    }
  };

  const enterMail = (props: any) => {
    console.log(props, "aaa");
  };
  const EnterPassword = (props: any) => {
    if (props.duplicatePass1 === props.duplicatePass2) {
      setPass(props.duplicatePass2);
      alert("Thành Công");
      setError(false);
      setStep(0);


        reset({ password: "" });

    } else {
      alert("2 mật khẩu không giống nhau");
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthenticateReq>();

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken, navigate]);

  return (
    <div>
      {step === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FullBox sx={{ "& > :not(style)": { m: 1 } }}>
            <img src={logo} alt="login" />
            <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Tên đăng nhập *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                type={"text"}
                {...register("userNameOrEmailAddress", { required: true })}
                label="Tên đăng nhập *"
                error={error}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                error={error}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {error && <Extra>Sai mật khẩu hoặc tên đăng nhập</Extra>}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "170px", background: "#FF9138" }}
              >
                Login
              </Button>
              <Extra
                style={{ display: "flex", justifyContent: "center" }}
                onClick={() => setStep(1)}
              >
                <span>Quên Mật Khẩu</span>
              </Extra>
            </div>
          </FullBox>
        </form>
      ) : step === 1 ? (
        <form onSubmit={handleSubmit(enterMail)}>
          <FullBox sx={{ "& > :not(style)": { m: 1 } }}>
            <img src={logo} alt="login" style={{ marginBottom: "50px" }} />
            <div style={{ fontWeight: "600" }}>Đặt lại mật khẩu</div>
            <div style={{ fontWeight: "400" }}>
              Vui lòng nhập email để đặt lại mật khẩu của bạn *
            </div>
            <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                type={"text"}
                {...register("email", { required: true })}
              />
            </FormControl>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Button
                type="submit"
                onClick={() => setStep(0)}
                variant="contained"
                sx={{ width: "170px" }}
              >
                Hủy
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  setStep(2);
                  reset({ duplicatePass2: "" });
                }}
                variant="contained"
                sx={{ width: "170px", background: "#FF9138" }}
              >
                Tiếp tục
              </Button>
            </div>
          </FullBox>
        </form>
      ) : (
        <form onSubmit={handleSubmit(EnterPassword)}>
          <FullBox sx={{ "& > :not(style)": { m: 1 } }}>
            <img src={logo} alt="login" />
            <div style={{ fontWeight: "400", marginTop: "50px" }}>
              Đặt lại mật khẩu mới
            </div>

            <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("duplicatePass1", { required: true })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("duplicatePass2", { required: true })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "170px", background: "#FF9138" }}
              >
                Xác Nhận
              </Button>
            </div>
          </FullBox>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
