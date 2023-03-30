export const BASE_URL = 'https://test.v5.pryaniky.com';

const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export const authorize = ({ username, password }) => {
    return fetch(`${BASE_URL}/ru/data/v3/testmethods/docs/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    })
      .then(checkResponse)
  };