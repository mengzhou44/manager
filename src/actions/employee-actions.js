import * as types from './types';

export const employeeUpdate = ({ prop, value }) => {
    return { type: types.FIELD_CHANGED, payload: { prop, value } };
}