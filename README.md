# Tether Site (tether-site)

Tether 官方产品落地页与下载门户（Official Landing Page & Desktop Workbench Portal）。

## 🚀 核心特性

- **现代工匠风设计**：契合 Tether 暖纸质感与矿物工艺美学，排版与交互体验参考现代顶尖开发者工具，同时保持 Tether 独特的品牌调性。
- **动态交互式工作台演示**：支持在线切换体验「深度思考链」、「实时代码补丁」、「原子级 /undo 撤销」与「MinerU 本地视觉提取」。
- **全平台客户端下载中心**：针对 macOS (Apple Silicon arm64 / Intel x64)、Windows (x64) 与 CLI 终端提供清晰的分发卡片与校验提示。
- **多语言即时切换**：内置完整简体中文与英文（Bilingual ZH / EN）双语支持。
- **深度对比与 FAQ**：全面剖析 Tether Harness 与传统闭源 IDE / 云端 Web 对话的核心差异。
- **极速构建产物**：基于 Vite 7 + React 19 + TypeScript + Inter 变量字体，零外部网络字体依赖，首屏毫秒级加载。

## 🛠 本地开发与预览

```bash
# 进入目录
cd tether-site

# 启动本地开发服务 (默认运行在 http://localhost:3000)
pnpm dev

# 类型检查与生产环境静态构建 (输出至 dist/)
pnpm build

# 预览生产产物
pnpm preview
```

## 📦 部署

构建生成的 `dist/` 为纯静态资源，可直接一键部署到 GitHub Pages、Vercel、Cloudflare Pages 或任何 Nginx 服务器。
