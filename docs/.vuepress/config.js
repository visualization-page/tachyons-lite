module.exports = {
  title: 'Tachyons Lite',
  description: 'tachyons-lite',
  lastUpdated: 'Last Updated',
  themeConfig: {
    sidebar: [
      {
        title: '起步',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/install',
          '/guide/var'
        ]
      },
      {
        title: '模块',
        collapsable: false,
        children: [
          '/basics/reset',
          '/basics/icon',
          '/basics/color',
          '/basics/layout',
          '/basics/size',
          '/basics/text',
          '/basics/border',
          '/basics/shadow',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/layout',
          '/components/text'
        ]
      }
    ],

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'visualization-page/tachyons-lite',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'github',
    docsDir: 'docs'
  }
}
