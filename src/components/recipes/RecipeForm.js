import React, { Component } from 'react';
import { fetchCategories } from '../../actions/categoryActions'
import { connect } from 'react-redux'
import { addRecipe } from '../../actions/recipeActions';
// import RecipeContainer from './RecipeContainer';


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
            isSubmitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchCategories();

    }
    
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
   
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addRecipe(this.state)
        alert("YUMMY!!! Your recipe has been added!")
        // this.setState({
           
        //     isSubmitted: true
        // })
       window.location.replace("http://localhost:3000/recipes")
    }


    render() {
   
            return(
            <form onSubmit={this.handleSubmit}>
                
                <h2>
                   Add New Recipe
                 
                </h2>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name"/>
                <br/>
                <select name="category_id" onChange={this.handleChange}> { this.props.categories.map(cat => 
                    <option name="category_id" key={cat.id} value={cat.id}>{cat.attributes.name} </option> )
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
                {/* <button onClick={this.handleReset}>Reset</button> */}
                {console.log(this.state)}
            </form>)
        // )} else {
        //     content = <RecipeContainer props={this.props}/>
        // }
        // return <div>{content}</div>;
    }
}

const mapStateToProps = state => {

    return {
        categories: state.categories, 
        recipes: state.recipes
      
    }
}

// const mapDispatchToProps = dispatch => {

//     return {
//         addRecipeDispatch: (recipe) => dispatch(addRecipe(recipe))
//     }
// }

export default connect(mapStateToProps, {fetchCategories, addRecipe})(RecipeForm);