import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FindaBoardLayout from "@/components/Common/FindaBoardLayout/index";
import GlobalStyle from "@/style/GlobalStyle";
import HomePage from "@/pages/HomePage";
import { theme } from "@/style/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <FindaBoardLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </FindaBoardLayout>
      </Router>
    </ThemeProvider>
  );
};
export default App;
