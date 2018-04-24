import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class OtherGames extends Component {

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>
                    Aqui terão outros jogos
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
