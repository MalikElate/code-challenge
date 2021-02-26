import { all } from 'redux-saga/effects';
import loginUser from './login.user.saga';
import registerUser from './register.user.saga';
import fetchUser from './user.saga'; 
import skillsSaga from './skills.saga'; 

export default function* rootSaga() {
  yield all([
    loginUser(), 
    registerUser(),
    fetchUser(),
    skillsSaga()
  ]);
}
