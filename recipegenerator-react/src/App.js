/*
import logo from './logo.svg';
import './App.css';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import Recipe from './Recipe';

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar onSearch={ //function to perform search/ / /}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={RecipeList} />
          <Route path="/recipe/:id" component={Recipe} />
         // {/* You can add more routes here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;