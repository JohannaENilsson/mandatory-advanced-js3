import React from 'react';
import axios from 'axios';
// import jwt from 'jsonwebtoken';
import { token$ } from './Store';

const APIURL = 'http://3.120.96.16:3002/';


export function GetAxiosTodo() {
  return axios
    .get(`${APIURL}todos`) // Måste skicka med JWT token
    .then(resp => {
      console.log(resp);
      console.log(resp.status);
      return resp;
    })
    .catch(error => {
      console.log(error);
      return 'Could NOT GET todos';
    });
}

export function PostAxiosRegister(email, password) {
  return axios.post(`${APIURL}register`, { email, password });
}

export function PostAxiosAuth(email, password) {
  return axios.post(`${APIURL}auth`, { email, password });
}

export function PostAxiosTodo(todo) {
  
  return axios.post(
    `${APIURL}todos`,
    { content: todo },
    { headers: { Authorization: `Bearer ${token$.value.email}` } }
  ); 
}

export function DeleteAxiosTodo(id) {
  return axios
    .post(`${APIURL}todos/${id}`) // Måste skicka med ett object
    .then(resp => {
      console.log(resp);
      console.log(resp.status);
      // return resp;
    })
    .catch(error => {
      console.log(error);
      return 'Could NOT Delete';
    });
}
