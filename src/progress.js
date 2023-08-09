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

const write = async (id, progress, status, token) => {
  if (isNaN(id)) throw new Error('No anime id given');
  if (isNaN(progress)) throw new Error('No anime id given');
  if (isNaN(status)) throw new Error('No anime id given');
  else if (status < 1 || status > 5) throw new Error('"status" needs to be a number between 1 and 5');

  try {
    const request = await axios.post(`${baseUrl}/progress/write/`, {
      id, progression: progress, status
    }, {
      headers: { Authorization: token }
    });
    return request.status === 200;
  } catch (e) {
    throw new Error(`Failed to write progress: ${e.message}`);
  }
}

module.exports = {
  get, write
};
