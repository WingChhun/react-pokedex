import React from 'react';
import Main from "./Main";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })


describe(`<Main/>`, () => {

  it(`renders properly`, () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  })
});