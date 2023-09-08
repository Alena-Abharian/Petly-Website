import AppRoutes from 'Routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserInfo, setTokens } from '../redux/auth/authOperations';
import { selectAccessToken } from '../redux/auth/authSelectors';

export default function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectAccessToken);

  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  useEffect(() => {
    if (!isAuth) {
      if (accessToken) {
        dispatch(setTokens({ refreshToken, accessToken }));
      }
    }
  }, [dispatch, isAuth, refreshToken, accessToken]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserInfo());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      <AppRoutes />
    </>
  );
}
