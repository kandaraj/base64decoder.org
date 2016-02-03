import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DecoderActions from '../actions/index'
import ChildApp from '../components/app';

class App extends React.Component {

  componentDidMount(){
    //console.log(this.props);
  }

	render(){
    const { decoder, actions } = this.props;
		return(
			<div>
		    <ChildApp decoder={actions.decode} result={decoder.result}/>
		  </div>
		);
	}

}

App.propTypes = {
  decoder: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    decoder: state.decoder
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DecoderActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
