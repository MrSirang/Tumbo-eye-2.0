const API_BASE = import.meta.env.VITE_API_URL ?? '/api';

export type AuthUser = {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  authProvider: string;
  role?: string;
};

export type AuthResponse = {
  token: string;
  user: AuthUser;
};

type ApiError = {
  message?: string;
  Message?: string;
};

class AuthApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'AuthApiError';
    this.status = status;
  }
}

function normalizeUser(raw: Record<string, unknown>): AuthUser {
  return {
    id: String(raw.id ?? raw.Id ?? ''),
    fullName: String(raw.fullName ?? raw.FullName ?? ''),
    email: String(raw.email ?? raw.Email ?? ''),
    phone: (raw.phone ?? raw.Phone ?? null) as string | null,
    authProvider: String(raw.authProvider ?? raw.AuthProvider ?? 'Email'),
    role: (raw.role ?? raw.Role) as string | undefined,
  };
}

function normalizeAuthResponse(raw: Record<string, unknown>): AuthResponse {
  const token = String(raw.token ?? raw.Token ?? '');
  const userRaw = (raw.user ?? raw.User ?? {}) as Record<string, unknown>;
  if (!token) {
    throw new AuthApiError('Login succeeded but no token was returned.', 500);
  }
  return {
    token,
    user: normalizeUser(userRaw),
  };
}

async function request<T>(path: string, options: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
  } catch {
    throw new AuthApiError(
      'Cannot reach the Tumbo API. Start the backend on http://localhost:5000 and try again.',
      0,
    );
  }

  if (!response.ok) {
    let message = 'Something went wrong. Please try again.';
    try {
      const data = (await response.json()) as ApiError;
      message = data.message || data.Message || message;
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
  const raw = await request<Record<string, unknown>>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return normalizeAuthResponse(raw);
}

export async function loginUser(payload: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const raw = await request<Record<string, unknown>>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email.trim(),
      password: payload.password,
    }),
  });
  return normalizeAuthResponse(raw);
}

export async function googleSignIn(idToken: string): Promise<AuthResponse> {
  const raw = await request<Record<string, unknown>>('/auth/google', {
    method: 'POST',
    body: JSON.stringify({ idToken }),
  });
  return normalizeAuthResponse(raw);
}

export async function fetchCurrentUser(token: string): Promise<AuthUser> {
  const raw = await request<Record<string, unknown>>('/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return normalizeUser(raw);
}

export function isGoogleAuthConfigured(): boolean {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '';
  return Boolean(clientId) && !clientId.includes('YOUR_GOOGLE_CLIENT_ID');
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
    return normalizeUser(JSON.parse(raw) as Record<string, unknown>);
  } catch {
    return null;
  }
}

export { AuthApiError };
