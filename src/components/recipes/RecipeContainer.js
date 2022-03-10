import React, { Component } from 'react';
// import RecipeCard from './RecipeCard';
import RecipeList from './RecipeList';

import { connect } from 'react-redux'
// import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../../actions/recipeActions.js'


class RecipeContainer extends Component {


componentDidMount() {
    this.props.fetchRecipes()
 }


    render() {
        return (
            <div>
                <RecipeList />

            </div>
        );
    }
}

export default connect(null, { fetchRecipes })(RecipeContainer);