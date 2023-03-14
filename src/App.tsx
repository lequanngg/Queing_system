/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Login from "./features/login";
import Home from "./components/";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/homePage/HomePage";
import Task from "./features/task/Task";
import Project from "./features/project/Project";
import Chat from "./features/chat/Chat";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import LoginChat from "./components/componentsChat/Login";
import ChatRoom from "./components/componentsChat/ChatRoom";
import Profile from "./features/profile/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />}>
              <Route index element={<HomePage />} />
              <Route path="task" element={<Task />} />
              <Route path="project" element={<Project />} />
              <Route path="chat" element={<Chat />} />
              <Route path="loginchat" element={<LoginChat />} />
              <Route path="chatroom" element={<ChatRoom />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </AppProvider>
      </AuthProvider>
    </>
  );
}
export default App;
