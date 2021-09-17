import React from "react";
import reactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import App from './App.js'
import {reducer} from "./store/reducer.js";

const store = createStore(reducer);

reactDOM.render(<Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')
)