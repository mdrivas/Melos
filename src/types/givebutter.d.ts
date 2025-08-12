declare namespace JSX {
  interface IntrinsicElements {
    'givebutter-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      id: string;
    };
  }
}

interface GivebutterWidgetType {
  init: () => void;
}

declare global {
  interface Window {
    GivebutterWidget: GivebutterWidgetType;
  }
} 