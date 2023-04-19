import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sukino",
  description: "My personal documentation to make my life more suki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'AWS',
        collapsed: true,
        items: [
          {
            text: 'EC2',
            collapsed: true,
            items: [
              {
                text: 'Amazon Linux',
                collapsed: true,
                items: [
                  {text: 'Open port', link: '/aws/ec2/amazon-linux/open-port'}
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
              {text: 'Enable remote connection', link: '/database/postgresql/enable-connection'},
              {text: 'Manage user', link: '/database/postgresql/manage-user'}
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
