'use client';

import { useEffect, useState, useCallback } from 'react';
import { useAuth } from './useAuth';

interface SyncData {
  sales: any[];
  products: any[];
  costs: any[];
  lastSync: string;
}

interface UseSyncOptions {
  onSync?: (data: SyncData) => void;
  onError?: (error: Error) => void;
  pollInterval?: number;
}

export function useRealtimeSync(options: UseSyncOptions = {}) {
  const { user } = useAuth();
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [data, setData] = useState<SyncData | null>(null);

  const pollInterval = options.pollInterval || 5000; // 5 segundos

  const performSync = useCallback(async () => {
    if (!user) return;

    setIsSyncing(true);
    setSyncStatus('syncing');

    try {
      // Simular sincronização com servidor
      const response = await fetch('/api/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          userId: user.id,
          lastSync: lastSync?.toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Sync failed');

      const syncedData: SyncData = await response.json();
      setData(syncedData);
      setLastSync(new Date());
      setSyncStatus('success');

      if (options.onSync) {
        options.onSync(syncedData);
      }

      // Reset status após 2 segundos
      setTimeout(() => setSyncStatus('idle'), 2000);
    } catch (error) {
      setSyncStatus('error');
      if (options.onError) {
        options.onError(error instanceof Error ? error : new Error('Unknown error'));
      }
    } finally {
      setIsSyncing(false);
    }
  }, [user, lastSync, options]);

  // Sincronizar quando o usuário fizer login
  useEffect(() => {
    if (user) {
      performSync();
    }
  }, [user, performSync]);

  // Polling para sincronização periódica
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(() => {
      performSync();
    }, pollInterval);

    return () => clearInterval(interval);
  }, [user, pollInterval, performSync]);

  // Sincronizar quando a aba voltar ao foco
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && user) {
        performSync();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [user, performSync]);

  return {
    isSyncing,
    lastSync,
    syncStatus,
    data,
    performSync,
  };
}
