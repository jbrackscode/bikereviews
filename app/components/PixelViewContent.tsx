'use client';
import { useEffect } from 'react';

export function PixelViewContent() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'ViewContent');
    }
  }, []);
  return null;
}
