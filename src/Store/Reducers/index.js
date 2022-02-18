import { combineReducers } from 'redux';

// Import reducers
import formReducer from './formReducer';

// Combine all reducers to one
const rootReducer = combineReducers({
    form: formReducer,
});

export default rootReducer;