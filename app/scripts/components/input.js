 
import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {

	render(){
		return(
			<input onChange={this.props.inputChanged}/>
		);
	}

}

export default Input;