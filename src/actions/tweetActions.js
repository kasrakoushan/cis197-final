import authenticatedRequest from '../utils/authenticatedRequest';

export const FAVORITE_REJ = 'FAVORITE_REJ';
export const FAVORITE_FUL = 'FAVORITE_FUL';

export const LOADTWEETS_REJ = 'LOADTWEETS_REJ';
export const LOADTWEETS_FUL = 'LOADTWEETS_FUL';

export const CREATETWEET_FUL = 'CREATETWEET_FUL';
export const CREATETWEET_REJ = 'CREATETWEET_REJ';

export const DISCOVERBIRDS_FUL = 'DISCOVERBIRDS_FUL';
export const DISCOVERBIRDS_REJ = 'DISCOVERBIRDS_REJ';

export const COURSEPAGE_FUL = 'COURSEPAGE_FUL';
export const COURSEPAGE_REJ = 'COURSEPAGE_REJ';

export const LOADCOMMENTS_FUL = 'LOADCOMMENTS_FUL';
export const LOADCOMMENTS_REJ = 'LOADCOMMENTS_REJ';

// this is  a helper method you can use to getCourses from a given URL.
function getCourses(url) {
  return (dispatch) => {
    authenticatedRequest('GET', url)
      .then(res => res.json())
      .then((resp) => {
        dispatch({
          type: LOADTWEETS_FUL,
          tweets: resp.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOADTWEETS_REJ,
          error,
        });
      });
  };
}

export function getComments(commentIds) {
  return (dispatch) => {
    authenticatedRequest('GET', '/api/comments/all',
      {comments: commentIds})
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then((resp) => {
        dispatch({
          type: LOADCOMMENTS_FUL,
          comments: resp.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOADCOMMENTS_REJ,
          error,
        });
      });
  };
}

export function loadCourses() {
  // TODO: loads tweets from /api/newsfeed ie *get the tweets* from that url
  // async action creator
  return getCourses('/api/course-catalog');
}

export function getCourse(courseId) {
  return (dispatch) => {
    authenticatedRequest('GET', `/api/course/${courseId}/info`)
      .then(res => res.json())
      .then((resp) => {
        dispatch({
          type: COURSEPAGE_FUL,
          course: resp.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: COURSEPAGE_REJ,
          error,
        });
      });
  };
}

export function addComment(courseId, comment) {
  // authenticated request example
  // we send a POST request that is authenticated to /api/tweet/${tweetId}/favorite
  // if the request is successful we send  a FAVORITE_FUL action with message  and some  data
  // from the  response (determined by express)
  return (dispatch) => {
    authenticatedRequest('POST', `/api/course/${courseId}/comment`,
      {comment: comment})
      .then(res => res.json())
      .then((resp) => {
        const data = resp.data;
        dispatch({
          type: FAVORITE_FUL,
          message: 'You have commented on this course',
          data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FAVORITE_REJ,
          error,
        });
      });
  };
}


export function createNewCourse(courseCode, description, professor) {
  // TODO: authenticated request # 2
  // we send a POST request that is authenticated to /api/tweet
  // if the request is successful we send  a CREATETWEET_FUL action with message and some data
  // corresponding  to the new tweet (we get it from the response (determined by express))
  // if there is  an error, dispatch a CREATETWEET_REJ error
  return (dispatch) => {
    authenticatedRequest('POST', '/api/course', 
      {courseCode: courseCode, description: description, professor: professor})
      .then(res => res.json())
      .then((resp) => {
        const data = resp.data;
        dispatch({
          type: CREATETWEET_FUL,
          message: 'You have created a course',
          data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATETWEET_REJ,
          error,
        });
      });
  }
}

export function getDiscoverBirds() {
  // example of get request
  return dispatch => 
    authenticatedRequest('GET', '/api/newsfeed/discover-birds')
    .then(res => res.json())
    .then((resp) => {
      const users = resp.data;
      dispatch({
        type: DISCOVERBIRDS_FUL,
        data: users,
      });
    })
    .catch((error) => {
      dispatch({
        type: DISCOVERBIRDS_REJ,
        message: 'Error fetching birds',
        error,
      });
    });
}
