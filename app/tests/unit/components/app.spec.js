'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../../../scripts/components/app';

describe('App', () => {
	it('renders the page', function(){
		let element = TestUtils.renderIntoDocument(<App />);
		expect(element).toBeTruthy();
	});
})