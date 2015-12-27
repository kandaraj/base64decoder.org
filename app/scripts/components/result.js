 
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';


class Result extends React.Component {

	render(){

		let resultTitle;
		if(this.props.result != null) {
			resultTitle = <h4>Decoded result:</h4>;
		}

		return(
			<div>
				{resultTitle}
				{this.props.result}
			</div>
		);
	}

}

export default Result;
