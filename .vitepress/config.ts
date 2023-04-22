import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sukino",
  description: "My digital garden and documentation to make my life more suki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Garden', link: '/garden/index.md' }
    ],

    sidebar: [
      {
        text: 'Linux',
        collapsed: true,
        items: [
          {
            text: 'Amazon Linux',
            collapsed: true,
            items: [
              {text: 'Open port', link: '/garden/linux/amazon-linux/open-port'}
            ]
          },
          {
            text: 'Ubuntu',
            collapsed: true,
            items: [
              {
                text: 'Python',
                collapsed: true,
                items: [
                  {text: 'Install Python 3.11', link: '/garden/linux/ubuntu/python/install-python-3-11.md'}
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Database',
        collapsed: true,
        items: [
          {
            text: 'PostgreSQL',
            collapsed: true,
            items: [
              {text: 'Enable remote connection', link: '/garden/database/postgresql/enable-connection'},
              {text: 'Manage user', link: '/garden/database/postgresql/manage-user'}
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HelloYeew/suki' }
    ]
  }
})
