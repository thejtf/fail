(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{252:function(s,t,a){"use strict";a.r(t);var e=a(28),c=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git笔记"}},[s._v("#")]),s._v(" Git笔记")]),s._v(" "),a("p",[s._v("此文主要介绍git基本操作流程")]),s._v(" "),a("h2",{attrs:{id:"git-基本操作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-基本操作流程"}},[s._v("#")]),s._v(" git 基本操作流程")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查看本地文件状态")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])])])]),s._v(" "),a("li",[a("p",[s._v("添加单个修改的文件到待更新队列")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 需要添加的文件的路径\n")])])]),a("p",[s._v("或者也可以添加全部修改的文件到待更新队列")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n")])])])]),s._v(" "),a("li",[a("p",[s._v("再次检查本地文件状态")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])])])]),s._v(" "),a("li",[a("p",[s._v("将不需要更新的文件从更新队列移除 "),a("em",[s._v("(可选 )")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached 需要移除的文件的路径\n")])])])]),s._v(" "),a("li",[a("p",[s._v("将更新队列的文件保存至本地 git 仓库")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'提交信息'")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("将本地仓库的修改更新至远程仓库")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"git-commit-信息的规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-信息的规范"}},[s._v("#")]),s._v(" git commit 信息的规范")]),s._v(" "),a("blockquote",[a("p",[s._v("前缀")]),s._v(" "),a("p",[s._v(": 描述")]),s._v(" "),a("p",[s._v("feat:")]),s._v(" "),a("p",[s._v(": A new feature（新功能，例 "),a("code",[s._v("feat: user password encrypt by MD5")]),s._v("）")]),s._v(" "),a("p",[s._v("fix:")]),s._v(" "),a("p",[s._v(": A bug fix（bug 修复，例 "),a("code",[s._v("fix: bug #17236")]),s._v("）")]),s._v(" "),a("p",[s._v("docs:")]),s._v(" "),a("p",[s._v(": Documentation only changes（文档修改，例 "),a("code",[s._v("docs: user login docs update")]),s._v("）")]),s._v(" "),a("p",[s._v("style:")]),s._v(" "),a("p",[s._v(": Changes that do not affect the meaning of the code(such as white-space, formatting, miss semi-colons, etc)（代码风格，例 "),a("code",[s._v("style: code format and change LF to CRLF")]),s._v("）")]),s._v(" "),a("p",[s._v("refactor:")]),s._v(" "),a("p",[s._v(": A code change that neither fixes a bug or adds a feature（重构代码，既不是修复 bug，也不是添加新功能，例 "),a("code",[s._v("refactor: refactor code from new ArrayList() to Lists.newArrayList()")]),s._v("）")]),s._v(" "),a("p",[s._v("perf:")]),s._v(" "),a("p",[s._v(": A code change that improves performance（提升性能，例 "),a("code",[s._v("perf: use cache and message queue to improve the concurrency performance")]),s._v("）")]),s._v(" "),a("p",[s._v("test:")]),s._v(" "),a("p",[s._v(": Adding missing tests（单元测试，例 "),a("code",[s._v("test: add metadata to Atlas test")]),s._v("）")]),s._v(" "),a("p",[s._v("chore:")]),s._v(" "),a("p",[s._v(": Changes to the build process or auxiliary tools and libraries such as documentation generation（构建工具等的修改，例 "),a("code",[s._v("chore: change build tool from maven to gradle")]),s._v(" ）")])]),s._v(" "),a("h2",{attrs:{id:"git-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-配置"}},[s._v("#")]),s._v(" git 配置")]),s._v(" "),a("h3",{attrs:{id:"用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户信息"}},[s._v("#")]),s._v(" 用户信息")]),s._v(" "),a("p",[s._v("第一个要配置的是你个人的用户名称和电子邮件地址。这两条配置很重要，每次 Git 提交时都会引用这两条信息，说明是谁提交了更新，所以会随更新内容一起被永久纳入历史记录：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email chizongjtf@gmail.com\n")])])]),a("p",[s._v("如果用了 "),a("code",[s._v("--global")]),s._v(" 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 "),a("code",[s._v("--global")]),s._v("选项重新配置即可，新的设定保存在当前项目的 "),a("code",[s._v(".git/config")]),s._v(" 文件里。")]),s._v(" "),a("h3",{attrs:{id:"文本编辑器-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本编辑器-可选"}},[s._v("#")]),s._v(" 文本编辑器 "),a("em",[s._v("(可选 )")])]),s._v(" "),a("p",[s._v("接下来要设置的是默认使用的文本编辑器。Git 需要你输入一些额外消息的时候，会自动调用一个外部文本编辑器给你用。默认会使用操作系统指定的默认编辑器，一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.editor emacs\n")])])]),a("h3",{attrs:{id:"差异分析工具-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#差异分析工具-可选"}},[s._v("#")]),s._v(" 差异分析工具 "),a("em",[s._v("(可选 )")])]),s._v(" "),a("p",[s._v("还有一个比较常用的是，在解决合并冲突时使用哪种差异分析工具。比如要改用 vimdiff 的话：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global merge.tool vimdiff\n")])])]),a("p",[s._v("Git 可以理解 kdiff3，tkdiff，meld，xxdiff，emerge，vimdiff，gvimdiff，ecmerge，和 opendiff 等合并工具的输出信息。")]),s._v(" "),a("h2",{attrs:{id:"常见错误解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误解决"}},[s._v("#")]),s._v(" 常见错误解决")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("macOs High Sierra 10.13.2 在使用 git clone 时，出现LibreSSL SSL_connect: SSL_ERROR_SYSCALL")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("解决办法")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("配置 git 提交的缓冲区大小 "),a("code",[s._v("524288000")]),s._v(" 或 "),a("code",[s._v("1048576000")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.postBuffer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("524288000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1048576000")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使用 "),a("code",[s._v("homebrew")]),s._v(" 更新系统的 "),a("code",[s._v("libressl")]),s._v("、"),a("code",[s._v("openssl")]),s._v("、"),a("code",[s._v("curl")]),s._v(" 然后重启")])]),s._v(" "),a("li",[a("p",[s._v("env 命令设置 "),a("code",[s._v("GIT_SSL_NO_VERIFY")]),s._v(" 环境变量为 ture ，并同时调用正常的git clone命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_SSL_NO_VERIFY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/xxx/xxx.git\n")])])]),a("p",[s._v("当你通过HTTPS访问Git远程仓库，如果服务器的SSL证书未经过第三方机构签署，那么Git就会报错。在克隆完毕的仓库中还需要将http.sslVerify设置为”false”。完整的命令如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.sslVerify "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n")])])])])])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("git checkout 时 bash:  syntax error near unexpected token `('")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("解决办法")]),s._v(" "),a("p",[s._v("括号要用转义: "),a("code",[s._v("\\(xxx\\)")])])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("git clone 时显示 "),a("code",[s._v("Filename too long")])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("解决办法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.longpaths "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("git 每次 pull/push 输入密码")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("解决办法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global credential.helper store\n")])])])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("git提示 "),a("code",[s._v("error setting certificate verify locations")])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("解决办法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system http.sslverify "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])])])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("git显示形如"),a("code",[s._v("274\\232\\350\\256\\256\\346\\200\\273\\347\\273\\223.png")]),s._v("的乱码")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("解决办法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.quotepath "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])])])])])}),[],!1,null,null,null);t.default=c.exports}}]);