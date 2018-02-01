import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';

import reducers from './reducers';

import LoginForm from './components/login-form';

import Router from './router';

class App extends Component {

    componentWillMount() {

        const config = {
            apiKey: 'AIzaSyCWTEtZvYZ8yRGyf74FqrEcwEFj7xS8Mxk',
            authDomain: 'manager-a4ef7.firebaseapp.com',
            databaseURL: 'https://manager-a4ef7.firebaseio.com',
            projectId: 'manager-a4ef7',
            storageBucket: 'manager-a4ef7.appspot.com',
            messagingSenderId: '757122444961'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Router style={{ flex: 1 }}>
                    <LoginForm />
                </Router>
            </Provider>
        );
    }
}

export default App;
