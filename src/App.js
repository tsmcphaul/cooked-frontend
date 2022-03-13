import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import CategoryContainer from './components/categories/CategoryContainer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RecipeContainer from './components/recipes/RecipeContainer';
import RecipeForm from './components/recipes/RecipeForm';
import { fetchRecipes } from './actions/recipeActions'
import { connect } from 'react-redux';
import RecipeCard from './components/recipes/RecipeCard';
import { fetchCategories } from './actions/categoryActions';




class App extends Component {

  componentDidMount() {
    // console.log(this.state.recipes)
    this.props.getRecipes()
    this.props.getCategories()

}

 
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipeContainer} />
        <Route exact path="/categories" component={CategoryContainer} />
       
        <Route path="/categories/:id" component={(categoryRoute) => {
              const id = parseInt(categoryRoute.match.params.id)
              
              const category = this.props.recipes.filter(r => r.attributes.category_id === id)
              console.log(category)
              
              return !!category.length > 0 ? category.map(recipe => <RecipeCard categoryRoute={categoryRoute} id={recipe.id} recipe={recipe.attributes}/>) : <h2>No recipes found for this category!</h2>}}/>
        
        
        <Route exact path="/new" component={RecipeForm} />

        <Route path="/recipes/:id" component={(recipeRoute) => {
              const id = parseInt(recipeRoute.match.params.id)
              const recipe = this.props.recipes.find(r => parseInt(r.id) === id)
              return <RecipeCard recipeRoute={recipeRoute} id={recipe.id} recipe={recipe.attributes}/>
            }}/>

      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {recipe: state.recipe, 
          recipes: state.recipes,
        categories: state.categories,
        category: state.category}
}

const mapDispatchToProps = (dispatch) => {
    return {
      getRecipes: () => dispatch(fetchRecipes()),
      getCategories: () => dispatch(fetchCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);