
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "Underradicals",
  description: "D2 Documentation",
  lastUpdated: true,
  themeConfig: {
    outline: {
      level: [1, 4]
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: "Resume", items: [
          { text: 'Visit Page', link: '/resume/index' },
          { text: 'Download Resume', link: '/resume.pdf', target: 'blank' }
        ]
      },
      {
        text: 'Blog', items: [
          { text: 'Home', link: 'blog/index' },
          { text: 'Computer Science', items: [] },
          { text: 'Information Technology', items: [] },
          { text: 'Javascript', items: [] },
          { text: 'C# and .NET', items: [] },
          { text: 'Python', items: [] },
          { text: 'Data Pipelines', items: [] },
          { text: 'Working with Databases', items: [] },
        ]
      },
      {
        text: 'Docs', items: [
          { text: 'Introduction', link: 'docs/index' },
          { text: 'Getting Started', link: 'docs/setup/getting-started' }
        ]
      }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Bibliography', items: [
            { text: 'Who am I', link: '/docs/index' },
          ]
        }
      ],
      '/docs/setup/': [
        {
          text: 'Setup', items: [
            { text: 'Setting Up Vitepress', link: '/docs/setup/getting-started' }
          ]
        }
      ],
      '/blog/': [
        { text: 'Introduction', link: 'blog/index' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/underradicals' },
      { icon: 'x', link: 'https://x.com/underradicals' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/underradicals/' }
    ]
  }
})
