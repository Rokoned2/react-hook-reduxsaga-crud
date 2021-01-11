import { takeLatest, call, put} from "redux-saga/effects";
import {api} from "./api";
import {createUser} from './actions/types'

export function* createUserWatcher(){
    yield takeLatest(createUser.REQUEST, createUserFlow)
}

function* createUserFlow(action){
    try {
    const user = yield call(api.createUser, action.data)
    yield put(createUser.success({[user.id]: user}));
    } catch (error){
    yield put(createUser.failure(error));
    }
}