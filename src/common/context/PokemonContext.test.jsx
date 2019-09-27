import React from 'react';
import {PokemonProvider, PokemonContext} from "./PokemonContext";
import { configure,shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(`<PokemonContext/>`, () => {
const props = {
    children: jest.fn()
};

  it(`renders properly`, () => {
    const wrapper = mount(<PokemonContext.Consumer {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });


  it(`tests useEffect`,()=>{
    const wrapper = mount(<PokemonContext.Consumer {...props}/>)
    console.log(wrapper.debug());
console.log("PokemonContext", PokemonContext.Consumer);


  });
});