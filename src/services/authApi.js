import { interactiveChatInstance } from './baseURL';

export const setToken = token => {
  interactiveChatInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const userSignup = async formData => {
  const { data } = await interactiveChatInstance.post(
    '/users/signup',
    formData
  );
  setToken(data.token);
  return data;
};

export const userLogin = async formData => {
  const { data } = await interactiveChatInstance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const userLogout = async () => {
  const { data } = await interactiveChatInstance.post('/users/logout');
  return data;
};

export const currentUser = async () => {
  const { data } = await interactiveChatInstance.get('/users/current');
  return data;
};
