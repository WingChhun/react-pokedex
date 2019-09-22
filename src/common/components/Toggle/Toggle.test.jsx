import React from 'react';
import Toggle from './Toggle';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//todo: test hooks
describe(`<Toggle/>`, () => {
  it(`renders properly`, () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper).toMatchSnapshot();
  });
});
