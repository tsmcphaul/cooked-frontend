import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h4>Home</h4>
                <h4>Recipes</h4>
                <h4>Categories</h4>
                <h4>Create Recipe</h4>
            </nav>
        );
    }
}

export default Navbar;