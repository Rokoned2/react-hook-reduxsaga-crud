import {fork} from 'redux-saga/effects'
import { fetchUsersWatcher } from './fetchUsersSaga'
import { createUserWatcher } from './createUserSaga'
import { editUserWatcher } from './editUserSaga'
import { deleteUserWatcher } from './deleteUserSaga'

export function* rootSaga(){
    yield fork(fetchUsersWatcher)
    yield fork(createUserWatcher)
    yield fork(editUserWatcher)
    yield fork(deleteUserWatcher)
}

