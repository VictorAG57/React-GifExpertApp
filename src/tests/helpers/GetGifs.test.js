import { GetGifs } from "../../helpers/GetGifs";

describe(("La función getGifs debe funcionar correctamente"), ()=> {

    test('Debe de traer 10 elementos', async() => {

        const gifs = await GetGifs("Rick and Morty");

        expect(gifs.length).toBe( 10 )
        
    });

    test('Debe de mostar 0 elementos obtenidos al no enviar ninguna categoría', async() => {

        const gifs = await GetGifs("");

        expect(gifs.length).toBe( 0 )
        
    });
});