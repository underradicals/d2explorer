import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "D2 Data",
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
      { text: 'Docs', link: '/docs/index' }
    ],

    sidebar: {
      '/docs/': [
        { text: 'D2 Data Intro', link: '/docs/index' },
        { text: 'Getting Started', link: '/docs/getting-started' },
        {
          text: 'Data Pipeline', items: [
            { text: 'Introduction', link: '/docs/dp/index' }
          ]
        },
        {
          text: 'Data Explorer', items: [
            { text: 'Introduction', link: '/docs/de/index' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/underradicals' },
      { icon: 'x', link: 'https://x.com/underradicals' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/underradicals/' }
    ]
  }
})
