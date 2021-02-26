import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSkills(action) {
  try {
    const response = yield axios({
      method: 'get',
      url: 'http://localhost:8000/api/skills',
    })
    yield console.log(response.data); 
    yield put({type: 'SET_SKILLS', payload: response.data}); 
  } catch (error) {
    console.log('User registration request failed', error);
  }
}

function* skillsSaga() {
  yield takeLatest('GET_SKILLS', getSkills);
}

export default skillsSaga;
