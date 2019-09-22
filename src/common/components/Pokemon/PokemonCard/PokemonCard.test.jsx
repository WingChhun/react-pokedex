import React from 'react';
import PokemonCard from './PokemonCard';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//todo: test hooks
describe(`<PokemonCard/>`, () => {
  it(`renders properly`, () => {
    const wrapper = shallow(<PokemonCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
