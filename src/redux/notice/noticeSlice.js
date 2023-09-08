import { createSlice } from '@reduxjs/toolkit';
import {
  fetchByCategory,
  addOwnNotice,
  deleteOwnNoticeById,
} from './noticeOperations';

export const initialState = {
  notices: [],
  page: 1,
  totalPage: 1,
  isLoading: false,
  error: null,
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    resetStateNoticeSlice(state) {
      state = initialState;
    },

    resetState(state, action) {
      state.notices = initialState;
    },

    deleteNoticeFavorite(state, { payload }) {
      state.notices = state.notices.filter(notice => notice._id !== payload);
    },
  },
  extraReducers: {
    // INFO Get notices by category

    [fetchByCategory.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [fetchByCategory.fulfilled]: (state, { payload }) => {
      state.notices = [...payload.data];
      state.page = payload.page;
      state.totalPage = payload.totalPage;
      state.isLoading = false;
    },
    [fetchByCategory.rejected]: (state, { payload }) => {
      state.notices = [];
      state.isLoading = false;
      state.error = payload;
    },
    // INFO Add user notice by id
    [addOwnNotice.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [addOwnNotice.fulfilled]: (state, { payload }) => {
      for (const notice of state.notices) {
        if (notice.category === payload.category) {
          state.notices.push(payload);
        }
        break;
      }
      state.isLoading = false;
    },
    [addOwnNotice.rejected]: (state, { payload }) => {
      state.notices = [];
      state.isLoading = false;
      state.error = payload;
    },

    // INFO Delete user notice by id

    [deleteOwnNoticeById.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },
    [deleteOwnNoticeById.fulfilled]: (state, { payload }) => {
      state.notices = state.notices.filter(
        notice => notice._id !== payload.data._id
      );
      state.isLoading = false;
    },
    [deleteOwnNoticeById.rejected]: (state, { payload }) => {
      state.notices = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  resetState,
  resetStateNoticeSlice,
  changeFavorite,
  deleteNoticeFavorite,
} = noticeSlice.actions;

export default noticeSlice.reducer;
