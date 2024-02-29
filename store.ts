// store.ts
import { createStore, combineReducers } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import navbarReducer from './reducer';

const rootReducer = combineReducers({
    navbar: navbarReducer,
});

const makeStore: MakeStore = () => createStore(rootReducer);

export const wrapper = createWrapper(makeStore, { debug: true });