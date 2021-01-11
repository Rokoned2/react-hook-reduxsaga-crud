import {
  fetchUsers,
  createUser,
  // FETCH_USERS,
  FETCH_USER,
  // CREATE_USER,
  editUser,
  deleteUser
} from '../actions/types';

const reducerHandler = (state, action, actionHandler) => {
  switch(action.type) {
    case actionHandler.REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionHandler.SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: {...state.data, ...action.data},
        error: null
      }
    case actionHandler.FAILURE:
       return {
        ...state,
        isLoading: false,
        loaded: true,
        error: action.data,
        data: {...state.data},
      }
    default:
      return state;
  }
}

const initialAsyncState = {
  isLoading:  false,
  loaded: false,
  data: [],
  error: null
}

const initialState = {
  users: initialAsyncState
}


export default (state = initialState, action) => {
  switch (action.type) {
    case fetchUsers.REQUEST:
    case fetchUsers.SUCCESS:
    case fetchUsers.FAILURE:
      return {...state, users: reducerHandler(state.users, action, fetchUsers)}
    case FETCH_USER:
      return { ...state, [action.payload.id]: action.payload };
    case createUser.REQUEST:
    case createUser.SUCCESS:
    case createUser.FAILURE:
      return {...state, users: reducerHandler(state.users, action, createUser)}
    case editUser.REQUEST:
    case editUser.SUCCESS:
    case editUser.FAILURE:
      return {...state, users: reducerHandler(state.users, action, editUser)}
    case deleteUser.REQUEST:
    case deleteUser.SUCCESS:
    case deleteUser.FAILURE:
      return {...state, users: reducerHandler(state.users, action, deleteUser)}
    default:
      return state;
  }
};

