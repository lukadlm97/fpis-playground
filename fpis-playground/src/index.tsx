import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {StoreProvider} from 'easy-peasy'
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

// function useLocalStorageState(key:any,defalutValue=''){
//   const [state,setState] = React.useState(
//     () => window.localStorage.getItem(key)||defalutValue
//   )
//   React.useEffect(()=>{
//     window.localStorage.setItem(key,state),[state]
//   })
//   return [state,setState]
// }

// const  Greeting = () =>{
//   const [name,setName] = useLocalStorageState('name')

//   const onChange = null
  
//   return <div>
//       <form>
//         <label>Name: </label>
//         <input name="name"  id="name"/>
//       </form>
//       {name? <strong>Hello {name}</strong>:'Please type your name'}
//     </div>
// }

// const element = <React.Fragment>
//   <span>Hello</span> <span>World</span>
// </React.Fragment>
import store from './store'

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
