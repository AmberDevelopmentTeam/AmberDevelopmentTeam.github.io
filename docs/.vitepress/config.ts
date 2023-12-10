import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Magic Modules',
  description: 'The magic wand behind your roblox game.',

  themeConfig: {
    sidebar: [
      {
        text: 'MModules',
        items: [
          {
            text: 'Get Started',
            collapsed: false,
            items: [
              {
                text: 'What is MModules?',
                link: '/pages/Get Started/What Is MModules',
              },
              {
                text: 'Our Terms of Service',
                //link: '/pages/Audio Manager/Introduction',
              },
              {
                text: 'Deploy',
                //link: '/pages/Audio Manager/Introduction',
              },
              {
                text: 'Credits',
                link: '/pages/Get Started/Credits',
              },
            ],
          },
          {
            text: 'Audio Manager',
            collapsed: false,
            items: [
              {
                text: 'Introduction',
                link: '/pages/Audio Manager/Introduction',
              },
              {
                text: 'Documentation',
                link: '/pages/Audio Manager/Documentation',
              },
            ],
          },
          {
            text: 'Randomizer',
            collapsed: false,
            items: [
              {
                text: 'Introduction',
                link: '/pages/Randomizer/Introduction',
              },
              {
                text: 'Documentation',
                link: '/pages/Randomizer/Documentation',
              },
            ],
          },
          {
            text: 'Layout Order',
            collapsed: false,
            items: [
              {
                text: 'Introduction',
                link: '/pages/Layout Order/Introduction',
              },
              {
                text: 'Documentation',
                link: '/pages/Layout Order/Documentation',
              },
            ],
          },
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
