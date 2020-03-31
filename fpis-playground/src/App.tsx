import React from 'react';
import './App.css';
import {Switch,Route, Redirect,Link} from 'react-router-dom'

const App: React.FC =() =>  {
  return (
   <>
      <div>
        <Link to="/">Home Page</Link>
        <span>|</span>
        <Link to="/about">About Page</Link>
      </div>
      <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route exact path="/about">
            <h1>Aboute Page</h1>
          </Route>
          <Redirect to="/"/>
      </Switch>
   </>
  );
}

export default App;
