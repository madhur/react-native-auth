import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {
    

    render() {

        const { label, value, onChangeText } = this.props;

        return (
            <View>
                <Text>{label}</Text>
                <TextInput value={value} onChangeText={onChangeText} style={{ height: 20, width: 100 }}></TextInput>
            </View>
        );
    }
};

export { Input };
