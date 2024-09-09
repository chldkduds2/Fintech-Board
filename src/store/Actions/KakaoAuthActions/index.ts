import { KakaoUserInfo } from '@/types/KakaoAuth/kakaoAuth.type';
import {
  KakaoAuthActionTypes
} from '@/types/KakaoAuth/KaKaoAuthActions/kakaoAuthActons.type';
import{ KakaoAuthAction } from '@/types/KakaoAuth/KaKaoAuthActions/kakaoAuthActons.type';

// [ 로그인 요청 액션 ]
export const loginRequest = (navigate: (path: string) => void): KakaoAuthAction => ({
  type:  KakaoAuthActionTypes.LOGIN_REQUEST,
  payload: { navigate },  // 네비게이션 함수가 포함
});

// [ 로그인 성공 액션 ]
export const loginSuccess = (user: KakaoUserInfo): KakaoAuthAction => ({
  type:  KakaoAuthActionTypes.LOGIN_SUCCESS,
  payload: user, // 사용자 정보 포함
});

// [ 로그인 실패 액션 ]
export const loginFailure = (error: string): KakaoAuthAction => ({
  type:  KakaoAuthActionTypes.LOGIN_FAILURE,
  payload: error,
});


// [ 사용자 정보 요청 액션 ]
export const fetchUserRequest = (): KakaoAuthAction => ({
  type:  KakaoAuthActionTypes.FETCH_USER_REQUEST,
});

// [ 사용자 정보 가져오는 데 성공 액션 ]
export const fetchUserSuccess = (user: KakaoUserInfo): KakaoAuthAction => ({
  type:  KakaoAuthActionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

// [ 사용자 정보 가져오는 데 실패 액션 ]
export const fetchUserFailure = (error: string): KakaoAuthAction => ({
  type:  KakaoAuthActionTypes.FETCH_USER_FAILURE,
  payload: error,
});
