> **更新时间**: 2026-07-13 09:47:13 | [首页](/README.md) | [分类](/TAGS.md)

## AI 视频




### [别再用-50-年代的方法评估模型：用心理测量学重构-LLM-基准测试](https://www.youtube.com/watch?v=EfcfUB2uprc)

2026-07-12 16:00:21 | 标签: 心理测量学, LLM 评测, 项目反应理论, 基准测试审计, 基准测试泄漏

> Alejandro Vidal 指出，单一的基准测试准确率会掩盖许多关键假设：每道题都同样有用，相关性与噪声无关紧要，而模型总分足以代表它的能力。他提出使用项目反应理论，在保留完整题目与模型响应矩阵的同时，估计题目难度、模型能力 theta、区分度和置信区间。这些估计可以区分原始分数相近的模型，找出有噪声或答案标注错误的题目，检测异常推理行为，并在保留有效信号的前提下缩减基准测试。演讲还介绍了自适应测试、锚定题集和组织专属指纹题集，用于控制题目曝光并调查基准测试泄漏。残差模式既能支持公平性分析，也能揭示模型之间的共享检查点、蒸馏关系、模型家族与互补能力。未来还可以合并多个基准测试，把 toke...



### [「完成」究竟意味着什么：把智能体交付变成可验证对象](https://www.youtube.com/watch?v=7P0elyLIxXo)

2026-07-12 14:45:06 | 标签: 智能体系统, 完成定义, 验证, 控制平面, 活性

> Paperclip 创作者 Dotta 解释说，智能体如今生成代码和文档的速度已经超过人类核验产出的速度，由此形成一种新的失败模式：未经检查的输出不断累积，审查能力却跟不上。他提出，应把「完成」视为一组运营层面的声明：产物确实存在，范围和标准清晰明确，有证据支持完成状态，验证者与有权审批的人已经确定，剩余风险保持可见，并且下一步行动有明确负责人。演讲进一步区分生产者声明、审查、验证、审批、问责和经受现实检验这几个层次，并将智能体工作流定义为控制平面问题。Paperclip 通过明确的状态转换、真实阻塞、审批记录、审查者、审批者、有界循环以及与具体工具链无关的 watchdog，在活性与验证之间...



### [会做梦的工厂：100-人的-Machinecraft-如何打造企业大脑](https://www.youtube.com/watch?v=jtzh-GBXBWc)

2026-07-12 04:00:27 | 标签: AI 智能体, 企业记忆, Brain OS, 知识图谱, 市场拓展自动化

> Rushabh Doshi 介绍 Machinecraft 如何保存一家拥有三代积累、100 名员工的热成型机工厂所沉淀的实践知识。团队没有训练新模型，而是把报价、图纸、排期、邮件及其他私有记录处理为事实、向量表示和图关系。由此形成的企业大脑结合了分层记忆、显著性筛选、修正优先级、夜间巩固，以及负责销售、定价、机器规格、事实核查和外联的专业智能体。系统可以支持客户简报、报价单、入站回复和唤醒沉睡线索等具体的市场拓展工作，同时坚持由 AI 起草、由人发送。演讲还将治理规则与 Jain 商业原则联系起来，并介绍 Brain OS：一个空白且可分叉的架构，其他公司可以用自己的知识填充它。



### [构建智能体基础设施的未来：Claude-Platform-如何迈向组织级能力](https://www.youtube.com/watch?v=ksfm6jeTg3Q)

2026-07-11 01:41:00 | 标签: 智能体基础设施, 托管智能体, 智能体身份, MCP, harness 工程

> 这场对话讨论了 Claude Platform 如何从模型推理和 token 访问 API，转向托管智能体及更完整的智能体基础设施。嘉宾重点介绍了记忆、结果导向、长时运行，以及智能体身份的新模式：智能体接收期望结果，只申请完成任务所需的权限，通过服务账号执行，并让全部操作保持可审计。智能体可以通过 API 或轻量 MCP server 协作；随着模型能力和运行时基础设施提升，团队不再需要脆弱且高度脚本化的 harness。讨论还涉及多个智能体竞争、对抗式审查和顾问调用等组合策略，以及保留制造业经验、协调端到端软件开发等案例。对于企业落地，较稳妥的 ROI 路径是先提升个人速度，再提升团队生产力...



### [ChatGPT-Work-发布：Codex-与-GPT-5.6-驱动的新一代-AI-工作入口](https://www.youtube.com/watch?v=Wq45rvPGNHs)

2026-07-09 04:25:53



### [三台机器上的-AI-智能体舰队：真正坏掉的环节](https://www.youtube.com/watch?v=4kYl2_mqmnQ)

2026-07-08 16:05:32 | 标签: AI 智能体, 智能体编排, AI 编程, Kubernetes, Claude Code

> 这是一段紧凑的一手复盘，讲述 Kyle 如何在一台 MacBook 和两台 Linux 机器上运行 AI 编程智能体。最早的瓶颈不是硬件，而是他自己：多个智能体同时在 tmux 中工作时，他被迫同时充当调度器、记忆和评审者。为了解决这个问题，他建立了 CEO、VP、manager、worker 这样的真实智能体层级，把状态从模型上下文迁移到文件工作区，用 reset 取代 compact，并加入会阻塞执行直到批准的评审网关。当系统扩展到单机之外，又暴露出五类问题：智能体不愿委派、窗格不可读、内存耗尽、凭证串 workspace，以及笔记本导致任务中断。当前架构依靠 Git、SSH、按机器隔离的...



### [超越固定-Harness：走向运行时自适应的-AI-工程](https://www.youtube.com/watch?v=qdZzND79mcg)

2026-07-08 07:32:02 | 标签: 自适应工程, AI 智能体, 多智能体编排, 复杂系统科学, Harness 工程

> 这场演讲把 adaptive engineering 作为对当前 AI 工程 Harness 脆弱性的回应。Chandegra 将 Claude Code、Cursor、Codex、LangChain 式编排和自定义智能体脚手架等工具，概括为类似工厂流水线的系统：它们对固定或复杂但可预测的问题很可靠、可审计，也很强大，但这种能力来自在运行前压低变化空间。他随后用复杂系统科学对比这种还原论模型，指出真实世界由不断变化的关系、局部互动、反馈循环和涌现秩序构成。核心判断是，随着模型能力增强，AI 系统进入多智能体、多人与跨机构协作以及物理环境，真正瓶颈会从模型能力转向 Harness 的适应性。因此...



### [如果-Agent-的-Harness-比模型本身更重要会怎样？](https://www.youtube.com/watch?v=2e9ANoOEn28)

2026-07-08 07:31:54 | 标签: LLM Harness, 智能体框架, Agency 语言, 本地模型, 工具安全

> 这场 AI Engineer 演讲提出了一个面向现代智能体工程的明确判断：尤其在希望让较弱或本地开源模型具备竞争力时，包裹在 LLM 周围的 Harness 可能比模型本身更关键。Bhargava 用 Harness Bench 的结果说明，仅改变 Harness 就能带来超过 20 个百分点的性能差异，并进一步展示 Agency 语言如何一步步构建更好的编程智能体。内容最有价值的部分，是从原始模型调用逐步演进到工具、 interrupt handler、部分函数应用、ReAct 循环、子智能体委派和提示词自优化的实践阶梯。整体上，这是一段对构建智能体系统的工程师很有参考价值的紧凑演讲，但由于...



### [构建让人保持判断力的-AI-系统，而不是只会点批准的流程](https://www.youtube.com/watch?v=CDqzWpwkSls)

2026-07-08 07:31:51



### [SWE-Marathon：用项目级评测检验编码智能体的真实工程能力](https://www.youtube.com/watch?v=Rx8f05JI_WA)

2026-07-07 11:45:51 | 标签: SWE-Marathon, 编码智能体, AI 评测, 长程智能体, 软件工程基准

> 这场演讲介绍了 SWE-Marathon，一个面向编码智能体的项目级评测基准，目标是跳出孤立 bug 和 GitHub issue，检验智能体能否完成更接近真实软件工程的长程任务。Rishi Desai 说明了它如何把 HumanEval、SWE-bench 和 Terminal-bench 延伸到多小时项目环境中，覆盖库克隆、全栈产品克隆、ML 工程和算法任务。最有价值的部分在验证设计和失败分析：隐藏测试、参考实现一致性检查、computer-use 浏览器验证、反作弊层，以及在 Rust 编译器任务中调用 GCC 这类 reward hacking 案例。排行榜结果刻意保持冷静：即使 Cl...



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



### [应用的终结——Kitze，Sizzy.co](https://www.youtube.com/watch?v=4fntwuOoedA)

2026-04-23 15:15:06



### [它没坏：为什么软件基础比以往任何时候都更重要-—-Matt-Pocock，AI-英雄-@mattpocockuk](https://www.youtube.com/watch?v=v4F1gFy-hqg)

2026-04-23 15:15:06



### [SAP：与-CTO-Philipp-Herzig-一起将公司的“操作系统”带入-AI-时代](https://www.youtube.com/watch?v=5u7AjPardvo)

2026-04-23 10:00:18



### [规模化构建生成式图像与视频模型---Sander-Dieleman-Veo-与-Nano-Banana](https://www.youtube.com/watch?v=xOP1PM8fwnk)

2026-04-21 19:33:38



### [这就是-ChatGPT-图像-2.0](https://www.youtube.com/watch?v=-7JSa_luc6k)

2026-04-21 19:01:59



### [AI-如何改变软件工程：与-Gergely-Orosz-@pragmaticengineer-的对话](https://www.youtube.com/watch?v=CS5Cmz5FssI)

2026-04-21 16:00:06



### [新的应用层---Vercel-CTO-Malte-Ubl](https://www.youtube.com/watch?v=XKup1pj-34M)

2026-04-20 15:15:06



### [Gemma，DeepMind-的开放模型家族-—-Omar-Sanseviero，Google-DeepMind](https://www.youtube.com/watch?v=_gVFUEdhCyI)

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



### [妙用子代理增强-Codex-命令行界面-—-Brian-John，BetterUp](https://www.youtube.com/watch?v=5eJqXtevlXg)

2025-11-24 20:16:36



### [应对即兴编码宿醉](https://www.youtube.com/watch?v=JsKTQbT58BY)

2025-11-24 20:16:36



### [来自-2000-万个-Pull-Requests-的数据揭示了-AI-转型的实际情况-—-Nicholas-Arcolano，-Jellyfish](https://www.youtube.com/watch?v=WqZq8L-v9pA)

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



