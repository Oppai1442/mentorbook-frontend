import { MentorResponse } from "../types/Response";
import { postData } from "./apiService";

interface requestBody {
    page?: number;
    skillIds?: number[];
    rating?: number[],
    prices?: {
        min?: number,
        max?: number
    },
    sorting?: {
        name?: string,
        experience?: string,
        rating?: string,
        price?: string
    }
}

export const getAllMentors = async (data: requestBody) => {
    try {
        const response = await postData<MentorResponse>(`/api/mentor/get-mentors`, data);
        
        return response.data
    } catch (error) {
        throw error;
    }
};