module.exports = {
    base: '/note/',   
    title: 'Jopus Note',
    description: '生活杂记',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
      ],
      plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        lastUpdated: '最后更新', // string | boolean
        sidebar: 'auto', // 自动生成侧边栏
        smoothScroll: true, // 页面滚动效果
  

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'thejtf/note',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'thejtf/note',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',

        logo: '/img/emoji.png', //导航栏logo
        nav: [
            { text: '首页', link: '/' },
            
            {
              text: '目录',
              ariaLabel: '目录',
              items: [
                {
                  text: '日记',
                  items: [
                   // {
                   //  text: '英语',
                   //  link: '/study/english/'
                   // },
                    {
                      text: '2021',
                      link: '/diary/2021/'
                    }
                  ]
                },
                {
                  text: '学习',
                  items: [
                   // {
                   //  text: '英语',
                   //  link: '/study/english/'
                   // },
                    {
                      text: '社会学',
                      link: '/study/sociology/'
                    }
                  ]
                },
                {
                  text: '编程',
                  items: [
                    {
                      text: 'Swift',
                      link: '/biancheng/swift/'
                    },
                    {
                      text: 'Python',
                      link: '/biancheng/python/'
                    },
                    {
                      text: '树莓派',
                      link: '/biancheng/raspberry/'
                    },
                    {
                      text: 'Git笔记',
                      link: '/biancheng/git/'
                    }
                  ]
                },
                {
                  text: '读书',
                  items: [
                    {
                      text: '书单',
                      link: '/read/booklist/'
                    }
                  ]
                },
                {
                  text: '计划',
                  items: [
                    {
                      text: '考研',
                      link: '/plan/kaoyan/'
                    }
                  ]
                }
              ]
            },
            

            { text: '博客', link: 'https://jopus.cn/' },
          ],
      }
  }