import { all } from 'redux-saga/effects';
import userSaga from './user.saga';
import registerUser from './register.user.saga';

export default function* rootSaga() {
  yield all([
    userSaga(), 
    registerUser(),
  ]);
}
