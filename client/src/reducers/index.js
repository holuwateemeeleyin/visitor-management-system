import { combineReducers } from 'redux'
import visitors from './visitors_reducer'
import admin from './admin_reducer'
const rootReducer = combineReducers({
    visitors,
    admin
})

export default rootReducer