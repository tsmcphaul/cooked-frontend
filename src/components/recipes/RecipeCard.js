import React, { Component } from 'react';
import RecipeContent from './RecipeContent';

class RecipeCard extends Component {
    render() {
        return (
            <div className='recipe-card'>
                <RecipeContent />
            </div>
        );
    }
}

export default RecipeCard;