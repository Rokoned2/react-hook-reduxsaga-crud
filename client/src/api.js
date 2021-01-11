import axios from 'axios'
// const actionCreator = action => {
//     const values = ['SUCCESS', 'FAILURE', 'REQUEST'];
//     const types = values.reduce((acc, value) => {
//       const type = `${action}_${value}`;
//       acc[value] = type;
//       acc[value.toLowerCase()] = data => ({
//         type,
//         data,
//       });
//       console.log('acc', acc)
//       return acc;
//     }, {});
//       console.log('types', types)
//     return types;
//   };

// import users from './apis/users';

export const api = {
    fetchUsers: async function() {
      const {data} = await axios.get('http://localhost:5000/api/users/users');
    return data
    },
    createUser: async function(user) {
      const {data} = await axios.post('http://localhost:5000/api/users/users', {...user});
    return data
    },
    editUser: async function(id, user) {
      const {data} = await axios.patch(`http://localhost:5000/api/users/users/${id}`, {...user});
    return data
    }
    ,
    deleteUser: async function(id) {
      const {data} = await axios.get(`http://localhost:5000/api/users/users/${id}`);
      await axios.delete(`http://localhost:5000/api/users/users/${id}`);
      return data
    }
  }
