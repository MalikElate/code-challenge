import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* registerUser() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  try {
    const response = yield axios.post('http://localhost:8000/register', config);
    // yield put({ type: 'SET_USER', payload: response.data });
    yield console.log(response)
  } catch (error) {
    console.log('User registration request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('REGISTER_USER', registerUser);
}

export default userSaga;
