import { getData } from "./apiService";

const BASE_URL = process.env.REACT_APP_API_URL + '/api/maps';

export const getGeocode = async () => {
  try {
    const response = await getData(`${BASE_URL}/geocode`);
    return response;
  } catch (error) {
    throw new Error('Error fetching geocode');
  }
};
