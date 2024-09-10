import React from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import useKakaoAuth from "@/hooks/KaKaoAuth/useKaKaoAuth";
import FindaLogoImg from "@/assets/findaLogoImg.svg";
import * as S from "./style";
import { RootState } from '@/store/Reducers';
import { selectKakaoAuthLoading } from '@/store/Selectors/KaKaoAuthSelector';

const NavBarItems = [
  {
    href: "/",
    content: "홈",
    isContent: true,
  },
  {
    href: "/register",
    content: "내 리뷰작성",
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
  
  const { userNickname } = useKakaoAuth();
  const loading = useSelector((state: RootState) => selectKakaoAuthLoading(state));
  

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
            <Link to={"/"}>
              <S.NavbarItem>{userNickname} 님</S.NavbarItem>
            </Link>
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