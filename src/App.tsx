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
import './assets/scss/style.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="thietbi" element={<Device />} />
          <Route path="dichvu" element={<Service />} />
          <Route path="capso" element={<NumberLever />} />
          <Route path="baocao" element={<Report />} />
          <Route path="caidathethong" element={<SystemInstallation />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
