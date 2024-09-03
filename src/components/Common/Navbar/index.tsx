import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useKakaoAuth from "@/hooks/kaKaoAuth/useKaKaoAuth";
import FindaLogoImg from "@/assets/findaLogoImg.svg";
import * as S from "./style";

const NavBarItems = [
  {
    href: "/",
    content: "홈",
    isContent: true,
  },
  {
    href: "/register",
    content: "내리뷰작성",
    isContent: true,
    requiresAuth: true,
  },
  {
    href: "/myInfo",
    content: "마이페이지",
    isContent: true,
    requiresAuth: true,
  },
  {
    href: "/signIn",
    content: "회원가입",
    isAuth: true,
    showIfLoggedIn: false,
  },
  {
    href: "/myPage",
    content: "마이페이지",
    isAuth: true,
    showIfLoggedIn: true,
  },
  {
    href: "/kakaoAuth",
    content: "로그인",
    isAuth: true,
    showIfLoggedIn: false,
  },
];

const NavBar = () => {
  const { userNickname, loading } = useKakaoAuth();

  const filteredNavBarItems = NavBarItems.filter((item) => {
    if (item.showIfLoggedIn !== undefined) {
      return item.showIfLoggedIn === !!userNickname;
    }
    return item.requiresAuth ? !!userNickname : true;
  });

  const renderItems = (items: typeof NavBarItems, isRight: boolean) =>
    items.map((item, index) => (
      <React.Fragment key={index}>
        <S.NavbarItem as={isRight ? S.NavbarItemRight : "div"}>
          <Link to={item.href}>{item.content}</Link>
        </S.NavbarItem>
        {isRight && index < items.length - 1 && <S.Separator>|</S.Separator>}
      </React.Fragment>
    ));

  if (loading) {
    return (
      <S.NavbarContainer>
        <S.NavbarContants>
          <S.NavbarLeft>
            <Link to={"/"}>
              <FindaLogoImg />
            </Link>
            <S.NavbarItem>
              <Link to={"/"}>홈</Link>
            </S.NavbarItem>
          </S.NavbarLeft>

          <S.NavbarRight>
            <Skeleton width={100} height={24} />
            <Skeleton width={100} height={24} style={{ marginLeft: "1rem" }} />
          </S.NavbarRight>
        </S.NavbarContants>
      </S.NavbarContainer>
    );
  }

  return (
    <S.NavbarContainer>
      <S.NavbarContants>
        <S.NavbarLeft>
          <Link to={"/"}>
            <FindaLogoImg />
          </Link>
          {renderItems(
            filteredNavBarItems.filter((item) => item.isContent),
            false
          )}
        </S.NavbarLeft>

        <S.NavbarRight>
          {userNickname ? (
            <S.NavbarItem>{userNickname} 님</S.NavbarItem>
          ) : (
            renderItems(
              filteredNavBarItems.filter((item) => item.isAuth),
              true
            )
          )}
        </S.NavbarRight>
      </S.NavbarContants>
    </S.NavbarContainer>
  );
};

export default NavBar;
