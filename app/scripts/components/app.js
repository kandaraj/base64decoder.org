import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Result from './result';


class App extends React.Component {

  constructor(props,context){
    super(props,context);
  }

	inputChanged(evt){
	 this.props.decoder(evt.target.value);
	}

	render(){

		return(
			<div>
		    <div className="container">
		      <div className="page-header">
		        <h1>Base64 Decoder</h1>
		      </div>
		      <p className="lead">Enter or paste the encoded text you want to decode.</p>
		      <p>
		      	<Input inputChanged={this.inputChanged.bind(this)}/>
		      </p>

						<Result result={this.props.result} />

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
