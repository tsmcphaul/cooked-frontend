const CategoryCard = props => {
    
    return (
        <div className='category-card'>
            <img src={props.image} alt='img' className='category-img'/>
            <h4 className='category-name'> {props.name} </h4>
        
        </div>
    );

}

export default CategoryCard;