import React from 'react';
import Pokemon from "./Pokemon";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })


//todo: test hooks
describe(`<Pokemon/>`, () => {

    it(`renders properly`, () => {
        const wrapper = shallow(<Pokemon />);
        expect(wrapper).toMatchSnapshot();
    })
});