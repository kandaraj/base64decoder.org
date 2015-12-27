 
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
		    <div className="container">
		      <div className="page-header">
		        <h1>Base64 Decoder</h1>
		      </div>
		      <p className="lead">Enter or paste the text you want to decode.</p>
		      <p>
		      	<Input inputChanged={this.inputChanged}/>	
		      </p>
		      <AltContainer store={DecodeStore}>
						<Result />
					</AltContainer>
		    </div>

		    <footer className="footer">
		      <div className="container">
		        <p className="text-muted">&copy; base64decoder.org</p>
		      </div>
		    </footer>
		  </div>   
			 
		);
	}

}

export default App;
