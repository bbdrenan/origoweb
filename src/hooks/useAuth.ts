'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, AuthContextType } from '@/types/auth';

interface AuthStore extends AuthContextType {
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setLoading: (loading) => set({ isLoading: loading }),

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          if (!response.ok) throw new Error('Login failed');

          const { user, token } = await response.json();
          localStorage.setItem('authToken', token);
          set({ user, isAuthenticated: true });
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (email: string, password: string, name: string, businessName: string) => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, name, businessName }),
          });

          if (!response.ok) throw new Error('Registration failed');

          const { user, token } = await response.json();
          localStorage.setItem('authToken', token);
          set({ user, isAuthenticated: true });
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        localStorage.removeItem('authToken');
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: async (data: Partial<User>) => {
        set({ isLoading: true });
        try {
          const response = await fetch('/api/auth/profile', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) throw new Error('Update failed');

          const { user } = await response.json();
          set({ user });
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export function useAuth() {
  return useAuthStore();
}
