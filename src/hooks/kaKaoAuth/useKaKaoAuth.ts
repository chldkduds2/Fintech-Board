import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/Reducers';
import { fetchUserRequest, loginRequest } from '@/store/Actions/KakaoAuthActions';
import { ThunkDispatch } from 'redux-thunk'; // ThunkDispatch를 가져옵니다.
import { AnyAction } from 'redux'; // AnyAction을 가져옵니다.

const useKakaoAuth = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>(); // dispatch 함수의 타입을 명확히 정의합니다.
  const navigate = useNavigate();
  const { user, userNickname, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(loginRequest(navigate));
  };

  return { handleLogin, user, userNickname, loading, error };
};

export default useKakaoAuth;