import axios from 'axios';
import PropTypes from 'prop-types';

const instance = axios.create({
  baseURL: 'https://petly-back.onrender.com/api',
});

export const getDate = async path => {
  const { data } = await instance.get(`/${path}`);
  return data;
};

getDate.propTypes = {
  path: PropTypes.string.isRequired,
};
