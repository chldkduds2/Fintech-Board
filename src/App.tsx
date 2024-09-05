import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "@/style/globalStyle";
import { theme } from "@/style/theme";
import store from "./store";

const KaKaoAuthPage = lazy(() => import("@/pages/KakaoAuth/index"));
const MyInfoPage = lazy(() => import("@/pages/MyInfoPage/index"));
const HomePage = lazy(() => import("@/pages/Home/index"));
const PostDetail = lazy(() => import("@/pages/PostDetail/index"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const EditRegister = lazy(() => import("./pages/Register/EditRegister/index"));
const FindaBoardLayout =  lazy(() => import("@/components/Common/FindaBoardLayout/index"));
const SkeletonLoader = lazy(() => import("@/components/Common/SkeletonLoader/index"))
const SkeletonMyInfo = lazy(() => import("@/components/MyInfo/SkeletonMyInfo/index"))

const App = () => {
  return (
    <ThemeProvider theme={theme}  >
      <Provider store ={ store }>
      <GlobalStyle />
      <Router>
        <FindaBoardLayout>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<SkeletonLoader />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<SkeletonLoader />}>
                  <RegisterPage />
                </Suspense>
              }
            />
            <Route
              path="/kakaoAuth"
              element={
                <Suspense fallback={<SkeletonLoader />}>
                  <KaKaoAuthPage />
                </Suspense>
              }
            />
            <Route
              path="/myInfo"
              element={
                <Suspense fallback={<SkeletonMyInfo />}>
                  <MyInfoPage />
                </Suspense>
              }
            />
            <Route
              path="/post/:id"
              element={
                <Suspense fallback={<SkeletonLoader />}>
                  <PostDetail />
                </Suspense>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <Suspense fallback={<SkeletonLoader />}>
                  <EditRegister />
                </Suspense>
              }
            />
          </Routes>
        </FindaBoardLayout>
      </Router>
      </ Provider>
    </ThemeProvider>
  );
};

export default App;