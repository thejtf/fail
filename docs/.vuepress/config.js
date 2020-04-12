module.exports = {
    base: '/note/',   
    title: '学习笔记',
    description: '知识点记录',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
      ],
    
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean

        logo: '/img/novel.png',
        nav: [
            { text: '首页', link: '/' },
            
            {
              text: '目录',
              items: [
                { text: '编程', link: '/guide/' },
                { text: '笔记', link: '/guide/' },
                { text: '杂文', link: '/guide/' },
              ]
            },

            { text: '博客', link: 'https://jtf.im/' },
          ],
      }
  }