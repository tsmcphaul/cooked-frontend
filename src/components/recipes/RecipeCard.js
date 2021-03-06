
import RecipeDeleteButton from "./RecipeDeleteButton";
import { Link } from "react-router-dom";


const recipeCard = props  => {
    
        return (
            
            <div className='props-card'>
                {console.log(props)}
                <img src={props.recipe.image} alt='img' className='props-img'/>
                <h4 className='props-name'> {props.name} </h4>
                <h4 className='props-category'>{props.recipe.name}</h4>
                <h4 className='props-ingredients'>Ingredients: {props.recipe.ingredients}</h4>
                <h4 className='props-preptime'>Prep time: {props.recipe.preptime} mins</h4>
                <h4 className='props-cooktime'>Cook time: {props.recipe.cooktime} mins</h4>
                <h4 className='props-instuctions'>Instructions: {props.recipe.instructions}</h4>
                {console.log(props.id)}
                <RecipeDeleteButton id={props.id}/>
                <br/>
                <Link to={`/recipes/`} className="back-link">Go back to recipes</Link>
            </div>
        );
    
}

export default recipeCard;