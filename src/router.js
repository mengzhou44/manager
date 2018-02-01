import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Please Login' initial />
                </Scene>
                <Scene key='main'>
                    <Scene key='employees' component={EmployeeList} title='Employees' initial />
                </Scene>
            </Scene>

        </Router>
    )
}

export default RouterComponent; 