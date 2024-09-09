import { KakaoUserInfo } from '@/types/KakaoAuth/kakaoAuth.type';

// < 액션 타입 정의 >
export enum KakaoAuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'
}

// [ 로그인 요청 액션 ]
export interface LoginRequestAction {
  type: typeof  KakaoAuthActionTypes.LOGIN_REQUEST;
  payload: { navigate: (path: string) => void }; // 네비게이션 함수가 포함
}

// [ 로그인 성공 액션 ]
export interface LoginSuccessAction {
  type: typeof  KakaoAuthActionTypes.LOGIN_SUCCESS;
  payload: KakaoUserInfo; // 사용자 정보 포함
}

// [ 로그인 실패 액션 ]
export interface LoginFailureAction {
  type: typeof  KakaoAuthActionTypes.LOGIN_FAILURE;
  payload: string; // 에러 메시지 포함
}

// [ 사용자 정보 요청 액션 ]
export interface FetchUserRequestAction {
  type: typeof  KakaoAuthActionTypes.FETCH_USER_REQUEST;
}

// [ 사용자 정보 가져오는 데 성공 액션 ]
export interface FetchUserSuccessAction {
  type: typeof  KakaoAuthActionTypes.FETCH_USER_SUCCESS;
  payload: KakaoUserInfo; // 사용자 정보 포함
}

// [ 사용자 정보 가져오는 데 실패 액션 ]
export interface FetchUserFailureAction {
  type: typeof  KakaoAuthActionTypes.FETCH_USER_FAILURE;
  payload: string; // 에러 메시지가 포함
}

// [ 모든 KakaoAuth 액션 타입의 유니온 타입 ]
export type KakaoAuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction;
