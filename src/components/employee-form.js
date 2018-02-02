import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import * as actions from '../actions';

import { Card, CardSection, Button, Input } from './common';

class EmployeeForm extends Component {

    componentDidMount() {
        const { employee } = this.props;

        if (employee) {
            this.props.employeeUpdate({ prop: 'name', value: employee.name });
            this.props.employeeUpdate({ prop: 'phone', value: employee.phone });
            this.props.employeeUpdate({ prop: 'shift', value: employee.shift });
        } else {
            this.props.employeeFormReset();
        }
    }

    render() {
        const { name, phone, shift } = this.props;

        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane'
                        value={name}
                        onChangeText={(text) =>
                            this.props.employeeUpdate({ prop: 'name', value: text })
                        }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='(555)555-5555'
                        value={phone}
                        onChangeText={(text) =>
                            this.props.employeeUpdate({ prop: 'phone', value: text })
                        }
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={value =>
                            this.props.employeeUpdate({ prop: 'shift', value })
                        }>
                        <Picker.Item label='Monday' value='monday' />
                        <Picker.Item label='Tuesday' value='tuesday' />
                        <Picker.Item label='Wednesday' value='wednesday' />
                        <Picker.Item label='Thursday' value='thursday' />
                        <Picker.Item label='Friday' value='friday' />
                        <Picker.Item label='Saturday' value='saturday' />
                        <Picker.Item label='Sunday' value='sunday' />
                    </Picker>

                </CardSection>

            </View>
        );
    }
}

const styles = {

    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 18
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

export default connect(mapStateToProps, actions)(EmployeeForm);