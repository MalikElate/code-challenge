import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* loginUser(action) {
  try {
    var user = new FormData(); 
      user.append('_token', 'RIaRe3RP5bpzFusYR9KnrsZnfunFlOEsLK8RMHgm' )
      user.append('email', action.payload.email)
      user.append('password', action.payload.password)
    const response = yield axios({
      method: 'post',
      url: 'http://localhost:8000/login',
      data: user,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    yield console.log(response); 
    yield console.log(response.data); 
    yield put({type: 'FETCH_USER'}); 
  } catch (error) {
    console.log('User registration request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('LOGIN_USER', loginUser);
}

export default userSaga;
