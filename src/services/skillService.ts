import { getData } from "./apiService";
import { SkillResponse } from "../types/Response";

export const getAllSkills = async () => {
  try {
    const response = await getData<SkillResponse[]>(`/api/skill/get-all-skills`);
    
    return response.data
  } catch (error) {
    throw error;
  }
};

