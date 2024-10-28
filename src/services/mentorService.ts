import { mentorResponse } from "../types/Response";
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
        rating?: number,
        price?: number
    }
}

export const getAllMentors = async (data: requestBody = {} as requestBody) => {
    try {
        const response = await postData<mentorResponse[]>(`/api/mentor/get-all-mentors`, data);
        console.log(data)
        return response.data
    } catch (error) {
        throw error;
    }
};