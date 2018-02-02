import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './employee-form';

class EmployeeCreate extends Component {

    render() {
        const { name, phone, shift } = this.props;

        return (
            <Card>
                <EmployeeForm  {...this.props} />
                <CardSection>
                    <Button
                        onPress={() =>
                            this.props.employeeCreate({ name, phone, shift: shift || 'monday' })
                        }
                    >
                        Create
                      </Button>
                </CardSection>
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

export default connect(mapStateToProps, actions)(EmployeeCreate);