import {results} from '../middleware/readyStatePromise';
import {actions} from '../actions/dashboard';

const initialState = {
    text: "",
    time: {
        status: results.ASYNC_RESULT_NONE,
        data: null,
        error: null,
    }
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case actions.GET_TEXT:
            return Object.assign({}, state, {
                text: action.text
            });
        case actions.GET_TIME_ASYNC:
            return Object.assign({}, state, {
                time: {
                    status: action.status,
                    data: action.result || state.time.data,
                    error: action.error || null
                }
            });
        default:
            return state;
    }
}