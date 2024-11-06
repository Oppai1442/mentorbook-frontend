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