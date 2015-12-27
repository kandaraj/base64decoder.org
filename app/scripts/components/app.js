 
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Result from './result';
import DecodeActions from '../actions/decode-actions'
import DecodeStore from '../stores/decode-store';
import AltContainer from 'alt-container';

class App extends React.Component {

	inputChanged(evt){
		DecodeActions.decode(evt.target.value);
	}

	render(){
		return(
			<div>
				<h3>Decoding a string</h3>
				<Input inputChanged={this.inputChanged}/>
				<AltContainer store={DecodeStore}>
					<Result />
				</AltContainer>
			</div>
		);
	}

}

export default App;
