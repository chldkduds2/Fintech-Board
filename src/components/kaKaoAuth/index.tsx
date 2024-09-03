import React from "react";
import useKakao from "@/hooks/kaKaoAuth/useKaKaoAuth";
import KakaoLoginImg from "@/assets/kakaoLoginImg.svg";
import * as S from "./style";

const KaKaoAuth = () => {
  const { handleLogin } = useKakao();

  return (
    <S.AuthContainer>
      <S.Title>간편 로그인하기</S.Title>
      <S.LoginButton onClick={handleLogin}>
        <KakaoLoginImg />
      </S.LoginButton>
    </S.AuthContainer>
  );
};

export default KaKaoAuth;
