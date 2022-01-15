import React from 'react';
import { View, Text, ScrollView } from 'react-native';
//Componentes
import Buscador from '../components/Buscador';
import PeliculaResult from '../components/PeliculaResult';
const HomeSreen = () => {
    return(
        <View>
            <ScrollView>
                <Buscador />
                <PeliculaResult />
            </ScrollView>

        </View>
    )
}


export default HomeSreen;