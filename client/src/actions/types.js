// export const FETCH_USERS = 'FETCH_USERS'; 
export const FETCH_USER = 'FETCH_USER';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

const actionCreator = action => {
  const values = ['SUCCESS', 'FAILURE', 'REQUEST'];
  const types = values.reduce((acc, value) => {
    const type = `${action}_${value}`;
    acc[value] = type;
    acc[value.toLowerCase()] = data => ({
      type,
      data,
    });
    return acc;
  }, {});
  return types;
};


export const fetchUsers = actionCreator('FETCH_USERS')
export const createUser = actionCreator('CREATE_USER')
export const editUser = actionCreator('EDIT_USER')
export const deleteUser = actionCreator('DELETE_USER')
