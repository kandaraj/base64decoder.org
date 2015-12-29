'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../../../scripts/components/app';

describe('App', () => {
	it('Given_DecodedText_When_Valid_ThenEncoded', function(){
		let element = TestUtils.renderIntoDocument(<App />);
		let textarea = TestUtils.findRenderedDOMComponentWithTag(element, "textarea");
		let result = TestUtils.findRenderedDOMComponentWithClass(element, "result");

		let decodedText = "siva kandaraj";
		let encodedText = window.btoa(decodedText);

		TestUtils.Simulate.change(textarea, { target: { value: encodedText } });
		expect(result.textContent).toBe(decodedText);
		expect(element).toBeTruthy();
	});
})