import { Skill } from "../types/Model";
import { getData } from "./apiService";

export const getAllSkills = async () => {
  try {
    const response = await getData<Skill[]>(`/api/skill/get-all-skills`);
    
    return response.data
  } catch (error) {
    throw error;
  }
};

