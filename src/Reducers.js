import { combineReducers } from 'redux';
import calculator from './Calculator';
import diceLstReducer from './DiceLstReducer';

export default combineReducers({
    count: calculator,
    diceLst: diceLstReducer
});