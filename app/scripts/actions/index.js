import * as types from '../constants/ActionTypes'

export function decode(text) {
  console.log(text)
  console.log('actions')
  return { type: types.DECODE_TEXT, text }
}
