import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { AuthResponse, AuthUser } from '../lib/auth';
import {
  clearAuthSession,
  fetchCurrentUser,
  getStoredToken,
  getStoredUser,
  saveAuthSession,
} from '../lib/auth';

type AuthContextValue = {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  authReady: boolean;
  setSession: (response: AuthResponse) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => getStoredUser());
  const [token, setToken] = useState<string | null>(() => getStoredToken());
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const hydrate = async () => {
      const storedToken = getStoredToken();
      const storedUser = getStoredUser();

      if (!storedToken || !storedUser) {
        if (!cancelled) {
          setUser(null);
          setToken(null);
          setAuthReady(true);
        }
        return;
      }

      try {
        const fresh = await fetchCurrentUser(storedToken);
        if (cancelled) return;
        setToken(storedToken);
        setUser(fresh);
        localStorage.setItem('tumbo_auth_user', JSON.stringify(fresh));
      } catch {
        if (cancelled) return;
        clearAuthSession();
        setUser(null);
        setToken(null);
      } finally {
        if (!cancelled) setAuthReady(true);
      }
    };

    void hydrate();
    return () => {
      cancelled = true;
    };
  }, []);

  const setSession = useCallback((response: AuthResponse) => {
    saveAuthSession(response);
    setUser(response.user);
    setToken(response.token);
  }, []);

  const logout = useCallback(() => {
    clearAuthSession();
    setUser(null);
    setToken(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token && user),
      authReady,
      setSession,
      logout,
    }),
    [user, token, authReady, setSession, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
