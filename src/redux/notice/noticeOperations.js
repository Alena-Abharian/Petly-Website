import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const setTokenRequest = getState => {
  const tokenLS = getState().auth.accessToken;
  if (Boolean(tokenLS)) {
    token.set(tokenLS);
  }
  return;
};

export const fetchByCategory = createAsyncThunk(
  'notice/fetchByCategory',
  async (request, { rejectWithValue, getState }) => {
    const { category, page, limit } = request;
    // request.q = request.q ? request.q : '';
    try {
      if (category === 'own' || category === 'favorite') {
        setTokenRequest(getState);
        // const { data } = await axios.get(
        //   `/notices/user/${category}?q=${request.q}&page=${page}&limit=${limit}`
        // );
        const { data } = await axios.get(
          `/notices/user/${category}?page=${page}&limit=${limit}${
            request.q ? `&q=${request.q}` : ''
          }`
        );

        return data;
      }
      // const { data } = await axios.get(
      //   `/notices/${category}?q=${request.q}&page=${page}&limit=${limit}`
      // );
      const { data } = await axios.get(
        `/notices/${category}?page=${page}&limit=${limit}${
          request.q ? `&q=${request.q}` : ''
        }`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);

export const addOwnNotice = createAsyncThunk(
  'notices/addOwnNotice',
  async (notice, { rejectWithValue, getState }) => {
    try {
      setTokenRequest(getState);
      const { data } = await axios.post(`/notices/addnotice`, notice, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      toast.error("Sorry, can't add notices, server Error!");
      return rejectWithValue(error.request.status);
    }
  }
);

export const deleteOwnNoticeById = createAsyncThunk(
  'notice/deleteOwnNoticeById',
  async (id, { rejectWithValue, getState }) => {
    try {
      setTokenRequest(getState);
      const { data } = await axios.delete(`/notices/user/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.request.status);
    }
  }
);
