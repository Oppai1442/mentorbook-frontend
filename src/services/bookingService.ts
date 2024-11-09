import { bookings, MentorBooking, UserBookingResponse } from "../types/Response";
import { getData, postData } from "./apiService";

interface createBookingRequest {
    userId: number | undefined;
    mentorId: number;
    startTime: String;
    duration: number;
}

export const createBooking = async (data: createBookingRequest): Promise<any>=> {
  try {
    const response = await postData(`/api/bookings/create`, data);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

interface GetMentorBookingsByMonthRequest {
  mentorId: number;
  month: number;
  year: number;
}

export const getMentorBookingsByMonth = async (data: GetMentorBookingsByMonthRequest): Promise<MentorBooking[]> => {
  try {
    const response = await getData<MentorBooking[]>(`/api/bookings/getBookings/get-mentor-bookings-by-month?mentorId=${data.mentorId}&month=${data.month}&year=${data.year}`);
    return response.data || [];
  } catch (error) {
    throw error;
  }
};

// Interface for getting mentor bookings by week
interface GetMentorBookingsByWeekRequest {
  mentorId: number;
  startOfWeek: string;
  endOfWeek: string;
}

export const getMentorBookingsByWeek = async (data: GetMentorBookingsByWeekRequest): Promise<MentorBooking[]> => {
  try {
    const response = await getData<MentorBooking[]>(`/api/bookings/getBookings/get-mentor-bookings-by-week?mentorId=${data.mentorId}&startOfWeek=${data.startOfWeek}&endOfWeek=${data.endOfWeek}`);
    return response.data || [];
  } catch (error) {
    throw error;
  }
};

interface GetMentorBookingsByDateRequest {
  mentorId: number;
  date: string;
}

export const getMentorBookingsByDate = async (data: GetMentorBookingsByDateRequest): Promise<MentorBooking[]> => {
  try {
    const response = await getData<MentorBooking[]>(`/api/bookings/getBookings/get-mentor-bookings-by-date?mentorId=${data.mentorId}&date=${data.date}`);
    return response.data || [];
  } catch (error) {
    throw error;
  }
};

interface GetMentorBookings {
  userId: number;
  page: number;
  resultCount: number;
  searchValue?: string,
}

export const getMentorBookings = async (data: GetMentorBookings): Promise<UserBookingResponse> => {
  try {
    const response = await postData<UserBookingResponse>(`/api/bookings/getBookings`, data);

    if (response.data) {
      return response.data;
    } else {
      throw new Error("Response data is null");
    }
  } catch (error) {
    throw error;
  }
}

interface bookingGenerateMeetUrlRequest {
  bookingId: number;
  redirectUri: string;
}

export const bookingGenerateMeetUrl = async (data: bookingGenerateMeetUrlRequest) => {
  try {
      const response = await postData(`/api/bookings/create-meet-room`, data);

      if (typeof response.data === 'string') { 
          return response.data;
      } else {
          throw new Error("Response data is not a valid URL string");
      }
  } catch (error) {
      console.error("Error in bookingGenerateMeetUrl:", error);
      throw error;
  }
};

interface UpdateBookingStatusRequest {
  bookingId: number;
  status: string;
}

export const updateBookingStatus = async (data: UpdateBookingStatusRequest): Promise<any> => {
  try {
      const response = await postData(`/api/bookings/update-status`, data);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const acceptBooking = async (bookingId: number): Promise<any> => {
  return updateBookingStatus({ bookingId, status: 'accepted' });
};

export const rejectBooking = async (bookingId: number): Promise<any> => {
  return updateBookingStatus({ bookingId, status: 'rejected' });
};

export const finishBooking = async (bookingId: number): Promise<any> => {
  return updateBookingStatus({ bookingId, status: 'finish' });
};