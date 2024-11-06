import { mentorDetails } from "../types/Model";
import { MentorResponse } from "../types/Response";
import { getData, postData } from "./apiService";

interface requestBody {
    page?: number;
    skillIds?: number[];
    rating?: number[],
    prices?: {
        min?: number,
        max?: number
    },
    sorting?: {
        bookings?: string,
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

export const getMentorData = async (mentorId: string) => {

    try {
        const response = await getData<mentorDetails>(`/api/mentor/get-mentor-data/${mentorId}`);
        
        return response.data
    } catch (error) {
        throw error;
    }
};