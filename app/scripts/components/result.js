 
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';


class Result extends React.Component {

	render(){

		let resultTitle;
		if(this.props.result != null) {
			resultTitle = <h2>Decoded result:</h2>;
		}


		return(
			<div className="row">
				<div className="col-xs-12 col-md-6 col-lg-3">
					{resultTitle}
					<div className="wordwrap">
						{this.props.result}
					</div>
				</div>
			</div>
		);
	}

}

export default Result;
