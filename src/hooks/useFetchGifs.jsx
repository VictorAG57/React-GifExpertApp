import { useState, useEffect } from "react";
import { GetGifs } from "../helpers/GetGifs";

/** CUSTOM HOOK
 * 
 * Esté es un custom hook que nos permite usar la data traida de mi
 * helper GetGifs, para realiar una acción secundaria mediante useEffect.
 * Aquí actualizamos el estado para solamente enviar la información
 * a mi componente de grilla de cursos, y ahi lo renderizen.
 * 
 */

export const useFetchGifs = ( category )=> {
    //Usaos useEffect como acciones secundarias, y aqui la usamos con el fin
    //de que una vez cargue la página realiza la petición http para traer el contenido.

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {

        setTimeout( ()=> {
            GetGifs( category )
                .then(img => {
                    setstate({
                        data: img,
                        loading: false
                    })
                })
        }, 2000)
    }, [ category ])

    return state;

}