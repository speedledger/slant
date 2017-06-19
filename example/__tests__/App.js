import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('App', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
