import { Button, ImgLogout } from './Logout.styled';
import logoutIcon from 'assets/icons/logout.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/authOperations';

function Logout() {
  const dispatch = useDispatch()

 const onLogoutHandler = () => {
    dispatch(logout())
 }

  return (
      <Button onClick={onLogoutHandler}>
        <ImgLogout src={logoutIcon} alt=''/>
        Log Out
      </Button>
  );
}

export default Logout;
