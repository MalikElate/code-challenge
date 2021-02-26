import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* registerUser(action) {
  try {
    var user = new FormData(); 
      user.append('_token', 'RIaRe3RP5bpzFusYR9KnrsZnfunFlOEsLK8RMHgm' )
      user.append('name', action.payload.name)
      user.append('email', action.payload.email)
      user.append('password', action.payload.password)
      user.append('password_confirmation', action.payload.confirm_password)
    const response = yield axios({
      method: 'post',
      url: 'http://localhost:8000/register',
      data: user,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    yield console.log(response); 
    yield put({type: 'FETCH_USER'}); 
  } catch (error) {
    console.log('User registration request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('REGISTER_USER', registerUser);
}

export default userSaga;
