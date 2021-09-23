import React from "react";
import reactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import App from './App.js'
import {reducer} from "./store/reducer.js";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {authorization} from "./store/selectors.js";

const client = axios.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json',
});

const middlewareConfig = {
    interceptors: {
        request: [
            function ({getState, dispatch, getSourceAction}, req) {
                const token = authorization(getState());

                if (!token) {
                    return req;
                }

                req.headers.authorization = token;

                return req;
            },
        ],
    }
};

const store = createStore(reducer, applyMiddleware(
    axiosMiddleware(client, middlewareConfig)
));

reactDOM.render(<Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
)