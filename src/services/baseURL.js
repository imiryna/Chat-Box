import axios from 'axios';

export const interactiveChatInstance = axios.create({
  baseURL: 'https://youreBaseURL-api.hxxxxapp.com/',
});
