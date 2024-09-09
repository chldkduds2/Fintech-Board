export interface KakaoUserInfo {
  id: number;
  properties?: {
    nickname?: string;
    profile_image?: string;
    thumbnail_image?: string;
  };
  kakao_account?: {
    email?: string;
    [key: string]: any;
  };
}


export interface KakaoAuthState {
  user: KakaoUserInfo | null;
  userNickname: string;
  loading: boolean;
  error: string | null;
}
