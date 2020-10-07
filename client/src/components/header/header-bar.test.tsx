/**
 * @author : Shiv Kumar Ganesh<shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { shallow } from 'enzyme';
import {HeaderBar} from './header-bar';
import { Typography } from '@material-ui/core';

const title = 'microCovid';
let wrapped = shallow(<HeaderBar title={title} />);
describe('Header Component', () => {
  it('Check if the component loaded', () => {   
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the Titles children', () => { 
    expect(wrapped.find(Typography).text()).toEqual(title);
  });
});