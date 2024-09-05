import {  KakaoUserInfo } from "@/types/KakaoAuth/kakaoAuth.type"

export enum KakaoAuthActionTypes {
  FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

interface FetchUserRequestAction {
  type: KakaoAuthActionTypes.FETCH_USER_REQUEST;
}

interface FetchUserSuccessAction {
  type: KakaoAuthActionTypes.FETCH_USER_SUCCESS;
  payload: KakaoUserInfo;
}

interface FetchUserFailureAction {
  type: KakaoAuthActionTypes.FETCH_USER_FAILURE;
  payload: string;
}

interface LoginRequestAction {
  type: KakaoAuthActionTypes.LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: KakaoAuthActionTypes.LOGIN_SUCCESS;
  payload: KakaoUserInfo;
}

interface LoginFailureAction {
  type: KakaoAuthActionTypes.LOGIN_FAILURE;
  payload: string;
}

export type KakaoAuthAction =
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;

export const fetchUserRequest = (): KakaoAuthAction => ({
  type: KakaoAuthActionTypes.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user: KakaoUserInfo): KakaoAuthAction => ({
  type: KakaoAuthActionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error: string): KakaoAuthAction => ({
  type: KakaoAuthActionTypes.FETCH_USER_FAILURE,
  payload: error,
});

export const loginRequest = (): KakaoAuthAction => ({
  type: KakaoAuthActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (user: KakaoUserInfo): KakaoAuthAction => ({
  type: KakaoAuthActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string): KakaoAuthAction => ({
  type: KakaoAuthActionTypes.LOGIN_FAILURE,
  payload: error,
});