import { postData } from "../services/apiService";
import { LoginResponse, SignUpResponse, UpdateProfileResponse } from "../types";
import { User } from "../types/Model";

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
  gender: string;
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

export const updateProfileService = async (userData: User) => {
  try {
    const response = await postData<UpdateProfileResponse>("/user/update", userData);
    if (response.data === null) {
      throw new Error("Failed to update user profile");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
