import React, { useState } from 'react';
import PropsTypes from "prop-types";

/** Función del componente AddCategory
 * 
 * Esté me permite agregar una categoria a mi página, el usuario ingresa
 * en una caja de texto la categoría que desea agragar, y al precionar enter (submit)
 * actualiza el estado y lo agrega a una lista con las demás categorias.
 * 
 * Esté componente complementa al componente pruncipal GifExpertApp.
 */

export const AddCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState("")

    //Obtenemos el valor de nuestra caja de texto para actualizar el estado.
    //Lo escrito por el usuario
    const handleInputChange = (e)=> {
        setInputValue(e.target.value)
        console.log("handleInputChange llamado")
    };

    //Cambiamos el estado con "handleSubmit", agregamos un elemento más al etsado
    const handleSubmit = (e)=> {
        //Evitamos que el usuario al dar enter refresque la página
        //ya que es un formulario
        e.preventDefault()

        //Meidante el if, evitamos que se pueda agregar a la lista un elemento
        //sin coontenido
        if(inputValue.trim().length > 2){
            //Primero colocamos inputValue, para cuando se renderize, lo
            //primero que aparezac sea la ultima busqueda y no aparezca hasta el final
            setCategory( cats => [ inputValue, ...cats])
            setInputValue("")
            console.log("setCategory llamado")
        }
    };

    return (
        //Usamos el onSubmit pra implementar la función "handleSubmit"
        <form onSubmit={ handleSubmit }>
            <input type="text" 
                value={ inputValue } 
                onChange={ handleInputChange }>
            </input>
        </form>
    );
}

//Obligamos a que "setCategory" sea obligatoria
AddCategory.propTypes = {
    setCategory: PropsTypes.func.isRequired
};

