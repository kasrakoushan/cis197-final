// providing this for  you bc im nice  :)
import {
  COURSEPAGE_FUL,
  FAVORITE_FUL,
} from '../actions/tweetActions';

let initialState = {
  course: {
    courseCode: '',
    professor: '',
    description: '',
    comments: [],
    ratings: []
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
      course: action.data,
    };
  default:
    return state;
  }
};

export default courseDetailReducer;
