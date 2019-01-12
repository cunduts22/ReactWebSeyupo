/**
* Wrap our React.Element with Provider
* create our store(@param reducers, applyMiddleware(@param saga))
* saga.run(@param ourSagaConfiguration)
*/

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import allReducers from './reducers'
import rootSaga from './saga'
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    allReducers,
    compose(
        applyMiddleware(sagaMiddleware),
        reduxDevTools
    )
)
sagaMiddleware.run(rootSaga)
