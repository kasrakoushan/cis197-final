// providing this for  you bc im nice  :)
import {
  COURSEPAGE_FUL,
  FAVORITE_FUL,
  LOADCOMMENTS_FUL,
} from '../actions/tweetActions';

let initialState = {
  course: {
    courseCode: '',
    professor: '',
    description: '',
    comments: [],
    ratings: [],
    commentContents: []
  },
};

const courseDetailReducer = (state = initialState, action) => {
  switch (action.type) {
  case COURSEPAGE_FUL:
    return {
      ...state,
      course: Object.assign({}, state.course, action.course),
    };
  case FAVORITE_FUL:
    return {
      ...state,
      course: Object.assign({}, state.course, action.data),
    };
  case LOADCOMMENTS_FUL:
    return {
      ...state,
      course: Object.assign({}, state.course,
        {commentContents: action.comments}),
    }
  default:
    return state;
  }
};

export default courseDetailReducer;
