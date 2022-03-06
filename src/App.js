import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import CategoryContainer from './components/categories/CategoryContainer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RecipeContainer from './components/recipes/RecipeContainer';
import RecipeNew from './components/recipes/RecipeNew';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipeContainer} />
        <Route exact path="/categories" component={CategoryContainer} />
        <Route exact path="/new" component={RecipeNew} />

      </Router>
    );
  }
}

export default App;