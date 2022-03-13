import { Link } from "react-router-dom";

const CategoryCard = props => {
    
    return (
        <div className='category-card'>
        
            <img src={props.image} alt='img' className='category-img'/>
            <h4 className='category-name'> {props.name} </h4>
            <Link to={`/categories/${props.id}`}>Details</Link>
        </div>
    );

}

export default CategoryCard;