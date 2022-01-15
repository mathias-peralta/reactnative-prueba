import React, {useState} from 'react';
import PeliculasContext from './peliculaContext';

const PeliculaState = (props) => {
    const [data, setData] = useState([]);

    const getPelicula = (title: string, year: string) => {

    }
    return(
        <PeliculasContext.Provider value={data}>
            {props.children}
        </PeliculasContext.Provider>
    );
}

export default PeliculaState;