import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import PeliculaContext from '../context/peliculaContext';
import { useNavigation } from "@react-navigation/native";


const PeliculaResult = () => {
    //hooks
    const context = useContext(PeliculaContext);
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            margin: 15,
            padding: 3,
            marginBottom: 0,
            height: "100%",
        },
        card:{
            borderColor: '#CACFD2',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10
        },
        customImg: {
            width: '100%',
            height: 400
        },
        customTitle: {
            fontSize: 24,
            marginTop: 10
        },
        cardBody: {
            padding:10
        },
        customButton:{
            marginTop: 10
        },
        fontBold: {
            fontWeight: 'bold'
        },
        text: {
            marginBottom: 5
        }
    })
    return(
        
        <View>
            {
                context.data 
                    ? 
                        (
                            <View style={[styles.container]}>
                                <View style={[styles.card]}>
                                    <Image source={{uri: context.data.Poster}}  style={[styles.customImg]}/>
                                    <View style={[styles.cardBody]}>
                                        <Text style={[styles.customTitle]}>
                                            {context.data.Title}
                                        </Text>
                                        <Text style={[styles.text]}>
                                            <Text style={[styles.fontBold]}>IMDb:</Text> {context.data.imdbRating}/10
                                        </Text>
                                        <Text style={[styles.text]}>
                                            <Text style={[styles.fontBold]}>Descripci??n:</Text> {context.data.Plot}
                                        </Text>
                                        <Button 
                                            title="saber m??s" 
                                            onPress={() => navigation.navigate('DetallesScreen')} 
                                            style={[styles.customButton]}
                                        />
                                    </View>
                                </View>
                            </View>
                        )   
                    :
                        (
                            <View style={[styles.container]}>
                                <Text style={[styles.customTitle]}>
                                    Realice una Busqueda
                                </Text>
                            </View>
                        )
            }
        </View>


    )
}

export default PeliculaResult;