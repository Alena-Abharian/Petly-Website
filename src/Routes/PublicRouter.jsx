import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const PublicRouter = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { category } = useParams();

  if (!isLoggedIn && (category === 'own' || category === 'favorite')) {
    return <Navigate to={'/login'} />;
  }

  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRouter;
