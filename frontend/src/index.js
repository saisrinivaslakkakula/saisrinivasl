
import React from 'react';
import ReactDOM from 'react-dom';
import{ Provider} from 'react-redux'
import store from './store'
import './public/css/bootstrap.min.css'
import './public/css/boxicons.min.css'
import './public/css/responsive.css'
import './public/css/flaticon.css'
import './public/css/style.css'
import './public/css/slick.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
