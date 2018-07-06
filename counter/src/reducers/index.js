import counter from './counterReducer';
import tasks from './taskReducer';
import gallery from './fetchReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    counter,
    tasks,
    gallery,
});

export default reducers;