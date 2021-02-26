import { combineReducers } from 'redux'; 

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const user = (state = [], action) => {
    switch (action.type) {
      case 'SET_QUESTION':
        return action.payload;
      default:
        return state;
    }
  };


export default combineReducers({
  user,
  // currentLessonAnswers
});