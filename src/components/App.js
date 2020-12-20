import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Movies from './components/movies'
import NavBar from './components/navBar';
import NotFound from './components/notFound';
import Rentals from './components/rentals';

import Routes from './route'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
      <Switch>
        <Route path='/movies' component={Movies} />
        <Route path='/customers' component={Customers} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/not-found' component={NotFound} />
        <Redirect exact from='/' to='/movies' />
        <Redirect to='/not-found' />
      </Switch>
    </main>
    </React.Fragment>
    
  );
}

export default App;
