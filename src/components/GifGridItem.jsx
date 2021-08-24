import React from 'react';
import "../index.css";
import PropsTypes from "prop-types";
import { prototype } from 'webpack-sources/lib/CachedSource';


/**
 * Esté componente es el encargado de la estructura de cada
 * carta de gif que aparece.
 */

export const GifGridItem = ({ id, title, url}) => {
    
    // console.log(img)

    return (
        <div className="card animate__animated animate__bounce animate__delay-2s animate_fadeIn">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropsTypes.string.isRequired,
    url: PropsTypes.string.isRequired
}