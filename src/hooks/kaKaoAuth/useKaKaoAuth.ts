import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/Reducers';
import { fetchUserRequest, loginRequest } from '@/store/Actions/KakaoAuthActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux'; 
import { selectKakaoUser, selectKakaoUserNickname, selectKakaoAuthLoading, selectKakaoAuthError } from '@/store/Selectors/KaKaoAuthSelector';

const useKakaoAuth = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>();
  const navigate = useNavigate();
  const user = useSelector(selectKakaoUser);
  const userNickname = useSelector(selectKakaoUserNickname);
  const loading = useSelector(selectKakaoAuthLoading);
  const error = useSelector(selectKakaoAuthError);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(loginRequest(navigate));
  };

  return { handleLogin, user, userNickname, loading, error };
};

export default useKakaoAuth;