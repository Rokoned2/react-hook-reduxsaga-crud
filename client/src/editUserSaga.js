import { takeLatest, call, put} from "redux-saga/effects";
import {api} from "./api";
import {editUser} from './actions/types'

export function* editUserWatcher(){
    yield takeLatest(editUser.REQUEST, editUserFlow)
}

function* editUserFlow(action){
    try {
    const user = yield call(api.editUser, action.data.id, action.data.user )
    yield put(editUser.success({[user.id]: user}));
    } catch (error){
    yield put(editUser.failure(error));
    }
}