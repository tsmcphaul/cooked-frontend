import { Link } from "react-router-dom";
const RecipeList = props => {
    
    return (
        <div className='recipe-list column'>
            <img src={props.image} alt='img' className='recipe-img'/>
            <h4 className='recipe-name'> {props.name} </h4>
            <Link to={`/recipes/${props.id}`} className={"details-button"}>Details</Link>
            
        </div>
    );

}

export default RecipeList;