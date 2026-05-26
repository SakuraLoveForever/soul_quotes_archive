# 心灵鸡汤 · Soul Quotes Archive

一路走来阅读和看番中所深深触动的话语，希望这些话语能够带给你同样的鼓舞与激励。

## 功能特性

- **分类展示** — 按作品来源分类（冰菓、龙族、CLANNAD、紫罗兰永恒花园、EVA 等），折叠式手风琴布局
- **暗色/亮色主题** — 一键切换，偏好自动保存至 localStorage
- **侧边栏目录** — 快速导航，支持一键展开/折叠所有分类
- **响应式设计** — 适配桌面端与移动端，窄屏下侧边栏变为抽屉式菜单
- **Markdown 渲染** — 基于 marked.js 的富文本渲染，支持引用块等多行排版

## 技术栈

纯静态站点，零构建依赖：

- **HTML5 + CSS3 + Vanilla JavaScript** — 单文件 SPA（`index.html`）
- **[marked.js](https://marked.js.org/)** — Markdown 渲染（CDN 引入）
- **Noto Serif SC** — Google Fonts 中文衬线字体
- 内容与展示分离 — 所有语录存储在 `心灵鸡汤.md`，`fetch()` 动态加载

## 项目结构

```
soul_quotes_archive/
├── index.html          # 完整前端应用（HTML/CSS/JS 内联）
├── 心灵鸡汤.md          # 语录内容库（Markdown 格式）
└── README.md
```

## 本地运行

```bash
# 使用任意静态服务器，例如：
npx serve .
# 或 VS Code Live Server 插件
# 注意：直接双击 index.html 会因 file:// 协议 CORS 限制导致 fetch 失败
```

## 在线访问

- **主站：** [sakuraloveforever.github.io/soul_quotes_archive](https://sakuraloveforever.github.io/soul_quotes_archive/)
- **镜像：** [soulquotesachive.netlify.app](https://soulquotesachive.netlify.app/)

## 效果预览

<img width="2520" height="1431" alt="screenshot" src="https://github.com/user-attachments/assets/4b5c6734-58c2-41f9-94d8-67820e48e174" />

## Star History

<a href="https://www.star-history.com/?repos=SakuraLoveForever%2Fsoul_quotes_archive&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=SakuraLoveForever/soul_quotes_archive&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=SakuraLoveForever/soul_quotes_archive&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=SakuraLoveForever/soul_quotes_archive&type=date&legend=top-left" />
 </picture>
</a>
