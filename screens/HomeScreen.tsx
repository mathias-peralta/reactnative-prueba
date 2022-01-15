import React from 'react';
import { View, Text } from 'react-native';
//Componentes
import Buscador from '../components/Buscador';
import PeliculaResult from '../components/PeliculaResult';
const HomeSreen = () => {
    return(
        <View>
            <Buscador />
            <PeliculaResult />
        </View>
    )
}


export default HomeSreen;