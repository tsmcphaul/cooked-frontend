
export function categoryReducer (state = [], action) {
    
    switch (action.type) {
        case "FETCH_CATEGORIES":
            console.log(state)
            return action.payload
            
           
    
        default:
            return state;
    }
  
}