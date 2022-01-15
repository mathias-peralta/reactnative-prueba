import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import PeliculaContext from '../context/peliculaContext';

const PeliculaResult = () => {
    const context = useContext(PeliculaContext);
    console.log('ok',context.data);
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
                                        {  
                                            (
                                                context.data.Ratings.map((rating) => (
                                                    <Text key={rating.Value}>
                                                        {rating.Source} - {rating.Value}
                                                    </Text>
                                                ))
                                            )

                                        }

                                        <Text>
                                            Descripción: {context.data.Plot}
                                        </Text>
                                        <Button 
                                            title="saber más" 
                                            onPress={() => {}} 
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