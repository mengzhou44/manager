import { combineReducers } from 'redux';

import AuthReducer from './auth-reducer';
import EmployeeFormReducer from './employee-form-reducer';
import EmployeeListReducer from './employee-list-reducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeListReducer
});

