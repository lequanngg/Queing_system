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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = getAccessToken();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const onSubmit = (props: IAuthenticateReq) => {
    if (props.userNameOrEmailAddress === "1" && props.password === "1") {
      navigate("/home");
    }
    // dispatch(
    //   AuthenticateAction({
    //     userNameOrEmailAddress: props.userNameOrEmailAddress,
    //     password: props.password,
    //     rememberClient: props.rememberClient,
    //   })
    // );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthenticateReq>();

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken, navigate]);

  return (
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
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
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
        <Extra>Quên Mật Khẩu</Extra>

        <Button
          type="submit"
          variant="contained"
          sx={{ width: "170px", background: "#FF9138" }}
        >
          Login
        </Button>
      </FullBox>
    </form>
  );
};

export default LoginForm;
