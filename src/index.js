import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import {Provider} from 'react-redux'
import {store} from './redux'
import {initializeAxios} from './utils/axios'
import './assets/scss/main.scss'

initializeAxios()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);
