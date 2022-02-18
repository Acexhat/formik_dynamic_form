import { createStore, applyMiddleware, compose } from 'redux';
import formState from './states/formState';
import rootReducer from './Reducers';

const initialState = {
    form: formState,
};
const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default store;