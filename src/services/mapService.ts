import { getData } from "./apiService";

interface GeoCode {
  url: string;
}


const getGeocode = async (): Promise<string | undefined> => {
  try {
    const response = await getData<GeoCode>(`/api/maps/geocode`);
    return response.data?.url;
  } catch (error) {
    throw error;
  }
};

export default getGeocode;