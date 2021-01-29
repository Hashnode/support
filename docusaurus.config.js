module.exports = {
  title: 'Hashnode Support',
  tagline: 'Your go-to guide for understanding Hashnode a little better',
  url: 'https://help.hashnode.com/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611242173172/AOX1gE2jc.png',
  organizationName: 'hashnode', // Usually your GitHub org/user name.
  projectName: 'hashnode-guide', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'Hashnode',
      logo: {
        alt: 'Hashnode Support Logo',
        src: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611856421169/zcx6qvf_J.png?auto=compress',
        srcDark: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611856682886/N1xqQtDit.png?auto=compress'
      },
      items: [
        {
          href: 'https://hashnode.com',
          label: 'Back to Hashnode',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: 'b49750d742345b19c79e80a2e3e20312',
      indexName: 'docs',
      appId : 'AMERDMZM12',
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    footer: {
      links: [
        
        {
          title: 'Contact us',
          items: [
            {
              label: 'Email Us',
              href: 'mailto:hello@hashnode.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/hashnode',
            },
            {
              label: 'Live Chat: Join our Discord Server',
              href: 'https://discord.gg/qsAQfxX',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hashnode`,
    },
   
  
  
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Hashnode/hashnode-guide/blob/main/',
        },
    
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
