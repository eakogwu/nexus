import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./app/store";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

