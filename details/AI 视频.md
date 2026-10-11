> **更新时间**: 2026-10-11 10:47:27 | [首页](/README.md) | [分类](/TAGS.md)

## AI 视频




### [GPU-利用率从-15%-走向-90%：先修数据流水线，再谈模型优化](https://www.youtube.com/watch?v=tNAV259UhCM)

2026-10-10 09:30:14 | 标签: 编程与工程, 分布式系统, 数据工程, AI 硬件与芯片, AI 工作流

> 演讲分析了一条类似 Qwen3-VL 的多模态监督微调流水线：图像获取与 CPU 预处理让昂贵的 GPU 长时间空闲。串行基线获取一个批次需超过 100 秒，模型计算约需 15 至 20 秒，GPU 利用率因此约为 15%。异步取图与 Ray actor 处理首先缩短等待，后台生产队列又在训练器请求前预取数据。但这暴露出另一项成本：大幅图像数组在多个进程之间反复拷贝。团队改用 Ray 对象引用，让数据并行进程直接取得数组，而无需绕经协调节点。演讲称，等待时间占比由约 85% 降至 20%。扩容后，集中在同一节点的 worker 又挤满网卡；分散调度与零拷贝检索配合，报告额外带来约 50% 的吞...



### [不到-500-美元训练金融智能体：4B-专用模型如何胜过-235B-模型](https://www.youtube.com/watch?v=TyPpSRXGhbc)

2026-10-10 08:30:10 | 标签: AI 与智能应用, 强化学习, 合成数据, 模型评测与基准, AI Agent

> Charles Dickens 介绍 Snorkel AI 与 UC Berkeley 的 FinQA 工作，主张在范围明确的企业任务上，专门数据与工具使用纪律可能比参数规模更重要。团队从 SEC 的 10-K 年报提取约 6900 张 SQL 表，依据金融专家设计的问题分类生成题目，再通过程序化来源校验、独立自动审查和人工专家复核检查数据。按公司隔离的切分包含约 4000 条训练样本、500 条验证样本和 290 条留出测试样本。团队让 Qwen3 4B 模型在可调用工具的环境中，以 GRPO 和二元正确性奖励训练；讲者称，使用 8 张 H100 的算力与模型裁判费用合计低于 500 美元。...



### [从上下文到记忆：智能体需要真正的记忆层｜Oracle-Anders-Swanson](https://www.youtube.com/watch?v=BIhiYL4U9_M)

2026-10-10 02:30:09 | 标签: AI 与智能应用, 上下文工程, Agent记忆, AI Agent, 视频

> Swanson 指出，上下文窗口只保存当前运行的信息。智能体即使解决过一次客服问题，下个会话仍可能重新搜索并重复犯错。他提出把记忆做成独立的读写与存储层：写入时从转录中提炼有用经历或事实，先删去敏感信息，再记录适用范围、有效期和来源；检索时结合向量、全文、关系及时间条件，而不是只依赖语义相似度。他区分情景、语义、程序和工作记忆，并讨论过期、冲突和被污染记录的审查与抑制。后续任务是否真正受益，应反过来影响排序和保留策略。这是一套完整的架构建议，但讲座没有提供与其他方案的量化比较或生产可靠性数据。



### [基于-Codex-Harness-构建自己的智能体界面｜OpenAI-Dominik-Kundel](https://www.youtube.com/watch?v=9WiBJRO84yY)

2026-10-09 23:30:04 | 标签: AI 与智能应用, AI Agent, Harness工程, 开发者工具, API设计

> OpenAI Codex 开发者体验工程师 Dominik Kundel 介绍了 Codex App Server：它以类似 JSON-RPC 的协议封装 Codex Harness，既支撑 Codex 官方应用和 IDE 扩展，也供第三方客户端接入。Harness 和协议以 Apache 2 许可开源，可连接兼容 Responses API 的模型供应商。他用事件检查器演示客户端与服务端之间的实时通信，并说明 120 多种消息覆盖会话、目标、插件、文件搜索等能力。定制客户端时，可以追加开发者指令、注册动态工具，并将工具标记为延迟加载，以免占满上下文；模型、供应商及沙箱权限也可按会话配置。Ap...



### [Managed-Deep-Agents：如何把关键业务-Agent-部署到生产环境](https://www.youtube.com/watch?v=XcsspzECTKA)

2026-10-09 22:41:48 | 标签: AI 与智能应用, AI Agent, 前端与 Web, 编程语言, Harness工程

> LangChain 产品经理 Victor 解释，Agent 的能力不仅来自模型和工具，还依赖文件、技能、子 Agent、上下文管理及适合任务的运行环境。他把本地原型进入生产的难点归纳为部署、流式响应、身份认证、权限、记忆、可观测性和评测。Managed Deep Agents 将这些基础设施打包，让开发者用 Python 或 TypeScript 定义 Agent，并通过 mda 命令完成部署。一个面向市场团队的 Agent 案例说明了组织应用的关键问题：谁在提问、该使用谁的账号和数据、私聊与群聊中可以保留哪些记忆、权限缺失时如何恢复。视频还介绍 Context Hub 的版本管理、基于 H...



### [OpenAI：按成功任务优化-AI-成本](https://www.youtube.com/watch?v=_nmlHbSB8kM)

2026-10-08 05:10:51 | 标签: AI 与智能应用, 性能优化, 视频, OpenAI, AI 成本优化

> OpenAI 部署工程师 Mandeep 和 Sapto 解释，token 标价无法完整反映 AI 应用成本。便宜模型可能消耗更多 token、无法完成任务，或需要人工介入，因此应关注在达到准确率要求、延迟可接受时，成功完成一项任务的成本。他们建议建立代表性的评测集，将模型、运行框架与配置一起测试，在准确率与成本的 Pareto 前沿上选择合适方案，而不是假定最小模型总是最便宜。除模型选择之外，他们讨论四个杠杆：提示词缓存、程序化工具调用、推理强度，以及 Batch 或 Flex 处理。程序化工具调用将中间工具数据的协调、筛选和比较交给代码，只把有用的报告返回模型。推理强度则应独立于答案长度进...



### [ClawLabs：从个人编码走向共享智能体](https://www.youtube.com/watch?v=wZYnJfL4c2Y)

2026-10-08 05:10:48 | 标签: 编程与工程, 开发者工具, 开源项目, 测试与质量, 命令行与终端

> ClawLabs 介绍团队如何从终端编码会话迁移到 Codex Desktop、分布式测试机器，最终转向共享的持久智能体服务器。更多算力并未消除由人替同事和智能体传话的瓶颈；团队可见的会话让代码变更背后的意图得以共享，也让贡献者能一起引导工作。现场通过共同修改游戏，以及追溯原始对话来理解评审变更，展示了这种协作。服务器还承载仪表板、会议摘要、设计迭代和维护自动化。讲者区分了持续检查的循环与具有明确终点的目标：修复流程先复现问题、验证修复，再由另一个智能体审核；此外还有性能回归检查，以及据称持续十八天、产出百余 PR 的数据库迁移目标。Kevin Lin 随后介绍开源多租户控制平面 OpenCl...



### [你的-AI-智能体为何自信地误判生产故障：Willem-Pienaar-谈诊断方法｜Cleric](https://www.youtube.com/watch?v=J17o5r5PKmw)

2026-10-06 01:00:02 | 标签: AI 与智能应用, 可观测性, AI Agent, 视频, AI 智能体

> Willem Pienaar 对比了编程和 CI 中明确的反馈与生产环境的复杂性：服务边界不清、状态持续变化、故障可能转瞬即逝，日志和指标还混杂着长期存在的噪声。他指出智能体常犯四类错误：把下游症状当成根因、把正常背景错误视为异常、在智能体之间传递结论时丢失原始证据，以及被过去的事故锚定。Cleric 的应对方法是同时探索多种原因，将观测值与统计基线比较，借助服务依赖图核对因果连接，检查事件顺序与时间间隔，并把来源证据一路传递到最终诊断。Pienaar 表示，这些方法在原因与告警分属不同服务的模拟事故中尤其有效，但转录没有给出具体数字；他也承认并行搜索会显著增加 token 成本。他进一步把事...



### [把人工审批当作异步-API：Temporal-演示智能体工作流的故障恢复](https://www.youtube.com/watch?v=jc3kbZkuHTo)

2026-10-05 00:30:17 | 标签: AI 与智能应用, AI Agent, AI 工作流, 视频, Google

> Warrick 主张把人类参与视为异步 API 调用，而不是让智能体循环中的请求一直阻塞。她以冰淇淋配送为例，用 Google ADK 和 Temporal 连接客户、车队及调度智能体。高价值订单需要审批时，工作流记录等待条件，之后接收人类发出的信号；超时机制可以限定等待时长，应用线程无需一直占用。现场演示中，她在审批期间停止 worker，在服务离线时发出批准，再重启 worker。Temporal 回放事件日志，恢复工作流状态，并继续调度，而无须重做已经完成的步骤。她还解释 worker、workflow、activity 的职责，以及与 ADK、LangGraph 的集成方式。是否加入人...



### [AssemblyAI-如何打造解决八成工单的-AI-客服智能体-Joey](https://www.youtube.com/watch?v=pyvRID_CZZU)

2026-10-04 23:00:15 | 标签: AI 与智能应用, RAG / 检索增强, AI Agent, 提示工程, 前沿驻场工程

> AssemblyAI 每天约有一千名 API 新用户注册，给前线工程团队带来大量咨询。Matt Lawler 表示，原先接入文档的现成客服机器人只能解决约 10% 的对话，团队也无法迅速查看或修改其提示词、工具与 RAG 配置。于是他们建立 Joey：把持续更新的文档同步为本地 Markdown 文件，用 Voyage 嵌入检索相关资料，并让智能体在问题涉及多个来源时进一步搜索文件。Joey 接待多个渠道的咨询，将法务、隐私、费率调整等仍需人工判断的事项升级处理；未解决的问题也成为后续改进清单。Lawler 称上线第一周端到端解决率达到 80%，token 与基础设施月成本合计约 700 美元...



### [上线第一周就会撞上的-5-种语音智能体失败模式-—-Venky-B，Plivo](https://www.youtube.com/watch?v=vblnYHzBgS4)

2026-09-15 23:30:09



### [Vercel-如何破解智能体构建难题：Andrew-Qu-与-Eve-框架的演进](https://www.youtube.com/watch?v=9dYcwOkpCE8)

2026-09-15 01:00:06



### [让-AI-智能体执行-Bash-后，我们如何构建安全护栏｜PostHog-的-Sarah-Sanders](https://www.youtube.com/watch?v=4lXks428C9o)

2026-09-15 00:00:00



### [用智能体构建雄心勃勃的软件：Dioxus-的基础设施与质量实践](https://www.youtube.com/watch?v=H7vFrcNWXzs)

2026-09-12 01:20:57



### [AI-研究者讨论递归自我改进究竟有多近](https://www.youtube.com/watch?v=PrSf7IOYu-I)

2026-09-12 00:54:50



### [用-Python-构建生成式-UI：Jeremiah-Lowin-讲-Prefab-与-FastMCP](https://www.youtube.com/watch?v=Krzs8GeiWTc)

2026-09-11 00:30:07



### [从-AI-辅助到-AI-原生：如何打造前沿开发团队](https://www.youtube.com/watch?v=pqlWNihgdjI)

2026-08-29 00:30:19



### [深入-Clay-评测技术栈：3-亿次智能体运行与一条-LangSmith-管线](https://www.youtube.com/watch?v=Uny6LpmjraI)

2026-08-29 00:03:28



### [生产化-LLM-网关：架构取舍与-Twilio-的硬核经验](https://www.youtube.com/watch?v=zrZ1amZBSPw)

2026-08-28 23:30:03



### [构建-uReview：Uber-的多智能体代码审查引擎](https://www.youtube.com/watch?v=EL123UNokkI)

2026-08-28 22:30:12



### [哪些-AI-创业公司真正拿下企业合同？Brian-Lewis-谈-Millennium-的采购标准](https://www.youtube.com/watch?v=7A65O-0lvKE)

2026-08-28 04:05:28



### [智能体商业技术栈：Ahnaf-Prio-解读-Best-Buy-的购物与结账协议](https://www.youtube.com/watch?v=G7cgLjZtmMU)

2026-08-27 23:00:34



### [Figma-如何在快速迭代中推出-MCP-Server](https://www.youtube.com/watch?v=ZIYYsAzaLlA)

2026-08-27 20:02:11



### [Anthropic-如何构建产品：Mike-Krieger-谈智能体时代的工程、组织与决策](https://www.youtube.com/watch?v=qqrk7CtkuIw)

2026-08-27 05:40:54



### [AI-不确定性的数学：为何可靠系统必须知道自己不知道什么](https://www.youtube.com/watch?v=tBjgCj_dGZM)

2026-08-26 23:45:28



### [Notion-的-AI-GTM：以统一客户上下文驱动智能体决策与增长](https://www.youtube.com/watch?v=L4I7WgiEquo)

2026-08-26 22:00:05



### [Snowflake-GTM-智能体落地-6，000-用户：Sait-Izmit-的实战经验](https://www.youtube.com/watch?v=DrTdD-ttjCY)

2026-08-25 16:34:56



### [Tibo-访谈：极速模式、重置机制与-OpenAI-的-Agent-路线](https://www.youtube.com/watch?v=4qjEgPojjzM)

2026-08-25 02:11:25



### [深入-DeepWiki：Cognition-如何为-Devin-大规模构建代码-Wiki](https://www.youtube.com/watch?v=u8Im0l_vwqM)

2026-08-22 00:00:14



### [Uber-的智能体-SDLC：从编码智能体到可治理的软件工厂](https://www.youtube.com/watch?v=17-YSUHo6Lk)

2026-08-21 21:00:06



### [缺失的一层：如何让智能体学会设计品味｜Hassan-El-Mghari，Together-AI](https://www.youtube.com/watch?v=7GMKdpLsxwU)

2026-08-21 18:08:28



### [无需-A/B-测试，如何把-AI-安全交付给百万患者｜Jared-Joselowitz-与-Ufonia](https://www.youtube.com/watch?v=McknwOzbmyg)

2026-08-19 23:00:31



### [跨行业打造-AI-原生产品：研究、执行与反馈闭环](https://www.youtube.com/watch?v=HrEy6MmqI-g)

2026-07-14 04:39:35



### [别再用-50-年代的方法评估模型：用心理测量学重构-LLM-基准测试](https://www.youtube.com/watch?v=EfcfUB2uprc)

2026-07-12 16:00:21



### [「完成」究竟意味着什么：把智能体交付变成可验证对象](https://www.youtube.com/watch?v=7P0elyLIxXo)

2026-07-12 14:45:06



### [会做梦的工厂：100-人的-Machinecraft-如何打造企业大脑](https://www.youtube.com/watch?v=jtzh-GBXBWc)

2026-07-12 04:00:27



### [构建智能体基础设施的未来：Claude-Platform-如何迈向组织级能力](https://www.youtube.com/watch?v=ksfm6jeTg3Q)

2026-07-11 01:41:00



### [ChatGPT-Work-发布：Codex-与-GPT-5.6-驱动的新一代-AI-工作入口](https://www.youtube.com/watch?v=Wq45rvPGNHs)

2026-07-09 04:25:53



### [三台机器上的-AI-智能体舰队：真正坏掉的环节](https://www.youtube.com/watch?v=4kYl2_mqmnQ)

2026-07-08 16:05:32



### [超越固定-Harness：走向运行时自适应的-AI-工程](https://www.youtube.com/watch?v=qdZzND79mcg)

2026-07-08 07:32:02



### [如果-Agent-的-Harness-比模型本身更重要会怎样？](https://www.youtube.com/watch?v=2e9ANoOEn28)

2026-07-08 07:31:54



### [构建让人保持判断力的-AI-系统，而不是只会点批准的流程](https://www.youtube.com/watch?v=CDqzWpwkSls)

2026-07-08 07:31:51



### [SWE-Marathon：用项目级评测检验编码智能体的真实工程能力](https://www.youtube.com/watch?v=Rx8f05JI_WA)

2026-07-07 11:45:51



### [Claude-心智中心的-J-space：Anthropic-如何观察隐藏推理与安全信号](https://www.youtube.com/watch?v=rKV5JcALQoQ)

2026-07-07 00:59:51



### [AI-智能体的持续学习：把失败转化为可验证、可持久的改进](https://www.youtube.com/watch?v=2IxD9OB3XuQ)

2026-07-05 11:13:35



### [MCP-apps、应用商店与下一代软件入口：AI-客户端如何承载交互式产品](https://www.youtube.com/watch?v=sAOBXCDiDOs)

2026-07-05 11:12:17



### [在团队频道里直接-@-Claude：Claude-Tag-如何协作处理-PR、文档与权限边界](https://www.youtube.com/watch?v=VojDzHaciKQ)

2026-06-24 01:09:00



### [当数百万个-AI-智能体相遇：从聊天界面到智能体经济](https://www.youtube.com/watch?v=V04bm-3d6EQ)

2026-06-23 23:48:06



### [把-10994-条笔记变成记忆：构建文件驱动的-AI-研究-OS-|-Paul-Iusztin（Decoding-AI）&amp;-Louis-François-Bouchard（Towards-AI）](https://www.youtube.com/watch?v=ZRM_TfEZcIo)

2026-06-23 06:25:06



### [OpenAI-Codex-Record-&amp;-Replay：演示一次，即可复用浏览器工作流](https://www.youtube.com/watch?v=ZK3JhU73W18)

2026-06-19 02:57:34



### [Claude-Code-一周年复盘：从辅助写代码到自主智能体工作流](https://www.youtube.com/watch?v=Hth_tLaC2j8)

2026-06-09 00:31:07



### [OpenAI-如何打造-AI-原生财务团队：工程师嵌入、ChatGPT、Codex-与工作流智能体](https://www.youtube.com/watch?v=1NtS2KdnDok)

2026-06-08 16:30:39



### [全栈构建者与高杠杆通才的崛起：Satya-Nadella-谈企业-AI-的下一阶段](https://www.youtube.com/watch?v=RQE8OS392dU)

2026-06-04 18:00:31



### [删除-95%-的-Agent-Skills-后，WorkOS-如何让智能体结果变好](https://www.youtube.com/watch?v=vy7o1g2iHY8)

2026-05-31 02:00:06



### [Builders-Unscripted-第-3-期：Matias-Castello-如何用-Codex-搭建-AI-编码与产品工作流](https://www.youtube.com/watch?v=8QKqENa_eQQ)

2026-05-30 04:29:25



### [OpenAI-Agents-SDK：面向长任务智能体的生产级-Harness](https://www.youtube.com/watch?v=tK32trvj_b4)

2026-05-29 04:09:34



### [Erdős-突破：OpenAI-模型首次实现重大-AI-数学发现](https://www.youtube.com/watch?v=Br4l9YjCyRU)

2026-05-20 19:20:13



### [用-Claude-Code-Routines-构建主动式智能体工作流](https://www.youtube.com/watch?v=eSP7PLTXNy8)

2026-05-20 12:14:19



### [告别「盯屏守候」：Claude-Code-高级自动化三层框架](https://www.youtube.com/watch?v=wI0ptqCSL0I)

2026-05-20 11:49:28



### [Code-with-Claude-伦敦-2026-开幕主题演讲：Opus-4.7、Advisor-Strategy-与-Routines-全面解析](https://www.youtube.com/watch?v=6amLO7I9xdg)

2026-05-19 19:18:23



### [别构建垃圾：AI-智能体成熟度的四个层级](https://www.youtube.com/watch?v=yUmS-F9IX90)

2026-05-19 15:00:06



### [LLM-时代的个性化推荐：Spotify-生成式推荐引擎的三大技术支柱](https://www.youtube.com/watch?v=5YSJEP0HWzM)

2026-05-19 13:00:06



### [构建能持续运行数小时的智能体：Anthropic-工程师揭秘对抗式生成-评估架构](https://www.youtube.com/watch?v=mR-WAvEPRwE)

2026-05-18 13:00:06



### [超越代码覆盖率：用-Playwright-实现功能测试，重塑-AI-时代的-TDD-闭环](https://www.youtube.com/watch?v=FWEInOtngmM)

2026-05-16 18:00:06



### [智能体不开站会：构建「后工程师」工程组织的实战案例](https://www.youtube.com/watch?v=VMemhtlsoNk)

2026-05-15 17:00:06



### [用-AI-让工程团队产出翻倍：Intercom-高级首席工程师-Brian-Scanlan-的-Agent-First-实战](https://www.youtube.com/watch?v=4_VQBbs2iQA)

2026-05-15 13:00:06



### [OpenAI-Codex-负责人-Tibo-Sio：Codex-如何从开发者工具进化为通用-Agent，并预告-Slash-Goal-与-Auto-Review](https://www.youtube.com/watch?v=DLP9CagE3dU)

2026-05-14 20:28:12



### [OpenAI-Imagen-2.0-深度解析：文字渲染、多语言支持与创意-Agent-路线图](https://www.youtube.com/watch?v=bH2nP-aCFjk)

2026-05-14 17:31:22



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



