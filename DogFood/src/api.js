const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac';
const URL = 'https://api.react-learning.ru';
const handleResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

export const getUserInfo = () => {
  return fetch(`${URL}/users/me`, {
    headers: {
      Authorization: TOKEN,
    },
  }).then(handleResponse);
};

export const getProducts = () => {
  return fetch(`${URL}/products`, {
    headers: {
      Authorization: TOKEN,
    },
  }).then(handleResponse);
};

export const putLike = (productId) => {
  return fetch(`${URL}/products/likes/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      Authorization: TOKEN,
    },
  }).then(handleResponse);
};

export const deleteLike = (productId) => {
  return fetch(`${URL}/products/likes/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: TOKEN,
    },
  }).then(handleResponse);
};
