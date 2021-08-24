import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';

describe("Debe de mostrar el componente correctamente", ()=> {

    const title = "Un titulo"
    const url = "https://titulo.png"
    
    test("Mostrar el componente", ()=> {

        const wrapper = shallow(<GifExpertApp></GifExpertApp>)
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe mostrar una lista de categorias', () => {

        const categorys = ['Rick and Morty'];
        const wrapper = shallow(<GifExpertApp defaultCategorys={ categorys }></GifExpertApp>)

        // Hacemos un snapShot y lo evaluamos
        expect( wrapper ).toMatchSnapshot();
        
        // Nuestro GifExpertApp debe contener dentro la llamada de un componete llamado 'GifGrid'
        // y aquí evaluamos cuantos elementos tiene dentro (1 elemento:category), 
        // que deben ser los mismos que nuestra categoría
        // que es la que le enviamos a dicho conponente
        expect( wrapper.find('GifGrid').length ).toBe( categorys.length )
        
    });
}); 