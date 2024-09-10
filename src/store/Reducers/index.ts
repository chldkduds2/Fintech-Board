import { combineReducers } from 'redux';
import kakaoAuthReducer from '../Reducers/KakaoAuthReducer';

const rootReducer = combineReducers({
  kakaoAuth: kakaoAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;