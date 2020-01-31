import React from 'react';
import axios from 'axios';

const APIURL = 'http://3.120.96.16:3002/';

export function GetAxiosTodo(){
    return axios.get(`${APIURL}todos`) // Måste skicka med JWT token
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


export default function PostAxiosRegister(){
    return axios.post(`${APIURL}register`) // Måste skicka med email och lösenord
    .then(resp => {
        console.log(resp);
        console.log(resp.status); 
        // return resp;
    })
    .catch(error => {
        console.log(error);
        return 'Could NOT register';
    });
}


export function PostAxiosAuth(){
    return axios.post(`${APIURL}auth`) // Måste skicka med email och lösenord
    .then(resp => {
        console.log(resp);
        console.log(resp.status); 
        // return resp;
    })
    .catch(error => {
        console.log(error);
        return <p>'Could NOT Auth'</p>;
    });
}

export function PostAxiosTodo(){
    return axios.post(`${APIURL}todos`) // Måste skicka med ett object
    .then(resp => {
        console.log(resp);
        console.log(resp.status); 
        // return resp;
    })
    .catch(error => {
        console.log(error);
        return 'Could NOT post Todo';
    });
}

export function DeleteAxiosTodo(id){
    return axios.post(`${APIURL}todos/${id}`) // Måste skicka med ett object
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

