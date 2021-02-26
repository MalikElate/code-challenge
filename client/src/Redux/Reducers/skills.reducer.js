import { combineReducers } from 'redux'; 

const skills = (state = [], action) => {
    switch (action.type) {
      case 'SET_SKILLS':
        return action.payload;
      default:
        return state;
    }
  };


export default combineReducers({
  skills
});