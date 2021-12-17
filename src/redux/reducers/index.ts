import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resultUserReducer from './resultUserReducer';

const rootReducer = combineReducers({ userReducer, resultUserReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
