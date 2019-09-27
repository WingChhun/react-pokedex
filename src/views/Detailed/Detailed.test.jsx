import React from 'react';
import Detailed from "./Detailed";
import {PokemonContext, PokemonProvider} from '../../common/context'; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })


describe(`<Detailed/>`, () => {
const props = {

};

  it(`renders properly`, () => {
    const wrapper = shallow(
    <PokemonContext.Provider>
    <Detailed />
    </PokemonContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  })
});