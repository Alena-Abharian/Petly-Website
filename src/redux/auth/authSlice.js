import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  restore,
  logout,
  setTokens,
  addPet,
  deletePet,
  getUserInfo,
  updateUserInfo,
  addFavoriteNotice,
  deleteFavoriteNotice,
} from './authOperations';

const initialState = {
  user: {
    email: null,
    name: null,
    _id: null,
    city: null,
    phone: null,
    birthday: ' ',
    avatarUrl: null,
    myPets: [
      {
        _id: '',
        name: '',
        birthday: '',
        breed: '',
        comments: '',
        avatarURL: null,
        owner: '',
      },
    ],
    favorites: [],
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // --------------------GOOGLE OPERATION--------------------
    [setTokens.pending]: state => {
      state.isLoading = true;
    },
    [setTokens.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [setTokens.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;

      state.error = payload;
    },
    // --------------------REGISTER OPERATION--------------------

    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: state => {
      state.error = null;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------LOG IN OPERATION--------------------

    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload: { user } }) => {
      state.user._id = user._id;
      state.user.email = user.email;
      state.user.name = user.name;
      state.accessToken = user.accessToken;
      state.refreshToken = user.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    //-------------------------------RESTORE-------------------------
    [restore.pending]: state => {
      state.isLoading = true;
    },
    [restore.fulfilled]: (state, { payload: { user } }) => {
      state.user.email = user.email;

      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [restore.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // --------------------LOG OUT OPERATION--------------------

    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.user = {
        email: null,
        name: null,
        _id: null,
        city: null,
        phone: null,
        birthday: null,
        avatarUrl: null,
        myPets: [],
        favorites: [],
      };
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    //-----------------USER-------------------------------

    //get user info
    [getUserInfo.pending]: state => {
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.user = action.payload;

      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user._id = action.payload._id;
      state.user.city = action.payload.city;
      state.user.phone = action.payload.phone;
      state.user.birthday = action.payload.birthday;
      state.user.avatarUrl = action.payload.avatarUrl;
      state.user.myPets = [...action.payload.myPets];
      state.user.favorites = [...action.payload.favorites];
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //update user info
    [updateUserInfo.pending]: state => {
      state.error = null;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    [updateUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //add pet
    [addPet.pending]: state => {
      state.error = null;
    },
    [addPet.fulfilled]: (state, { payload }) => {
      state.user.myPets.push(payload);
    },
    [addPet.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //delete pet
    [deletePet.pending]: state => {
      state.error = null;
    },
    [deletePet.fulfilled]: (state, action) => {
      state.user.myPets = state.user.myPets.filter(
        pet => pet._id !== action.payload._id
      );
    },
    [deletePet.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //INFO addFavorite Notice
    [addFavoriteNotice.pending]: state => {
      state.error = null;
    },
    [addFavoriteNotice.fulfilled]: (state, action) => {
      state.user.favorites.push(action.payload);
    },
    [addFavoriteNotice.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //INFO deleteFavorite Notice
    [deleteFavoriteNotice.pending]: state => {
      state.error = null;
    },
    [deleteFavoriteNotice.fulfilled]: (state, action) => {
      state.user.favorites = state.user.favorites.filter(
        id => id !== action.payload
      );
    },
    [deleteFavoriteNotice.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
