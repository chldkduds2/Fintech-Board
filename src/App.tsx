import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/style/globalStyle";
import { theme } from "@/style/theme";

const KaKaoAuthPage = lazy(() => import("@/pages/KakaoAuth/index"));
const MyInfoPage = lazy(() => import("@/pages/MyInfoPage/index"));
const HomePage = lazy(() => import("@/pages/Home/index"));
const PostDetail = lazy(() => import("@/pages/PostDetail/index"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const EditRegister = lazy(() => import("./pages/Register/EditRegister/index"));
const FindaBoardLayout =  lazy(() => import("@/components/Common/FindaBoardLayout/index"));
const SkeletonMyInfo = lazy(() => import("@/components/MyInfo/SkeletonMyInfo/index"))
const SkeletonLoader = lazy(() => import("@/components/Common/SkeletonLoader/index"))

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <FindaBoardLayout>
        <Suspense fallback={<SkeletonLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                  <HomePage />
        
              }
            />
            <Route
              path="/register"
              element={
                  <RegisterPage />
              }
            />
            <Route
              path="/kakaoAuth"
              element={
                  <KaKaoAuthPage />
              }
            />
            <Route
              path="/myInfo"
              element={
                  <MyInfoPage />
              }
            />
            <Route
              path="/post/:id"
              element={
                  <PostDetail />
              }
            />
            <Route
              path="/edit/:id"
              element={
                  <EditRegister />
              }
            />
          </Routes>
          </Suspense>
        </FindaBoardLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;