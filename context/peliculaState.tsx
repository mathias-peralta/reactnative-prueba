import React, {useState} from 'react';
import PeliculasContext from './peliculaContext';
import axios from 'axios';
import {API_KEY} from '../global'

const PeliculaState = (props) => {
    const [data, setData] = useState(null);

    const getPelicula =  async (title: string, year: string) => {
        try{
            const data = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&y=${year}&t=${title}`);
            setData(data.data);
        }catch(err) {
            console.log(err);
        }

    }
    return(
        <PeliculasContext.Provider value={{data, getPelicula}}>
            {props.children}
        </PeliculasContext.Provider>
    );
}

export default PeliculaState;