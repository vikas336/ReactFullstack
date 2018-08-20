import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers'


const initialState = {}
const enhancers = []
const middleware = [thunk]


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
