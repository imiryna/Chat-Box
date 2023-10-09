import axios from 'axios';

const API_KEY = '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';

export const fetchMessageChat = async userText => {
  const API_URL = 'https://api.openai.com/v1/completions';
  const paramsRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const requestData = JSON.stringify({
    model: 'text-davinci-003',
    prompt: userText,
    max_tokens: 2048,
    temperature: 0.2,
    n: 1,
    stop: null,
  });
  const { data } = await axios.post(API_URL, requestData, paramsRequest);
  return data;
};
