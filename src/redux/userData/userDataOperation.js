// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://petly-back.onrender.com/api';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const getUserInfo = createAsyncThunk(
//   'userInfo/getUserInfo',
//   async (query, thunkAPI) => {
//     try {
//       const tokenLS = thunkAPI.getState().auth.token;
//       token.set(tokenLS);
//       const res = await axios.get('/user/userInfo');
//       return res.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue('Sorry, server Error!');
//     }
//   }
// );

// export const updateUserInfo = createAsyncThunk(
//   'userInfo/updateUserInfo',
//   async (payload, thunkAPI) => {
//     try {
//       const tokenLS = thunkAPI.getState().auth.token;
//       token.set(tokenLS);
//       const { data } = await axios.patch(`/user/update`, payload);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(
//         "Sorry, can't update user, server Error!"
//       );
//     }
//   }
// );

// export const addPet = createAsyncThunk(
//   'pet/addPet',
//   async (payload, thunkAPI) => {
//     try {
//       const tokenLS = thunkAPI.getState().auth.token;
//       token.set(tokenLS);
//       const res = await axios.post('/user/pets', payload);
//       return res.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue("Sorry, can't add pet, server Error!");
//     }
//   }
// );

// export const deletePet = createAsyncThunk(
//   'pet/deletePet',
//   async (_id, thunkAPI) => {
//     try {
//       const tokenLS = thunkAPI.getState().auth.token;
//       token.set(tokenLS);
//       await axios.delete(`/user/pets/${_id}`);
//       return { _id };
//     } catch (err) {
//       return thunkAPI.rejectWithValue("Sorry, can't delete pet, server Error!");
//     }
//   }
// );
