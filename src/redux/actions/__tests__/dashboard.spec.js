'use strict';
import {
    actions,
    getInstructions,
    getAsyncResult
} from '../dashboard';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Dashboard action tests', () => {
    const mockStore = configureMockStore([thunk]);

    it('.getInstructions should dispatch action with correct type and text', done => {
        const text = 'Click button to get Promise data';
        const store = mockStore({});

        store.dispatch(getInstructions());
        expect(store.getActions()).toMatchSnapshot();
        done();
    });

    it('.getTimeAsync should dispatch action with correct type and promise payload', async done => {
        const text = 'Hooray! This text was resolved from Promise.';
        const store = mockStore({});

        store.dispatch(getAsyncResult());

        expect(await store.getActions()[0].promise).toMatchSnapshot();
        // expect().toEqual(text);
        done();
    });
});