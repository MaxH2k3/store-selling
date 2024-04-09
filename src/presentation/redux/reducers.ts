// src/redux/reducers.ts

import { combineReducers } from 'redux';
import { exampleReducer } from './exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  // Add more reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
