import React from 'react';
import './App.css';
import {Switch,Route, Redirect,Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './style'
import { useStoreState } from './hooks';
import Home from '../src/home'
import Container from '@material-ui/core/Container';


const App: React.FC =() =>  {

  const classes = useStyles();
  const entires = useStoreState(state => state.guestbook.entries)

  //console.log(entires)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
          🍔
          </IconButton>
            <div>
            <Button  component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
          </div>
        </Toolbar>
      </AppBar>
      <>
      <Container maxWidth="md">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Home}>
              <h1>Aboute Page</h1>
            </Route>
            <Redirect to="/"/>
        </Switch>
      </Container>
    </>
    </div>
  );
}

export default App;




