const axios = require('axios');
const { baseUrl } = require('./variables');

const search = async (query, type = 'anime') => {
  if (!query || typeof query !== 'string' || query.trim() === '') {
    throw new Error('No search query given');
  }
  if (type !== 'anime' && type !== 'user') throw new Error('"type" needs to be "anime" or "user"');

  try {
    const request = await axios.post(`${baseUrl}/search/${type}/${encodeURIComponent(query)}`);
    return request.data;
  } catch (e) {
    throw new Error(`Failed to search for ${query}: ${e.message}`);
  }
}

module.exports = search;
