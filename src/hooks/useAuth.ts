'use client';

import { useState, useCallback } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  businessName?: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Validar entrada
      if (!email || !password) {
        throw new Error('Email e senha são obrigatórios');
      }
      
      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        name: 'Usuário',
        email: email,
        businessName: 'Meu Negócio',
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('authToken', 'mock-token');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (
    email: string,
    password: string,
    name: string,
    businessName: string
  ) => {
    setIsLoading(true);
    try {
      // Validar entrada
      if (!email || !password || !name || !businessName) {
        throw new Error('Todos os campos são obrigatórios');
      }
      
      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockUser: User = {
        id: '1',
        name: name,
        email: email,
        businessName: businessName,
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('authToken', 'mock-token');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
  };
}
