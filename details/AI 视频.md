> **更新时间**: 2026-05-21 08:29:01 | [首页](/README.md) | [分类](/TAGS.md)

## AI 视频




### [Erdős-突破：OpenAI-模型首次实现重大-AI-数学发现](https://www.youtube.com/watch?v=Br4l9YjCyRU)

2026-05-20 19:20:13 | 标签: OpenAI, 数学突破, 组合几何, 代数数论, Erdős 问题

> OpenAI 研究人员以亲历者视角分享了这一历史性 AI 成就：AI 模型首次解决了组合几何领域一个久负盛名的开放问题，这也是该数学子领域最广为人知的未解问题之一。该问题涉及平面上点的排列（即 Erdős 单位距离问题），表面上是纯粹的初等几何题，但其解法却需要代数数论中的深层工具。在此结果出现之前，已有的几何构造方案被普遍认为已接近最优。AI 模型证明，这一构造实际上还可以得到显著改进。关键洞察在于：证明路径需要做出海量极为精密的连续决策，其复杂程度超出了人类数学家系统执行的能力范畴；而 AI 得以穷举探索全部证明可能性，并最终找到一条可行路径。研究人员坦言，看到结果的第一反应是难以置信，这...



### [用-Claude-Code-Routines-构建主动式智能体工作流](https://www.youtube.com/watch?v=eSP7PLTXNy8)

2026-05-20 12:14:19 | 标签: Claude Code, Routines, 主动式智能体, 智能体工作流, 无服务器自动化

> 在 Anthropic 「Code with Claude」 开发者大会的这场 20 分钟工作坊中，Applied AI 团队的 Maya 展示了 Routines——Claude Code 内置的全新原生自动化功能，将 AI 辅助从被动响应升级为主动驱动。演讲首先剖析了当前工程师构建主动式智能体时面临的三大痛点：不稳定的本地托管（笔记本合盖即断连）、繁琐的触发基础设施（手动配置 cron 和 Webhook 端点），以及糟糕的会话可见性（无法监控、介入或恢复无头运行中的任务）。Routines 通过在 Anthropic 托管的无服务器云上运行 Claude Code 会话，支持基于时间表和...



### [告别「盯屏守候」：Claude-Code-高级自动化三层框架](https://www.youtube.com/watch?v=wI0ptqCSL0I)

2026-05-20 11:49:28 | 标签: Claude Code, AI 智能体, 验证循环, 多智能体自动化, Chrome MCP

> 在这场大会演讲中，Claude Code 创始工程师 Sid Bidasaria 直击一个日益突出的悖论：AI 模型越来越强大，开发者却要花更多时间盯着屏幕等待结果。他围绕三层架构路线图，系统讲解如何一步步实现「无人值守」工程协作。  第一层是验证循环：让 Claude 按照人类开发者的测试 SOP 自主校验工作成果——写代码、编译、启动运行时、通过 Chrome MCP 或 Playwright 进行浏览器自动化、检查副作用，并持续迭代直至达到预设的成功状态。Sid 以开源项目 Monkeytype 进行了现场演示：Claude 自动启动开发服务器，用 Chrome MCP 操作 UI，发现...



### [Code-with-Claude-伦敦-2026-开幕主题演讲：Opus-4.7、Advisor-Strategy-与-Routines-全面解析](https://www.youtube.com/watch?v=6amLO7I9xdg)

2026-05-19 19:18:23 | 标签: Claude Code, Anthropic, AI 原生工程, 智能体工作流, MCP Tunnels

> Code with Claude 伦敦 2026 开幕主题演讲是 Anthropic 的旗舰开发者活动，汇聚了模型研究、平台与开发者工具三大团队，共同呈现 AI 原生工程的完整图景。  演讲以一个核心命题破题：从创意到上线产品的距离正在急剧压缩。现实案例包括：Spotify 基于 Claude 构建的迁移智能体每月合并 1000 余个 PR，迁移时间缩短 90%；Binty 的寄养家庭平台将家庭资质审核周期缩短了 20 天。  研究 PM 团队的 Lisa 梳理了从 Opus 3 到 Opus 4.7 再到 Mythos 预览版的模型演进历程。Mythos 在完整 OpenBSD 源码中发现了...



### [别构建垃圾：AI-智能体成熟度的四个层级](https://www.youtube.com/watch?v=yUmS-F9IX90)

2026-05-19 15:00:06 | 标签: AI 智能体, 智能体架构, 状态机, 看板, 云端智能体

> 在这场技术分享中，Cline 的 Ara Khan 提出了一套清醒务实的 AI 智能体工程框架，反驳了业界对智能体的「集体狂热」。他将构建之旅拆分为四个层级：Level 1 使用现有框架（LangChain、LangGraph）快速验证产品方向；Level 2 从零构建智能体，以自定义状态机为核心，遵循五条基础准则；Level 3 引入看板 UX，并发管理多个推理密集型智能体；Level 4 将智能体部署至云端，支持长时运行与规模化扩展。  Level 2 的五条准则是本次分享的核心。准则一：每个智能体本质上都是一个带条件和终态的递归 while 循环，将其建模为状态机可使工程过程可预期。准则...



### [LLM-时代的个性化推荐：Spotify-生成式推荐引擎的三大技术支柱](https://www.youtube.com/watch?v=5YSJEP0HWzM)

2026-05-19 13:00:06 | 标签: Spotify, 推荐系统, LLM 个性化, 语义 ID, 软分词

> Shivam Verma 是 Spotify AI Foundation 团队用户表征组的技术负责人，他以第一视角完整讲解了 Spotify 如何为全球 7.5 亿月活用户现代化推荐基础设施。演讲围绕三大核心支柱展开。第一，用户基础建模：Spotify 从基于自编码器的用户嵌入迁移至以 Transformer 为骨干的序列模型，将用户、歌曲和播客节目映射到同一超球面嵌入空间，实现十亿用户规模下的跨内容建模。第二，通过语义 ID 理解内容目录：将 1000 维内容向量压缩为 4-6 个离散层次化 Token，让在 Spotify 数据上微调的开源 LLM（Llama、Qwen）能够自回归地预测用...



### [构建能持续运行数小时的智能体：Anthropic-工程师揭秘对抗式生成-评估架构](https://www.youtube.com/watch?v=mR-WAvEPRwE)

2026-05-18 13:00:06 | 标签: 长时运行智能体, Anthropic, Claude Code, Agent SDK, 对抗式评估

> 在这场 34 分钟的 AI Engineer 大会技术演讲中，Anthropic 应用 AI 工程师 Ash Prabaker 与 Andrew Wilson 系统回顾并蓝图化了构建长时间运行自主智能体的方法论。  Andrew 首先归纳了导致智能体在长时运行中退化的三类结构性失效：上下文约束（有限的上下文窗口、上下文腐化、以及接近 token 上限时的「上下文焦虑」）、原生规划能力不足，以及输出奉承——模型会对自身不完整的工作盖章放行。  随后 Andrew 梳理了 Claude 模型权重与外部 Agent SDK 脚手架一年来的协同演化历程：自主运行时长从 Opus 3.7 的约 1 小时...



### [超越代码覆盖率：用-Playwright-实现功能测试，重塑-AI-时代的-TDD-闭环](https://www.youtube.com/watch?v=FWEInOtngmM)

2026-05-16 18:00:06 | 标签: Playwright, 测试驱动开发, 端到端测试, GitHub Copilot, AI 生成代码

> 在这场 22 分钟的 AI Engineer 大会演讲中，微软和 GitHub 高级开发者布道师 Marlene Mhangami 以一组震撼数据开场：GitHub 预计在 2026 年底前录得 140 亿次提交，是去年创纪录数量的 14 倍，其中越来越多的提交由 AI 智能体协同完成。她引用斯坦福大学对 12 万名开发者的研究指出，AI 是一个放大器：整洁的代码库能显著放大 AI 带来的生产力收益，而在混乱代码库中不加约束地使用 AI，只会加速代码腐化，让团队花在重构上的时间远超新功能交付。  演讲的核心论点是对传统「以代码覆盖率为中心的 TDD」的批判。她归纳出 AI 时代的两种失效模式：...



### [智能体不开站会：构建「后工程师」工程组织的实战案例](https://www.youtube.com/watch?v=VMemhtlsoNk)

2026-05-15 17:00:06 | 标签: AI 智能体, 后工程师组织, 工程组织变革, 轻量设计文档, 智能体代码审查

> 在 AI Engineer 大会上，来自 PFF（Pro Football Focus）的 Mike Spitz 分享了一个将传统工程团队转型为「后工程师」组织的具体案例。从 2025 年底使用 Claude Opus 进行实验开始，PFF 抽调两名工程师组成攻坚小组，通过结合工单数量与代码复杂度的综合衡量方式，最终实现了每日部署量 25 倍于 10 人传统团队的成绩（5 次/天 vs. 每 5 天 1 次），整体产出提升 10 倍，客户质量评分也从 7.0 升至 8.6。  最颠覆性的结果是：Scrum 没能活下来。冲刺计划会、每日站会、冲刺梳理会以及项目经理角色全部被裁撤。取而代之的是智能...



### [用-AI-让工程团队产出翻倍：Intercom-高级首席工程师-Brian-Scanlan-的-Agent-First-实战](https://www.youtube.com/watch?v=4_VQBbs2iQA)

2026-05-15 13:00:06 | 标签: AI Engineering, Claude Code, 研发效能, Agent-First SDLC, Intercom

> 在这场 AI Engineer 大会演讲中，Brian Scanlan 详细复盘了 Intercom 在 ChatGPT 发布后全公司转向 AI-first 的推进过程。管理层只定了一个硬指标——「人均 R&D 代码变更数」，并公开承诺一年内做到 2X。落地打法围绕三步：第一是自上而下的文化变革，岗位说明书直接写明「不采用 AI 即不达预期」，同时成立专职的 Team 2X；第二是平台收敛，放弃过去对各类编辑器一视同仁的策略，全面押注 Claude 与 Claude Code，并把它接入公司内部所有系统、约定和架构模式；第三是 agent-first 工程原则，工程师必须「向上一层」工作，把工...



### [OpenAI-Codex-负责人-Tibo-Sio：Codex-如何从开发者工具进化为通用-Agent，并预告-Slash-Goal-与-Auto-Review](https://www.youtube.com/watch?v=DLP9CagE3dU)

2026-05-14 20:28:12 | 标签: OpenAI Codex, AI Agent, 知识工作, Slash Goal, Auto Review

> 在这场 OpenAI Forum 对谈中，Codex 负责人 Tibo Sio 与主持人 Chris Nicholson 一同复盘了 Codex 的关键转向：从面向开发者的云端 Web 工具，演化为运行在用户本地、服务所有知识工作者的通用 Agent。Tibo 指出，即便是工程师，每天真正写代码的时间也只有 20%-30%，而 GPT-5 让长时任务的执行可靠性大幅提升后，产品自然外延到信息搜集、跨团队协同、数据拉取、财务运营、市场调研和会议准备等场景。他现场用一句语音指令，在几分钟内生成了一份旧金山面包店表格，并进一步做成可交互的地图页面；随后他描述自己每天会跑上百个 Codex 任务，把 ...



### [OpenAI-Imagen-2.0-深度解析：文字渲染、多语言支持与创意-Agent-路线图](https://www.youtube.com/watch?v=bH2nP-aCFjk)

2026-05-14 17:31:22 | 标签: Imagen 2.0, OpenAI, AI 图像生成, 文字渲染, 写实主义

> 本期 OpenAI 播客由主持人 Andrew Maine 与 Adele Lee（产品负责人）及 Kenji（研究员）共同探讨 Imagen 2.0 的发布与市场反响。两位嘉宾将新模型定性为相较于前代 DALL-E 的「文艺复兴」级进步，并重点介绍三项核心突破：大幅提升的文字渲染能力（能生成真实可读的文字与信息图表）、契合亚欧用户需求的多语言支持，以及基于世界知识而非理想化美学的写实图像生成。  用量数据印证了这一影响力：ChatGPT 每周生成超过 15 亿张图像，自发布以来增长超过 50%。Kenji 介绍了内部「Grid Test」评测方法——要求模型正确渲染 100 个随机指定物体—...



### [GPT-5.5-发布](https://www.youtube.com/watch?v=blGtYq9mL18)

2026-04-23 18:06:56



### [它没坏：为什么软件基础比以往任何时候都更重要-—-Matt-Pocock，AI-英雄-@mattpocockuk](https://www.youtube.com/watch?v=v4F1gFy-hqg)

2026-04-23 15:15:06



### [应用的终结——Kitze，Sizzy.co](https://www.youtube.com/watch?v=4fntwuOoedA)

2026-04-23 15:15:06



### [SAP：与-CTO-Philipp-Herzig-一起将公司的“操作系统”带入-AI-时代](https://www.youtube.com/watch?v=5u7AjPardvo)

2026-04-23 10:00:18



### [规模化构建生成式图像与视频模型---Sander-Dieleman-Veo-与-Nano-Banana](https://www.youtube.com/watch?v=xOP1PM8fwnk)

2026-04-21 19:33:38



### [这就是-ChatGPT-图像-2.0](https://www.youtube.com/watch?v=-7JSa_luc6k)

2026-04-21 19:01:59



### [AI-如何改变软件工程：与-Gergely-Orosz-@pragmaticengineer-的对话](https://www.youtube.com/watch?v=CS5Cmz5FssI)

2026-04-21 16:00:06



### [Gemma，DeepMind-的开放模型家族-—-Omar-Sanseviero，Google-DeepMind](https://www.youtube.com/watch?v=_gVFUEdhCyI)

2026-04-20 15:15:06



### [新的应用层---Vercel-CTO-Malte-Ubl](https://www.youtube.com/watch?v=XKup1pj-34M)

2026-04-20 15:15:06



### [驾驭工程学：当人类掌舵、智能体执行时如何构建软件-—-Ryan-Lopopolo，-OpenAI](https://www.youtube.com/watch?v=am_oeAoUhew)

2026-04-17 00:29:28



### [Building-pi-in-a-World-of-Slop-—-Mario-Zechner](https://www.youtube.com/watch?v=RjfbvDXpFls)

2026-04-16 22:58:06



### [第-16-集：为生命科学构建-AI](https://www.youtube.com/watch?v=UZyH0nx5zgI)

2026-04-16 19:04:11



### [State-of-the-Claw-—-Peter-Steinberger](https://www.youtube.com/watch?v=zgNvts_2TUE)

2026-04-16 10:02:59



### [Harness-Engineering：有時候語言模型不是不夠聰明，只是沒有人類好好引導](https://www.youtube.com/watch?v=R6fZR_9kmIw)

2026-04-12 19:57:45



### [ChatGPT-与癌症：一位科技创始人如何重写他的治疗方案](https://www.youtube.com/watch?v=OAlHiQLsYQM)

2026-04-09 22:44:27



### [Hex-如何构建-AI-智能体：让智能体像人类数据分析师一样进行推理-|-Izzy-Miller，AI-工程师](https://www.youtube.com/watch?v=Xyh1EqcjGME)

2026-04-09 16:00:54



### [从混乱到编排：真正有效的多智能体协同模式-—-Sandipan-Bhaumik](https://www.youtube.com/watch?v=2czYyrTzILg)

2026-04-08 10:23:12



### [Sam-Altman-谈构建-AI-的未来](https://www.youtube.com/watch?v=ZpUKNYcgM-E)

2026-04-07 20:36:27



### [一项旨在保护全球软件安全的计划-|-Project-Glasswing](https://www.youtube.com/watch?v=INGOC6-LLv0)

2026-04-07 18:03:51



### [Salesforce-CEO-谈微软阻碍-OpenAI-投资、AI-替罪羊现象、OpenClaw-及监管](https://www.youtube.com/watch?v=OzUqfN4mcrM)

2026-04-05 21:48:47



### [为什么以及如何沙箱化-AI-生成的代码？——-Harshil-Agrawal，Cloudflare](https://www.youtube.com/watch?v=AHtGAgQ0Q_Q)

2026-04-03 15:48:46



### [关于代码智能体、AutoResearch-与-AI-循环时代的安德烈·卡帕西](https://www.youtube.com/watch?v=kwSVtQ7dziU)

2026-03-20 13:27:35



### [Stitch-2.0-+-Claude-Code：这简直是疯狂的-AI-编程工作流！](https://www.youtube.com/watch?v=EKix32vioss)

2026-03-19 09:37:49



### [构建-AI-改善医疗保健-—-OpenAI-播客-第-14-集](https://www.youtube.com/watch?v=VAzryGwnJW8)

2026-03-16 17:00:00



### [Build-Hour：API-与-Codex](https://www.youtube.com/watch?v=rhsSqr0jdFw)

2026-03-10 17:42:29



### [AlphaGo-十年：AI-的转折点-|-Thore-Graepel-&amp;-Pushmeet-Kohli](https://www.youtube.com/watch?v=qoinGjj60Fo)

2026-03-10 17:28:31



### [解剖小龍蝦-—-以-OpenClaw-為例介紹-AI-Agent-的運作原理](https://www.youtube.com/watch?v=2rcJdFuNbZQ)

2026-03-09 01:19:21



### [Builders-Unscripted：第-1-集---OpenClaw-创始人-Peter-Steinberger](https://www.youtube.com/watch?v=9jgcT0Fqt7U)

2026-02-24 17:03:32



### [Build-Hour：Prompt-Caching](https://www.youtube.com/watch?v=tECAkJAI_Vk)

2026-02-18 21:25:25



### [智能体可观测性赋能智能体评估](https://www.youtube.com/watch?v=reISMhbZ2XE)

2026-02-09 20:44:02



### [Claude-Code-智能体团队（完整教程）：Claude-Code-最强功能现已上线！](https://www.youtube.com/watch?v=zm-BBZIAJ0c)

2026-02-07 09:15:08



### [“人人皆可开发”：v0-如何将-Git-工作流引入氛围编程-|-Guillermo-Rauch-Vercel-CEO](https://www.youtube.com/watch?v=Yb9IyTOh0xg)

2026-02-04 13:01:11



### [Codex-应用介绍](https://www.youtube.com/watch?v=HFM3se4lNiw)

2026-02-02 22:16:58



### [Build-Hour：ChatGPT-中的应用开发](https://www.youtube.com/watch?v=mFG-4vUJ0kI)

2026-01-23 19:34:20



### [OpenAI-全员大会：对话-Sam-Altman](https://www.youtube.com/watch?v=Wpxv-8nG8ec)

2026-01-21 18:18:13



### [Cursor-如何构建-AI-编程工具的未来](https://www.youtube.com/watch?v=dKSGK-fPFyU)

2026-01-08 17:50:01



### [你的-MCP-服务器很糟糕（你应该感到糟糕）--Jeremiah-Lowin，Prefect](https://www.youtube.com/watch?v=96G7FLab8xc)

2026-01-07 00:21:13



### [Claude-Agent-SDK-完整研讨会-—-Thariq-Shihipar，Anthropic](https://www.youtube.com/watch?v=TqC1qOfiVcQ)

2026-01-05 07:21:50



### [交付可行的-AI：产品经理的评估框架——Aman-Khan，Arize](https://www.youtube.com/watch?v=2HNSG990Ew8)

2025-12-26 22:06:14



### [Claude-Code-的工作原理---Jared-Zoneraich，PromptLayer](https://www.youtube.com/watch?v=RFKCzGlAU6Q)

2025-12-26 22:04:34



### [AI-圣诞特辑：2025-年度回顾与-2026-趋势预测！](https://www.youtube.com/watch?v=pDu5roEYH3Y)

2025-12-25 09:52:07



### [AI-编程-Agent-时代的开发者体验-–-Max-Kanat-Alexander，Capital-One](https://www.youtube.com/watch?v=rT2Del5pwg4)

2025-12-23 17:30:28



### [如何让-2026-年成为你一生中最好的一年（借助-AI）](https://www.youtube.com/watch?v=i65H0qaeiq0)

2025-12-23 10:59:56



### [自主性就是你需要的一切——米歇尔·卡塔斯塔，Replit](https://www.youtube.com/watch?v=MLhAA9yguwM)

2025-12-22 16:30:06



### [【生成式人工智慧與機器學習導論-2025】第-10-講：語音語言模型發展史-本課程前段內容為歷史回顧，2025-年的技術從-1:42:00-開始](https://www.youtube.com/watch?v=CbIPjrOj2Tc)

2025-12-22 08:03:27



### [无限软件危机——来自-Netflix-的-Jake-Nations](https://www.youtube.com/watch?v=eIoohUmYpGI)

2025-12-20 17:00:06



### [从-Arc-到-Dia：构建-AI-浏览器的心得-–-Samir-Mody，-The-Browser-Company-of-New-York](https://www.youtube.com/watch?v=o4scJaQgnFA)

2025-12-19 18:15:55



### [如何打造一家-AI-原生公司（即使您的公司已有-50-年历史）——-Dan-Shipper，Every-公司创始人](https://www.youtube.com/watch?v=MGzymaYBiss)

2025-12-18 18:00:06



### [智能的未来-|-戴密斯·哈萨比斯（DeepMind-联合创始人兼首席执行官）](https://www.youtube.com/watch?v=PqVbypvxDto)

2025-12-16 17:23:37



### [在-Gemini-时代进行构建——Kat-Kampf-和-Ammaar-Reshi，Google-DeepMind](https://www.youtube.com/watch?v=fgkXEIbZpGc)

2025-12-15 17:19:57



### [代码评估：从代码片段到代码库——Naman-Jain，Cursor](https://www.youtube.com/watch?v=tHN44yJoeS8)

2025-12-15 17:18:17



### [【生成式人工智慧與機器學習導論-2025】第-9-講：影像和聲音上的生成策略-—-Diffusion/Flow-matching-系列和接龍-Autoregressive-這兩條世界線的交會](https://www.youtube.com/watch?v=ccqCDD9LqCA)

2025-12-14 17:26:02



### [从“氛围编码”到“氛围工程”——Kitze-与-Sizzy](https://www.youtube.com/watch?v=JV-wY5pxXLo)

2025-12-13 04:49:41



### [能否证明人工智能在软件工程中的投资回报率？——12-万开发者研究报告，Yegor-Denisov-Blanch，斯坦福大学](https://www.youtube.com/watch?v=JvosMkuNxF8)

2025-12-11 21:57:16



### [我们为何构建并捐赠-Model-Context-Protocol-MCP](https://www.youtube.com/watch?v=PLyCki2K0Lg)

2025-12-11 20:14:58



### [不再构建智能体，转而构建技能-–-Barry-Zhang-&amp;-Mahesh-Murag，Anthropic](https://www.youtube.com/watch?v=CEvIs9y1uog)

2025-12-06 20:12:15



### [VoiceVision-RAG---将视觉文档智能与语音响应集成-—-Suman-Debnath，-AWS](https://www.youtube.com/watch?v=hwCmfThIiS4)

2025-12-06 01:01:55



### [一位哲学家解答关于-AI-的问题](https://www.youtube.com/watch?v=I9aGC6Ui3eE)

2025-12-05 16:00:37



### [Build-Hour：代理记忆模式](https://www.youtube.com/watch?v=WsGVXiWzTpI)

2025-12-04 20:28:02



### [面向未来的编码智能体-–-Bill-Chen-&amp;-Brian-Fioca，OpenAI](https://www.youtube.com/watch?v=wVl6ZjELpBk)

2025-12-04 20:16:56



### [Katelyn-Lesse-–-Anthropic：为-AI-代理优化-Claude-API](https://www.youtube.com/watch?v=aqW68Is_Kj4)

2025-12-04 20:15:01



### [Gemini-3-Pro-vs.-Claude-Opus-4.5-vs.-GPT-5.1-Codex:-谁是最佳-AI-设计师？](https://www.youtube.com/watch?v=6w0i2Wp0knM)

2025-12-03 12:00:23



### [构建-Cursor-Composer-–-Lee-Robinson，Cursor](https://www.youtube.com/watch?v=fL1iJHtl51Q)

2025-12-02 23:36:15



### [拒绝随意编程：解决复杂代码库中的难题-–-Dex-Horthy，HumanLayer](https://www.youtube.com/watch?v=rmvDxxNubIg)

2025-12-02 22:59:35



### [突破引力---Kevin-Hou，Google-DeepMind](https://www.youtube.com/watch?v=HN-F-OQe6j0)

2025-12-02 22:59:30



### [在-GPT-5.1-中塑造模型行为-——-OpenAI-播客-Ep.-11](https://www.youtube.com/watch?v=GXAAzKX6oaQ)

2025-12-02 18:10:47



### [智能体也是机器人：自动驾驶教会我构建智能体的经验-—-Jesse-Hu，Abundant](https://www.youtube.com/watch?v=qqXdLf3wy1E)

2025-11-24 20:16:40



### [愿景：零-Bug---Johann-Schleier-Smith，Temporal](https://www.youtube.com/watch?v=qLqttdO33UM)

2025-11-24 20:16:39



### [来自-2000-万个-Pull-Requests-的数据揭示了-AI-转型的实际情况-—-Nicholas-Arcolano，-Jellyfish](https://www.youtube.com/watch?v=WqZq8L-v9pA)

2025-11-24 20:16:36



### [应对即兴编码宿醉](https://www.youtube.com/watch?v=JsKTQbT58BY)

2025-11-24 20:16:36



### [妙用子代理增强-Codex-命令行界面-—-Brian-John，BetterUp](https://www.youtube.com/watch?v=5eJqXtevlXg)

2025-11-24 20:16:36



### [AI-*并不能*颠覆一切-—-Dax-Raad，OpenCode](https://www.youtube.com/watch?v=o3gmwzo-Mik)

2025-11-23 19:44:52



### [Zai-GLM-4.6：我们从-1-亿次开源下载中学到了什么-—-Yuxuan-Zhang，-Z.ai](https://www.youtube.com/watch?v=m6MF1OR_9kM)

2025-11-22 12:56:36



### [使用-Deep-Agents-构建研究智能体](https://www.youtube.com/watch?v=5tn6O0uXYEg)

2025-11-20 17:02:01



### [【生成式人工智慧與機器學習導論-2025】第-7-講：大型語言模型的學習歷程](https://www.youtube.com/watch?v=YJoegm7kiUM)

2025-11-17 05:07:08



### [ChatGPT-Atlas：开启网页浏览的下一个时代-—-OpenAI-播客-Ep.-9](https://www.youtube.com/watch?v=WdbgNC80PMw)

2025-11-14 00:29:39



### [智能体如何使用上下文工程](https://www.youtube.com/watch?v=XFCkrYHHfpQ)

2025-11-12 16:36:36



### [Build-Hour:-AgentKit](https://www.youtube.com/watch?v=sAitLFLbgDA)

2025-10-29 21:26:22



### [Sam、Jakub-和-Wojciech-谈-OpenAI-的未来，附观众问答](https://www.youtube.com/watch?v=ngDCxlZcecw)

2025-10-29 16:41:32



### [LangChain-和-LangGraph-1.0-版本发布](https://www.youtube.com/watch?v=r5Z_gYZb4Ns)

2025-10-22 14:57:36



### [ChatGPT-Atlas：全新-AI-赋能的网络浏览器](https://www.youtube.com/watch?v=8UWKxJbjriY)

2025-10-21 15:59:32



### [企业-AI-规模化：与礼来的-Diogo-Rau-和-Dario-Amodei-的炉边谈话](https://www.youtube.com/watch?v=Yiy0cU6ChSw)

2025-10-20 18:06:05



### [【生成式人工智慧與機器學習導論-2025】第-4-講：評估生成式人工智慧能力時可能遇到的各種坑](https://www.youtube.com/watch?v=dWQVY_h0YXU)

2025-10-20 12:25:43



### [构建更有效的-AI-智能体](https://www.youtube.com/watch?v=uhJJgc-0iTQ)

2025-10-17 16:01:56



### [LangChain-和-Manus-的-AI-智能体上下文工程实践](https://www.youtube.com/watch?v=6_BcCthVvb8)

2025-10-14 19:26:10



### [OpenAI-Build-Hour：响应-API](https://www.youtube.com/watch?v=hNr5EebepYs)

2025-10-14 13:08:18



### [开发者主题报告](https://www.youtube.com/watch?v=r1R3RDPvPeg)

2025-10-08 17:01:49



### [与-Sam-和-Jony-的对话](https://www.youtube.com/watch?v=7cKbPLzNYws)

2025-10-08 17:01:46



### [Evals-实践：从前沿研究到生产应用](https://www.youtube.com/watch?v=YEaKXjHENyQ)

2025-10-08 17:01:39



### [AMA：人工智能应用在企业的规模化扩展](https://www.youtube.com/watch?v=WrANK9oFfHw)

2025-10-08 17:01:32



### [DevDay-现场报道-—-OpenAI-播客-第-7-集](https://www.youtube.com/watch?v=QIdUllqmuls)

2025-10-06 19:45:33



### [Agent-Builder-概览](https://www.youtube.com/watch?v=44eFf-tRiSg)

2025-10-06 18:00:07



### [OpenAI-开发者日-2025：Sam-Altman-开幕主题演讲](https://www.youtube.com/watch?v=hS1YqcewH0c)

2025-10-06 15:30:52



### [Anthropic：释放-Claude-构建-AI-代理的无限潜力](https://www.youtube.com/watch?v=XuvKFsktX0Q)

2025-10-02 16:00:58



### [Sora-2-介绍](https://www.youtube.com/watch?v=gzneGhpXwjU)

2025-09-30 17:47:34



### [【生成式人工智慧與機器學習導論-2025】第-3-講：解剖大型語言模型](https://www.youtube.com/watch?v=8iFvM7WUUs8)

2025-09-28 18:14:40



### [AI-副业排名：揭秘真正有价值的选择](https://www.youtube.com/watch?v=z1oUk6KjUu0)

2025-09-25 23:36:12



### [API-中的-gpt-realtime-模型介绍](https://www.youtube.com/watch?v=nfBbmtMJhX0)

2025-09-19 17:20:10



### [Codex-与人工智能驱动的编程未来-—-OpenAI-播客-Ep.-6](https://www.youtube.com/watch?v=OXOypK7_90c)

2025-09-18 21:06:56



### [#定义-AI-工程师---Greg-Brockman，-OpenAI-ft.-Jensen-Huang](https://www.youtube.com/watch?v=avWhreBUYF0)

2025-08-12 01:50:00



