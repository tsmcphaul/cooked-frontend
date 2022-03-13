
export function recipeReducer (state = [], action) {
    
    switch (action.type) {
        case "FETCH_RECIPES":
            console.log(state)
            return action.payload
        case "FETCH_RECIPE":
            return {recipe: action.payload}
        case "ADD_RECIPE":
            return [...state, action.payload]
            
           
    
        default:
            return state;
    }
  
}