import { call, put, takeLatest } from 'redux-saga/effects';
import {
  KakaoAuthActionTypes,
  fetchUserSuccess,
  fetchUserFailure,
  loginSuccess,
  loginFailure,
} from '../../Actions/KakaoAuthActions';
import { KakaoUserInfo } from '@/types/KakaoAuth/kakaoAuth.type';
import { useNavigate } from 'react-router-dom';

const initializeKakao = () => {
  
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init("8bb71a4823f207ddcab5434be6907da0");
  }
};

function* fetchUserSaga() {
  try {
    initializeKakao();
    if (window.Kakao.Auth.getAccessToken()) {
      const response: KakaoUserInfo = yield call(() =>
        new Promise((resolve, reject) => {
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: resolve,
            fail: reject,
          });
        })
      );
      yield put(fetchUserSuccess(response));
    } else {
      yield put(fetchUserFailure("No access token"));
    }
  } catch (error) {
    yield put(fetchUserFailure((error as any).message));
  }
}

function* loginSaga() {
  const navigate = useNavigate();
  try {
    initializeKakao();
    const response: KakaoUserInfo = yield call(() =>
      new Promise((resolve, reject) => {
        window.Kakao.Auth.login({
          success: function (authObj: any) {
            window.Kakao.API.request({
              url: "/v2/user/me",
              success: resolve,
              fail: reject,
            });
          },
          fail: reject,
        });
      })
    );
    yield put(loginSuccess(response));
    navigate("/");
    window.location.reload();
  } catch (error) {
    yield put(fetchUserFailure((error as any).message));
  }
}

export default function* kakaoAuthSaga() {
  yield takeLatest(KakaoAuthActionTypes.FETCH_USER_REQUEST, fetchUserSaga);
  yield takeLatest(KakaoAuthActionTypes.LOGIN_REQUEST, loginSaga);
}