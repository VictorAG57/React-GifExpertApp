// import { useFetchGifs } from '../../hooks/useFetchGifs'
// import { renderHook } from '@testing-library/react-hooks';

// describe('Pruebas en el hook useFetchGifs', () => {

//     test('debe de retornar el estado inicial', async() => {

//          // Lo que hacemos con esta librería es usar el renderHook(), que nos permite testear
//         // los hooks, este resuve como argumento una función anonima junto con el hook
//         // que deseas testear mas su argumento.
//         // Usamos la desestructuración para poder usar sus multiples funciones de test
//         // result es la que nos envía el resultado.
//         const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );

//         // .current nos devuelve el resultado de la llamada a nuestro hook
//         const { data, loading } = result.current;
//         await waitForNextUpdate();

//         // Evaluamos que data no contenga contenido (estado inicial del hook)
//         expect( data ).toEqual([]);

//         // Loading se igual a true (estado inicial del hook)
//         expect( loading ).toBe(true);

//     })

//     test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
//         const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
//         await waitForNextUpdate();

//         const { data, loading } = result.current;

//         expect( data.length ).toBe( 10 );
//         expect( loading ).toBe( false );
//     });
// });

