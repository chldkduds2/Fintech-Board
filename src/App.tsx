import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FindaBoardLayout from "@/components/Common/FindaBoardLayout/index";
import GlobalStyle from "@/style/globalStyle";
import KaKaoAuthPage from "@/pages/KakaoAuth/index";
import MyInfoPage from "@/pages/MyInfoPage/index";
import HomePage from "@/pages/Home/index";
import PostDetail from "@/pages/PostDetail/index";
import RegisterPage from "@/pages/Register";
import EditRegister from "./pages/Register/EditRegister/index";
import { theme } from "@/style/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <FindaBoardLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/kakaoAuth" element={<KaKaoAuthPage />} />
            <Route path="/myInfo" element={<MyInfoPage />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/edit/:id" element={<EditRegister />} />
          </Routes>
        </FindaBoardLayout>
      </Router>
    </ThemeProvider>
  );
};
export default App;
