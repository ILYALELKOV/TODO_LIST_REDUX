import { applyMiddleware, combineReducers, createStore } from 'redux'
import { todosReducer } from './reducers/todos-reducer.js'
import thunk from 'redux-thunk'

// const reducer = combineReducers({})

export const store = createStore(todosReducer, applyMiddleware(thunk))
