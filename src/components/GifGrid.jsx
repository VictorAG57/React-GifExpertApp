import React, { Fragment} from 'react';
import PropTypes from "prop-types";

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from "./GifGridItem";

//Se encarga de la estructura de cada Item de gif, para acomodarla
//en una estructutura, los organiza todos, para enviar la infotmación
//a GifExpertApp y la renderize.

//Resive omo argumento la categoría enviada por el usuario para que useFetchGifs
//se encargue de estructurar la información, que as u vez se conecta con nuestro helper
//para realizar la petición.

export const GifGrid = ({ category }) => {

    //useFetchGifs me traera la información de mis gifs
    const { data:images, loading } = useFetchGifs( category )

    return (
        <Fragment>
            <h3 className="animate__animated animate__bounce animate__delay-2s">{ category }</h3>

            { loading && <p className="animate__fadeInRight" >Loading</p> }

            <div className="card-grid">
                { //También puedes extraer las propiedades en img --> {id, title}
                //Manda como parametros la url:img, y el titulo:id a nuestro <GifGridItem>
                images.map( img => ( 
                    <GifGridItem
                        key={img.id} 
                        {...img}>
                    </GifGridItem> 
                    ))
                }
            </div> 
           
        </Fragment>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

// const [images, setImages] = useState([])

    //Usaos useEffect como acciones secundarias, y aqui la usamos con el fin
    //de que una vez cargue la página realiza la petición http para traer el contenido.
    
    // useEffect( ()=> {
    //     GetGifs( category )
    //         .then(imgs => setImages( imgs ))
    // }, [ category ]) 

    //Colocamos [category] como argumento, por si es 
    //necesario que useEffect se vuelva a renderizar, aunque no vaya a pazar pero
    //así eliminamos un warning que nos aparecera en cosola.

 
    /*
        <ol>
            { //También puedes extraer las propiedades en img --> {id, title}
                images.map( img => (<li key={ img.id }> { img.title } </li>) )
            }
        </ol>
    */