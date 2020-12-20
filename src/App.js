import React from 'react'
import NavBar from './components/heading/heading'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Footer from './components/footer/footer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <main className="container">
          <Home />
          <About />
          <Skills />
          <Footer />
          {/* <Switch>
            <Route path='/Home' component={Movies} />
        </Switch> */}
      </main>
    </React.Fragment>
    
  );
}

export default App;
/* <React.Fragment>
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
</React.Fragment> */
