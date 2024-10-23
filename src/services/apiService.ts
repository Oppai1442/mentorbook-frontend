const BASE_URL = process.env.REACT_APP_API_URL;

type ApiResponse<T> = {
  data: T | null;
  message: string | null;
  ok: boolean;
  statusCode: number;
  statusText: string | null;
  headers: Headers;
  url: string | null;
  redirected: boolean;
  type: string | null;
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
    ok: false,
    statusCode: 0,
    statusText: null,
    headers: new Headers(),
    url: null,
    redirected: false,
    type: null,
  };

  try {
    const response = await fetch(fullUrl, {
      method,
      headers: header,
      body: data ? JSON.stringify(data) : null,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    try {
      responseData = await response.json();
    } catch (e) {
      responseData = null;
    }

    if (!response.ok) {
      const error = new Error(responseData?.error || `HTTP error! Status: ${response.status}`);
      (error as any).response = response;
      throw error;
    }
    
    result = {
      data: responseData?.data || responseData,
      message: null,
      ok: response.ok,
      statusCode: response.status,
      statusText: response.statusText,
      headers: response.headers,
      url: response.url,
      redirected: response.redirected,
      type: response.type,
    }


  } catch (error: any) {
    clearTimeout(timeoutId);
    throw error;
  }

  return result;
};

// GET request
export const getData = <T>(url: string) => {
  try {
    return apiRequest<T>({ url, method: "GET" });
  } catch (error: any) {
    throw error;
  }
};

// POST request
export const postData = <T>(url: string, data: any) => {
  try {
    return apiRequest<T>({ url, method: "POST", data });
  } catch (error: any) {
    throw error;
  }
};

// PUT request
export const putData = <T>(url: string, data: any) => {
  try {
    return apiRequest<T>({ url, method: "PUT", data });
  } catch (error: any) {
    throw error;
  }
};

// DELETE request
export const deleteData = <T>(url: string) => {
  try {
    return apiRequest<T>({ url, method: "DELETE" });
  } catch (error: any) {
    throw error;
  }
};