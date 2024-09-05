import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import FindaLogoImg from "@/assets/findaLogoImg.svg";
import * as S from "../style";

const SkeletonNavBar = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarContants>
        <S.NavbarLeft>
          <Link to={"/"}>
            <FindaLogoImg />
          </Link>
          <S.NavbarItem>
            <Skeleton width={50} height={24} />
          </S.NavbarItem>
        </S.NavbarLeft>
        <S.NavbarRight>
          <Skeleton width={100} height={24} />
          <Skeleton width={100} height={24} style={{ marginLeft: "1rem" }} />
        </S.NavbarRight>
      </S.NavbarContants>
    </S.NavbarContainer>
  );
};

export default SkeletonNavBar;