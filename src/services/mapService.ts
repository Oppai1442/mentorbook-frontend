// src/api/mapService.ts
const BASE_URL = 'http://localhost:8080/api/maps';

export const getGeocode = async () => {
  const response = await fetch(`${BASE_URL}/geocode`);
  if (!response.ok) {
    throw new Error('Error fetching geocode');
  }
  return await response.json();
};