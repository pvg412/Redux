import user from './fetchReducer';
import { combineReducers } from 'redux';


const reducers = combineReducers({
    user
});

export default reducers;