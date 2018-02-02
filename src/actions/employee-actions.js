import { Actions, ActionConst } from 'react-native-router-flux';
import firebase from 'firebase';
import * as types from './types';


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
        }).then(() => Actions.employees({ type: ActionConst.RESET }));
    }
}