// import { createSlice } from '@reduxjs/toolkit';
// import { addPet, deletePet, getUserInfo, updateUserInfo } from './userDataOperation';

// const userDataSlice = createSlice({
//   name: 'userInfo',
//   initialState: {
//     data: {
//       'email': '',
//       'name': '',
//       'city': '',
//       'phone': '',
//       'birthday': '',
//       'avatarUrl': null,
//       'favorites': [],
//       'myPets': [
//         {
//           '_id': '',
//           'name': '',
//           'birthday': null,
//           'breed': '',
//           'comments': null,
//           'avatarUrl': null,
//           'owner': '',
//         },
//       ],
//     },

//     error: null,
//   },
//   extraReducers: {
//     //get user info
//     [getUserInfo.pending]: (state) => {
//       state.error = null;
//     },
//     [getUserInfo.fulfilled]: (state, action) => {
//       state.data = action.payload;
//     },
//     [getUserInfo.rejected]: (state, action) => {
//       state.error = action.payload;
//     },

//     //update user info
//     [updateUserInfo.pending]: (state) => {
//       state.error = null;
//     },
//     [updateUserInfo.fulfilled]: (state, action) => {
//       state.data = { ...state.data, ...action.payload };
//     },
//     [updateUserInfo.rejected]: (state, action) => {
//       state.error = action.payload;
//     },

//     //add pet
//     [addPet.pending]: (state) => {
//       state.error = null;
//     },
//     [addPet.fulfilled]: (state, action) => {
//       state.data.myPets.push(action.payload);
//     },
//     [addPet.rejected]: (state, action) => {
//       state.error = action.payload;
//     },

//     //delete pet
//     [deletePet.pending]: (state) => {
//       state.error = null;
//     },
//     [deletePet.fulfilled]: (state, action) => {
//       state.data.myPets = state.data.myPets.filter(pet => pet._id !== action.payload._id);
//     },
//     [deletePet.rejected]: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export default userDataSlice.reducer;
