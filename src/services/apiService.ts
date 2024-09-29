const BASE_URL = 'https://api.example.com'; // URL của API

interface RequestOptions extends RequestInit {
  headers?: {
    [key: string]: string;
  };
}

// Hàm dùng để gọi API GET
export const getRequest = async <T>(endpoint: string, options?: RequestOptions): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
};

// Hàm dùng để gọi API POST
export const postRequest = async <T>(
  endpoint: string,
  body: any,
  options?: RequestOptions
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
};

// Hàm dùng để gọi API PUT
export const putRequest = async <T>(
  endpoint: string,
  body: any,
  options?: RequestOptions
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
};

// Hàm dùng để gọi API DELETE
export const deleteRequest = async <T>(
  endpoint: string,
  options?: RequestOptions
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
};
