
const RecipeList = props => {
    
    return (
        <div className='recipe-list'>
            <img src={props.image} alt='img' className='recipe-img'/>
            <h4 className='recipe-name'> {props.name} </h4>
            
        </div>
    );

}

export default RecipeList;