import Login from '../Login/Login.jsx';
import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import InfoLoginPage from '../InfoLoginPage/InfoLoginPage.jsx';
import * as auth from '../../utils/Auth.jsx';

function App() {

  const navigate = useNavigate();

  const handleLoginClick = ({ username, password }) => {
    console.log({ username, password });
    handleLogin(username, password);
    // navigate('/app');
  }

  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleAuthorizationClick = () => {
    navigate('/login');
  }

  const handleLogin = (username, password) => {
    auth.authorize({ username, password })
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setLoggedIn(true);
          navigate('/');
        } else {
          // setIsInfoTooltipOpen(true);
          // setIsSuccess(false);
        }
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
      })
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? '' : <InfoLoginPage onAuthorization={handleAuthorizationClick} />} />
        <Route path='/login' element={<Login onLogin={handleLoginClick} />} />
      </Routes>
    </div>
  );
}

export default App;
