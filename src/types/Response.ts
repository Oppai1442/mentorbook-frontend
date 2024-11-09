import { mentor, User } from "./Model";

export interface LoginResponse {
    token: string;
    user: User;
}

export interface SignUpResponse {
    token: string;
    user: User;
}

export interface UpdateProfileResponse {
    token: string;
    user: User;
}

export interface MentorResponse {
    totalFound: number;
    mentors: mentor[];
}

export interface SkillResponse {
    skillId: number;
    skillName: string;
    skillDescription: string;
}

export interface MentorBooking {
    id: number;
    date: moment.Moment;
    duration: number;
    customer: User;
    mentor: User;
}


export interface bookings {
    id: number;
    customer: User;
    mentor: User;
    bookingTime: moment.Moment;
    startTime: moment.Moment;
    duration: number;
    status: string;
    meetUrl: string;
    description: string;
    cost: number;
}
export interface UserBookingResponse {
    totalFound: number;
    bookingResponse: bookings[];
}

export interface TransactionResponse {
    transactionId: number;
    transactionType: string;
    amount: string;
    paymentMethod: string;
    createdDate: string;
    completionTime: string | null;
    status: string;
}