import React from "react";
import reactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import App from './App.js'
import {reducer} from "./store/reducer.js";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';


const client = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json',
    headers: {'token': localStorage.getItem('token')},
});

const store = createStore(reducer, applyMiddleware(
    axiosMiddleware(client)
));

reactDOM.render(<Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
)