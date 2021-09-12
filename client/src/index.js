import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
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
=======
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
>>>>>>> 66c00ee90a76a95026c064a4df4298f692f94ffe
