import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';

//Me permite simular la llamada de la función, y controlamos la 
//información que se respondería.
jest.mock("../../hooks/useFetchGifs")

describe('Debe de renderizar el componente <GifGrid></GifGrid>', () => {

    const category = "Rick and Morty"

    useFetchGifs.mockReturnValue({
        data: [], 
        loading: true
    })

    test('Debe de mostrar correctamente el componente y snapShot ', () => {

        //Al testear GifGrid, también es necesario evaluar que dentro de el, llama nuestro
        //useFetchGifs, por ello simulamos esa función jest.mock("../../hooks/useFetchGifs"),
        //y le damos un valor inicial para que pueda funcionar.

        /**  mockReturn() 
         * lo que hace es que cuando se llame este fetch dentro de mi componente,
         * lo que va a hacer es regresar este valor y dentro de estos paréntesis van a colocar unas llaves que
         * va a ser el objeto que va a tomar mi componente acá.
         * Es decir, va a ser el resultado de esto ahora.
        */

        useFetchGifs.mockReturnValue({
            // Valores por defecto de mi useFerchGifs, propios de nuestro customHook
            data: [],     // La data que obtiene nuestro useFetchGifs
            loading: true // El valor de carga
        })

        const wrapper = shallow(<GifGrid category={ category }></GifGrid>)

        expect( wrapper ).toMatchSnapshot() 
    });

    test('Debe de mostrar items cuando se carga useFetchGifs (<GifGrid></GifGrid>)', () => {

        // Simulamos el valor de respuesta de nuestra data obtenida de useFetchGifs
        const gifs = [{
            id: "ABC",
            url: "https://lago.jpg",
            title: "Hola mundo"
        }]
        
        // Aquí simulamos que nuestro customHook a traido la siguiente información
        useFetchGifs.mockReturnValue({
            data: gifs,   // La data que obtiene nuestro useFetchGifs
            loading: true // El valor de carga
        });
        
        const wrapper = shallow(<GifGrid category={ category }></GifGrid>)

        // Una evaliación sencilla 
        expect( wrapper ).toMatchSnapshot()

        // Evaluamos si existe código con la etiqueta 'p'
        // código que no deberia de existir.
        expect( wrapper.find('spam').exists()).toBe(false);

        // Nuestro GigGrid debe contener dentro la llamada de un componete llamado 'GifGridItem'
        // y aquí evaluamos cuantos elementos tiene dentro (1 arreglo), 
        // que deben ser los mismos que nuestra data:gifs
        // que es la que le enviamos a dicho conponente
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
        console.log(gifs.length)
    });
});
