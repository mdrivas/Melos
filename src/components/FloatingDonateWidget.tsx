'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function FloatingDonateWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createWidget = useCallback(() => {
    if (widgetRef.current) {
      setIsLoading(true);
      setError(null);
      console.log('Creating floating donate widget...');

      try {
        // Clean up any existing widget first
        const existingWidget = widgetRef.current.querySelector('givebutter-widget');
        if (existingWidget) {
          console.log('Removing existing widget');
          existingWidget.remove();
        }

        // Create new widget
        const widget = document.createElement('givebutter-widget');
        widget.setAttribute('id', 'jN0Nkg');
        widget.setAttribute('data-widget-type', 'floating');
        widget.setAttribute('data-widget-style', 'floating');
        widget.setAttribute('account', 'Ni26W4XQS87xMBtV');
        
        // Add event listeners for widget loading
        widget.addEventListener('load', () => {
          console.log('Widget loaded successfully');
          setIsLoading(false);
        });

        widget.addEventListener('error', (e) => {
          console.error('Widget failed to load:', e);
          setError('Failed to load donation button');
          setIsLoading(false);
        });

        widgetRef.current.appendChild(widget);
        console.log('Widget added to DOM');
      } catch (err) {
        console.error('Error creating widget:', err);
        setError('Failed to create donation button');
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    // Try immediately
    setTimeout(createWidget, 500);

    // Also try when script signals it's ready
    const handleGivebutterReady = () => {
      console.log('Givebutter ready event received');
      createWidget();
    };
    window.addEventListener('givebutter:ready', handleGivebutterReady);

    return () => {
      window.removeEventListener('givebutter:ready', handleGivebutterReady);
      setIsLoading(false);
      setError(null);
    };
  }, [createWidget]);

  if (error) {
    console.error('Widget error:', error);
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div ref={widgetRef} />
    </div>
  );
} 