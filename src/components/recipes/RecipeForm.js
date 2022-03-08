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
                </h2>
                <input type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange} />
                <input type="submit" />
            </form>
        );
    }
}

export default RecipeForm;