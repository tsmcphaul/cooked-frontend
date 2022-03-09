import React, { Component } from 'react';

class RecipeContent extends Component {
    render() {
        return (
            <div className='recipe-content'>
                <img src="*" alt='img' className='recipe-img'/>
                <h4 className='recipe-name'> Recipe: </h4>
                <h4 className='recipe-category'>Category:</h4>
                <h4 className='recipe-ingredients'>Ingredients: </h4>
                <h4 className='recipe-preptime'>Prep time: </h4>
                <h4 className='recipe-cooktime'>Cook time: </h4>
                <h4 className='recipe-instuctions'>Instructions:</h4>
                
            </div>
        );
    }
}

export default RecipeContent;