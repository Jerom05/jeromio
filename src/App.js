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
      </main>
    </React.Fragment>
    
  );
}

export default App;