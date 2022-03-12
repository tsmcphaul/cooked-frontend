
export function recipeReducer (state = [], action) {
    
    switch (action.type) {
        case "FETCH_RECIPES":
            console.log(state)
            return action.payload
            
           
    
        default:
            return state;
    }
  
}