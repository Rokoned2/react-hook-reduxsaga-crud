import { takeLatest, call, put} from "redux-saga/effects";
import {api} from "./api";
import {deleteUser} from './actions/types'

export function* deleteUserWatcher(){
    yield takeLatest(deleteUser.REQUEST, deleteUserFlow)
}

function* deleteUserFlow(action){
    
    try {
    const user = yield call(api.deleteUser, action.data )
    yield put(deleteUser.success({[user.id]: undefined}));
    } catch (error){
    yield put(deleteUser.failure(error));
    }
}