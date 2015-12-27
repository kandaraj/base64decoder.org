 
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Result from './result';


class App extends React.Component {

	inputChanged(evt){
		console.log(evt.target.value);
	}

	render(){
		return(
			<div>
				<h3>Decoding a string</h3>
				<Input inputChanged={this.inputChanged}/>
				<Result />
			</div>
		);
	}

}

export default App;
