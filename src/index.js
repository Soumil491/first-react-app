import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//routing configuration
import { BrowserRouter } from 'react-router-dom';

//linking redux with react application
import { Provider } from 'react-redux';
import configureStore from './store'

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);