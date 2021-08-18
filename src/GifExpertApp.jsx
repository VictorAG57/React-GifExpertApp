
import React, {Fragment} from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorys, setCategory] = useState(["Rick & Morty"]);

    // const addCategory = () => {
    //     setCategoria(
    //         [...categorys, "Family guy"]
    //     )
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>

            {/* 
                Mediante los props podemos enviar también funciones
                en este caso enviamos nuestra función para poder cambiar el estado
                "setCategory".
            */}
            <AddCategory setCategory={ setCategory } ></AddCategory>
            
            <hr></hr>

            <ol>
                {
                    categorys.map( category =>( 
                        //return <li key={ category }> { category } </li>
                        <GifGrid key={ category } category={ category } ></GifGrid>
                    ))
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;
