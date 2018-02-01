import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import * as actions from '../actions';
import colors from './common/_colors';

import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    state = { showSpinner: false };

    renderSpinner() {
        if (this.state.showSpinner) {
            return <Spinner />;
        }
    }

    renderError() {
        const { errorContainer, errorText } = styles;
        if (this.props.error) {
            return (
                <View style={errorContainer}>
                    <Text style={errorText}>{this.props.error} </Text>
                </View>
            );
        }
    }
    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@gmail.com'
                        value={email}
                        onChangeText={(text) => this.props.emailChanged(text)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        value={password}
                        onChangeText={(text) => this.props.passwordChanged(text)}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    <Button
                        onPress={() => {
                            this.setState({ showSpinner: true });
                            this.props.loginUser(
                                email,
                                password,
                                () => this.setState({ showSpinner: false })
                            );
                        }}
                    > Login </Button>
                </CardSection>
                {this.renderSpinner()}
            </Card>
        );
    }
}

const styles = {
    errorContainer: {
        backgroundColor: colors.white
    },
    errorText: {
        color: colors.red,
        fontSize: 18,
        alignSelf: 'center'
    }
}

function mapStateToProps(state) {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, actions)(LoginForm); 