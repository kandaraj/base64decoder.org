 
import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {

	render(){
		return(
			<textarea rows="5" cols="40" onChange={this.props.inputChanged}/>
		);
	}

}

export default Input;