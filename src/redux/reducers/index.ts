import { combineReducers } from 'redux';
import userReducer from './userReducer';
import targetUserReducer from './targetUserReducer';
import spellReducer from './spellReducer';

const rootReducer = combineReducers({
  userReducer,
  targetUserReducer,
  spellReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
