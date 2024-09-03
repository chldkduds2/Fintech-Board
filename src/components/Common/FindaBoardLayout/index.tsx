import React from "react";
import type { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const FindaBoardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default FindaBoardLayout;
