import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'

const config: Config = {
  url: 'https://eyepoint-access.com/',
  baseUrl: '/',

  title: 'Eyepoint Security',
  tagline: 'Visual Privacy Redefined.',
  favicon: 'img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        pages: {},
        theme: {
          customCss: ['./src/css/custom.css', './src/css/docu-notion-styles.css'],
        },
        gtag: {
          trackingID: 'G-9JB29EVXQ5',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    parseFrontMatter: async (params) => {
      const { frontMatter, content } = await params.defaultParseFrontMatter(params)
      return {
        frontMatter: {
          ...frontMatter,
          hide_table_of_contents: true,
        },
        content,
      }
    },
  },

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Eyepoint Security',
      logo: {
        alt: 'Eyepoint Security Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Home',
          to: '/',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Eyepoint Security Logo',
        src: 'img/logo-transparent.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Eyepoint Security`,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
