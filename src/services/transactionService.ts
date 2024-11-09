
import { TransactionResponse } from "../types/Response";
import { getData, postData } from "./apiService";

export const walletGetBalance = async (userId: number) => {
    try {
        const response = await getData<number>(`/api/wallet/get-balance?userId=${userId}`);

        return response.data
    } catch (error) {
        throw error;
    }
};

interface walletDepositRequest {
    userId: number;
    amount: number;
    redirectUrl: string;
}

export const walletDeposit = async (data: walletDepositRequest): Promise<string> => {
    try {
        const response = await postData<{ ok: boolean; data: string }>(`/api/wallet/deposit`, data);

        if (!response.ok) {
            throw new Error('Failed to create deposit');
        }

        if (typeof response.data !== 'string') {
            throw new Error('Unexpected response format');
        }

        return response.data;
    } catch (error) {
        console.error('Error during wallet deposit:', error);
        throw error;
    }
};

interface getTransaction {
    userId: number;
    page: number;
    resultCount: number;
}

interface getTransactionResponse {
    transactions: TransactionResponse[];
    totalFound: number;
}

export const getTransactionHistory = async (data: getTransaction) => {
    try {
        const response = await postData<getTransactionResponse>(`/api/transactions/get-transaction`, data);

        if (!response.ok) {
            throw new Error('Failed to fetch transaction history');
        }

        if (!response.data) {
            throw new Error('Unexpected response format');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        throw error;
    }
};
