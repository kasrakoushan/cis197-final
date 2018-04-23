import React, { Component } from 'react';
import { connect } from 'react-redux';


class Flashes extends Component {
  constructor() {
    super();
  }

  render() {
    // TODO: ultimate html structure will look like
    // <div>
    //  <div class="alert alert-danger">${message.toString()}. Click to dismiss.</div>
    //  <div class="alert alert-info">${message.toString()}. Click to dismiss.</div>
    //  ...
    // </div>
    let messageList = this.props.messages.map((m, i) => {
      return (
        <div className={'alert alert-' +
          (m.messageType === 'error' ? 'danger' : 'info')}
          onClick={() => this.props.dismiss(i)} key={i}>
          {m.message.toString()}. Click to dismiss
        </div>
      );
    });
    return (
      <div>
        {messageList}
      </div>
    );
  }
}

// TODO:  needs  to somehow listen to the state of messageReducer via its props.
// you could almost say you're mapping the state to props...
const mapStateToProps = (state) => {
  return state.messageReducer;
}

// TODO: map a prop `dispatch` that will dispatch an  action
// { type: 'DISMISS',  idx: someIndex }
// ultimate call to it should look like this.props.dismiss(idx)
const mapDispatchToProps = (dispatch) => {
  return {
    dismiss: (idx) => dispatch({
      type: 'DISMISS',
      index: idx
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashes);
