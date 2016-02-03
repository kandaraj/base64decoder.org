import alt from '../libs/alt';
import DecodeActions from '../actions/decode-actions';

class DecodeStore {
	constructor() {
		this.bindActions(DecodeActions);
		this.state = {result:null};
	}

	decode(value){
		let result;
		try{
			result = window.atob(value);
		}catch(e){
			result = 'Error decoding the input.';
		}

		if(result.length > 0){
			this.setState( {result: result } );
		}else{
			this.setState( {result: null } );
		}
	}
}

export default alt.createStore(DecodeStore, 'DecodeStore');
