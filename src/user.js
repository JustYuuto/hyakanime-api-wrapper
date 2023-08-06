const axios = require('axios');
const { baseUrl } = require('./variables');

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

module.exports = {
  basicInformation, completeInformation
};
