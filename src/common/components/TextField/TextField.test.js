import React from 'react';
import TextField from "./TextField";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })


//todo: test hooks
describe(`<TextField/>`, () => {

  it(`renders properly`, () => {
    const wrapper = shallow(<TextField />);
    expect(wrapper.toMatchSnapshot());
  })
});