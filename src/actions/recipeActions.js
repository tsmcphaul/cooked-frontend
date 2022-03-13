export const fetchRecipes = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/recipes")
        .then(resp => resp.json())
        .then(data => {console.log(data)
            dispatch({type: 'FETCH_RECIPES', payload: data.data})})
            
    }
}

export const fetchRecipe = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/recipes/${id}`)
        .then(resp => resp.json())
        .then(data => {console.log(data)
            dispatch({type: 'FETCH_RECIPE', payload: data})})
            
    }
}


export const addRecipe = (recipe) => {
    return (dispatch) => {
        fetch("http://localhost:3001/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(recipe)
        })
            .then(resp => resp.json())
            .then(recipe => 
                dispatch({ type: "ADD_RECIPE", payload: recipe}))
    }
}