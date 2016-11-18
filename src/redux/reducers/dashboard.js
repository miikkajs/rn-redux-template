import {results} from '../middleware/readyStatePromise';
import {actions} from '../actions/dashboard';

const initialState = {
    text: "",
    data: {
        status: results.ASYNC_RESULT_NONE,
        result: null,
        error: null,
    },
    // selectedButtonGroupButton: "cat",
};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case actions.GET_TEXT:
            return Object.assign({}, state, {
                text: action.text
            });
        case actions.GET_DATA_ASYNC:
            return Object.assign({}, state, {
                data: {
                    status: action.status,
                    result: action.result || state.data.result,
                    error: action.error || null
                }
            });
        // case actions.SET_BTNGRP_VALUE:
        //     return Object.assign({}, state, {
        //         selectedButtonGroupButton: action.value
        //     });
        default:
            return state;
    }
}