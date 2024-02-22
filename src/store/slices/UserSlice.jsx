import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        deleteUsers(state, action) {
            state.splice(0, state.length);
        }
    }
})


export default UserSlice;
export const {addUser, removeUser, deleteUsers} = UserSlice.actions;  //destructuring