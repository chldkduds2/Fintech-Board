import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoUserInfo } from "@/types/KakaoAuth/kakaoAuth.type";

const initializeKakao = () => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init("8bb71a4823f207ddcab5434be6907da0");
  }
};

const useKakao = () => {
  const [user, setUser] = useState<KakaoUserInfo | null>(null);
  const [userNickname, setUserNickname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    initializeKakao();

    const fetchUser = () => {
      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (res: KakaoUserInfo) {
            setUser(res);
            setLoading(false);
          },
          fail: function (error: any) {
            console.error("API 요청 실패", error);
            setLoading(false);
          },
        });
      } else {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      setUserNickname(
        user?.kakao_account?.profile?.nickname ||
          user?.properties?.nickname ||
          ""
      );
    }
  }, [user]);

  const handleLogin = () => {
    if (window.Kakao) {
      window.Kakao.Auth.login({
        success: function (authObj: any) {
          console.log("카카오 로그인 성공", authObj);
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: function (res: KakaoUserInfo) {
              setUser(res);
              console.log("사용자 정보", res);
              navigate("/");
              window.location.reload();
            },
            fail: function (error: any) {
              console.error("API 요청 실패", error);
            },
          });
        },
        fail: function (err: any) {
          console.error("카카오 로그인 실패", err);
        },
      });
    }
  };

  return { handleLogin, user, userNickname, loading };
};

export default useKakao;
