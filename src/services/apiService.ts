const BASE_URL = process.env.REACT_APP_API_URL;

const apiRequest = async <T>(url: string, method: string, data?: any, timeout = 5000): Promise<T> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const fullUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;

  const response = await fetch(fullUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  let responseData;
  try {
    responseData = await response.json();
  } catch (e) {
    responseData = null;
  }

  if (!response.ok) {
    const error = new Error(responseData || `HTTP error! Status: ${response.status}`);
    (error as any).status = response.status;
    throw error;
  }

  return responseData;
};


// GET request
export const getData = <T>(url: string) => {
  return apiRequest<T>(url, "GET");
};

// POST request
export const postData = <T>(url: string, data: any) => {
  return apiRequest<T>(url, "POST", data);
};

// PUT request
export const putData = <T>(url: string, data: any) => {
  return apiRequest<T>(url, "PUT", data);
};

// DELETE request
export const deleteData = <T>(url: string) => {
  return apiRequest<T>(url, "DELETE");
};

