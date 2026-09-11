const API_BASE = import.meta.env.VITE_API_URL ?? '/api';

export type AuthUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  authProvider: string;
};

export type AuthResponse = {
  token: string;
  user: AuthUser;
};

type ApiError = {
  message: string;
};

class AuthApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'AuthApiError';
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    let message = 'Something went wrong. Please try again.';
    try {
      const data = (await response.json()) as ApiError;
      if (data.message) message = data.message;
    } catch {
      // ignore parse errors
    }
    throw new AuthApiError(message, response.status);
  }

  return (await response.json()) as T;
}

export async function registerUser(payload: {
  fullName: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
}): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function loginUser(payload: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function googleSignIn(idToken: string): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/google', {
    method: 'POST',
    body: JSON.stringify({ idToken }),
  });
}

const TOKEN_KEY = 'tumbo_auth_token';
const USER_KEY = 'tumbo_auth_user';

export function saveAuthSession(response: AuthResponse): void {
  localStorage.setItem(TOKEN_KEY, response.token);
  localStorage.setItem(USER_KEY, JSON.stringify(response.user));
}

export function clearAuthSession(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser(): AuthUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export { AuthApiError };
