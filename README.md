📟 Astro DOS Cyberpunk Terminal
![alt text](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)

![alt text](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![alt text](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
🇺🇸 English Documentation | 🇨🇳 中文文档
🇺🇸 English Documentation
📖 Introduction
Astro DOS Terminal is a highly immersive, retro-futuristic personal website and blog system. It combines the nostalgia of MS-DOS with the aesthetics of Cyberpunk 2077.
It's not just a static site; it's a simulated operating system running in your browser.
✨ Key Features
📺 CRT Visuals: Authentic scanlines, text glow, and screen curvature effects.
💻 Global Terminal (CLI 2.0): A functional command-line interface. Use ls, cd, cat to browse the site like a hacker.
🎵 Integrated Music Player: Global persistent music playback with a spectrum visualizer.
🗂️ Virtual File System (VFS): Simulated directory structure (/home, /bin, /var/log).
🏷️ Tag System: Database-like index page for browsing articles by tags.
💬 Comments: Integrated Giscus comment system (Github Discussions driven) with a transparent DOS theme.
⚡ Performance: Built on Astro v5 with View Transitions for app-like smooth navigation.
📂 Project Structure
The project follows a Domain-Driven Design (DDD) structure:
code
Text
/
├── public/                  # Static assets (images, music, files)
├── src/
│   ├── components/          # UI Components
│   │   ├── common/          # Atoms (CyberImage, Search, Head)
│   │   ├── dashboard/       # Homepage Widgets (Monitor, Comments)
│   │   ├── layout/          # Header & Footer
│   │   └── system/          # OS Core (CommandCenter, CLI Logic)
│   ├── config/              # Global Configuration (Single Source of Truth)
│   │   ├── site-config.ts   # User info, social links, Giscus settings
│   │   └── terminal-fs.ts   # Virtual File System definition
│   ├── content/             # Markdown Blog Posts
│   ├── layouts/             # Base HTML Layouts
│   └── pages/               # Routes (Home, Tags, RSS, etc.)
└── package.json
🧞 Commands
NPM Script	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at localhost:4321
npm run build	Build your production site to ./dist/
npm run preview	Preview your build locally
⚙️ Configuration
Personal Info: Edit src/config/site-config.ts to update your name, ID, social links, and playlist.
Terminal Commands: Edit src/config/terminal-fs.ts to modify the virtual file system structure.
Writing Posts: Use the VS Code snippet dosblog to generate frontmatter quickly.
🇨🇳 中文文档
📖 项目简介
Astro DOS Terminal 是一个具有高度沉浸感的、复古未来主义风格的个人主页与博客系统。它完美融合了 MS-DOS 的怀旧感与赛博朋克 2077 的视觉美学。
这不仅仅是一个静态网页，它是一个运行在浏览器中的模拟操作系统。
✨ 核心特性
📺 CRT 视觉特效: 真实的扫描线、文字辉光、屏幕曲面与开机动画。
💻 全局终端 (CLI 2.0): 真实可用的命令行接口。支持 ls, cd, cat, open 等命令，像黑客一样浏览网页。
🎵 沉浸式音乐播放器: 支持全局后台播放、切歌、频谱可视化动画。
🗂️ 虚拟文件系统 (VFS): 模拟真实的目录结构 (/home, /bin, /var/log)。
🏷️ 标签索引系统: 数据库风格的标签云页面，支持按标签筛选文章。
💬 评论系统: 集成 Giscus (基于 GitHub Discussions)，定制透明 DOS 主题，完美融入界面。
⚡ 极致性能: 基于 Astro v5 构建，使用 View Transitions 实现无刷新页面切换。
📂 项目结构
项目采用领域驱动设计 (DDD) 的模块化结构：
code
Text
/
├── public/                  # 静态资源 (图片、音乐、下载文件)
├── src/
│   ├── components/          # 组件库
│   │   ├── common/          # 通用原子组件 (SEO头部, 图片防挂, 搜索)
│   │   ├── dashboard/       # 仪表盘组件 (系统监控, 留言板, 作品集)
│   │   ├── layout/          # 布局组件 (页眉, 页脚)
│   │   └── system/          # 系统核心 (控制台, CLI 逻辑, 播放器)
│   ├── config/              # 配置中心 (全局真理之源)
│   │   ├── site-config.ts   # 个人信息、社交链接、Giscus 配置
│   │   └── terminal-fs.ts   # 虚拟文件系统定义
│   ├── content/             # Markdown 博客文章
│   ├── layouts/             # 页面基础布局
│   └── pages/               # 路由页面 (首页, 标签页, RSS 等)
└── package.json
🧞 常用指令
命令	说明
npm install	安装项目依赖
npm run dev	启动本地开发服务器 (localhost:4321)
npm run build	构建生产环境代码到 ./dist/ 目录
npm run preview	预览构建后的生产环境效果
⚙️ 个性化配置指南
此项目设计为高度可配置，无需修改底层代码即可变成你的个人网站。
1. 修改基本信息
打开 src/config/site-config.ts，你可以修改：
SITE_CONFIG: 网站标题、作者名、ID、地理位置。
SOCIAL_LINKS: 首页的社交媒体卡片。
MUSIC_PLAYLIST: 背景音乐列表。
GISCUS_CONFIG: 评论系统的 Repo ID 和 Category ID。
2. 自定义终端命令
打开 src/config/terminal-fs.ts，你可以定义虚拟文件系统。
添加 type: 'file' 来创建文本文件（可用 cat 读取）。
添加 type: 'link' 来创建快捷方式（可用 open 跳转）。
3. 快速写博客
在 VS Code 中打开 .md 文件，输入 dosblog 并回车，即可自动生成包含标题、日期、标签的标准头部信息。
🎮 终端彩蛋指令
在网页任意位置按 Ctrl + K 或点击底部按钮呼出终端，尝试输入：
help: 查看帮助
whoami: 查看当前身份
game: 玩猜数字游戏
matrix: 进入黑客帝国模式
reboot: 重启系统界面
