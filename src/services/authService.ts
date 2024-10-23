import { postData } from "../services/apiService";
import { LoginResponse, User } from "../types";

export const fetchUserFromToken = async (token: string): Promise<User | null> => {
  try {
    const response = await postData<LoginResponse>("/user/login-token", { token });
    return response.data?.user ?? null;
  } catch (error) {
    throw error;
  }
};

interface signIn {
  email: string;
  password: string;
}

export const signIn = async (credentials: signIn) => {
  try {
    const response = await postData<LoginResponse>("/user/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface signUp {
  fullName: string;
  birthDate: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export const signUp = async (credentials: signUp) => {
  try {
    const response = await postData<LoginResponse>("/user/register", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}