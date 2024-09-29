const BASE_URL = process.env.REACT_APP_API_URL + '/api/maps';

export const getGeocode = async () => {
  const response = await fetch(`${BASE_URL}/geocode`);
  if (!response.ok) {
    throw new Error('Error fetching geocode');
  }
  return await response.json();
};