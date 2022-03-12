import React, { Component } from 'react';
import CategorySelect from '../categories/CategorySelect';
import { fetchCategories } from '../../actions/categoryActions'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions.js'

class RecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category_id: "",
            ingredients: "",
            instructions: "", 
            image: "",
            preptime: "", 
            cooktime: "",
            selectedOption:""


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchRecipes();

    }
    
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
   
    }

    handleCategoryChange = (e) => {
       
        this.setState({
            [e.target.name]: e.target.value
            
        });
   
    }


    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {console.log(this.state)}
                <h2>
                   Add New Recipe
                 
                </h2>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name"/>
                <br/>
                {/* <CategorySelect /> */}
                <select> { this.props.categories.map(cat => 
                    <option name="category_id" key={cat.id} value={cat.id} selected={cat.id} onChange={this.handleCategoryChange}>{cat.attributes.name} </option> )
                }</select>
                <br/>
                <textarea name="ingredients"type="text" rows="4" cols="50" placeholder="Ingredients" value={this.state.ingredients} onChange={this.handleChange} />
                <br/>
                <textarea name="instructions" type="text" rows="4" cols="50" placeholder="Instructions" value={this.state.instructions} onChange={this.handleChange} />
                <br/>
                <input name="image"type="text" placeholder="Image Link" value={this.state.image} onChange={this.handleChange} />
                <br/>
                <input name="preptime"type="text" placeholder="Prep Time" value={this.state.preptime} onChange={this.handleChange} />
                <br/>
                <input name="cooktime"type="text" placeholder="Cook Time" value={this.state.cooktime} onChange={this.handleChange} />
                <br/>
                <input type="submit" />
            </form>
        );
    }
}
const mapStateToProps = state => {
    // console.log(state)
    return {
        categories: state.categories,
        recipes: state.recipes
    }
}

// const mapDispatchToProps = state => {
//     // console.log(state)
//     return {
//         categories: state.categories,
//         recipes: state.recipes
//     }
// }

export default connect(mapStateToProps, {fetchCategories, fetchRecipes})(RecipeForm);