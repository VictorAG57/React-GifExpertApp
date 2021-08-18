import React from 'react'
import "../index.css"

/**
 * Esté componente es el encargado de la estructura de cada
 * carta de gif que aparece.
 */

export const GifGridItem = ({ id, title, url}) => {
    
    // console.log(img)

    return (
        <div className="card animate__animated animate__bounce animate__delay-2s">
            <img src={url} alt={title}></img>
            <p>{ title }</p>
        </div>
    )
}
