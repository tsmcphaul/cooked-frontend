import React, { Component } from 'react';

class RecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            ingredients: "",
            instructions: "", 
            image: "",
            preptime: "", 
            cooktime: ""

        }
    }
    
    
    
    handleChange = (e) => {
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
                <h2>
                   Add New Recipe
                   {console.log(this.state)}
                </h2>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                <br/>
                <select name="category" placeholder="Category" multiple={true} value={this.state.categories} onChange={this.handleChange} />
                <br/>
                <textarea type="text" rows="4" cols="50" placeholder="Ingredients" value={this.state.ingredients} onChange={this.handleChange} />
                <br/>
                <input type="text" placeholder="Instructions" value={this.state.instructions} onChange={this.handleChange} />
                <br/>
                <input type="text" placeholder="Image" value={this.state.image} onChange={this.handleChange} />
                <br/>
                <input type="text" placeholder="Preptime" value={this.state.preptime} onChange={this.handleChange} />
                <br/>
                <input type="text" placeholder="Cooktime" value={this.state.cooktime} onChange={this.handleChange} />
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

export default RecipeForm;