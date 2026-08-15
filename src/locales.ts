export const locales = {
  zh: {
    nav: {
      downloads: "下载",
      features: "核心特性",
      architecture: "Harness 架构",
      quickstart: "快速上手",
      comparison: "方案对比",
      faq: "常见问题",
      feedback: "问题反馈",
      github: "GitHub 仓库",
      downloadCta: "免费下载桌面端",
    },
    hero: {
      titleLine1: "Tether",
      titleLine2: "Agent Harness",
      subtitle:
        "把大模型的推理与规划，变为精准、安全、可审查的代码改动。原生思维链展示、事务级 /undo 撤销、内置 MinerU 本地 OCR，100% 运行在你的机器上。",
      primaryCtaMac: "下载 macOS 版 (Apple Silicon)",
      primaryCtaWin: "下载 Windows 版 (x64)",
      primaryCtaGeneric: "下载桌面安装包",
      secondaryCta: "查看 GitHub 源码",
      stats: {
        privacy: "100% 本地 0600 权限存储",
        models: "开放网关 · Ollama · 自定义 API",
        undo: "原子级 /undo 文件快照回滚",
        license: "MIT 开源协议",
      },
    },
    productPreview: {
      tag: "工作台界面",
      title: "专注、高效的本地 AI 编程工作区",
      subtitle: "直观展示思考链推导、文件检索、实时代码打补丁与快照撤销。",
    },
    download: {
      tag: "桌面版安装包",
      title: "下载 Tether Desktop 客户端",
      subtitle: "专为 macOS 与 Windows 打造，享受本地优先的独立工作区与极致响应速度。",
      macArm: {
        title: "macOS (Apple Silicon)",
        desc: "适用于 M1 / M2 / M3 / M4 / M5 芯片的 Mac 电脑",
        file: "Tether-0.1.1-arm64.dmg",
        size: "约 130 MB",
        badge: "推荐",
      },
      macIntel: {
        title: "macOS (Intel)",
        desc: "适用于传统 Intel 架构的 Mac 电脑",
        file: "暂未提供 Intel 安装包",
        size: "—",
      },
      win: {
        title: "Windows (x64)",
        desc: "适用于 Windows 10 / Windows 11 64位系统",
        file: "Tether-Setup-0.1.1.exe",
        size: "约 114 MB",
        badge: "Win 10/11",
      },
      notice:
        "注：当前 macOS 为开发签名包，若提示无法打开可右键「打开」，或执行 xattr -cr /Applications/Tether.app；Windows 首次运行若遇 SmartScreen，点击「更多信息 → 仍要运行」即可。",
    },
    architecture: {
      tag: "架构解析",
      title: "什么是 Tether Agent Harness？",
      subtitle: "大模型擅长推理生成，而 Tether Harness 为其赋予真实代码库中的双眼、双手与安全护栏。",
      step1: {
        title: "1. DeepSeek 推理引擎",
        desc: "由 DeepSeek V3 / R1 或私有模型提供高强度逻辑推理、任务拆解与补丁草案编写。",
      },
      step2: {
        title: "2. Tether Harness 编排层",
        desc: "注入 AST 代码树、精准 Ripgrep 检索、长上下文智能压缩 (Compaction)、文件检查点快照与 OS 隔离沙箱。",
      },
      step3: {
        title: "3. 精准落地与审查",
        desc: "输出经过单元测试与类型检查校验的精确 Diff，支持一键审查、一键接受或事务级回滚。",
      },
    },
    features: {
      tag: "核心特性",
      title: "专为严苛工程场景打造的 Agent 工具",
      subtitle: "不只是简单的聊天界面，而是真正深入工程目录、理解大型代码库的专业生产力工具。",
      f1: {
        title: "DeepSeek 深度优化与流式思考",
        desc: "原生支持 High / Medium / Low 思考强度调节，完整展示思维链推导细节。内置会话压缩算法，超长上下文自动精简，成本降低 80% 以上。",
      },
      f2: {
        title: "100% 开放生态，自由连接网关",
        desc: "支持官方 DeepSeek API，同时无缝兼容 OneAPI、Ollama、vLLM、企业内网代理及兼容 OpenAI 协议的任何端点，无厂商锁定。",
      },
      f3: {
        title: "本地优先与原子级 /undo 撤销",
        desc: "所有会话记录与密钥均保存在本机 ~/.tether（0600 权限），每次代码修改自动生成快照，支持无缝回滚，杜绝破坏性编辑。",
      },
      f4: {
        title: "内置 MinerU 本地视觉识别",
        desc: "内置高精度 MinerU OCR 引擎，无需配置或消耗外部付费 Vision API，即可直接在本地提取报错截图、设计图中的代码与 Markdown 表格。",
      },
      f5: {
        title: "OS 级原生沙箱与安全防护",
        desc: "终端命令默认在操作系统级隔离沙箱中执行，文件写入自动限制在当前工作区内，任何高危网络访问或破坏性命令均需显式人工确认。",
      },
      f6: {
        title: "无缝融入现有开发工作流",
        desc: "自动加载项目根目录下的 AGENTS.md、CLAUDE.md、Skills 规则与 MCP (Model Context Protocol) 协议，完美配合 Git 与团队现有基建。",
      },
    },
    quickstart: {
      tag: "快速上手",
      title: "从安装到第一次改动，不到一分钟",
      subtitle: "极简的上手门槛，只需三步即可在你的真实项目中委派复杂编程任务。",
      step1: {
        num: "01",
        title: "下载并启动 Tether Desktop",
        desc: "根据你的操作系统下载 macOS (.dmg) 或 Windows (.exe) 安装包，安装后双击启动。",
        action: "支持 macOS (Apple Silicon / Intel) 与 Windows 10/11",
      },
      step2: {
        num: "02",
        title: "配置 API Key 或本地模型",
        desc: "在设置中心填入 DeepSeek API Key，或切换为 Ollama / OneAPI / vLLM 等私有网关。",
        action: "支持官方 API、OneAPI、Ollama 与企业私有端点",
      },
      step3: {
        num: "03",
        title: "打开项目目录，开始协作",
        desc: "点击「打开文件夹」选定代码库，用自然语言提出需求，实时审查生成的代码补丁并随时 /undo 回退。",
        action: "自带 OS 断网沙箱与原子级 /undo 文件快照保护",
      },
    },
    comparison: {
      tag: "方案对比",
      title: "为什么选择 Tether 作为你的主力 Agent？",
      subtitle: "相较于传统闭源 IDE 与云端托管服务，Tether 带来极致的可控性、隐私性与性价比。",
      table: {
        dimension: "对比维度",
        tether: "Tether AI",
        closedSource: "闭源商业 IDE",
        chatbots: "传统网页对话",
        d1: {
          name: "代码与会话隐私",
          tether: "100% 存储于本地 (~/.tether 0600)",
          closed: "代码索引与会话上传云端服务器",
          chat: "代码粘贴至网页，存在数据泄露风险",
        },
        d2: {
          name: "模型自由度",
          tether: "完全开放（DeepSeek/Ollama/vLLM/自建）",
          closed: "仅限绑定指定厂商的昂贵订阅",
          chat: "固定单一网页模型",
        },
        d3: {
          name: "代码编辑与执行",
          tether: "自动化 AST 补丁 + 本地沙箱验证",
          closed: "插件内局部补全或受限执行",
          chat: "手动复制粘贴，无法执行测试",
        },
        d4: {
          name: "撤销与回滚机制",
          tether: "事务级原子 /undo 快照瞬间还原",
          closed: "依赖 Ctrl+Z 或 Git 手动回退",
          chat: "无任何工程状态管理",
        },
        d5: {
          name: "本地视觉识别 (OCR)",
          tether: "内置 MinerU 免费离线解析截图",
          closed: "按 Token 计费的高昂 Vision API",
          chat: "依赖云端多模态分析",
        },
        d6: {
          name: "开源与商业模式",
          tether: "MIT 自由开源 · 零订阅门槛",
          closed: "月费 $20~$40 闭源商业锁定",
          chat: "高额月费会员制",
        },
      },
    },
    faq: {
      tag: "常见问题",
      title: "关于 Tether 的常见问题解答",
      subtitle: "了解更多关于运行环境、模型配置与安全性设计的细节。",
      items: [
        {
          question: "Tether 是完全免费且开源的吗？",
          answer:
            "是的，Tether 采用 MIT 宽松开源协议，核心运行时与桌面客户端完全免费。你可以自由阅读源码、二次开发或在企业内部分发。使用过程中你只需支付自己模型服务商的 API 调用费用（若使用本地 Ollama 则完全零费用）。",
        },
        {
          question: "运行 Tether 需要什么系统与硬件要求？",
          answer:
            "桌面端支持 macOS 12+ (Apple Silicon M系列及 Intel 芯片) 与 Windows 10/11 64位系统。因为所有推理均在 API 或远程/本地网关完成，Tether 自身极其轻量，普通办公电脑即可流畅运行。",
        },
        {
          question: "我的代码和对话会被上传到 Tether 的服务器吗？",
          answer:
            "绝不会。Tether 坚守纯粹的 Local-First 原则，我们没有任何收集用户代码或会话的中央服务器。所有配置文件、历史记录、文件快照均存储在你的本机目录 ~/.tether 中，网络请求仅发生在你的机器与你配置的 AI 模型端点之间。",
        },
        {
          question: "如何接入公司内网的私有模型（如 Ollama / vLLM）？",
          answer:
            "在 Tether 设置中，将提供商切换为自定义 OpenAI 兼容接口，填入你的内网 Base URL（如 http://localhost:11434/v1）和对应模型名即可，完全支持离线内网环境运行。",
        },
        {
          question: "如果 Agent 修改错了代码，我该如何撤销？",
          answer:
            "在输入框中直接输入 /undo 或点击界面上的回退按钮，Tether 会利用内置的文件级事务检查点系统，一键将所有被触及的文件恢复到执行该操作之前的精确状态。",
        },
      ],
    },
    feedbackBanner: {
      title: "遇到问题或有新功能想法？",
      desc: "Tether 是由社区共同驱动的开源项目。欢迎在 GitHub Issues 提出 Bug 反馈或功能建议！",
      cta: "在 GitHub Issues 反馈问题 ↗",
    },
    footer: {
      tagline: "开源、本地优先的 Agent Harness",
      builtWith: "以极简与纯粹的开发者体验为中心构建。",
      colProduct: "产品",
      colResources: "资源",
      colCommunity: "社区",
      links: {
        desktop: "桌面端下载",
        features: "功能特性",
        changelog: "更新日志",
        docs: "开发文档",
        harness: "Harness 架构指南",
        github: "GitHub 仓库",
        issues: "提交反馈 (Issues)",
        license: "MIT 许可证",
      },
      copyright: "© 2026 Tether AI. All rights reserved.",
    },
  },
  en: {
    nav: {
      downloads: "Downloads",
      features: "Features",
      architecture: "Harness Architecture",
      quickstart: "Quickstart",
      comparison: "Compare",
      faq: "FAQ",
      feedback: "Issues",
      github: "GitHub",
      downloadCta: "Download Desktop App",
    },
    hero: {
      titleLine1: "Tether",
      titleLine2: "Agent Harness",
      subtitle:
        "Turn model reasoning into precise, safe, reviewable repository changes. Streaming chain-of-thought, transactional /undo, built-in MinerU OCR — 100% on your machine.",
      primaryCtaMac: "Download for macOS (Apple Silicon)",
      primaryCtaWin: "Download for Windows (x64)",
      primaryCtaGeneric: "Download Desktop App",
      secondaryCta: "View GitHub Repo",
      stats: {
        privacy: "100% Local 0600 Encrypted Storage",
        models: "Open gateways · Ollama · Custom APIs",
        undo: "Atomic /undo File Snapshot Rollback",
        license: "MIT Licensed",
      },
    },
    productPreview: {
      tag: "Interface",
      title: "Focused & Responsive Local AI Coding Workspace",
      subtitle: "Clear visibility into reasoning traces, AST search, live patching, and snapshot rollbacks.",
    },
    download: {
      tag: "Desktop Installers",
      title: "Download Tether Desktop",
      subtitle: "Dedicated builds for macOS and Windows with local-first workspaces and instant responsiveness.",
      macArm: {
        title: "macOS (Apple Silicon)",
        desc: "For Mac machines with M1 / M2 / M3 / M4 / M5 chips",
        file: "Tether-0.1.1-arm64.dmg",
        size: "~130 MB",
        badge: "Recommended",
      },
      macIntel: {
        title: "macOS (Intel)",
        desc: "For legacy Intel x86_64 Mac computers",
        file: "Intel build not available yet",
        size: "—",
      },
      win: {
        title: "Windows (x64)",
        desc: "For Windows 10 and Windows 11 64-bit editions",
        file: "Tether-Setup-0.1.1.exe",
        size: "~114 MB",
        badge: "Win 10/11",
      },
      notice:
        "Note: macOS builds are development-signed. If Gatekeeper blocks open, right-click → Open, or run xattr -cr /Applications/Tether.app. On Windows, if SmartScreen appears, choose More info → Run anyway.",
    },
    architecture: {
      tag: "Architecture",
      title: "What is Tether Agent Harness?",
      subtitle: "Large models generate reasoning; Tether Harness provides the repository eyes, hands, and safety guardrails.",
      step1: {
        title: "1. DeepSeek Reasoning Engine",
        desc: "DeepSeek V3 / R1 or custom models provide deep logical breakdown and patch drafts.",
      },
      step2: {
        title: "2. Tether Harness Orchestration",
        desc: "Injects AST context, Ripgrep search, smart context compaction, file checkpoints, and OS sandboxes.",
      },
      step3: {
        title: "3. Verified Reviewable Patch",
        desc: "Outputs test-checked, lint-free patches with one-click review and atomic /undo rollback.",
      },
    },
    features: {
      tag: "Core Features",
      title: "Built for Demanding Engineering Workflows",
      subtitle: "Not just a chat box — a true local agent workbench that navigates and understands large codebases.",
      f1: {
        title: "DeepSeek Native & Streaming Thoughts",
        desc: "Configure High / Medium / Low reasoning depth with full chain-of-thought visibility. Automatic /compact keeps token consumption lean.",
      },
      f2: {
        title: "100% Open & Any Gateway",
        desc: "Connect official DeepSeek API, OneAPI, Ollama, vLLM, or private corporate proxies with zero vendor lock-in.",
      },
      f3: {
        title: "Local-First & Atomic /undo",
        desc: "Sessions and keys stay strictly inside ~/.tether (0600 permissions). Every modification is snapshotted for instant rollback.",
      },
      f4: {
        title: "Built-in MinerU Local OCR",
        desc: "Free offline code and table extraction from UI mocks and error screenshots without paid third-party vision tokens.",
      },
      f5: {
        title: "OS-Level Native Sandbox",
        desc: "Shell commands run in an OS sandbox with network blocked by default. Dangerous actions require explicit confirmation.",
      },
      f6: {
        title: "Seamless Dev Workflow Fit",
        desc: "Reads existing AGENTS.md, CLAUDE.md, Agent Skills, and Model Context Protocol (MCP) without disrupting your stack.",
      },
    },
    quickstart: {
      tag: "Quickstart",
      title: "From Install to First Patch in Under a Minute",
      subtitle: "Three simple steps to delegate complex coding tasks directly inside your repositories.",
      step1: {
        num: "01",
        title: "Download & Launch Tether Desktop",
        desc: "Download the macOS (.dmg) or Windows (.exe) package for your operating system and launch.",
        action: "Supports macOS (Apple Silicon / Intel) & Windows 10/11",
      },
      step2: {
        num: "02",
        title: "Configure API Key or Local Endpoint",
        desc: "Enter your DeepSeek API key or point to a local Ollama / OneAPI gateway in Settings.",
        action: "Supports DeepSeek, OneAPI, Ollama & private gateways",
      },
      step3: {
        num: "03",
        title: "Open Repo & Start Coding",
        desc: "Choose your workspace directory, describe your task in natural language, and review patches live.",
        action: "Protected by OS sandbox & atomic /undo snapshots",
      },
    },
    comparison: {
      tag: "Comparison",
      title: "Why Choose Tether Over Traditional Tools?",
      subtitle: "Unmatched control, privacy, and cost-efficiency compared to closed cloud IDEs.",
      table: {
        dimension: "Dimension",
        tether: "Tether AI",
        closedSource: "Commercial Closed IDEs",
        chatbots: "Web Chatbots",
        d1: {
          name: "Code & Session Privacy",
          tether: "100% Local (~/.tether 0600)",
          closed: "Code indexed & stored in cloud",
          chat: "Manual copy-paste into browser",
        },
        d2: {
          name: "Model Freedom",
          tether: "Any Gateway (DeepSeek/Ollama/vLLM)",
          closed: "Locked to costly vendor subs",
          chat: "Locked to single web interface",
        },
        d3: {
          name: "Patch Verification",
          tether: "AST Patches + Local Sandbox Tests",
          closed: "Partial inline completion",
          chat: "Manual copy-paste, no testing",
        },
        d4: {
          name: "Undo & Rollback",
          tether: "Atomic /undo file snapshot rollback",
          closed: "Relies on manual Ctrl+Z / Git",
          chat: "No workspace state awareness",
        },
        d5: {
          name: "Local OCR Vision",
          tether: "Built-in MinerU offline extractor",
          closed: "Costly per-token vision APIs",
          chat: "Cloud multimodal parsing",
        },
        d6: {
          name: "Open Source & Pricing",
          tether: "MIT Open Source · Free forever",
          closed: "$20~$40/mo proprietary lock-in",
          chat: "Monthly subscription fees",
        },
      },
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about runtime requirements, models, and privacy.",
      items: [
        {
          question: "Is Tether completely free and open source?",
          answer:
            "Yes. Tether is released under the permissive MIT license. Both the runtime and the desktop application are 100% free. You only pay for your own model API usage (or completely free with local Ollama).",
        },
        {
          question: "What are the system requirements?",
          answer:
            "Tether Desktop runs on macOS 12+ (Apple Silicon M-series and Intel) and Windows 10/11 64-bit. Because inference runs against APIs or your local Ollama server, Tether itself is extremely lightweight and fast.",
        },
        {
          question: "Are my code or chats sent to Tether servers?",
          answer:
            "Never. Tether is strictly local-first. We do not operate any telemetry or central proxy servers. All configs and session histories are stored in ~/.tether, communicating only with your chosen API endpoint.",
        },
        {
          question: "How do I connect private models like Ollama or vLLM?",
          answer:
            "In Settings, choose Custom OpenAI-Compatible endpoint and input your base URL (e.g., http://localhost:11434/v1) and model identifier. It works completely offline in air-gapped intranets.",
        },
        {
          question: "How do I rollback changes if the Agent makes a mistake?",
          answer:
            "Type /undo in the prompt or click the undo button. Tether's transactional snapshot engine will restore all touched workspace files to the exact state before that action.",
        },
      ],
    },
    feedbackBanner: {
      title: "Have questions or feature requests?",
      desc: "Tether is community-driven. You are welcome to submit bug reports and feature ideas on GitHub Issues!",
      cta: "Submit an Issue on GitHub ↗",
    },
    footer: {
      tagline: "Open-source, local-first Agent Harness",
      builtWith: "Built with a focus on developer autonomy and craftsmanship.",
      colProduct: "Product",
      colResources: "Resources",
      colCommunity: "Community",
      links: {
        desktop: "Desktop Downloads",
        features: "Features",
        changelog: "Changelog",
        docs: "Documentation",
        harness: "Harness Architecture",
        github: "GitHub Repository",
        issues: "Feedback & Issues",
        license: "MIT License",
      },
      copyright: "© 2026 Tether AI. All rights reserved.",
    },
  },
};
