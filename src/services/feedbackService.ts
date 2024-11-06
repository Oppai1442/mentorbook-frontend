import { promises } from "dns";
import { Feedback, User } from "../types/Model";
import { getData } from "./apiService";


// Hàm gọi API để lấy phản hồi của mentor
export const getMentorFeedback = async (mentorId: number): Promise<Feedback[]> => {
  try {
    const response = await getData<Feedback[]>(`/api/feedback/mentor/${mentorId}`);
    
    if (!response.data) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching mentor feedback:', error);
    throw new Error('Failed to fetch mentor feedback');
  }
};
