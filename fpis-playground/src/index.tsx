import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement =  document.getElementById('root')
// const children = "hello world"
// const className = "container"
// const helloElement = React.createElement('span',null,'Hello')
// const worldElement = React.createElement('span',null,'World')
// const element = React.createElement(
//   React.Fragment,
//   null,
//   helloElement,
//   ' ',
//   worldElement
//   )

const element = <React.Fragment>
  <span>Hello</span> <span>World</span>
</React.Fragment>
ReactDOM.render(
  element,
  rootElement
 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
