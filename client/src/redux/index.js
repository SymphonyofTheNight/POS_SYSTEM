import { combineReducers } from 'redux';

// import_global_states 
import reducer from './reducer.js';
import authentication from './authentication.js';

export default combineReducers({
    reducer, authentication
})