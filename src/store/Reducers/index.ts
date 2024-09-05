import { combineReducers } from 'redux';
import KakaoAuthReduce from './KakaoAuthReducer';


const rootReducer = combineReducers({
  user: KakaoAuthReduce,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
