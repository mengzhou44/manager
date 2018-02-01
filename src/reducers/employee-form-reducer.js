import * as types from '../actions/types';

const INITIAL_STATE = { phone: '', name: '', shift: '' }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.FIELD_CHANGED:
            const { prop, value } = action.payload;
            return { ...state, [prop]: value };
        default:
            return state;
    }
}