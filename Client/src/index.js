//REACT ROUTER
import {BrowserRouter} from 'react-router-dom';
//REACT
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import App from './components/App';
import Login  from './components/Login/Login';

const Root = () => (
  <BrowserRouter>
    {/* <App/> */}
    <Login/>
  </BrowserRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
