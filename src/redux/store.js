import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

const rootReducer = combineReducers({
  main: reducer,
})

export const store = configureStore({ reducer: rootReducer })
