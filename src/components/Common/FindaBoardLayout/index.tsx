import React, {Suspense, lazy} from "react";
import type { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const SkeletonNavBar = lazy(() => import("@/components/Common/Navbar/SkeletonNavBar/index"))

const FindaBoardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Suspense fallback={<SkeletonNavBar />}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </Suspense>
    </>
  );
};

export default FindaBoardLayout;
