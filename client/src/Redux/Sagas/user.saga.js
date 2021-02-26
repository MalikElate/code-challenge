import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser(action) {
  try {
    let token = new FormData(); 
      token.append('_token', 'RIaRe3RP5bpzFusYR9KnrsZnfunFlOEsLK8RMHgm' )
    const response = yield axios({
      method: 'get',
      url: 'http://localhost:8000/api/user',
      data: token
    })
    yield console.log(response); 
    yield console.log(response.data);
  } catch (error) {
    console.log('User registration request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
