import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSkills(action) {
  try {
    const response = yield axios({
      method: 'get',
      url: 'http://localhost:8000/api/skills',
    })
    yield put({type: 'SET_SKILLS', payload: response.data}); 
  } catch (error) {
    console.log('Skill get request failed', error);
  }
}

function* addSkill(action) {
  let skill = new FormData(); 
  skill.append('skill', action.payload.skill)
  skill.append('tag', action.payload.tag)
  console.log(action.payload.skill)
  try {
    yield axios({
      method: 'post',
      url: 'http://localhost:8000/api/skills',
      data: skill
    })
    yield put({type: 'GET_SKILLS'}); 
  } catch (error) {
    console.log('Skill post request failed', error);
  }
}

function* deleteSkill(action) {
  try {
    const response = yield axios({
      method: 'delete',
      url: `http://localhost:8000/api/skills/${action.payload.id}`,
    })
    yield put({type: 'GET_SKILLS'}); 
  } catch (error) {
    console.log('Skill delete request failed', error);
  }
}

function* updateSkill(action) {
  try {
    const response = yield axios({
      method: 'PUT',
      url: `http://localhost:8000/api/skills/${action.payload.id}/${action.payload.status}`,
    })
    yield console.log('=========UPDATE==================----------------------',response); 
    yield put({type: 'GET_SKILLS'}); 
  } catch (error) {
    console.log('Skill delete request failed', error);
  }
}

function* skillsSaga() {
  yield takeLatest('GET_SKILLS', getSkills);
  yield takeLatest('ADD_SKILL', addSkill);
  yield takeLatest('DELETE_SKILL', deleteSkill);
  yield takeLatest('UPDATE_SKILL', updateSkill);
}

export default skillsSaga;
