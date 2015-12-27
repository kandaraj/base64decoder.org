 
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';


class Result extends React.Component {

	render(){
		return(
			<div>
				<h4>Results</h4>
				{this.props.result}
			</div>
		);
	}

}

export default Result;
