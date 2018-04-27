import {
  LOADTWEETS_FUL,
  CREATETWEET_FUL,
  FAVORITE_FUL,
} from '../actions/tweetActions';

// TODO: createa  reducer called tweetReducer that has an initalState {}
// if the LOADTWEETS_FUL action occurs, make sure that your eventual
// state would look like
// {
//  whateverTheTweetId: { fullTweetObj },
//  whateverTheTweetId2: { fullTweetobj2 }
//  ...
// }
// basically i should be able to do state[someTweetId] and get the
// full tweet object containing that tweet
// on the CREATETWEET_FULa nd FAVORITE_FUL actions, just  set the
// tweet in the state equal to the data you get from the action
const tweetReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOADTWEETS_FUL: {
      return action.tweets.reduce((accum, cur) => {
        let newObj = {};
        newObj[cur._id] = cur;
        return Object.assign(accum, newObj);
      }, {});
    }
    case CREATETWEET_FUL: {
      newState[action.data._id] = action.data;
      return Object.assign(newState, state);
    }
    case FAVORITE_FUL: {
      newState[action.data._id] = action.data;
      return Object.assign(newState, state);
    }
    default:
      return state;
  }
};

export default tweetReducer;