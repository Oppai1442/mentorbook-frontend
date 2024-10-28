export interface User {
    id: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    role: string;
}

export interface mentor {
    userId: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    backgroundUrl: string;
    skills: skill[]
}

export interface skill {
    length: number;
    skillId: number;
    skillName: string;
    skillDescription: string;
}