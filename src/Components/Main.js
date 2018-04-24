import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

const logo = require('../img/logo.png');
const btnPlay = require('../img/botao_jogar.png');
const btnAbout = require('../img/sobre_jogo.png');
const btnOtherGames = require('../img/outros_jogos.png');


export default class Main extends Component {

    render() {
        return (
            <View style={styles.mainScene}>
                <View style={styles.gamePresentation}>
                     <Image source={logo} />

                     <TouchableHighlight
                         onPress={() => {
                             Actions.game();
                         }}
                     >
                        <Image source={btnPlay} />
                     </TouchableHighlight>

                </View>
                <View style={styles.footer}>

                    <TouchableHighlight
                        onPress={() => {
                            Actions.about();
                        }}
                    >
                        <Image source={btnAbout} />
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => {
                            Actions.otherGames();
                        }}
                    >
                        <Image source={btnOtherGames} />
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainScene: {
        flex: 1,
        backgroundColor: '#61BD8C'
    },
    gamePresentation: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
