import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import combineReducer from './redux/reducers';


ReactDOM.render(
    <Provider store={createStore(combineReducer)}>
        <App />
    </Provider>,
     document.querySelector('#root'));
