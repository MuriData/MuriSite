// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MuriData',
  url: 'https://muri.moe',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'icon/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MuriData',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/MuriData',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a class="button button--secondary">In Progress...</a>'
          }
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Project MuriData. Made with ❤ by Shugetsu Soft.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
