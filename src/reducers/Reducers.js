
import { combineReducers } from 'redux';
import {
  SAMPLE_ACTION,
} from '../actions/Actions';


function sample(state = {}, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, {
        element: action.element,
      });
    default:
      return state;
  }
}


export default combineReducers({
  sample,
});
