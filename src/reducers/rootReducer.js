import {recipeReducer} from './recipeReducer'
import {categoryReducer} from './categoryReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    recipes: recipeReducer,
    categories: categoryReducer
})