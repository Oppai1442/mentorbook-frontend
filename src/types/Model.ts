import { SkillResponse } from "./Response";

export interface User {
    id: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    backgroundUrl: string;
    role: string;
    phone: number;
    gender: string;
    birthDate: Date;
    verified: boolean;
    createdDate: moment.Moment;
    lastActivity: moment.Moment;
    status: string;
}

export interface User2 {
    userId: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    backgroundUrl: string;
    role: string;
    phone: number;
    gender: string;
    birthDate: Date;
    verified: boolean;
    createdDate: moment.Moment;
    lastActivity: moment.Moment;
    status: string;
}

export interface mentor {
    userId: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    backgroundUrl: string;
    skills: SkillResponse[];
    price: number;
    rating: number;
    totalBooked: number;
    role: string;
    description: string;
    availableTime: MentorAvailability[];
}

interface MentorAvailability {
    day: string;
    timeSlots: TimeSlot[];
}

interface TimeSlot {
    start: string;
    end: string; 
}

export interface Feedback {
    feedbackId: string;
    comment: string;
    rating: number;
    feedbackTime: Date;
    userId: number;
    fullName: string;
    userAvatarUrl: string;
}

export interface mentorDetails {
    mentor: mentor;
}

export interface Skill {
    id: number;
    name: string;
    description: string;
}
