import Login from '../Login/Login.jsx';
import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import InfoLoginPage from '../InfoLoginPage/InfoLoginPage.jsx';
import Main from '../Main/Main.jsx'
import * as auth from '../../utils/Auth.jsx';
import { api } from '../../utils/Api';

function App() {

  const navigate = useNavigate();

  const handleLoginClick = ({ username, password }) => {
    console.log({ username, password });
    handleLogin(username, password);
    // navigate('/app');
  }

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  const handleAuthorizationClick = () => {
    navigate('/login');
  }

  const handleLogin = (username, password) => {
    auth.authorize({ username, password })
      .then((res) => {
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

  //Проверка на авторизованность
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, [navigate])

  React.useEffect(() => {
    if (loggedIn) {
        api.getInitialValues()
                .then((res) => {
                    setRows(res.data);
                })
                .catch((err) => {
                    console.log('Ошибка. Запрос не выполнен');
                })
    }
}, [ loggedIn ])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? <Main tablerows={rows}/> : <InfoLoginPage onAuthorization={handleAuthorizationClick} />} />
        <Route path='/login' element={<Login onLogin={handleLoginClick} />} />
      </Routes>
    </div>
  );
}

export default App;
