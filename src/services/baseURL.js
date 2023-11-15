import axios from 'axios';

export const interactiveChatInstance = axios.create({
  //   baseURL: 'https://youreBaseURL-api.hxxxxapp.com/',
  baseURL: 'https://connections-api.herokuapp.com/',
});
