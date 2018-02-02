import { Actions, ActionConst } from 'react-native-router-flux';
import firebase from 'firebase';
import * as types from './types';


export const employeeFormReset = () => {
    return { type: types.EMPLOYEE_FORM_RESET };
}


export const employeeUpdate = ({ prop, value }) => {
    return { type: types.FIELD_CHANGED, payload: { prop, value } };
}


export const employeeCreate = ({ name, phone, shift }) => {
    return function (dispatch) {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({
            name,
            phone,
            shift
        }).then(() => {
            dispatch({ type: types.EMPLOYEE_FORM_RESET });
            Actions.main();
        });
    }
}

export const employeeSave = ({ uid, name, phone, shift }) => {
    return function (dispatch) {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).set({
            name,
            phone,
            shift
        }).then(() => {
            Actions.main();
        });
    }
}

export const employeeDelete = (uid) => {
    return function (dispatch) {
        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).remove().
            then(() => {
                Actions.main();
            });
    }
}

export const employeesFetch = () => {
    return function (dispatch) {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: types.EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            });
    }
}