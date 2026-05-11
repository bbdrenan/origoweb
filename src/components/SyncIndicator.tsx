'use client';

import { useRealtimeSync } from '@/hooks/useRealtimeSync';

export function SyncIndicator() {
  const { syncStatus, lastSync } = useRealtimeSync();

  const getStatusColor = () => {
    switch (syncStatus) {
      case 'syncing':
        return 'bg-yellow-100 text-yellow-800';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (syncStatus) {
      case 'syncing':
        return 'Sincronizando...';
      case 'success':
        return 'Sincronizado';
      case 'error':
        return 'Erro na sincronização';
      default:
        return 'Pronto';
    }
  };

  const getStatusIcon = () => {
    if (syncStatus === 'syncing') {
      return (
        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    }

    if (syncStatus === 'success') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    }

    if (syncStatus === 'error') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }

    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
      {getStatusIcon()}
      <span>{getStatusText()}</span>
      {lastSync && (
        <span className="text-xs opacity-75">
          ({new Date(lastSync).toLocaleTimeString('pt-BR')})
        </span>
      )}
    </div>
  );
}
