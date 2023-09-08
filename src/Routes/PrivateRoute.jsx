import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const PrivateRouter = ({ children }) => {
  const isUserLogin = useSelector(selectIsLoggedIn);

  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRouter;
