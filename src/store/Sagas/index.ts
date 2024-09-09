import { all, fork } from 'redux-saga/effects';
import kakaoAuthSaga from './KaKaoAuthSage/index';

export default function* rootSaga() {
  yield all([fork(kakaoAuthSaga)]);
}