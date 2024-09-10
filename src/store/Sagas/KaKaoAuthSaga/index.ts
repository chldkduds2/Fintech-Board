import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUserSuccess,
  fetchUserFailure,
  loginSuccess,
  loginFailure,
} from '@/store/Actions/KakaoAuthActions';
import {
    KakaoAuthActionTypes 
} from '@/types/KakaoAuth/KaKaoAuthActions/kakaoAuthActons.type';
import { KakaoUserInfo } from '@/types/KakaoAuth/kakaoAuth.type';

const initializeKakao = () => {

   const kakaoAPIkey = process.env.REACT_APP_KAKAO_API_KEY;

  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoAPIkey);
  }
};

function* fetchKaKaoAuthSaga() {
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
      yield put(fetchUserFailure((error as Error).message));
    }
  }
  
  function* loginSaga(action: { type: string; payload: { navigate: (path: string) => void } }) {
    const { navigate } = action.payload;
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
      if (error instanceof Error) {
        yield put(loginFailure(error.message));
      } else {
        yield put(loginFailure("An unknown error occurred"));
      }
    }
  }
  
  export default function* kakaoAuthSaga() {
    yield takeLatest( KakaoAuthActionTypes .FETCH_USER_REQUEST, fetchKaKaoAuthSaga);
    yield takeLatest( KakaoAuthActionTypes .LOGIN_REQUEST, loginSaga);
  }