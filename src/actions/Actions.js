// import Api from '../api/actions.js';

export const SAMPLE_ACTION = 'SAMPLE_ACTION';


// import moment from 'moment';

// const api = new Api();


export function sampleAction(element) {
  return {
    type: SAMPLE_ACTION,
    element,
  };
}
