import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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

function useLocalStorageState(key:any,defalutValue=''){
  const [state,setState] = React.useState(
    () => window.localStorage.getItem(key)||defalutValue
  )
  React.useEffect(()=>{
    window.localStorage.setItem(key,state),[state]
  })
  return [state,setState]
}

const  Greeting = () =>{
  const [name,setName] = useLocalStorageState('name')

  const onChange = null
  
  return <div>
      <form>
        <label>Name: </label>
        <input name="name"  id="name"/>
      </form>
      {name? <strong>Hello {name}</strong>:'Please type your name'}
    </div>
}

// const element = <React.Fragment>
//   <span>Hello</span> <span>World</span>
// </React.Fragment>
ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
