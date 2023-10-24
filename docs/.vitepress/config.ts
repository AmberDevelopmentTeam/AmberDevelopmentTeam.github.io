import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Amber Development',
  description: 'best & simpliest module on roblox studio.',

  themeConfig: {
    nav: [
      //{ text: 'Example', link: '/example' },

      {
        text: 'Modules',
        items: [
          { text: 'Audio Manager', link: '/modules/audio-manager' },
          { text: 'Randomizer', link: '/modules/randomizer' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Modules',
        items: [
          { text: 'Audio Manager', link: '/modules/audio-manager' },
          { text: 'Randomizer', link: '/modules/randomizer' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AmberDevelopmentTeam' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link',
      },
    ],
  },
});
