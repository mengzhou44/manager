import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import * as actions from '../actions';

import { Card, CardSection, Button, Input } from './common';

class EmployeeCreate extends Component {

    render() {
        const { name, phone, shift } = this.props;

        return (
            <Card>
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

export default connect(mapStateToProps, actions)(EmployeeCreate);