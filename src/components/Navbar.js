import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/" className='home'>Home</Link>
                <Link to="/recipes" className='recipes-nav'>Recipes</Link>
                <Link to="/categories" className='category-nav'>Categories</Link>
                <Link to="/new" className='new-nav'>Create Recipe</Link>
            </nav>
        );
    }
}

export default Navbar;