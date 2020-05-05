# Git笔记
此文主要介绍git基本操作流程

## git 基本操作流程

1. 查看本地文件状态

   ```bash
   git status
   ```

2. 添加单个修改的文件到待更新队列

   ```bash
   git add 需要添加的文件的路径
   ```

   或者也可以添加全部修改的文件到待更新队列

   ```bash
   git add -A
   ```

3. 再次检查本地文件状态

   ```bash
   git status
   ```

4. 将不需要更新的文件从更新队列移除 *(可选 )*

   ```bash
   git rm --cached 需要移除的文件的路径
   ```

5. 将更新队列的文件保存至本地 git 仓库

   ```bash
   git commit -m '提交信息'
   ```

6. 将本地仓库的修改更新至远程仓库

   ```bash
   git push
   ```

## git commit 信息的规范

> 前缀
>
> : 描述
>
> feat:
>
> : A new feature（新功能，例 `feat: user password encrypt by MD5`）
>
> fix:
>
> : A bug fix（bug 修复，例 `fix: bug #17236`）
>
> docs:
>
> : Documentation only changes（文档修改，例 `docs: user login docs update`）
>
> style:
>
> : Changes that do not affect the meaning of the code(such as white-space, formatting, miss semi-colons, etc)（代码风格，例 `style: code format and change LF to CRLF`）
>
> refactor:
>
> : A code change that neither fixes a bug or adds a feature（重构代码，既不是修复 bug，也不是添加新功能，例 `refactor: refactor code from new ArrayList() to Lists.newArrayList()`）
>
> perf:
>
> : A code change that improves performance（提升性能，例 `perf: use cache and message queue to improve the concurrency performance`）
>
> test:
>
> : Adding missing tests（单元测试，例 `test: add metadata to Atlas test`）
>
> chore:
>
> : Changes to the build process or auxiliary tools and libraries such as documentation generation（构建工具等的修改，例 `chore: change build tool from maven to gradle` ）
>

## git 配置

### 用户信息

第一个要配置的是你个人的用户名称和电子邮件地址。这两条配置很重要，每次 Git 提交时都会引用这两条信息，说明是谁提交了更新，所以会随更新内容一起被永久纳入历史记录：

```bash
git config --global user.name "Yangkai.Shen"
git config --global user.email 237497819@qq.com
```

如果用了 `--global` 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 `--global`选项重新配置即可，新的设定保存在当前项目的 `.git/config` 文件里。

### 文本编辑器 *(可选 )*

接下来要设置的是默认使用的文本编辑器。Git 需要你输入一些额外消息的时候，会自动调用一个外部文本编辑器给你用。默认会使用操作系统指定的默认编辑器，一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：

```bash
git config --global core.editor emacs
```

### 差异分析工具 *(可选 )*

还有一个比较常用的是，在解决合并冲突时使用哪种差异分析工具。比如要改用 vimdiff 的话：

```bash
git config --global merge.tool vimdiff
```

Git 可以理解 kdiff3，tkdiff，meld，xxdiff，emerge，vimdiff，gvimdiff，ecmerge，和 opendiff 等合并工具的输出信息。

## 常见错误解决

::: danger 问题

macOs High Sierra 10.13.2 在使用 git clone 时，出现LibreSSL SSL_connect: SSL_ERROR_SYSCALL

:::

::: tip 解决办法

1. 配置 git 提交的缓冲区大小 `524288000` 或 `1048576000`

   ```bash
   git config --global http.postBuffer 524288000 # 1048576000
   ```

2. 使用 `homebrew` 更新系统的 `libressl`、`openssl`、`curl` 然后重启

3. env 命令设置 `GIT_SSL_NO_VERIFY` 环境变量为 ture ，并同时调用正常的git clone命令

   ```bash
   env GIT_SSL_NO_VERIFY=true git clone https://github.com/xxx/xxx.git
   ```

   当你通过HTTPS访问Git远程仓库，如果服务器的SSL证书未经过第三方机构签署，那么Git就会报错。在克隆完毕的仓库中还需要将http.sslVerify设置为”false”。完整的命令如下：

   ```bash
   git config --global http.sslVerify "false"
   ```

:::

::: danger 问题

git checkout 时 bash:  syntax error near unexpected token `('

:::

::: tip 解决办法

括号要用转义: `\(xxx\)`

:::

::: danger 问题

git clone 时显示 `Filename too long`

:::

::: tip 解决办法

```bash
git config --global core.longpaths true
```

:::

::: danger 问题

git 每次 pull/push 输入密码

:::

::: tip 解决办法

```bash
git config --global credential.helper store
```

:::

::: danger 问题

git提示 `error setting certificate verify locations`

:::

::: tip 解决办法

```bash
git config --system http.sslverify false
```

:::

::: danger 问题

git显示形如`274\232\350\256\256\346\200\273\347\273\223.png`的乱码

:::

::: tip 解决办法

```bash
git config --global core.quotepath false
```

:::