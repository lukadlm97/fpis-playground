import React from 'react';
import './App.css';
import {Switch,Route, Redirect,Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './style'
import { useStoreState } from './hooks';
import Home from '../src/home'


const App: React.FC =() =>  {

  const classes = useStyles();
  const entires = useStoreState(state => state.guestbook.entries)

  //console.log(entires)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">

          </IconButton>
          <Button component={Link} color="inherit">Home</Button>
          <Button component={Link} color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <>
        <div>
          <Link to="/">Home Page</Link>
          <span>|</span>
          <Link to="/about">About Page</Link>
        </div>
        <Switch>
            <Route exact path="/" component={Home}>
              <h1>Home Page</h1>
            </Route>
            <Route exact path="/about" component={Home}>
              <h1>Aboute Page</h1>
            </Route>
            <Redirect to="/"/>
        </Switch>
    </>
    </div>
  );
}

export default App;




