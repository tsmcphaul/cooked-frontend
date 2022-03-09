import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
// import { connect } from 'react-redux'
// import RecipeCard from './RecipeCard'
// import { fetchRecipes } from '../../actions/recipeActions.js'


class RecipeContainer extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         recipes: []
    //     }
    // }


// componentDidMount() {
//     this.props.fetchRecipes()
//  }


    render() {
        return (
            <div>
               <ul>
                  <RecipeCard />
               </ul>
            </div>
        );
    }
}

export default RecipeContainer;