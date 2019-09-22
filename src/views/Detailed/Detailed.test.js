import React from 'react';
import Detailed from "./Detailed";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })


describe(`<Detailed/>`, () => {

  it(`renders properly`, () => {
    const wrapper = shallow(<Detailed />);
    expect(wrapper).toMatchSnapshot();
  })
});