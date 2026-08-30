> **更新时间**: 2026-08-30 10:18:25 | [首页](/README.md) | [分类](/TAGS.md)

## AI 视频




### [从-AI-辅助到-AI-原生：如何打造前沿开发团队](https://www.youtube.com/watch?v=pqlWNihgdjI)

2026-08-29 00:30:19 | 标签: AI 原生开发, 编码智能体, 上下文工程, 规格驱动开发, 软件交付

> Clare Liguori 介绍了 Amazon 如何从渐进式 AI 编码辅助走向前沿开发：工程师将大部分实现工作交给自主智能体，并行推进多项任务。她结合 Bedrock Mantle 的交付、Prime Video 的受控冲刺，以及 Amazon Stores 覆盖 50 个团队的试点说明，结果差异并不来自工具本身。表现最好的团队重塑了工作方式：把隐性知识沉淀为 steering context，投入建设更易被智能体理解的强类型代码库，在写代码前先明确规格，为智能体提供完整验证闭环，并将确定性测试和本地 mock 前移。分享也正视代码评审疲劳、认知负荷和管理层预期等组织成本，并指出实现速度提...



### [深入-Clay-评测技术栈：3-亿次智能体运行与一条-LangSmith-管线](https://www.youtube.com/watch?v=Uny6LpmjraI)

2026-08-29 00:03:28 | 标签: 智能体评测, LangSmith, LLM 可观测性, 生产级 AI 智能体, 评测框架

> Clay 介绍了当 Claygent 的月运行次数超过 3 亿、Sculptor 大规模处理长链路 GTM 工作后，评测为何成为必需能力。其方法将快速的本地评测与接近生产环境的 CI 和 staging 运行分开，同时把结果保存在 LangSmith 中以便版本化和比较。团队结合 golden examples、结构化确定性断言、工具轨迹检查、LLM judges 和有选择的多轮测试，而不是依赖单一且噪声较大的评估器。核心经验是，生产中的学习必须持续更新离线覆盖：延迟、成本、转化、卡住行为、支持工单、人工标注和分类器，都能暴露数据漂移与评审模型过拟合。Clay 还把这一思路扩展到产品架构，让 ...



### [生产化-LLM-网关：架构取舍与-Twilio-的硬核经验](https://www.youtube.com/watch?v=zrZ1amZBSPw)

2026-08-28 23:30:03 | 标签: LLM 网关, 模型路由, 回退设计, LLM 可观测性, 护栏

> Kanish Manuja 解释了为何 LLM 网关不能只沿用普通 API 的重试与熔断模式：模型调用既慢又贵，不同供应商的工具调用 Schema 和限制并不一致，而流式输出一旦开始就难以切换供应商。他建议为每个请求设计顺序回退或尾部对冲，并让全局故障统计与备用供应商的容量规划真正参与决策。随后，演讲主张按模型和路由分别观测 P99 并设置超时，尤其要警惕推理模型的波动；护栏同样应有时间预算、备用检查，以及经过业务风险权衡的失败放行或失败关闭策略。最后，内容落到细粒度 API Key、有界队列、负载削减，以及让流量去中心化而治理保持集中的运维设计。



### [构建-uReview：Uber-的多智能体代码审查引擎](https://www.youtube.com/watch?v=EL123UNokkI)

2026-08-28 22:30:12 | 标签: AI 代码审查, 多智能体系统, 开发者效率, 软件质量, 智能体可观测性

> Uber 介绍了为何要在数千名工程师、多套 monorepo、Fabricator 向 GitHub 迁移，以及首次审查时间从 3 小时上升到 9 小时的环境中自建 uReview。来自 GitHub、Fabricator 和编码智能体的审查请求进入同一服务，系统按成本和性能选择不同生成器，再在开发者看到评论前完成评分、分类、过滤和去重。平台不会只相信模型的自信程度，而是使用地址率、开发者情感、智能体轨迹与运行时数据持续调优。团队可以把风格指南、反模式、知识库和自定义 skills 放在代码附近，由确定性路由根据团队和改动选择审查深度与工具。Uber 报告称，平台每周产出约 25，000 条评...



### [哪些-AI-创业公司真正拿下企业合同？Brian-Lewis-谈-Millennium-的采购标准](https://www.youtube.com/watch?v=7A65O-0lvKE)

2026-08-28 04:05:28 | 标签: 企业 AI, AI 采购, 安全治理, 企业软件, AI 原生转型

> 从 Millennium 买方的视角出发，Brian Lewis 说明了 AI 创业公司的演示与真正签下企业合同之间的差距。产品不仅要解决明确的客户问题、立刻展示集成能力，还要让客户能在越来越短的试点周期内设定成功标准。随后，他把企业采购清单转化为具体的运营要求：明确且可强制执行的数据保留边界、客户自管密钥、与 SCIM 关联的 RBAC、最小权限访问、发布控制、审计日志、版本化文档、可触达的支持团队、SLA，以及可信的事故响应能力。Lewis 最后指出，AI 落地本质上也是组织基础能力的问题。模型和产品固然重要，但数据治理、架构、集成、知识管理、权限管理、赋能与变革管理，才决定 AI 能否从...



### [智能体商业技术栈：Ahnaf-Prio-解读-Best-Buy-的购物与结账协议](https://www.youtube.com/watch?v=G7cgLjZtmMU)

2026-08-27 23:00:34 | 标签: 智能体商业, AI 智能体, MCP, A2A, UCP

> Ahnaf Prio 将智能体商业描述为从人工辅助购物转向由客户智能体发现商品、与商家沟通并在受治理条件下完成结账的演进。他区分了用于工具调用的 MCP、用于智能体间通信的 A2A，以及面向商业原语和商品 Feed 的 ACP 与 UCP，并借助一个面包店智能体演示串联商品目录发现、购物车操作、结账状态和 AP2 支付授权。演讲的价值在于把协议名称落到商家的实际关切：新鲜的商品数据、用户同意边界、支付权限范围、延迟和评估。他也没有把这些标准视为定论，指出 ACP 与 UCP 的收敛关系，以及身份、同意和委托支付仍待解决。整体是一份务实的架构概览，而非附带量化验证的实施研究。



### [Figma-如何在快速迭代中推出-MCP-Server](https://www.youtube.com/watch?v=ZIYYsAzaLlA)

2026-08-27 20:02:11 | 标签: Figma MCP, 编程智能体, 设计到代码, Code Connect, MCP Server

> Jesse Lumarie 回顾了 Figma 在约三个月内从内部插件实验走向 MCP 产品的过程：编程智能体可以获取设计上下文，不再需要每个工具各自接入 Figma。团队比较了稀疏的场景图标签、接近 React 与 Tailwind 的 D2R 表示以及图像，并发现代码上下文配合当前节点图像优于单独使用图像。Code Connect 则让智能体复用代码库中现有的组件，避免只追求像素一致而忽略无障碍能力与国际化。演讲还介绍了团队如何从耗时的表格人工评审发展到每周数百次评测，并以工具调用内的指引和可选框架信号应对 MCP 客户端支持不完整的问题。发布上，Figma 先以本地服务兼顾速度、数据控制...



### [Anthropic-如何构建产品：Mike-Krieger-谈智能体时代的工程、组织与决策](https://www.youtube.com/watch?v=qqrk7CtkuIw)

2026-08-27 05:40:54 | 标签: 智能体系统, AI 产品开发, Claude Code, 工程管理, Feature Flag

> 在这场 AI Engineer 访谈中，Anthropic 技术人员、Instagram 联合创始人 Mike Krieger 分享了团队如何与日益自主的系统协作。他认为，人们应先明确希望达成的最终状态，让模型执行并说明其中的取舍，再通过分段测试、生产环境数据、发布控制和 Feature Flag 验证结果。他将智能体视为具备记忆与责任的主动队友，而非单纯的聊天工具，因此代码评审应更关注意图、取舍与证据，而不是逐行阅读全部代码。Krieger 还介绍了 Anthropic Labs 每两周一次的坚持、转向或停止决策节奏，以及跨职能押注和主动结束项目的做法。对于创业公司和垂直 AI，他强调，理解...



### [AI-不确定性的数学：为何可靠系统必须知道自己不知道什么](https://www.youtube.com/watch?v=tBjgCj_dGZM)

2026-08-26 23:45:28 | 标签: AI 不确定性, 贝叶斯机器学习, 校准, 概率推断, 持续学习

> Zoubin Ghahramani 认为，不确定性并非智能的弱点，而是智能不可或缺的能力。他区分了不可消除的随机性与因知识有限产生的不确定性，并借助贝叶斯更新说明系统应如何随着新证据修正判断。访谈将经过校准的置信度，与对抗性图像分类器和当前语言模型中常见的自信却错误的行为作了对照。天气集合预报、AlphaFold 的置信度信号、自动驾驶和医疗决策支持都表明，单一预测往往不够；更负责任的做法是呈现分布或置信水平。讨论还把显式表达不确定性与持续学习、因果推理、数据效率及精确概率推断的现实限制联系起来。核心建议是构建能够识别自身知识边界、在必要时主动寻求更多证据，并以人们可据此行动的方式传达不确定性...



### [Notion-的-AI-GTM：以统一客户上下文驱动智能体决策与增长](https://www.youtube.com/watch?v=L4I7WgiEquo)

2026-08-26 22:00:05 | 标签: 智能体化 GTM, 市场进入体系, 客户上下文, AI 智能体, 销售运营

> Flora Liu 详细分享了 Notion 如何将销售、营销和客户成功团队原本分散的工具与流程，重构为一套可编程的 GTM 运营系统。其 Know、Decide、Act、Learn 四层架构汇集结构化客户实体和非结构化上下文，将可信信号转化为符合资格的下一步行动，并记录结果以持续改进。核心边界同样清晰：智能体与人类基于同一份客户状态协作，路由和资格判断集中管理，所有面向客户的销售动作都必须经过人工批准，不可信输入也不能跨越信任边界。Liu 还解释了工程取舍，包括以 Snowflake 和 DynamoDB 构建上下文层、使用 Temporal 执行具备韧性的工作流，以及将专有客户上下文保留在...



### [Snowflake-GTM-智能体落地-6，000-用户：Sait-Izmit-的实战经验](https://www.youtube.com/watch?v=DrTdD-ttjCY)

2026-08-25 16:34:56 | 标签: 企业 AI 智能体, GTM, 智能体采用, 变革管理, 产品反馈闭环

> Sait Izmit 以 Snowflake 面向约 6，000 名员工部署的内部 GTM 助手为例指出，企业 AI 智能体能否成功，关键不在于一开始就设计出完美架构，而在于严格的产品纪律。团队先从销售人员真实会问的 150 个问题入手，即使初始准确率只有约 50%，仍选择优先解决更少但更可靠的场景，以免不稳定的早期回答损害信任。随后，他们通过 AI 原生用户试点、10% 用户 Beta 和正式上线逐步扩大范围，并以回访行为及超过 70% 的周活跃用户留存验证产品价值。Izmit 强调，产品质量不足与激活不足必须分开诊断，变革管理可能占到团队 60% 至 70% 的投入。产品路线也会从数据问答...



### [Tibo-访谈：极速模式、重置机制与-OpenAI-的-Agent-路线](https://www.youtube.com/watch?v=4qjEgPojjzM)

2026-08-25 02:11:25 | 标签: AI 智能体, OpenAI, ChatGPT, Codex, 模型效率

> 这场长篇访谈将 Tibo 在 DeepMind 和 OpenAI 的经历与个人 AI 的产品构想联系起来：智能体应理解人的工作方式和上下文，而不是迫使人适应僵化的软件流程。访谈尤其清楚地区分了单纯的 token 生成速度与端到端的实际效用，指出工具调用、网络延迟、人的注意力和被打断的成本都可能成为新的瓶颈。它也解释了为何 ChatGPT 与 Codex 应走向融合：目标并非为技术与非技术用户维护两套界面，而是构建一个可随目标、技能、已连接工具和交互方式调整的多模态产品。后半段还谈及产品体验不佳时的用量重置、算力效率与递归改进，以及在安全证据要求时暂停并加固系统的必要性。访谈提供了少见的直接产品...



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



