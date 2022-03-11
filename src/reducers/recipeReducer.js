export function recipeReducer (state = {recipes: []}, action) {
    
    switch (action.type) {
        case "FETCH_RECIPES":
            return {
                ...state, recipes: action.payload
            }
            
           
    
        default:
            return state;
    }
  
}