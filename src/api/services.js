import axios from 'axios';

const API_KEY = '39114416-f90b644e8d0401ad57694968b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const servicePhoto = async (keyword, page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: keyword,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);
  return response.data;
};
