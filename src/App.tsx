// Modules import
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Style import
import "./styles/font.css";

// Components import
import Login from "./pages/Login";
import EmailLogin from "./pages/EmailLogin";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Onboarding from "./pages/Onboarding";
import Main from "./pages/Main";
import MemberList from "./pages/MemberList";
import Notification from "./pages/Notification";
import PostBoard from "./pages/PostBoard";
import PostCreator from "./pages/PostCreator";
import PostDetail from "./pages/PostDeatil";
import ScrollToTop from "./components/ScrollToTop";
import MyPage from "./pages/Mypage";

function App() {
  return (
    <div style={{ fontFamily: "Pretendard" }}>
      <ScrollToTop /> {/* 페이지 이동 시 스크롤 초기화 컴포넌트 */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/email-login" element={<EmailLogin />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/onboarding" element={<Onboarding />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/member-list" element={<MemberList />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/post-board" element={<PostBoard />}></Route>
        <Route path="/post-detail/:postId" element={<PostDetail />}></Route>
        <Route path="/create-post" element={<PostCreator />}></Route>
        <Route path="/my-page" element={<MyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
