import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/Reducers';
import { fetchUserRequest, loginRequest } from '@/store/Actions/KakaoAuthActions';

const useKakaoAuth = () => {
  const dispatch = useDispatch();
  const { user, userNickname, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);
  const handleLogin = () => {
    dispatch(loginRequest());
  };

  return { handleLogin, user, userNickname, loading, error };
};

export default useKakaoAuth;