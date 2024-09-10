import { KakaoAuthAction } from '@/types/KakaoAuth/KaKaoAuthActions/kakaoAuthActons.type';
import { KakaoAuthState } from '@/types/KakaoAuth/kakaoAuth.type';
import { KakaoAuthActionTypes } from '@/types/KakaoAuth/KaKaoAuthActions/kakaoAuthActons.type';

const initialState: KakaoAuthState = {
  user: null,
  userNickname: '',
  loading: false,
  error: null,
};

const kakaoAuthReducer = (state = initialState, action: KakaoAuthAction): KakaoAuthState => {
  switch (action.type) {
    case KakaoAuthActionTypes.FETCH_USER_REQUEST:
    case KakaoAuthActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case KakaoAuthActionTypes.FETCH_USER_SUCCESS:
    case KakaoAuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userNickname: action.payload.kakao_account?.profile?.nickname || action.payload.properties?.nickname || '',
        loading: false,
        error: null,
      };
    case KakaoAuthActionTypes.FETCH_USER_FAILURE:
    case KakaoAuthActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default kakaoAuthReducer;