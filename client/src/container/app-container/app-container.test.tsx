/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { shallow } from 'enzyme';
import { AppContainer } from './app-container';

let wrapped = shallow(<AppContainer />);
describe('App Container Component', () => {
	/**
	 * @author Jocelyn Baduria <jocelyn.baduria@sjsu.com>
	 */
	it('Check if the component loaded', () => {
		expect(wrapped).toMatchSnapshot();
	});
});