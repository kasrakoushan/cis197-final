import {
  DISCOVERBIRDS_FUL,
} from '../actions/tweetActions';

// TODO: create a reducer function called discoverReducerw ith initialState
// { discovers: [] }
// if the action passed in is DISCOVERBIRDS_FUL then set discovers equal
// to the data  of that action (refer  to the action caller for details on
// what  that means. else just return the state
//

const discoverReducer = (state = {
  discovers: []
}, action) => {
  if (action.type === DISCOVERBIRDS_FUL) {
    return { discovers: action.data };
  } else {
    return state;
  }
};

export default discoverReducer;
