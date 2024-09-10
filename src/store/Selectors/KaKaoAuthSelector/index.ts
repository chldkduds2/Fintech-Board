import { RootState } from '../../Reducers';
import { KakaoAuthState } from '@/types/KakaoAuth/kakaoAuth.type';

// [ 사용자 정보 추출 셀렉터 ]
export const selectKakaoUser = (state: RootState) => state.kakaoAuth.user;

// [ 사용자 닉네임 추출 셀렉터 ]
export const selectKakaoUserNickname = (state: RootState): string => state.kakaoAuth.userNickname;

// [ 카카오 인증 로딩 상태 추출 셀렉터 ]
export const selectKakaoAuthLoading = (state: RootState): boolean => state.kakaoAuth.loading;

// [ 카카오 인증 에러 추출 셀렉터 ]
export const selectKakaoAuthError = (state: RootState): KakaoAuthState['error'] => state.kakaoAuth.error;