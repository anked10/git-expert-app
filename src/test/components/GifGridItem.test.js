
import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"


describe('Pruebas en <GifGridItem>', () => {


    test('Debe demostrar el componente corretamente', () => { 
        const wrapper = shallow(<GifGridItem/>)

        expect(wrapper).toMatchSnapshot();

    })
})

