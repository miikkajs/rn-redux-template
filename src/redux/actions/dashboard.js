'use strict';
import {Promise} from 'bluebird';

export const actions = Object.freeze({
    GET_TEXT: 'GET_TEXT',
    GET_TIME_ASYNC: 'GET_TIME_ASYNC',
});

export const getInstructions = () => ({type: actions.GET_TEXT, text: "Click button to get Promise data"});
export const getAsyncResult = () => dispatch => dispatch({type: actions.GET_TIME_ASYNC, promise: _getDataAsync()});

function _getDataAsync() {
    return Promise.delay(500).then(() => Promise.resolve('Hooray! This text was resolved from Promise.'));
}