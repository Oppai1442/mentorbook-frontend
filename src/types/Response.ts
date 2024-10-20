import { User } from "./index";

export default interface LoginResponse {
    data: { token: string; user: User; };
}