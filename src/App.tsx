/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Login from "./features/login";
import Home from "./components/";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import Profile from "./features/profile/Profile";

function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />}>
              <Route index element={<HomePage />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
    </>
  );
}
export default App;
