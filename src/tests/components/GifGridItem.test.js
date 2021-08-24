import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem"

describe("Debe de mostrar el componente correctamente", ()=> {

    const title = "Un titulo";
    const url = "https://titulo.png";
    const wrapper = shallow(<GifGridItem title={ title } url={ url }></GifGridItem>)

    test("Mostrar el componente correctamente con props (PropsTypes) oblgatorios.", ()=> {

       
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe tener un parrafo con el titulo ', () => {

        const p = wrapper.find("p")
        expect(p.text().trim()).toBe( title )
        
    })

    test('Debe tener un url y un alt con el titulo ', () => {

        const img = wrapper.find("img")
        expect(img.props().src).toBe( url )
        expect(img.props().alt).toBe( title )
        
    });

    test('Debe tener la clase animate_fadeIn', () => {

        const div = wrapper.find("div");
        const className = div.props().className.includes("animate_fadeIn")

        expect(className).toBe(true)
        
    });
});