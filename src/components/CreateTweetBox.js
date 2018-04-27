import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewCourse } from '../actions/tweetActions';

class CreateTweetBox extends Component {
  constructor(props) {
    super(props);
    this.submitCourse = this.submitCourse.bind(this);
  }

  submitCourse(e) {
    e.preventDefault();
    let description = this.refs.description.value;
    let courseCode = this.refs.courseCode.value;
    let professor = this.refs.professor.value;
    // TODO: include a call to create a new tweet
    this.props.createNewCourse(description,
      courseCode, professor);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitCourse}>
          <div>
            <div className="form-group">
              <label>
                Course code
              </label>
              <input type="text" className="form-control" ref="courseCode" />
              <label>
                Course description
              </label>
              <textarea className="form-control" ref="description"></textarea>
              <label>
                Professor
              </label>
              <input type="text" className="form-control" ref="professor" />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              value="submit"/>
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  createNewCourse: (description, courseCode, professor) => dispatch(
    createNewCourse(description, courseCode, professor))
});
  // supply the component with a property 'createNewCourse' that will dispatch
  // the createNewCourse action  with the new tweet's content

export default connect(
  null,
  mapDispatchToProps
)(CreateTweetBox);
