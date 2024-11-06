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
}

export interface mentor {
    userId: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    backgroundUrl: string;
    skills: SkillResponse[]
    price: number;
    rating: number;
    totalBooked: number;
    role: string;
}

export interface Skill {
    id: number;
    name: string;
    description: string;
}