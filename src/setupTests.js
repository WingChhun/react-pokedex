import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });

const localStorageMock = {
  setItem: jest.fn(),
  getItem: jest.fn()
};

global.fetch = require('jest-fetch-mock');
global.localStorage = localStorageMock;
