// declare module '@astrojs/starlight/components/SidebarRestorePoint.astro';
// declare module '@astrojs/starlight/utils/navigation';

declare module 'virtual:starlight/user-images' {
  type ImageMetadata = import('astro').ImageMetadata;
  export const logos: {
    dark?: ImageMetadata;
    light?: ImageMetadata;
  };
}
