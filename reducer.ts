// reducer.ts
import { HYDRATE } from 'next-redux-wrapper';
import { TOGGLE_NAVBAR } from './actiontype';

const initialState = {
    navbar: false,
};

const navbarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case TOGGLE_NAVBAR:
            return { ...state, navbar: !state.navbar };
        default:
            return state;
    }
};

export default navbarReducer;