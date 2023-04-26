import { defineConfig } from 'vitepress';

export default defineConfig({
  appearance: true,
  base: '/node-base/',
  title: 'node-base',
  description: 'Project template for Node library.',

  themeConfig: {
    logo: '/logo.svg',
    nav: [{ text: 'Guide', link: '/' }],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yujinpan/node-base',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2023 yujinpan',
    },
    lastUpdatedText: 'Last Updated',
  },

  async transformHtml(code) {
    return code.replace(
      '</body>',
      `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S66MPLRFJZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S66MPLRFJZ');
</script>
</body>
`,
    );
  },
});
