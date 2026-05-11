'use client';

import { useEffect, useState, useCallback } from 'react';
import { ref, onValue, set, update, remove, get } from 'firebase/database';
import { database } from '@/lib/firebase';
import { useAuth } from './useAuth';

interface FirebaseSyncOptions {
  path: string;
  onData?: (data: any) => void;
  onError?: (error: Error) => void;
  autoSync?: boolean;
}

export function useFirebaseSync(options: FirebaseSyncOptions) {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const dbRef = user ? ref(database, `users/${user.id}/${options.path}`) : null;

  // Ler dados
  const readData = useCallback(async () => {
    if (!dbRef) return null;

    try {
      setIsLoading(true);
      const snapshot = await get(dbRef);
      const fetchedData = snapshot.val();
      setData(fetchedData);
      if (options.onData) {
        options.onData(fetchedData);
      }
      return fetchedData;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      if (options.onError) {
        options.onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [dbRef, options]);

  // Escrever dados
  const writeData = useCallback(
    async (newData: any) => {
      if (!dbRef) return;

      try {
        setIsSyncing(true);
        await set(dbRef, newData);
        setData(newData);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        if (options.onError) {
          options.onError(error);
        }
      } finally {
        setIsSyncing(false);
      }
    },
    [dbRef, options]
  );

  // Atualizar dados (merge)
  const updateData = useCallback(
    async (updates: any) => {
      if (!dbRef) return;

      try {
        setIsSyncing(true);
        await update(dbRef, updates);
        setData((prev: any) => ({ ...prev, ...updates }));
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        if (options.onError) {
          options.onError(error);
        }
      } finally {
        setIsSyncing(false);
      }
    },
    [dbRef, options]
  );

  // Deletar dados
  const deleteData = useCallback(async () => {
    if (!dbRef) return;

    try {
      setIsSyncing(true);
      await remove(dbRef);
      setData(null);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      if (options.onError) {
        options.onError(error);
      }
    } finally {
      setIsSyncing(false);
    }
  }, [dbRef, options]);

  // Listener em tempo real
  useEffect(() => {
    if (!dbRef || !options.autoSync) return;

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const fetchedData = snapshot.val();
        setData(fetchedData);
        setIsLoading(false);
        if (options.onData) {
          options.onData(fetchedData);
        }
      },
      (err) => {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        setIsLoading(false);
        if (options.onError) {
          options.onError(error);
        }
      }
    );

    return () => unsubscribe();
  }, [dbRef, options]);

  return {
    data,
    isLoading,
    isSyncing,
    error,
    readData,
    writeData,
    updateData,
    deleteData,
  };
}
