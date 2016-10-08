import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import app from './reducers/app';
import dashboard from './reducers/dashboard';
import thunk from 'redux-thunk';
import {readyStatePromise} from './middleware/readyStatePromise';

const reducer = combineReducers({
    app,
    dashboard,
    // [...]
});

const store = createStore(reducer, {}, applyMiddleware(thunk, readyStatePromise));

export default store;