import { User } from "./index";

export default interface LoginResponse {
    token: string; 
    user: User;
}