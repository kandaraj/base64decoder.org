import alt from '../libs/alt';
import DecodeActions from '../actions/decode-actions';

class DecodeStore {
	constructor() {
		this.bindActions(DecodeActions);
		this.state = {result:null};
	}

	decode(value){
		let result = window.btoa(value);
		if(result.length > 0){
			this.setState( {result: window.btoa(value) } );
		}else{
			this.setState( {result: null } );
		}
	}
}

export default alt.createStore(DecodeStore, 'DecodeStore');


