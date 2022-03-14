import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoryCard from './CategoryCard';
import { fetchCategories } from '../../actions/categoryActions'


class CategoryContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()

    }

   


    render() {
        return (
            <div className='category-list'>
                <h2>Categories</h2>
                {this.props.categories.map(c => <CategoryCard
                key={c.id} 
                id={c.id}
                image={c.attributes.image}
                name={c.attributes.name} 
                />)}
        

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps, { fetchCategories })(CategoryContainer);;