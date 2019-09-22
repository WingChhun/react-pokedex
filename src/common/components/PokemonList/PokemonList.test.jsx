import React from 'react';
import PokemonList from "./PokemonList";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })


//todo: test hooks
describe(`<PokemonList/>`, () => {

    it(`renders properly`, () => {
        const wrapper = shallow(<PokemonList />);
        expect(wrapper).toMatchSnapshot();
    })
});