---
title: 从0到1部署 VuePress 到 GitHub Pages
sidebar: auto
---
# 从0到1部署 VuePress 到 GitHub Pages

### 学习笔记 <Badge text="beta" type="warning"/> <Badge text="预览版"/>

## 在 *GitHub* 新建仓库 note

在`GitHub`中新建仓库名称为`note`

![](http://q83otuer6.bkt.clouddn.com/Screenshot32424png)



## 全局安装 VuePress

```shell
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 克隆项目到本地并新建和仓库同名的文件夹 note
git clone git@github.com:thejtf/note.git note

# 进入本地 note 文件夹
cd note

# 新建 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 创建并初始化 package.json
yarn init -y

```



### 复制下方代码到 package.json

```json
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

如下图所示👇

![](http://q83otuer6.bkt.clouddn.com/Screenshot2.png)



### 本地启动 VuePress

```shell
# 运行以下命令
yarn docs:dev
```



打开浏览器访问  http://localhost:8080/ 效果如下图

![](http://q83otuer6.bkt.clouddn.com/Screenshot3.png)

## 配置 VuePress

在`docs`文件夹下新建`.vuepress`文件夹，在`.vuepress`下新建`config.js`文件

```swift
# 复制下方代码到 config.js
module.exports = {
  title: '学习笔记',
  description: '知识点记录'
}
```

效果如下图

![](http://q83otuer6.bkt.clouddn.com/Screenshot4.png)



### 默认主题配置

复制下方代码到 `docs` 的 `README.md`

```swift
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

效果如下图

![](http://q83otuer6.bkt.clouddn.com/Screenshot5.png)

在`.vuepress`文件夹下新建一个`public`文件夹，再在`public`文件夹下新建一个`img`文件夹，把图片文件放到此文件夹下。

![](http://q83otuer6.bkt.clouddn.com/Screenshot6.png)

### 修改首页图片

在`docs`文件夹下的`README.md`修改`heroImage`

```js
home: true
# 修改此下方路径添加图片
heroImage: /img/notebook.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
```

### 修改首页导航 logo

在`.vuepress`文件夹下修改`config.js`文件

```js
module.exports = {
    title: '学习笔记',
    description: '知识点记录',
    themeConfig: {
        logo: '/img/novel.png',
      }
  }
```

### 添加网页的 ico 文件

在`.vuepress`文件下修改`config.js`文件

```js
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ]
```

### 添加导航栏链接

在`.vuepress`文件夹下修改`config.js`文件

```js
module.exports = {
    title: '学习笔记',
    description: '知识点记录',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
      ],
    themeConfig: {
        logo: '/img/novel.png',
      // 	在下方修改添加
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
          ]
      // 	在上方修改添加
      }
  }
```



## 部署到 GitHub 仓库中

### 新建 gh-pages 分支

在`GitHub`上新建一个`gh-pages`的分支，并在`Settings`中在`Branches`更改`Default branch`为`gh-pages`，如下图。

![](http://q83otuer6.bkt.clouddn.com/Screenshot7.png)

更改`Settings`中的`Options`的`GitHub Pages`的 **Source** 为`gh-pages branch`如下图

![](http://q83otuer6.bkt.clouddn.com/Screenshot9.png)

### Base URL

本文要把vuepress部署到github page上，部署在`https://{your-github-name}.github.io/{repo-name}/`地址上，需要在`config.js`中定义`base`的值为`/{repo-name}/`。

```js
//config.js
module.exports = {
    base: '/note/',   
    title: '学习笔记',
    description: '知识点记录',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
      ],
    themeConfig: {
        logo: '/img/novel.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
          ]
      }
  }
```

### 新建 .gitginore

在本地`note`根目录下创建忽略文件`.gitginore`，填入如下内容。第6行可以根据情况修改，不需要把生成的静态文件提交到github上：

```js
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
sources/.vuepress/dist/
*.bat
*.sh
```

如下图

![](http://q83otuer6.bkt.clouddn.com/Screenshot10.png)

### 新建 deploy.sh

在本地`note`根目录创建`deploy.sh`，填入以下内容:

```sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:thejtf/note.git master:gh-pages

cd -
```



### 提交部署

运行命令`. deploy.sh`,把源码提交到github上。

```shell
. deploy.sh
```

如下图

![](http://q83otuer6.bkt.clouddn.com/Screenshot11.png)

### 部署上线

在浏览器打开 [jtf.im/note/](https://jtf.im/note/) 即可访问

![](http://q83otuer6.bkt.clouddn.com/Screenshot12.png)

大功告成。。。...
