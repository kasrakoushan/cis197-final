import { combineReducers } from 'redux';
// TODO: determine appropriate imports
import auth from './authReducer.js';
import messageReducer from './messageReducer.js';
import tweetReducer from './tweetReducer.js';
import tweetListReducer from './tweetListReducer.js';
import discoverReducer from './discoverReducer.js';
import courseDetailReducer from './courseDetailReducer.js';
// import profileReducer from './profileReducer.js';

// TODO: you should somehow * combine reducers * hint hint
// so that the reducer looks like
// {
//  authReducer: { isAuthenticated: ...  }
//  tweetList:  { ids: [...] } 
//  tweet: { id1: {...}, id2: {...} ... }
//  profileReducer: { profile: { name: '', species: '' ... }}
//  messageReducer: { messages: [ { messageType: ..., message: ...}, ...] }
//  discoverReducer: { discovers: [...] }
// }
// store this reducer in a variable 'tweetApp'

var tweetApp = combineReducers({
  authReducer: auth,
  messageReducer: messageReducer,
  tweetList: tweetListReducer,
  tweet: tweetReducer,
  discoverReducer: discoverReducer,
  courseDetailReducer: courseDetailReducer
});

export default tweetApp;