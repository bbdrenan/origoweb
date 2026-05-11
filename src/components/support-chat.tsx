'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: any;
  }
}

export function SupportChat() {
  useEffect(() => {
    // Inicializar Intercom
    const APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;
    
    if (!APP_ID) return;

    // Configurar Intercom
    window.intercomSettings = {
      api_base: 'https://api-iam.intercom.io',
      app_id: APP_ID,
      alignment: 'right',
      horizontal_padding: 20,
      vertical_padding: 20,
    };

    // Carregar script do Intercom
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://widget.intercom.io/widget/' + APP_ID;
    document.head.appendChild(script);

    // Função para inicializar Intercom
    const initIntercom = () => {
      if (window.Intercom) {
        window.Intercom('boot', window.intercomSettings);
      }
    };

    // Aguardar carregamento do script
    script.onload = initIntercom;

    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

// Função helper para mostrar mensagem no chat
export function showChatMessage(message: string) {
  if (typeof window !== 'undefined' && window.Intercom) {
    window.Intercom('showMessages');
    if (message) {
      window.Intercom('update', { message });
    }
  }
}

// Função helper para abrir chat
export function openChat() {
  if (typeof window !== 'undefined' && window.Intercom) {
    window.Intercom('show');
  }
}

// Função helper para fechar chat
export function closeChat() {
  if (typeof window !== 'undefined' && window.Intercom) {
    window.Intercom('hide');
  }
}

// Função helper para definir atributos do usuário
export function setUserAttributes(userId: string, attributes: Record<string, any>) {
  if (typeof window !== 'undefined' && window.Intercom) {
    window.Intercom('update', {
      user_id: userId,
      ...attributes,
    });
  }
}
