import React from "react";
import reactDOM from "react-dom";
import App from "./App.js";
import {Provider} from 'react-redux'
import {createStore} from "redux";
import todos from "./store/reducer.js"

const store = createStore(todos)

reactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('index')
)