
import { User2 } from "../types/Model";
import { postData } from "./apiService";


interface getUserRequest {
    userId: number;
    currentPage: number;
    resultCount: number;
}

interface userResponse {
    users: User2[];
    totalFound: number;
}

export const getUsers = async (data: getUserRequest): Promise<userResponse> => {
    try {
        const response = await postData<userResponse>(`/user/get-user`, data);

        if (!response.data) {
            return { users: [], totalFound: 0 };
        }

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user list');
    }
};

export const resetUserPasswordAPI = async (userId: number): Promise<void> => {
    try {
        const response = await postData<{ success: boolean }>(`/user/reset-password`, { userId });

        // if (!response.data || !response.data.success) {
        //     throw new Error('Failed to reset user password');
        // }

        console.log(`Password reset for user ${userId} successfully`);
    } catch (error) {
        console.error(`Error resetting password for user ${userId}:`, error);
        throw error;
    }
};

export const updateRoleOrStatusAPI = async (
    userId: number,
    value: string,
    type: 'role' | 'status'
): Promise<void> => {
    try {
        const endpoint = type === 'role' ? '/user/update-role' : '/user/update-status';
        const payload = { userId, value };
        console.log(endpoint)
        const response = await postData<{ success: boolean }>(endpoint, payload);

        // if (!response.data || !response.data.success) {
        //     throw new Error(`Failed to update user ${type}`);
        // }

        console.log(`User ${type} updated for user ${userId} successfully`);
    } catch (error) {
        console.error(`Error updating user ${type} for user ${userId}:`, error);
        throw error;
    }
};
