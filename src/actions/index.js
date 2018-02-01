import firebase from 'firebase';
import * as types from './types';
import { LOGIN_USER_FAIL } from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (email) => {
    return { type: types.EMAIL_CHANGED, payload: email };
}

export const passwordChanged = (password) => {
    return { type: types.PASSWORD_CHANGED, payload: password };
}

export const loginUser = (email, password, callback) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                loginUserSuccess(dispatch, user, callback);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) => {
                        loginUserSuccess(dispatch, user, callback);
                    })
                    .catch(() => {
                        loginUserFail(dispatch, callback);
                    })
            })
    }
}

const loginUserSuccess = (dispatch, user, callback) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });
    callback();
    Actions.main();
}

const loginUserFail = (dispatch, callback) => {
    dispatch({
        type: types.LOGIN_USER_FAIL
    })
    callback();

}

