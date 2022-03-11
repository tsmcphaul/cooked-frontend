import React, { Component } from 'react';
import { connect } from 'react-redux'
import RecipeCard from './RecipeCard'
// import { fetchRecipes } from '../../actions/recipeActions.js'
// import { useEffect} from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';



 class RecipeContainer extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         recipes: []
    //     }
    // }

    // componentDidMount() {
    //     this.fetchRecipes()

    // }

    // const dispatch = useDispatch()
    // const recipes = useSelector(state => state.recipes)

    // useEffect(() => {
    //     dispatch(fetchRecipes())
    //   }, [])

     render() {
        return (
            <div className='recipe-list'>
                {this.props.recipes.map(r => <RecipeCard key={r.id} name={r.name}/>)}
        
                {/* {console.log(this.props.recipes)} */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {recipes: state.recipes}
}

// const mapDispatchToProps = (dispatch) => {
//     return {fetchRecipes: () => dispatch(fetchRecipes())
//     }
// }



export default connect(mapStateToProps)(RecipeContainer);