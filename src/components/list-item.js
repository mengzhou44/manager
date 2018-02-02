import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const ListItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => Actions.employeeEdit({ employee: props.employee })}>
            <View>
                <CardSection >
                    <Text style={styles.nameStyle}> {props.employee.name} </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = {
    nameStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem; 