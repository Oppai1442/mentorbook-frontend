import { postData } from "./apiService";

interface imageUrlResponse {
    url: string;
}

export const userUploadProfile = async (formData : any) => {
  try {
    const response = await postData<imageUrlResponse>(`/api/images/upload`, formData);
    
    return response.data
  } catch (error) {
    throw error;
  }
};

