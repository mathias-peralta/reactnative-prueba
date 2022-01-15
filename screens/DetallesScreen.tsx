import React, {useEffect, useContext, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PeliculaContext from '../context/peliculaContext';

const DetallesScreen = () => {
    const context = useContext(PeliculaContext);
    const [detalles, setDetalles] = useState('');
    const getPeliculaDetalles = async () => {
        const data = await context.getPeliculaDetalles();
        setDetalles(data);
    }
    useEffect(() => {
        getPeliculaDetalles();
    },[])

    const styles = StyleSheet.create({
        container: {
            margin: 15
        },
        customImg: {
            width: '100%',
            height: 400
        },
        contnent: {
            padding: 10,
            borderColor: '#CACFD2',
            borderWidth: 1,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5
        },
        contentList: {
            marginBottom: 5
        },
        fontBold: {
            fontWeight: 'bold'
        }
    })
    return(
        <View>
            {
                detalles
                    ?
                        (
                            <View style={[styles.container]}>
                                <View>
                                    <Image source={{uri: detalles.Poster}} style={[styles.customImg]}/>
                                </View>
                                <View style={[styles.contnent]}>
                                    <Text style={[styles.contentList]}>
                                        <Text style={[styles.fontBold]}>Titulo:</Text> {detalles.Title}
                                    </Text>
                                    <Text style={[styles.contentList]}>
                                        <Text style={[styles.fontBold]}>Director: </Text>{detalles.Director}
                                    </Text>
                                    <Text style={[styles.contentList]}>
                                        <Text style={[styles.fontBold]}>Genero: </Text> {detalles.Genre}
                                    </Text>
                                    <Text style={[styles.contentList]}>
                                        <Text style={[styles.fontBold]}>IMBD:</Text> {detalles.imdbRating}
                                    </Text>
                                    <Text style={[styles.contentList]}>
                                        <Text style={[styles.fontBold]}>Sipnosis: </Text>{detalles.Plot}
                                    </Text>
                                    <Text style={[styles.contentList]}>
                                        <Text style={[styles.fontBold]}>Detalles: </Text> {detalles.Actors}
                                    </Text>
                                </View>
                            </View>
                        )
                    :(<Text>Cargando...</Text>)
            }
        </View>
    )
}


export default DetallesScreen;
