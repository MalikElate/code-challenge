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
    console.log('Skill get request failed', error);
  }
}

function* addSkill(action) {
  let skill = new FormData(); 
  skill.append('skill', action.payload.skill)
  skill.append('tag ', action.payload.tag)
  try {
    const response = yield axios({
      method: 'post',
      url: 'http://localhost:8000/api/skills',
      data: skill
    })
    yield console.log('===========================----------------------',response); 
    yield put({type: 'GET_SKILLS'}); 
  } catch (error) {
    console.log('Skill post request failed', error);
  }
}

function* skillsSaga() {
  yield takeLatest('GET_SKILLS', getSkills);
  yield takeLatest('ADD_SKILL', addSkill);
}

export default skillsSaga;
