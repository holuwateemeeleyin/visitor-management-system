import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware  from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Routes from './routes'
import reducers from './reducers'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);