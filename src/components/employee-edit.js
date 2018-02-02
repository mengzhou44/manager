import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import * as actions from '../actions';

import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './employee-form';

class EmployeeEdit extends Component {

    state = { showConfirm: false }

    render() {
        const { name, phone, shift, employee } = this.props;

        return (
            <Card>
                <EmployeeForm  {...this.props} />
                <CardSection>
                    <Button
                        onPress={() => {
                            const uid = employee.uid;
                            this.props.employeeSave({ uid, name, phone, shift: shift || 'monday' });
                        }
                        }
                    >
                        Save Changes
                      </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={() => {
                            const { phone, shift } = this.props;
                            Communications.text(phone, `Your upcomming shift is on ${shift}.`);

                        }}
                    >
                        Text Schedule
                      </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={() => {
                            this.setState({
                                showConfirm: true
                            });
                        }}
                    >
                        Fire Employee
                      </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showConfirm}
                    onAccept={() => {
                        this.props.employeeDelete(employee.uid);
                        this.setState({
                            showConfirm: false
                        });
                    }
                    }

                    onDecline={() => {
                        this.setState({
                            showConfirm: false
                        });
                    }
                    }
                >
                    Are you sure you want to delete this?
               </Confirm>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, actions)(EmployeeEdit);