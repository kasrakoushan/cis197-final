import React, { Component } from 'react';
import TweetList from './TweetList';
import DiscoverBirds from './DiscoverBirds';
import { connect } from 'react-redux';
import { loadCourses, getDiscoverBirds } from '../actions/tweetActions';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: render out this component that is the newsfeed
    // should render out the DiscoverBirds component
    // note that it needs a property getDisocverBirds that
    // is a function which dispatches the getDiscoverBirds action
    // also needs to mount TweetList with a property
    // loadCourses that is a function which dispatches the
    // loadCourses action.
    // ultimate html structure will look like
    // <div class="container">
    //  <h2>News Feed</h2>
    //  <div class="row">
    //    <div class="col-md-4">
    //      ...discoverbirds
    //    </div>
    //    <div class="col-md-8">
    //      ...tweetlist
    //    </div>
    //  </div>
    // </div>

    return (
      <div className='container'>
        <h2>Course Catalog</h2>
        <div className='row'>
          <div className='col-md-8'>
            <TweetList loadCourses={this.props.loadCourses} />
          </div>
        </div>
      </div>
    );
  }
}


// hint hint ;)
const mapDispatchToProps = dispatch => ({
  loadCourses: () => dispatch(loadCourses()),
  getDiscoverBirds: () => dispatch(getDiscoverBirds()),
});

export default connect(null, mapDispatchToProps)(NewsFeed);
