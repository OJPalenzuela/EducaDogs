import { createStore, applyMiddleware,compose, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {dogReducer} from '../reducers/dogReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  dog:dogReducer,
  
})

export const store = createStore(
 reducer,
 composeEnhancers(
   applyMiddleware(thunk)
 )
);
