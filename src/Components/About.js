import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class About extends Component {

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>
                    Jogo de cara ou coroa criada para o seu celular
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
         flex: 1,
         backgroundColor: '#61BD8C',
         paddingTop: 20
    }
});
