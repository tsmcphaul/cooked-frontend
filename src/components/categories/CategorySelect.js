import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions/categoryActions'

class CategorySelect extends Component {
    componentDidMount() {
        this.props.fetchCategories()

    }

    render() {
    return (

        <select>{
            this.props.categories.map(cat => 
            
              <option key={cat.attributes.id} value={cat.attributes.id}>{cat.attributes.name}</option> )
          }</select>
    );
};
}
const mapStateToProps = state => {
    // console.log(state)
    return {categories: state.categories}
}

export default connect(mapStateToProps, { fetchCategories })(CategorySelect);
