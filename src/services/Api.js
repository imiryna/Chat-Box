import { interactiveChatInstance } from 'services/baseURL';

/**
 * create new chat, empty
 * @param {string} chatName
 * @returns {Object} openAI network answer
 */
export const createChat = async chatName => {
  const paramsRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestData = JSON.stringify({
    chatName: chatName,
  });
  const { data } = await interactiveChatInstance.post(
    '/create_chat',
    requestData,
    paramsRequest
  );
  return data;
};

/**
 * get all chats for current user. Determine user by auth
 * token in Authorization header
 */
export const getChatList = async () => {
  const paramsRequest = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await interactiveChatInstance.get('/chats', paramsRequest);
  return data;
};

/**
 * sent one message from user and get one answer
 * @param {string} userText
 * @returns {Object} openAI network answer
 */
export const fetchMessageChat = async userText => {
  const paramsRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
  const { data } = await interactiveChatInstance.post(
    '/send_message',
    requestData,
    paramsRequest
  );
  return data;
};

/**
 * get list of the messages of particular chat
 * @param {string} chatId
 * @returns {Array[string]} array of messages
 */
export const getChatMessages = async chatId => {
  const paramsRequest = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await interactiveChatInstance.get(
    `/get_messages/${chatId}`,
    paramsRequest
  );
  return data;
};

/**
 * Upload file to server
 * @param {Blob} fileForUpload
 * @returns result of operation for notification to user
 */
export const uploadFiles = async fileForUpload => {
  const formData = new FormData();
  formData.append('file', fileForUpload);
  formData.append('fileName', fileForUpload.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  await interactiveChatInstance.post('/upload', formData, config);
};

/**
 * Get the list of uploaded documents
 * @returns
 */
export const getUploadsList = async () => {
  const paramsRequest = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await interactiveChatInstance.get('/upload', paramsRequest);
  return data;
};

export const deleteUploadedDocument = async id => {
  const { data } = await interactiveChatInstance.delete(`/upload/${id}`);
  return data;
};

export const deleteChat = async id => {
  const { data } = await interactiveChatInstance.delete(`/chats/${id}`);
  return data;
};
