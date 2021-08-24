import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import "@testing-library/jest-dom"

describe('Debe de renderizar correctamente el componente', () => {

    // Funciona igual que la línea de abajo const setCategory = ()=> {}
    // Solamente que jest.fn, funcionara como si fuera una función,
    //pero nos dejara ver mas caracteristicas.
    const setCategory = jest.fn()
    let wrapper = shallow(<AddCategory setCategory={setCategory}></AddCategory>)

    //Usamos el beforeEach para dar un ciclo de vida, y cuando tengas que realizar
    //alguna tarea en repetidas ocasiones el valor no se altere.
    //Por ejemplo aquí se ejecuta la funcion set Category al tener un argumento por priemra vez
    //pero al colocar el wrapper dentro, limpiamos el formulario y así no se ejecuta la función
    // de manera predeterminada.
    beforeEach(()=> {
        //Se usa cuando tenemos algún mock o usa simulación, s elimpie
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategory={setCategory}></AddCategory>)
    })
    
    test('Debe de mostrarse correctamente el componente ', () => {

        expect(wrapper).toMatchSnapshot()
        
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find("input")
        const value = "Hola mundo"

        //Simulamos un cambio en el input, y colocamos el { target: {value}}
        //porque si no nos marcaria error, ya que ay un parametro en la función (e)
        //y colocamos target porque nos ineresa referenciar al evento (change) y al valor
        input.simulate("change", { target: { value }})  
    });

    test('No debe postear la información con submit', () => {

        //Aqui simulamos que en nuestro componente, al dar submit, no 
        //se ejecute, el argumento que resive nuestro simulate aparte de submit
        // es prevent default, que es la función que por defecto evita que el submit se 
        //ejecute, y esa misma función es la que progarmamos en nuestra logica de AddCategory 

        wrapper.find("form").simulate("submit", { preventDefault(){} })
        
        //.not --> no, no suceda, no ocurra
        //.toHaveBeenCalled --> que se alla llamado
        //.not.toHaveBeenCalled --> que no se alla llamado
        //.toHaveBeenCalledWith --> que se alla llamado con argumentos/función
        //.toHaveBeenCalledTimes(vecesLlamadas) --> que se alla llamado cierta cantidad de veces


        //Evaluamos que al dar submit, setCategory no se allá llamado, por ello 
        // usamos .not.toHaveBeenCalled.
        expect( setCategory ).not.toHaveBeenCalled()
    });
    
    test('Debe de llamar el setCategory y limpiar la caja de texto ', () => {
        
        const input = wrapper.find("input")
        const value = "Hola mundo"

        // 1. Simular inputChange, simulamos un cambio en la caja de texto
        input.simulate("change", { target: { value }})

        // 2. Simular el submit, simulamos al dar submit, se ejecute preventDefault()
        wrapper.find("form").simulate("submit", { preventDefault(){} })

        // 3. Simular setCategory, simulamos que se allá llamado
        expect( setCategory ).toHaveBeenCalled()

        // 4. Simulamos que el valor de input se alla reseteado a ""
        expect( input.prop("value") ).toBe("")
    }); 
    
});
