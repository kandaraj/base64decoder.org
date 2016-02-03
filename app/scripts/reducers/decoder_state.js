import { DECODE_TEXT } from '../constants/ActionTypes';

const initialState = {
  text: 'initial',
  result: 'no result'
}

export default function decoder(state = initialState, action) {

  switch (action.type) {
    case DECODE_TEXT:
      let new_state = { text: action.text, result: window.atob(action.text)}
      return new_state;
    default:
      return state;

  }

}
