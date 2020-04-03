import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import students from './student/reducer'
import subjects from './subject/reducer'
import apiCallsInProgress from './apiStatus/reducer'

const rootReducer = combineReducers({
  students,
  subjects,
  apiCallsInProgress,
})

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  )
}
