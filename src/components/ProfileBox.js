import React, { Component } from 'react';
import TweetList from './TweetList';
import { loadTweetsForProfile } from '../actions/tweetActions';
import { connect } from 'react-redux';

class ProfileBox extends Component {
  constructor(props) {
    super(props);
    this.submitComment = this.submitComment.bind(this);
  }

  componentDidMount() {
    this.props.course();
  }

  submitComment(e) {
    e.preventDefault();
    let comment = this.refs.comment.value;
    // TODO: include a call to create a new tweet
    this.props.addComment(comment);

  }

  render() {
    // let button = this.props.id ?
    //   (
    //     <button className="btn btn-primary" onClick={this.props.favUnfav}>
    //       { this.props.profile.isFollowing === true ? 'Unfollow' : 'Follow' }
    //     </button>
    //   ) : '';
    // let followersLength = this.props.profile.followers ? this.props.profile.followers.length : 0;
    // let followingLength = this.props.profile.following ? this.props.profile.following.length : 0;
    // BUTTON BLOCK
    // <br /> Followers:
    // { followersLength }
    // <br /> Following:
    // { followingLength }
    // <br />
    // { button }
    // <br />
    return (
      <div>
        <div className='col-md-4'>
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                { this.props.courseState.courseCode }
              </div>
              <p className="text-muted">
                { this.props.courseState.professor }
              </p>
              <p className="text-muted">
                { this.props.courseState.description }
              </p>
            </div>
          </div>
          <form onSubmit={this.submitComment}>
            <div>
              <div className="form-group">
                <label>
                  Review this course:
                </label>
                <input type="text" className="form-control" ref="comment" />
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="submit"/>
            </div>
          </form>
        </div>
        <div className='col-md-8'>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courseState: state.courseDetailReducer.course,
});

export default connect(mapStateToProps, null)(ProfileBox);
