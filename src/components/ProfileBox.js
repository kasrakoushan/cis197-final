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

    this.setState({
      load: setInterval(() => 
        this.props.getComments(this.props.courseState.comments), 2500)
    });
  }

  submitComment(e) {
    e.preventDefault();
    let comment = this.refs.comment.value;
    // TODO: include a call to create a new tweet
    this.props.addComment(comment);

  }

  componentWillUnmount() {
    // TODO: when the component is about to unmount
    // clear the interval (the one running every 2500 ms
    // ie stop  the refreshing)
    clearInterval(this.state.load);
  }

  render() {
    let comments = this.props.courseState.commentContents;
    console.log(comments);
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
