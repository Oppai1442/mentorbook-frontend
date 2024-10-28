import { User } from "./User";

export interface LoginResponse {
    token: string; 
    user: User;
}

export interface SignUpResponse {
    token: string; 
    user: User;
}

export interface mentorResponse {
    userId: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    backgroundUrl: string;
    skills: SkillResponse[]
}

export interface SkillResponse {
    length: number;
    skillId: number;
    skillName: string;
    skillDescription: string;
}