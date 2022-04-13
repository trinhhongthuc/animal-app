import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/action/actions';

import './header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="container d-flex header-flex">
        <h1 className="header-title">Animal app</h1>
        <p onClick={() => handleLogout()}>LogOut</p>
      </div>
    </div>
  );
};

export default Header;
