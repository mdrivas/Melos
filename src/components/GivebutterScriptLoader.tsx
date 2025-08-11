'use client';

import Script from 'next/script';

export function GivebutterScriptLoader() {
  return (
    <Script
      src="https://widgets.givebutter.com/latest.umd.cjs?acct=Ni26W4XQS87xMBtV&p=other"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Givebutter script loaded');
        // Force a re-render of widgets if needed
        const widgets = document.querySelectorAll('givebutter-widget');
        widgets.forEach(widget => {
          if (!widget.hasAttribute('data-initialized')) {
            widget.setAttribute('data-initialized', 'true');
            // Clone and replace to trigger re-initialization
            const parent = widget.parentElement;
            if (parent) {
              const newWidget = widget.cloneNode(true);
              parent.replaceChild(newWidget, widget);
            }
          }
        });
      }}
      onError={(e) => {
        console.error('Error loading Givebutter script:', e);
      }}
    />
  );
} 