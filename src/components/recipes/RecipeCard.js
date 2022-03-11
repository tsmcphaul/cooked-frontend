// import React, { Component } from 'react';


const RecipeCard = props => {
    
        return (
            <div className='recipe-card'>
                <img src={props.image} alt='img' className='recipe-img'/>
                <h4 className='recipe-name'> {props.name} </h4>
                <h4 className='recipe-category'>Category: </h4>
                <h4 className='recipe-ingredients'>Ingredients: {props.ingredients}</h4>
                <h4 className='recipe-preptime'>Prep time: {props.preptime} mins</h4>
                <h4 className='recipe-cooktime'>Cook time: {props.cooktime} mins</h4>
                <h4 className='recipe-instuctions'>Instructions: {props.instructions}</h4>
                
            </div>
        );
    
}

export default RecipeCard;