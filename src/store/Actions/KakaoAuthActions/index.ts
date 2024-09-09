import { KakaoUserInfo } from '@/types/KakaoAuth/kakaoAuth.type';

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '@/types/KakaoAuth/KaKaoAuthActions/kakaoAuthActons.type';
import{ KakaoAuthAction} from '@/types/KakaoAuth/KaKaoAuthActions/kakaoAuthActons.type';

// [ 사용자 정보 요청 액션 생성자 ]
export const fetchUserRequest = (): KakaoAuthAction => ({
  type: FETCH_USER_REQUEST,
});

// [ 사용자 정보 가져오기 성공 액션 생성자 ]
export const fetchUserSuccess = (user: KakaoUserInfo): KakaoAuthAction => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

// [ 사용자 정보 가져오기 실패 액션 생성자 ]
export const fetchUserFailure = (error: string): KakaoAuthAction => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

// [ 로그인 요청 액션 생성자 ]
export const loginRequest = (navigate: (path: string) => void): KakaoAuthAction => ({
  type: LOGIN_REQUEST,
  payload: { navigate },
});

// [ 로그인 성공 액션 생성자 ]
export const loginSuccess = (user: KakaoUserInfo): KakaoAuthAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// [ 로그인 실패 액션 생성자 ]
export const loginFailure = (error: string): KakaoAuthAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});