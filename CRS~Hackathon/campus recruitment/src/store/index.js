import authReducer from '../store/reducers/reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    authReducer,
    {},
    applyMiddleware(thunk)
);

export default store;