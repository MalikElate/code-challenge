import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser(action) {
  try {
    var user = new FormData(); 
      user.append('_token', 'RIaRe3RP5bpzFusYR9KnrsZnfunFlOEsLK8RMHgm' )
      user.append('name', action.payload.name)
      user.append('email', action.payload.email)
      user.append('password', action.payload.password)
      user.append('password_confirmation', action.payload.confirm_password)
    const response = yield axios({
      method: 'post',
      url: 'http://localhost:8000/login',
      data: user,
      headers: {'Content-Type': 'multipart/form-data' }
      })
  } catch (error) {
    console.log('User registration request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
