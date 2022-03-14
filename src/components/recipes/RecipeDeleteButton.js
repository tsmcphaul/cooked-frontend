import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecipe } from '../../actions/recipeActions';





class RecipeDeleteButton extends Component {

    deleteRecipe(props) {
        this.props.deleteRecipe(props.id)
        
        window.location.replace("http://localhost:3000/recipes")
        
    }

    render() {
        return (
            <div>
                <button className={"delete-button"} onClick={deleteRecipe(this.props.id)}>Delete </button>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return { 
        deleteItem: (id) => dispatch(deleteRecipe(id))
        
    }
}

export default connect(null, mapDispatchToProps) (RecipeDeleteButton); 