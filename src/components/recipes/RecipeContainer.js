import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions.js'
import RecipeList from './RecipeList';





 class RecipeContainer extends Component {


    componentDidMount() {
        
        this.props.fetchRecipes()

    }

     render() {
        return (
            <div className='recipe-list'>

                {this.props.recipes.map(r => <RecipeList
                key={r.id} 
                id={r.id}
                image={r.attributes.image}
                name={r.attributes.name} 
                category={r.attributes.category_id}
                ingredients={r.attributes.ingredients}
                preptime={r.attributes.preptime}
                cooktime={r.attributes.cooktime}
                instructions={r.attributes.instructions}
                />
                
                )}
               
                {console.log(this.props.recipes)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {recipes: state.recipes}
}

// const mapDispatchToProps = (dispatch) => {
//     return {fetchRecipes: () => dispatch(fetchRecipes())
//     }
// }



export default connect(mapStateToProps, { fetchRecipes })(RecipeContainer);