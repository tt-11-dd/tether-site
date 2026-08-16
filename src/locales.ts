export const locales = {
  zh: {
    nav: {
      downloads: "下载",
      features: "核心特性",
      architecture: "开放架构",
      harness: "Harness",
      quickstart: "快速上手",
      comparison: "方案对比",
      faq: "常见问题",
      feedback: "问题反馈",
      github: "GitHub 仓库",
      downloadCta: "免费下载桌面端",
    },
    hero: {
      titleLine1: "Tether",
      subtitle:
        "基于 Pi Agent 生态构建，把 DeepSeek 与兼容模型的推理变成可见、可控、可撤销的代码改动。会话与工作区数据留在本机，模型请求直达你配置的端点。",
      primaryCtaMac: "下载 macOS 版 (Apple Silicon)",
      primaryCtaWin: "下载 Windows 版 (x64)",
      primaryCtaGeneric: "下载桌面安装包",
      secondaryCta: "查看 GitHub 源码",
      stats: {
        privacy: "本地会话 · 无 Tether 云端中转",
        models: "DeepSeek · Ollama · 自定义网关",
        undo: "Checkpoint · /undo 文件恢复",
        license: "基于 Pi 生态 · MIT",
      },
    },
    productPreview: {
      tag: "工作台界面",
      title: "看得见 Agent 在仓库里做了什么",
      subtitle: "统一展示推理状态、工具调用、终端输出、文件 Diff 与检查点恢复。生成中可排队后续问题，结束后按序发送。",
    },
    download: {
      tag: "桌面版安装包",
      title: "下载 Tether Desktop 客户端",
      subtitle: "专为 macOS 与 Windows 打造的桌面客户端，工作区与会话在本机。",
      macArm: {
        title: "macOS (Apple Silicon)",
        desc: "适用于 M1 / M2 / M3 / M4 / M5 芯片的 Mac 电脑",
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
        size: "约 114 MB",
        badge: "Win 10/11",
      },
      notice:
        "注：当前 macOS 为开发签名包，若提示无法打开可右键「打开」，或执行 xattr -cr /Applications/Tether.app；Windows 首次运行若遇 SmartScreen，点击「更多信息 → 仍要运行」即可。",
    },
    harness: {
      tag: "Harness Engineering",
      title: "驾驭工程：让 Agent 稳定干活的那一层",
      subtitle: "模型负责推理。Harness 负责环境、意图、约束与反馈回路——人类掌舵，Agent 执行。Tether 在 Pi 的 coding-agent 循环上补齐权限、沙箱、会话与桌面可观测性，而不是重写一条自研内核。",
      items: [
        {
          kicker: "Agent Loop",
          title: "工具循环 · Context Window",
          desc: "提示、工具结果与下一次调用串在同一轮。上下文窗口有限，所以要 compaction、按轮停下和审批，而不是指望一次把仓库做完。",
        },
        {
          kicker: "Context Engineering",
          title: "上下文工程",
          desc: "给 Agent 一张地图，而不是整本百科。AGENTS.md、Skills、MCP 与 @ 文件引用做渐进披露，让仓库对 Agent 可读、可导航。",
        },
        {
          kicker: "Constraints",
          title: "约束与强制执行",
          desc: "Plan / Ask / Workspace / Full 加上 OS 沙箱，把能做的边界写成可执行规则。缺的不是「再努力一点」，而是对 Agent 既清晰可读又可强制执行的能力。",
        },
        {
          kicker: "Feedback Loop",
          title: "反馈回路与长程任务",
          desc: "工具输出、测试、Diff 与 Checkpoint 构成闭环；/compact 压缩旧对话，进度文件与检查点把工作留给下一扇窗口，避免半截实现和过早宣布完成。",
        },
      ],
      note: "术语对齐 OpenAI 的 Harness Engineering（设计环境、意图与反馈回路）和 Anthropic 对 long-running agent harness 的实践（跨 context window 的增量进度与干净状态）。循环来自 Pi；Tether 做权限、沙箱、Checkpoint 与桌面层。",
      sources: [
        { label: "OpenAI · Harness Engineering", href: "https://openai.com/zh-Hans-CN/index/harness-engineering" },
        { label: "Anthropic · Long-running agents", href: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents" },
      ],
    },
    architecture: {
      tag: "开放架构",
      title: "Pi 提供 Agent 基础，Tether 负责安全落地",
      subtitle: "我们明确区分上游基础能力与 Tether 自己的产品层，不把开源依赖包装成自研内核。",
      step1: {
        title: "1. Pi Agent 生态",
        desc: "复用 Agent 状态与工具循环、模型协议、Coding Agent 扩展与 RPC，以及 Runtime CLI 的终端组件。",
      },
      step2: {
        title: "2. Agent 内核",
        desc: "在 Pi 上增加 DeepSeek 默认体验、四级权限、工作区工具、OS 沙箱、托管命令、Checkpoint、MCP、Hooks 与 Skills。",
      },
      step3: {
        title: "3. Tether Desktop",
        desc: "Electron 与 React 工作台通过独立 Agent 进程提供项目会话、实时轨迹、后续排队、Diff 审查、设置与中英文交互。",
      },
    },
    features: {
      tag: "核心特性",
      title: "在成熟 Agent 基础上，做好边界与体验",
      subtitle: "Pi 负责通用 Agent 基础，Tether 聚焦 DeepSeek、本地工作区、安全策略和桌面协作。",
      f1: {
        title: "Pi 驱动的 Agent 循环",
        desc: "基于 pi-agent-core、pi-ai 与 pi-coding-agent 处理消息流、模型调用、工具执行、扩展生命周期和会话。",
      },
      f2: {
        title: "DeepSeek 优先，端点保持开放",
        desc: "支持官方 DeepSeek API、自定义 Base URL、模型发现，以及 OneAPI、Ollama、vLLM 等 OpenAI 兼容端点。",
      },
      f3: {
        title: "本地状态与可恢复改动",
        desc: "会话、设置和凭据保存在 ~/.tether；补丁会写入文件检查点，上一轮文件改动可通过 /undo 恢复（冲突时默认拒绝覆盖）。",
      },
      f4: {
        title: "图片理解与 OCR 流程",
        desc: "可选 GLM-4V 进行视觉理解，也可调用 MinerU 服务提取图片文本；图片会发送到所选服务，并非离线本地 OCR。",
      },
      f5: {
        title: "权限模式与 OS 沙箱",
        desc: "Plan、Ask、Workspace 与 Full 四种权限配合 macOS Seatbelt；Windows sandbox helper 需安装并启用后可用，越界操作显式审批。",
      },
      f6: {
        title: "开放扩展与工程上下文",
        desc: "支持 AGENTS.md、CLAUDE.md、Agent Skills、MCP 与 Hooks，把团队规则接入同一 Agent 工作流。",
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
        action: "支持 macOS Apple Silicon 与 Windows 10/11 x64",
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
        desc: "点击「打开文件夹」选定代码库，用自然语言提出需求。生成尚未结束时也可输入下一条（最多排 5 条），当前轮结束后自动发送；需要时随时 /undo 回退。",
        action: "权限模式、后续排队、OS 沙箱与 Checkpoint /undo 保护",
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
          tether: "会话与配置存储于本机 ~/.tether",
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
          tether: "工作区补丁 + 工具 + 沙箱命令",
          closed: "插件内局部补全或受限执行",
          chat: "手动复制粘贴，无法执行测试",
        },
        d4: {
          name: "撤销与回滚机制",
          tether: "文件快照 Checkpoint · /undo 恢复",
          closed: "依赖 Ctrl+Z 或 Git 手动回退",
          chat: "无任何工程状态管理",
        },
        d5: {
          name: "图片与 OCR",
          tether: "可选 GLM-4V + MinerU 服务",
          closed: "按 Token 计费的高昂 Vision API",
          chat: "依赖云端多模态分析",
        },
        d6: {
          name: "开源与商业模式",
          tether: "MIT 开源 · 自带模型端点",
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
            "Tether 桌面端和运行时采用 MIT 许可证，不收取软件订阅费。你仍需承担所选模型或 OCR 服务的费用；使用本地兼容模型时可避免模型 API 费用。",
        },
        {
          question: "运行 Tether 需要什么系统与硬件要求？",
          answer:
            "当前安装包支持 macOS Apple Silicon (arm64) 与 Windows 10/11 x64；暂不提供 Intel Mac 安装包。模型推理由你配置的远程 API 或本地兼容网关完成。",
        },
        {
          question: "我的代码和对话会被上传到 Tether 的服务器吗？",
          answer:
            "Tether 不运行遥测或模型中转服务器，配置、会话和检查点保存在本机 ~/.tether。为了完成任务，提示词、相关代码上下文和图片仍会发送到你选择的模型、网关或 OCR 服务；敏感项目可使用本地兼容端点。",
        },
        {
          question: "如何接入公司内网的私有模型（如 Ollama / vLLM）？",
          answer:
            "在 Tether 设置中，将提供商切换为自定义 OpenAI 兼容接口，填入你的内网 Base URL（如 http://localhost:11434/v1）和对应模型名即可。能否完全离线取决于该网关与模型是否支持工具调用。",
        },
        {
          question: "如果 Agent 修改错了代码，我该如何撤销？",
          answer:
            "在输入框中直接输入 /undo 或点击界面上的回退按钮。Tether 会按文件快照尝试恢复本轮改动前的内容；若文件在之后又被改过，默认会拒绝覆盖，可按提示强制恢复。",
        },
        {
          question: "生成还没结束时，可以继续提问吗？",
          answer:
            "可以。回车会把问题排到输入框上方（最多 5 条），当前回答结束后按顺序发送。点停止会中止本轮但保留排队，再用「立即发送」发出。换对话或换项目会清空排队；排队只存在于当前窗口，不会写入会话文件。",
        },
      ],
    },
    feedbackBanner: {
      title: "遇到问题或有新功能想法？",
      desc: "Tether 是由社区共同驱动的开源项目。欢迎在 GitHub Issues 提出 Bug 反馈或功能建议！",
      cta: "在 GitHub Issues 反馈问题 ↗",
    },
    footer: {
      tagline: "基于 Pi 生态的桌面 Agent 工作台",
      builtWith: "Pi 提供基础，Tether 负责安全边界与桌面体验。",
      colProduct: "产品",
      colResources: "资源",
      colCommunity: "社区",
      links: {
        desktop: "桌面端下载",
        features: "功能特性",
        changelog: "更新日志",
        docs: "开发文档",
        harness: "Harness",
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
      architecture: "Architecture",
      harness: "Harness",
      quickstart: "Quickstart",
      comparison: "Compare",
      faq: "FAQ",
      feedback: "Issues",
      github: "GitHub",
      downloadCta: "Download Desktop App",
    },
    hero: {
      titleLine1: "Tether",
      subtitle:
        "Built on the Pi agent ecosystem, Tether turns DeepSeek and compatible models into visible, controlled, recoverable repository changes. Sessions stay local; model requests go directly to your endpoint.",
      primaryCtaMac: "Download for macOS (Apple Silicon)",
      primaryCtaWin: "Download for Windows (x64)",
      primaryCtaGeneric: "Download Desktop App",
      secondaryCta: "View GitHub Repo",
      stats: {
        privacy: "Local sessions · No Tether relay",
        models: "DeepSeek · Ollama · Custom gateways",
        undo: "Checkpoints · /undo recovery",
        license: "Built on Pi · MIT",
      },
    },
    productPreview: {
      tag: "Interface",
      title: "See what the agent is doing in your repository",
      subtitle: "One view for model status, tool calls, terminal output, file diffs, and checkpoint recovery. Queue follow-ups while a reply is still generating.",
    },
    download: {
      tag: "Desktop Installers",
      title: "Download Tether Desktop",
      subtitle: "Desktop builds for macOS and Windows. Workspace and sessions stay on your machine.",
      macArm: {
        title: "macOS (Apple Silicon)",
        desc: "For Mac machines with M1 / M2 / M3 / M4 / M5 chips",
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
        size: "~114 MB",
        badge: "Win 10/11",
      },
      notice:
        "Note: macOS builds are development-signed. If Gatekeeper blocks open, right-click → Open, or run xattr -cr /Applications/Tether.app. On Windows, if SmartScreen appears, choose More info → Run anyway.",
    },
    harness: {
      tag: "Harness Engineering",
      title: "The layer that steers the agent, not the chat box",
      subtitle: "The model reasons. A harness designs the environment, intent, constraints, and feedback loops — humans steer, agents execute. Tether layers permissions, sandbox, session, and desktop observability on Pi’s coding-agent loop instead of claiming a proprietary kernel.",
      items: [
        {
          kicker: "Agent Loop",
          title: "Tool loop · Context window",
          desc: "Prompts, tool results, and the next call stay in one turn. Context windows are finite, so compaction, stop, and approval matter more than trying to finish the repo in one shot.",
        },
        {
          kicker: "Context Engineering",
          title: "Context engineering",
          desc: "Give the agent a map, not an encyclopedia. AGENTS.md, Skills, MCP, and @ mentions are progressive disclosure so the repo is agent-readable and navigable.",
        },
        {
          kicker: "Constraints",
          title: "Constraints you can enforce",
          desc: "Plan / Ask / Workspace / Full plus an OS sandbox turn boundaries into executable rules. Progress usually means adding a capability that is both readable and enforceable for the agent — not “try harder”.",
        },
        {
          kicker: "Feedback Loop",
          title: "Feedback loops & long-horizon work",
          desc: "Tool output, tests, diffs, and checkpoints close the loop. /compact shrinks old turns; progress files and checkpoints leave a clean state for the next context window, instead of half-built features or a false “done”.",
        },
      ],
      note: "Vocabulary follows OpenAI’s Harness Engineering (environment, intent, feedback loops) and Anthropic’s long-running agent harness (incremental progress across context windows, clean state). The loop comes from Pi; Tether adds permissions, sandbox, checkpoints, and the desktop layer.",
      sources: [
        { label: "OpenAI · Harness Engineering", href: "https://openai.com/index/harness-engineering" },
        { label: "Anthropic · Long-running agents", href: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents" },
      ],
    },
    architecture: {
      tag: "Open Architecture",
      title: "Pi provides the foundations; Tether makes them safe and usable",
      subtitle: "We distinguish upstream foundations from Tether's product layer instead of presenting open-source dependencies as a proprietary kernel.",
      step1: {
        title: "1. Pi Agent Ecosystem",
        desc: "Agent state and tool loops, model protocols, coding-agent extensions and RPC, plus terminal components for the Runtime CLI.",
      },
      step2: {
        title: "2. Agent Core",
        desc: "Adds DeepSeek defaults, four permission modes, workspace tools, OS sandboxing, managed commands, checkpoints, MCP, Hooks, and Skills.",
      },
      step3: {
        title: "3. Tether Desktop",
        desc: "An Electron and React workbench for project threads, live activity, follow-up queue, diff review, settings, and bilingual interaction over a separate agent process.",
      },
    },
    features: {
      tag: "Core Features",
      title: "Clear boundaries on top of proven agent foundations",
      subtitle: "Pi supplies general agent infrastructure; Tether focuses on DeepSeek, local workspaces, safety policy, and desktop collaboration.",
      f1: {
        title: "Pi-powered agent loop",
        desc: "Built on pi-agent-core, pi-ai, and pi-coding-agent for message streams, model calls, tools, extension lifecycle, and sessions.",
      },
      f2: {
        title: "DeepSeek first, endpoints open",
        desc: "Use the official DeepSeek API, a custom Base URL with model discovery, or compatible OneAPI, Ollama, and vLLM endpoints.",
      },
      f3: {
        title: "Local state and recoverable edits",
        desc: "Sessions, settings, and credentials live under ~/.tether. Patches write file checkpoints so /undo can restore the previous turn (conflicts refuse overwrite by default).",
      },
      f4: {
        title: "Image understanding and OCR",
        desc: "Use optional GLM-4V visual understanding or the MinerU OCR service. Images are sent to the selected service; OCR is not offline.",
      },
      f5: {
        title: "Permission modes and OS sandbox",
        desc: "Plan, Ask, Workspace, and Full modes pair with macOS Seatbelt; Windows sandbox helpers are available where installed and enabled. Boundary escalation still requires approval.",
      },
      f6: {
        title: "Open extension and project context",
        desc: "Use AGENTS.md, CLAUDE.md, Agent Skills, MCP, and Hooks to bring team rules into the same agent workflow.",
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
        action: "Supports macOS Apple Silicon & Windows 10/11 x64",
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
        desc: "Choose your workspace, describe the task, and review patches live. You can queue the next prompt (up to 5) while a reply is still generating; it sends when the current turn finishes. Use /undo when needed.",
        action: "Permission modes, follow-up queue, OS sandbox, and Checkpoint /undo",
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
          tether: "Sessions & config stored in local ~/.tether",
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
          tether: "Workspace patches + tools + sandboxed commands",
          closed: "Partial inline completion",
          chat: "Manual copy-paste, no testing",
        },
        d4: {
          name: "Undo & Rollback",
          tether: "File-snapshot checkpoints · /undo restore",
          closed: "Relies on manual Ctrl+Z / Git",
          chat: "No workspace state awareness",
        },
        d5: {
          name: "Images & OCR",
          tether: "Optional GLM-4V + MinerU service",
          closed: "Costly per-token vision APIs",
          chat: "Cloud multimodal parsing",
        },
        d6: {
          name: "Open Source & Pricing",
          tether: "MIT source · Bring your endpoint",
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
            "Tether Desktop and its runtime use the MIT license and charge no software subscription. You are still responsible for model or OCR service fees; a compatible local model can avoid model API charges.",
        },
        {
          question: "What are the system requirements?",
          answer:
            "Current installers support macOS Apple Silicon (arm64) and Windows 10/11 x64. Intel Mac installers are not currently provided. Inference runs through your configured remote API or compatible local gateway.",
        },
        {
          question: "Are my code or chats sent to Tether servers?",
          answer:
            "Tether runs no telemetry or model relay server; configs, sessions, and checkpoints stay under ~/.tether. To complete tasks, prompts, relevant code context, and images are still sent to your selected model, gateway, or OCR service. Sensitive projects can use a compatible local endpoint.",
        },
        {
          question: "How do I connect private models like Ollama or vLLM?",
          answer:
            "In Settings, choose Custom OpenAI-Compatible endpoint and input your base URL (e.g., http://localhost:11434/v1) and model identifier. Fully offline use depends on that gateway and whether the model supports tool calls.",
        },
        {
          question: "How do I rollback changes if the Agent makes a mistake?",
          answer:
            "Type /undo in the prompt or click the undo button. Tether restores files from the previous checkpoint; if a file changed again afterward, overwrite is refused by default and you can force restore when prompted.",
        },
        {
          question: "Can I ask another question while a reply is still generating?",
          answer:
            "Yes. Press Enter to queue it above the composer (max 5). Queued prompts send in order when the current turn finishes. Stop aborts the turn but keeps the queue; use Send now to dispatch it. Switching thread or project clears the queue. It is not stored in the session file.",
        },
      ],
    },
    feedbackBanner: {
      title: "Have questions or feature requests?",
      desc: "Tether is community-driven. You are welcome to submit bug reports and feature ideas on GitHub Issues!",
      cta: "Submit an Issue on GitHub ↗",
    },
    footer: {
      tagline: "A desktop agent workbench built on Pi",
      builtWith: "Pi provides the foundation; Tether defines the safety boundary and desktop experience.",
      colProduct: "Product",
      colResources: "Resources",
      colCommunity: "Community",
      links: {
        desktop: "Desktop Downloads",
        features: "Features",
        changelog: "Changelog",
        docs: "Documentation",
        harness: "Harness",
        github: "GitHub Repository",
        issues: "Feedback & Issues",
        license: "MIT License",
      },
      copyright: "© 2026 Tether AI. All rights reserved.",
    },
  },
};
