import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/employee-create';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Please Login' initial />
                </Scene>
                <Scene key='main'>
                    <Scene
                        key='employees'
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
                        component={EmployeeList}
                        title='Employees'
                        initial />

                    <Scene
                        key='employeeCreate'
                        title='Create Employee'
                        component={EmployeeCreate}
                    />
                </Scene>
            </Scene>

        </Router>
    )
}

export default RouterComponent; 