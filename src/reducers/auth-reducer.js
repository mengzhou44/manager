import * as types from '../actions/types';

const INITIAL_STATE = { email: 'test@test.com', password: 'password', user: {}, error: '' }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case types.PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case types.LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '' }
        case types.LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', password: '' }
        default:
            return state;
    }
}