import { API_KEY, API_URL } from './config';

export const GetPlacesByCity = (city) => {
  const url = `${API_URL}autosuggest/v1.0/UK/GBP/en-GB/?query=${encodeURIComponent(city)}`;
  return fetch(url, {
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    },
  });
};
