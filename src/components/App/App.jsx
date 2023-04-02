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
  const [success, setSuccess] = React.useState(true);

  const handleAuthorizationClick = () => {
    navigate('/login');
  }

  const handleLogin = (username, password) => {
    setIsLoading(true);
    auth.authorize({ username, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          setLoggedIn(true);
          navigate('/');
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
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

  const closeInfoToolTip = () => {
    setIsInfoTooltipOpen(false);
  }

  const handleAddRowClick = (values) => {
    setIsLoading(true);
    api.addRow(values)
      .then((res) => {
        setRows([...rows, res.data]);
        setSuccess(true);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setSuccess(false);
      })
      .finally(() => setIsLoading(false));
  }

  const handleDeleteRowClick = (id) => {
    setIsLoading(true);
    api.deleteRow(id)
      .then((res) => {
        if (res.error_code === 0) {
          setRows(rows.filter(obj => obj.id !== id))
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setSuccess(false);
      })
      .finally(() => setIsLoading(false));
  }

  const handleEditRowClick = (id, data) => {
    setIsLoading(true);
    api.editRow(id, data)
      .then((res) => {
        if (res.error_code === 0) {
          setRows(rows.map(row => {
            if (row.id === res.data.id) {
              return res.data;
            } else {
              return row;
            }
          }))
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setSuccess(false);
      })
      .finally(() => setIsLoading(false));
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? <><Header onExit={handleExitClick} /><Main tablerows={rows} onAddRow={handleAddRowClick} onDeleteRow={handleDeleteRowClick} onEditRow={handleEditRowClick} isSuccess={success} /></> : <InfoLoginPage onAuthorization={handleAuthorizationClick} />} />
        <Route path='/login' element={<Login onLogin={handleLoginClick} />} />
      </Routes>
      <Preloader isOpen={isLoading} />
      <InfoToolTip isOpen={isInfoTooltipOpen} onClose={closeInfoToolTip} />
    </div>
  );
}

export default App;
