const BASE_URL = process.env.REACT_APP_API_URL;

type ApiResponse<T> = {
  data: T | null;
  message: string | null;
  isSuccess: boolean;
  statusCode: number;
};

interface ApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE"; 
  data?: Record<string, any>;
  header?: { [key: string]: string }
  timeout?: number;
}

const apiRequest = async <T>(request: ApiRequest): Promise<ApiResponse<T>> => {
  const { url, method, data, 
    header = { "Content-Type": "application/json" }, 
    timeout = 5000 
  } = request;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const fullUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;

  let responseData: any;
  let result: ApiResponse<T> = {
    data: null,
    message: null,
    isSuccess: false,
    statusCode: 0,
  };

  try {
    const response = await fetch(fullUrl, {
      method,
      headers: header,
      body: data ? JSON.stringify(data) : null,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    result.statusCode = response.status;

    try {
      responseData = await response.json();
    } catch (e) {
      responseData = null;
    }

    if (!response.ok) {
      const error = new Error(responseData?.message || `HTTP error! Status: ${response.status}`);
      (error as any).status = response.status;
      throw error;
    }

    result.data = responseData.data || responseData;
    result.isSuccess = true;

  } catch (error: unknown) {
    clearTimeout(timeoutId);
    if (error instanceof Error) {
      result.message = error.message;
    } else {
      result.message = "An unknown error occurred";
    }
  }

  return result;
};

// GET request
export const getData = <T>(url: string) => {
  return apiRequest<T>({ url, method: "GET" });
};

// POST request
export const postData = <T>(url: string, data: any) => {
  return apiRequest<T>({ url, method: "POST", data });
};

// PUT request
export const putData = <T>(url: string, data: any) => {
  return apiRequest<T>({ url, method: "PUT", data });
};

// DELETE request
export const deleteData = <T>(url: string) => {
  return apiRequest<T>({ url, method: "DELETE" });
};