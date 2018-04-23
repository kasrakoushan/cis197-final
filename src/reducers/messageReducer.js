// TODO: createa reducer function messageReducer that has  an initialState
// { messages: [] }
// If any action has a property 'error' on it, then append to the messages
// array a new object
//    { messageType: 'error' if the  action has an error  property else 'info',
//      message: action.error if an error else action.message
//    }
// Also handle the case where the action type is DISMISS
// if that happens, then remove from the messages array the index supplied
// with the dismiss  action
// remember all these changes must be immutable (I use mutable language
// terms for simplicity

const DISMISS = 'DISMISS';

const messageReducer = (state = {messages: []}, action) => {
  if (action.type == DISMISS) {
    return {
      messages: state.messages.slice(0, action.index).
        concat(state.messages.slice(action.index + 1))
    };
  } else if (action.error) {
    return {
      messages: state.messages.concat({
        messageType: 'error',
        message: action.error
      })
    };
  } else if (action.message) {
    return {
      messages: state.messages.concat({
        messageType: 'info',
        message: action.message
      })
    };
  } else {
    return state;
  }
}

export default messageReducer;
