// import React from 'react';
import axios from 'axios';
import { token$ } from './Store';

const APIURL = 'http://3.120.96.16:3002/';

export function GetAxiosTodo(token) {
  return axios.get('http://3.120.96.16:3002/' + 'todos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function PostAxiosRegister(email, password) {
  return axios.post(`${APIURL}register`, { email, password });
}

export function PostAxiosAuth(email, password) {
  return axios.post(`${APIURL}auth`, { email, password });
}

export function PostAxiosTodo(todo) {
  return axios.post(`${APIURL}todos/`, todo, {
    headers: { Authorization: `Bearer ${token$.value}` }
  });
}

export function DeleteAxiosTodo(id) {
  return axios.delete(`${APIURL}todos/${id}`, {
    headers: { Authorization: `Bearer ${token$.value}` }
  });
}
