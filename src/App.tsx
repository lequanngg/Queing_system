/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Login from "./features/login";
import Home from "./components/";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import Profile from "./features/profile/Profile";
import Device from "./features/device/Device";
import Service from "./features/service/Service";
import NumberLever from "./features/numberLever/NumberLever";
import Report from "./features/report/Report";
import SystemInstallation from "./features/systemInstallation/SystemInstallation";
import "./assets/scss/style.scss";
import Role from "./features/systemInstallation/Role";
import Account from "./features/systemInstallation/Account";
import Diary from "./features/systemInstallation/Diary";
import AddDevice from "./features/device/AddDevice";
import DetailDevice from "./features/device/DetailDevice";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home/*" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="thietbi" element={<Device />} />
          <Route path="themthietbi" element={<AddDevice />} />
          <Route path="chitietthietbi" element={<DetailDevice />} />
          <Route path="dichvu" element={<Service />} />
          <Route path="capso" element={<NumberLever />} />
          <Route path="baocao" element={<Report />} />
          <Route path="quanlyvaitro" element={<Role />} />
          <Route path="quanlytaikhoan" element={<Account />} />
          <Route path="nhatkyhoatdong" element={<Diary />} />
          <Route
            path="caidathethong/*"
            element={<SystemInstallation />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
