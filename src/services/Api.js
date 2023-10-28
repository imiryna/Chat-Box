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

export const uploadFiles = async fileForUpload =>{
  const url = 'https://httpbin.org/post';
    const formData = new FormData();
    formData.append('file', fileForUpload);
    formData.append('fileName', fileForUpload.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

}
