import React, { Component } from 'react';
// import { connect} from 'react-redux'
import RecipeCard from './RecipeCard';

class RecipeList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         recipes: this.props.recipes
    //     })
    // }


    render() {
        return (
            <div className='recipe-list'>
    
                 <RecipeCard />

            </div>
        );
    }

    
}

export default RecipeList;