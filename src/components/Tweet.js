import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteTweet } from '../actions/tweetActions';
import { Link } from 'react-router-dom';

class Tweet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { _id, courseCode, description, professor } = this.props;
    let cardStyles = {
      marginBottom: '40px',
      padding: '10px',
    };
    let favoriteStyles = {
      color: '#FFF',
    };
    // let authorUrl = `/profile/${authorId}`;
    let courseUrl = `/course/${_id}/info`;
    return (
      <div className="card" style={cardStyles}>
        <h5 className="card-title">
          <Link to={courseUrl}> { courseCode } </Link>
        </h5>
        <h6> { professor } </h6>
        <p>
          { description }
        </p>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return state.tweet[ownProps.tweetId];
}
  // TODO: setup this function so that you're rendering the correct  tweet
  // ie looking at your state and just mapping the correct props onto
  // this component


export default connect(
  mapStateToProps
)(Tweet);
