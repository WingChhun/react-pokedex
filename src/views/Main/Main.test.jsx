import React from 'react';
import Main from "./Main";
import { shallow } from 'enzyme';


describe(`<Main/>`, () => {

  it(`renders properly`, () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});