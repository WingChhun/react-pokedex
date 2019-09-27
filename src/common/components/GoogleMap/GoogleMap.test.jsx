import React from 'react';
import GoogleMap from './GoogleMap';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//todo: test hooks
describe(`<GoogleMap/>`, () => {
  it(`renders properly`, () => {
    const wrapper = shallow(<GoogleMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
