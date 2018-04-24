import React from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux';

import Main from './Components/Main';
import About from './Components/About';
import OtherGames from './Components/OtherGames';
import Game from './Components/Game';

const Routes = () => (
    <Router sceneStyle={{ paddingTop: 60 }}>
        <Scene
            key='main'
            component={Main}
            initil
            title="Cara ou Coroa"
            />
        <Scene
            key='about'
            title="Sobre"
            component={About}
            />
        <Scene
            key='otherGames'
            title='Outros jogos'
            component={OtherGames}
            />
        <Scene
            key='game'
            title='Jogo'
            component={Game}
            />
    </Router>
);

export default Routes;
