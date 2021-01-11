import { takeEvery, call, put} from "redux-saga/effects";
import {api} from "./api";
import {fetchUsers} from './actions/types'
import _ from 'lodash'

export function* fetchUsersWatcher(){
    yield takeEvery(fetchUsers.REQUEST, fetchUsersFlow)
}

function* fetchUsersFlow(){
    try {
    const users = yield call(api.fetchUsers)
    yield put(fetchUsers.success(_.mapKeys(users, 'id')));
    } catch (error){
    yield put(fetchUsers.failure(error));
    }
}