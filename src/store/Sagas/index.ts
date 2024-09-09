import { all, fork } from 'redux-saga/effects';
import kakaoAuthSaga from './KaKaoAuthSaga';

export default function* rootSaga() {
  yield all([fork(kakaoAuthSaga)]);
}