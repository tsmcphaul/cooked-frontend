import {recipeReducer} from './recipeReducer'
import {categoryReducer} from './categoryReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    recipe: recipeReducer,
    category: categoryReducer
})