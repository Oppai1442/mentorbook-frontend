import { postData } from "../services/apiService";
import { LoginResponse, SignUpResponse } from "../types";
import { User } from "../types/User";

export const fetchUserFromToken = async (token: string): Promise<User | null> => {
  try {
    const response = await postData<LoginResponse>("/user/login-token", { token });
    return response.data?.user ?? null;
  } catch (error) {
    throw error;
  }
};

interface SignInCredentials {
  email: string;
  password: string;
}

export const signIn = async (credentials: SignInCredentials ) => {
  try {
    const response = await postData<LoginResponse>("/user/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface signUpCredentials {
  fullName: string;
  birthDate: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export const signUp = async (credentials: signUpCredentials) => {
  try {
    const response = await postData<SignUpResponse>("/user/register", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}