import { combineReducers } from 'redux';
import switchCaseReducer from '../components/switchCase/reducer';

export default combineReducers({
    alphaCase: switchCaseReducer
})