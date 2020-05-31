const path = require("path");

module.exports = {
  title: 'Platform',
  base: '/',
  outputDir: path.resolve(__dirname, ".vuepress/dist"),
  description: '',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,"../assets")
      }
    }
  },
  themeConfig: {
    repo: 'https://github.com/intempt/help',
    logo: 'logo-footer.svg',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    activeHeaderLinks : true,
    nav: [
      {
        text: 'Slack Us',
        link: 'https://tryintempt.slack.com/',
      },
      {
        text: 'Docs',
        link: '/',
      },
      {
        text: 'API References',
        link: 'https://dev.intempt.com/'
      },
      {
        text: 'Login',
        link: 'https://app.intempt.com/login'
      },
      {
        text: 'Get Started',
        link: 'https://app.intempt.com/home'
      },
    ],
    sidebar: {
      '/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            'what-is-intempt-platform',
            'what-can-i-do-with-intempt-patform',
            'sources-explained',
            'where-do-i-start',
            'we-are-here-to-help',
            'sample-app',
            'experiment-with-the-sample-app',
            'sample-use-case',
            'five-steps-to-success',
            'go-live-checklist',
            'useful-definition',
]
},
{
  title: 'Console',
  collapsable: false,
  children: [
    'getting-started',
    'sources',
    'events',
    'segments',
    'glossary',
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
