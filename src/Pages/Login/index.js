import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import { loginPage } from '../../Redux/action/actions';

import './login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleLoginPage = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(loginPage());
  };

  return (
    <div className="wrapper-login">
      {loading && <Loading />}
      <div className="container-login">
        <h1>Welcome to animal app</h1>
        <form action="">
          <button onClick={(e) => handleLoginPage(e)}>Login</button>
        </form>
      </div>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default memo(Login);
