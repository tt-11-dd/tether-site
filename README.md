# Tether Site (tether-site)

Tether 官方产品落地页与下载门户。

## 内容要点

- 产品定位：本地优先 AI 编程工作台（Workbench），基于 Pi 生态与公开 npm 包 `tether-agent-core`
- 下载：当前提供 macOS Apple Silicon (arm64) 与 Windows x64；Intel Mac / Linux / CLI 安装包暂未提供
- OCR：MinerU 为在线服务，不是离线本地 OCR
- 双语：简体中文 / English
- Agent Skills：路径见 tether-ai `AGENTS.md`；设置 → Agent Skills 查看已加载列表

## 本地开发

```bash
cd tether-site
pnpm dev      # http://localhost:3000
pnpm build
pnpm preview
```

## 部署

`dist/` 为纯静态资源，可部署到 GitHub Pages、Vercel、Cloudflare Pages 或任意静态托管。
