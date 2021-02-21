import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* registerUser() {
  try {
    const response = yield axios.get('/api/user');
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User registration request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('REGISTER_USER', registerUser);
}

export default userSaga;
