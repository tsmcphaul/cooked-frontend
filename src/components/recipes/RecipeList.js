import React, { Component } from 'react';
import { connect} from 'react-redux'
import RecipeCard from './RecipeCard';

class RecipeList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
      this.props.fetchRecipes()
    }


    render() {
       
        
        return (
            <div className='recipe-list'>
                {this.props.recipes.map(r => (
                    <RecipeCard key={r.id} recipe={r}/>

                ))}

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {recipes: state.recipeReducer}
}

const mapDispatchToProps = (dispatch) => {
    return {fetchRecipes: () => dispatch(fetchRecipes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);