import Login from '../Login/Login.jsx';
import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import InfoLoginPage from '../InfoLoginPage/InfoLoginPage.jsx';
import Main from '../Main/Main.jsx'
import * as auth from '../../utils/Auth.jsx';
import { api } from '../../utils/Api';
import Header from '../Header/Header.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import InfoToolTip from '../InfoToolTip/InfoToolTip.jsx';

function App() {

  const navigate = useNavigate();

  const handleLoginClick = ({ username, password }) => {
    handleLogin(username, password);
    // navigate('/app');
  }

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const handleAuthorizationClick = () => {
    navigate('/login');
  }

  const handleLogin = (username, password) => {
    setIsLoading(true);
    auth.authorize({ username, password })
      .then((res) => {
        console.log(res)
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setLoggedIn(true);
          navigate('/');
        }
      })
      .catch((err) => {
          setIsInfoTooltipOpen(true);
          console.log(`Меняем статус попапа`);
        console.log('Ошибка. Запрос не выполнен');
      })
      .finally(() => setIsLoading(false));
  }

  const handleExitClick = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
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
  }, [loggedIn])

  React.useEffect(() => {
    console.log(isInfoTooltipOpen);
  }, [isInfoTooltipOpen])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? <><Header onExit={handleExitClick} /><Main tablerows={rows} /></> : <InfoLoginPage onAuthorization={handleAuthorizationClick} />} />
        <Route path='/login' element={<Login onLogin={handleLoginClick} />} />
      </Routes>
      <Preloader isOpen={isLoading} />
      <InfoToolTip isOpen={isInfoTooltipOpen} />
    </div>
  );
}

export default App;
