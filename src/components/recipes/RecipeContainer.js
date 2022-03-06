import React, { Component } from 'react';
import RecipeCard from './RecipeCard'

// componentDidMount() {
//     fetch('http://localhost:3001/recipes')
//         .then((response) => response.json())
//         .then((data) => )
// }



class RecipeContainer extends Component {
    render() {
        return (
            <div>
               <RecipeCard />
            </div>
        );
    }
}

export default RecipeContainer;