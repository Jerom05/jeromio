import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import NavBar from './components/heading/heading'
import Main from './components/main/main'
import Project from './components/project/project'
import About from './components/A/about'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path='/Home' component={Main} />
          <Route path='/Project' component={Project} />
          <Route path='/About' component={About} />
          <Redirect exact from='/' to='/Home' />
        </Switch>
      </main>
    </React.Fragment>
    
  );
}

export default App;
