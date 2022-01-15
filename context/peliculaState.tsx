import React, {useState} from 'react';
import PeliculasContext from './peliculaContext';
import axios from 'axios';
import {API_KEY} from '@env';


const PeliculaState = (props) => {
    const [data, setData] = useState(null);
    const [IdPelicula, setIdPelicula] = useState('');

    const getPelicula =  async (title: string, year: string) => {
        
        try{
            const data = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&y=${year}&t=${title}`);
            setData(data.data);
            setIdPelicula(data.data.imdbID);
        }catch(err) {
            console.log(err);
        }

    }
    //metodo para obtener mas detalles de una pelicula
    const getPeliculaDetalles = async () => {
        try{
            const data = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${IdPelicula}`);
            return data.data;
        }catch(err){
            console.log(err);
        }

    }
    return(
        <PeliculasContext.Provider value={{data, getPelicula, getPeliculaDetalles}}>
            {props.children}
        </PeliculasContext.Provider>
    );
}

export default PeliculaState;