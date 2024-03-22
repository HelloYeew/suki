import { defineConfig } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sukino",
  description: "My digital garden and documentation to make my life more suki",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Garden', link: '/garden/index.md' },
      { text: 'Notes', link: '/notes/index.md' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: generateSidebar([
      {
        documentRootPath: 'garden',
        resolvePath: '/garden/',
        useTitleFromFileHeading: true
      },
      {
        documentRootPath: 'notes',
        resolvePath: '/notes/',
        useTitleFromFrontmatter: true
      }
    ]),

    editLink: {
      pattern: 'https://github.com/HelloYeew/suki/edit/main/:path',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HelloYeew/suki' }
    ]
  }
})
