import {recipeReducer} from './recipeReducer'
import {categoryReducer} from './categoryReducer'
import { combineReducers } from 'redux'

 const rootReducer = combineReducers({
    recipes: recipeReducer,
    categories: categoryReducer
})

export default rootReducer;