import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h4 className='home'>Home</h4>
                <h4 className='recipes-nav'>Recipes</h4>
                <h4 className='category-nav'>Categories</h4>
                <h4 className='new-nav'>Create Recipe</h4>
            </nav>
        );
    }
}

export default Navbar;