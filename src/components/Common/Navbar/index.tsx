import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import FindaLogo from "@/assets/FindaLogo.svg";

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
  },
  {
    href: "/signIn",
    content: "회원가입",
    isAuth: true,
  },
  {
    href: "/signUp",
    content: "로그인",
    isAuth: true,
  },
];

const NavBar = () => {
  const renderItems = (items: typeof NavBarItems, isRight: boolean) =>
    items.map((item, index) => (
      <React.Fragment key={index}>
        <S.NavbarItem as={isRight ? S.NavbarItemRight : "div"}>
          <Link to={item.href}>{item.content}</Link>
        </S.NavbarItem>
        {isRight && index < items.length - 1 && <S.Separator>|</S.Separator>}
      </React.Fragment>
    ));

  return (
    <S.NavbarContainer>
      <S.NavbarContants>
        <S.NavbarLeft>
          <FindaLogo />
          {renderItems(
            NavBarItems.filter((item) => item.isContent),
            false
          )}
        </S.NavbarLeft>

        <S.NavbarRight>
          {renderItems(
            NavBarItems.filter((item) => item.isAuth),
            true
          )}
        </S.NavbarRight>
      </S.NavbarContants>
    </S.NavbarContainer>
  );
};

export default NavBar;
