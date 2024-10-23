import { postData } from "../services/apiService";
import { LoginResponse, User } from "../types";

const fetchUserFromToken = async (token: string): Promise<User | null> => {
  try {
    const response = await postData<LoginResponse>("/user/login-token", { token });
    return response.data?.user ?? null;
  } catch (error) {
    throw error;
  }
};

export default fetchUserFromToken;