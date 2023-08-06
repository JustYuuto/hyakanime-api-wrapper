const axios = require('axios');
const { baseUrl } = require('./variables');
const isURL = require('is-url');

const basicInformation = async (username) => {
  if (!username || typeof username !== 'string' || username.trim() === '') {
    throw new Error('No username given');
  }

  try {
    const request = await axios.get(`${baseUrl}/user/basic-information/${username}`);
    return request.data;
  } catch (e) {
    throw new Error(`Failed to fetch ${username}'s basic information: ${e.message}`);
  }
}

const completeInformation = async (token) => {
  if (!token || typeof token !== 'string' || token.trim() === '') {
    throw new Error('No token given');
  }

  try {
    const request = await axios.get(`${baseUrl}/user/complete-information`, {
      headers: { Authorization: `Token ${token}` }
    });
    return request.data;
  } catch (e) {
    throw new Error(`Failed to fetch user complete information: ${e.message}`);
  }
}

const changeAvatar = async (url, token) => {
  if (!url || typeof url !== 'string' || url.trim() === '' || !isURL(url)) {
    throw new Error('No URL given');
  }
  if (!token || typeof token !== 'string' || token.trim() === '') {
    throw new Error('No token given');
  }

  try {
    const request = await axios.post(`${baseUrl}/user/change-avatar`, {
      photoURL: url
    }, {
      headers: { Authorization: `Token ${token}` }
    });
    return request.data;
  } catch (e) {
    throw new Error(`Failed to update user avatar: ${e.message}`);
  }
}

module.exports = {
  basicInformation, completeInformation, changeAvatar
};
