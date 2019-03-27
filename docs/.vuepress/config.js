module.exports = {
  title: 'Tachyons Lite',
  description: 'tachyons-lite',
  lastUpdated: 'Last Updated',
  themeConfig: {
    sidebar: [
      {
        title: '介绍',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: '模块',
        collapsable: false,
        children: [
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
