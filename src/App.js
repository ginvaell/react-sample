import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './scenes/home';
import About from './scenes/about';
import Auth from './scenes/auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/auth">Login</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/auth" component={Auth} />
        </main>
      </div>
    );
  }
}

export default App;
