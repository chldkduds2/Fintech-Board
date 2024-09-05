import { all, fork } from 'redux-saga/effects';
import kakaoAuthSaga from './KakaoAuthSaga';

export default function* rootSaga() {
  yield all([fork(kakaoAuthSaga)]);
}