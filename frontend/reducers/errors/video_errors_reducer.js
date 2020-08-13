import { RECEIVE_VIDEO_ERRORS, CLEAR_VIDEO_ERRORS } from '../../actions/video_actions';

const videoErrorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_VIDEO_ERRORS:
      return action.errors;
    case CLEAR_VIDEO_ERRORS:
        return [];
    default:
      return state;
  }
}

export default videoErrorsReducer;