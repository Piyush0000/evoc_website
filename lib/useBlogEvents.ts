import { useEffect, useRef } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5001';
const POLL_INTERVAL_MS = 8000;
const RECONNECT_DELAY_MS = 5000;

export function useBlogEvents(onUpdate: () => void) {
  const onUpdateRef = useRef(onUpdate);
  onUpdateRef.current = onUpdate;

  useEffect(() => {
    let es: EventSource | null = null;
    let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
    let pollTimer: ReturnType<typeof setInterval> | null = null;
    let cancelled = false;

    const refresh = (reason: string) => {
      console.log(`[blog-sync] refetch (${reason})`);
      onUpdateRef.current();
    };

    const startPolling = () => {
      if (pollTimer) return;
      pollTimer = setInterval(() => {
        if (document.visibilityState === 'visible') {
          refresh('poll');
        }
      }, POLL_INTERVAL_MS);
    };

    const stopPolling = () => {
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
    };

    const closeStream = () => {
      if (es) {
        es.close();
        es = null;
      }
    };

    const connect = () => {
      if (cancelled) return;
      closeStream();
      console.log('[blog-sync] SSE connecting…');
      es = new EventSource(`${API_URL}/api/blogs/events`);

      es.onopen = () => {
        console.log('[blog-sync] SSE open');
        refresh('sse-open');
      };

      const onAny = (label: string) => () => refresh(`sse:${label}`);
      es.addEventListener('blog-update', onAny('blog-update'));
      es.addEventListener('blog-created', onAny('blog-created'));
      es.addEventListener('blog-deleted', onAny('blog-deleted'));
      es.addEventListener('message', onAny('message'));

      es.onerror = () => {
        if (cancelled) return;
        console.warn('[blog-sync] SSE error, will reconnect');
        closeStream();
        if (reconnectTimer) clearTimeout(reconnectTimer);
        reconnectTimer = setTimeout(connect, RECONNECT_DELAY_MS);
      };
    };

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        refresh('visibility');
      }
    };

    const onFocus = () => refresh('focus');

    connect();
    startPolling();
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('focus', onFocus);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('focus', onFocus);
      closeStream();
      stopPolling();
      if (reconnectTimer) clearTimeout(reconnectTimer);
    };
  }, []);
}
