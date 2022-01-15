import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native'


const Buscador = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const styles = StyleSheet.create({
        customBorder: {
            borderRadius: 5,
            borderColor: '#CACFD2',
            borderWidth:1,
            margin:15,
            padding:10,
            shadowOpacity: 20,
            shadowColor: '#CACFD2'
        },
        customInput: {
            borderRadius: 5,
            borderColor: '#CACFD2',
            borderWidth: 1,
            padding:10,
            marginBottom: 15
        },
        customHeader: {
            fontSize: 20,
            marginBottom: 20,
            borderBottomColor: 'black',
            borderBottomWidth: 1
        }
    });
    const handleButton = () => {
        console.log(title, year);
    }
    return(
        <View style={[styles.customBorder]}>
            <Text style={[styles.customHeader]}>
                Encuentra una Pelicula
            </Text>
            <View>
                <TextInput 
                    placeholder='Ingrese el Titulo de la Pelicula'
                    style={[styles.customInput]}
                    onChange={(e) => setTitle(e.nativeEvent.text)}
                />
            </View>
            <View>
                <TextInput 
                    placeholder='Ingrese el Año'
                    style={[styles.customInput]}
                    onChange={(e) => setYear(e.nativeEvent.text)}
                />
            </View>
            <Button
                title="buscar"
                onPress={() => handleButton()}
            />
        </View>
    );
    

};

export default Buscador;