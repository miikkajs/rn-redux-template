'use strict';
import {actions} from '../../actions/dashboard';
import {results} from '../../middleware/readyStatePromise';
import reducer from '../dashboard';

describe('Dashboard reducer tests', () => {

    const initialState = {
        text: "",
        time: {
            status: results.ASYNC_RESULT_NONE,
            data: null,
            error: null,
        }
    };

    it('Should return initial state', (done) => {
        expect(reducer(undefined, {})).toEqual(initialState);
        done();
    });

    it('Should return text', (done) => {
        const action = {type: actions.GET_TEXT, text: 'foo'};
        const newState = reducer(undefined, action);
        expect(newState.text).toEqual(action.text);
        expect(newState.time).toEqual(initialState.time);
        done();
    });

    it('Should set data for time object and set error to null on successful result', done => {
        const action = {
            type: actions.GET_TIME_ASYNC,
            status: results.ASYNC_RESULT_SUCCESS,
            result: 'Promise was resolved with this text'
        };
        const oldState = {time: {...initialState.time, error: new Error('foo')}};
        const newState = reducer(oldState, action);
        expect(newState.time.status).toEqual(results.ASYNC_RESULT_SUCCESS);
        expect(newState.time.data).toEqual(action.result);
        expect(newState.time.error).toEqual(null);
        done();
    });

    it('Should preserve old data and set error on failed result', done => {
        const action = {
            type: actions.GET_TIME_ASYNC,
            status: results.ASYNC_RESULT_ERROR,
            error: new Error('foo')
        };
        const oldState = {time: {...initialState.time, data: 'foo'}};
        const newState = reducer(oldState, action);
        expect(newState.time.status).toEqual(results.ASYNC_RESULT_ERROR);
        expect(newState.time.data).toEqual(oldState.time.data);
        expect(newState.time.error).toEqual(action.error);
        done();
    });
});