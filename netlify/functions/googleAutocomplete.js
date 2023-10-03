const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { input } = event.queryStringParameters;
  
  if (!input) {
    return { statusCode: 400, body: 'input parameter is required' };
  }

  const API_KEY = process.env.GOOGLE; // Using the environment variable here

  const endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${API_KEY}`;

  try {
    const response = await axios.get(endpoint);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Failed to fetch from Google Maps API'
    };
  }
};
