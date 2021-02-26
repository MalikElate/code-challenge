import { combineReducers } from 'redux';
import user from './user.reducer';
import skills from './skills.reducer'; 

const rootReducer = combineReducers({
    user, // will have an id and username if someone is logged in
    skills
});

export default rootReducer;