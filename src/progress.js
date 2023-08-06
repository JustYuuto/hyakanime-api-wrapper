const axios = require('axios');
const { baseUrl } = require('./variables');

const get = async (username) => {
  if (!username || typeof username !== 'string' || username.trim() === '') {
    throw new Error('No username given');
  }

  try {
    const request = await axios.get(`${baseUrl}/progress/get/${username}`);
    return request.data;
  } catch (e) {
    throw new Error(`Failed to fetch ${username}'s progress: ${e.message}`);
  }
}

module.exports = {
  get
};
