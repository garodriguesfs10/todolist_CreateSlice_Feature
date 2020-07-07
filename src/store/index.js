
import todoReducer from '../reducers/todoreducer'
import { combineReducers, createStore } from 'redux'

const RootReducer = combineReducers({
    todo:todoReducer
})

export default createStore(RootReducer)