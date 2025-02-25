// declare module '@astrojs/starlight/components/SidebarRestorePoint.astro';
// declare module '@astrojs/starlight/utils/navigation';

declare module 'virtual:starlight/user-images' {
  type ImageMetadata = import('astro').ImageMetadata;
  export const logos: {
    dark?: ImageMetadata;
    light?: ImageMetadata;
  };
}

declare module 'virtual:starlight/pagefind-config' {
  export const pagefindUserConfig: Partial<
    Extract<import('@astrojs/starlight/types').StarlightConfig['pagefind'], object>
  >;
}

// Add pagefind to the Window interface
interface Window {
  pagefind?: {
    search: (query: string) => Promise<any>;
    init: () => Promise<void>;
    [key: string]: any;
  };
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
}
