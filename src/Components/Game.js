import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';


const cara = require('../img/moeda_cara.png');
const coroa = require('../img/moeda_coroa.png');

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }

    componentWillMount() {
        const randomNumber = Math.floor(Math.random() * 2);
        const caraOrCoroa = randomNumber === 0 ? 'cara' : 'coroa';

        this.setState({ result: caraOrCoroa });
    }

    render() {
        const {
            result
        } = this.state;
        const showResult = result === 'cara' ? <Image source={cara} /> : <Image source={coroa} />;

        return (
            <View style={styles.viewStyle}>
                {showResult}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
         flex: 1,
         backgroundColor: '#61BD8C',
         paddingTop: 20,
         justifyContent: 'center',
         alignItems: 'center'
    }
});
