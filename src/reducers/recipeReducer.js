export default function recipeReducer (state, action) {
    
    switch (action.type) {
        case "FETCH_RECIPES":
            return {
                ...state, recipes: action.payload
            }
            
            break;
    
        default:
            break;
    }
    return state;
}