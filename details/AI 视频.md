> **更新时间**: 2026-11-15 09:27:14 | [首页](/README.md) | [分类](/TAGS.md)

## AI 视频




### [我曾以为超级智能还要等十年，现在改主意了](https://www.youtube.com/watch?v=1NHPDzpfR6Y)

2026-11-14 02:37:05 | 标签: AI 与智能应用, 递归自我改进, 持续学习, AI研究前沿, 后训练

> Dwarkesh Patel 认为，预训练、后训练和推理效率都有可量化的研究任务，可以让自动化研究者反复练习、并行开展实验并核验结果。他的中位预测是，如果前沿实验室持续推进，AI 可能在 2028 年追平顶尖人类 AI 研究者。他也给 2032 年之后才实现这一目标留出了至少 25% 的概率。此后的进展可能靠软件自我改进持续加速，也可能在短期跃升后等待更多算力。技术附录进一步讨论持续学习、指标选择、数据供给和实验算力这四个问题。



### [Mozilla-如何用-GPT-6-Cyber-发现并修复-Firefox-漏洞](https://www.youtube.com/watch?v=PkAmyub12K8)

2026-11-14 00:56:45 | 标签: 编程与工程, 大语言模型 (LLM), 安全, 测试与质量, 科技评论

> Mozilla 的漏洞处理流程建立在多年漏洞赏金计划、模糊测试和可调试的 Firefox 构建之上。团队先对高风险代码排序，再把智能体放进独立虚拟机，要求提供可重复验证的漏洞样例。第二个智能体专门检查第一个智能体是否通过修改代码制造崩溃来通过测试。工程师在本地 SQLite 工作台复核重复报告，并把分诊结果反馈给扫描流程。团队称，2025 年到 2026 年，漏洞发现和修复数量都约增至原来的 8 倍，生成的补丁仍需浏览器工程师审查并合入。



### [Anthropic-如何构建-Claude-API，支持前沿模型与智能体开发](https://www.youtube.com/watch?v=p2xvJAbF-i4)

2026-11-13 01:00:11 | 标签: AI 与智能应用, AI 安全与对齐, 大语言模型 (LLM), 提示工程, Harness工程

> Anthropic 的 Claude API 团队把 Messages API 作为构建智能体的基础，为开发者提供开箱即用的默认配置，也开放思考、投入程度和工具等控制项。团队解释了研究发现和客户需求如何影响功能发布，为什么在对话中途调整投入程度或系统提示可能与提示缓存冲突，以及如何借助 Beta 请求头和临时兼容选项迁移。两位讲者建议，每次更换模型都要评测整套智能体运行逻辑，同时比较单次任务成功的总成本和每个 token 的价格。他们也讨论了如何通过分类器、受控访问和对思考输出的保护来应对滥用和模型蒸馏。



### [对谈-Modal-联合创始人-Erik-Bernhardsson：AI-智能体该用什么样的沙箱](https://www.youtube.com/watch?v=1M8vagUOdJM)

2026-11-12 23:26:12 | 标签: AI 与智能应用, 强化学习, 创始人故事, 自主编码, 视频

> Modal 联合创始人 Erik Bernhardsson 回顾了沙箱需求的三波增长。最早是通过提示词生成应用的用户需要运行代码，随后是后台编码智能体，接着是要大规模运行轨迹的强化学习团队。他解释了 Modal 为何将部分负载从 gVisor 迁到完整的虚拟机，也提出一种架构思路：让智能体的控制程序长时间运行，按需创建和销毁短寿命沙箱。他还谈到共享推理端点能省掉哪些调优工作、为什么多数客户用不上强化学习，以及如何利用空闲算力降低后台批处理的成本。



### [Claude-Code-工作流如何从逐步审批走向多会话监督｜Lydia-Hallie](https://www.youtube.com/watch?v=vlfCjWuv4es)

2026-11-12 11:26:55 | 标签: 编程与工程, 自主编码, 云原生 / DevOps, 大语言模型 (LLM), AI 编程

> 随着 Claude 模型能连续完成更长的任务，开发者的工作从逐步干预变成监督多条会话。Lydia Hallie 示范如何精简 CLAUDE.md、调整自动模式，并用显式拒绝规则和沙箱限制后果严重的操作。她引用 Anthropic 的研究比较人工与自动分类器，再用认证迁移说明为什么要设置任务检查、钩子、CI 和按风险分配的人工审查。编排会话可以独立派工，并把尚未通过检查的任务退回重做。



### [SKILL.md-的哪些内容模型已经知道｜Nikolay-Petrov](https://www.youtube.com/watch?v=yzx4IuEh_tU)

2026-11-12 07:00:23 | 标签: 编程与工程, 上下文工程, 自主编码, Agent Skills, 视频

> Nikolay Petrov 用相同任务比较加载与未加载 Skill 的表现，同时观察用时和 token 用量。为了找出是哪条指令发挥了作用，他把内容拆成可问可判的小条目，对比模型在两组中的答案，并区分新增能力、已有知识、性能退化和两组都答不出来的情况。在一组比较里，Opus 对一般概念的掌握约为 70%，对精确细节只有 22%。这类结果适合用来确定修改方向，最终仍要靠任务级评测确认精简后的 Skill 能做成原来的事。



### [Duolingo-如何用智能体编写并合并-22.5-万行测试代码-|-Kush-Agrawal](https://www.youtube.com/watch?v=D_4Rn6uLdQM)

2026-11-12 05:00:23 | 标签: 编程与工程, 自主编码, 云原生 / DevOps, 移动开发, 测试与质量

> Kush Agrawal 回顾了 Duolingo 如何把本地 Claude Code 实验变成定期补齐 iOS 单测的工作流。系统根据覆盖率报告挑选 Swift 文件，由 Temporal 调度智能体，再通过独立流程修复合适的 CI 失败，并把通过检查的 PR 分给人工审核。确定性的文件限制和专项审查防止智能体为通过 CI 而降低测试质量。最终，这套流程合并了 700 多个经人工批准的 PR，新增约 22.5 万行测试代码。Agrawal 表示，MVVM 部分的测试覆盖率从 9% 升至 59%，整体从 11% 升至 24%。



### [用-Codex-做持续数周的工程工作｜DevDay-2026](https://www.youtube.com/watch?v=U1IVZy9FhVQ)

2026-11-11 09:24:07 | 标签: AI 与智能应用, 自主编码, 测试与质量, AI 编程, AI 硬件与芯片

> 3D 赛道演示展示 Codex 如何在 Blender 渲染中断后继续。更详细的 CI 案例里，主线程触发测试和协调，子智能体分别调查失败，其中包括一个间歇出现的 GPU 浮点错误。讲者称六周内产生逾 1，000 次提交、600 多条 Slack 消息，合并的修复超过 213 项。演讲还说明如何设置目标、测试循环、仓库指令、持久运行环境、工具访问与升级规则，并谈到本次运行的成本估算。



### [Robinhood-的数据流水线如何让约-60%-的-PR-无需人工审核即可合入](https://www.youtube.com/watch?v=MQiojLnK-E0)

2026-11-10 09:00:08 | 标签: 编程与工程, AI Agent, 数据工程, 视频, 数据流水线

> Chetas Joshi 以一次表结构变更为例：PR 新增一列，并把另一列从整数扩展为大整数。注册表、数据目录、血缘和预发性能检查全部通过，但智能体在代码库里发现了一个未登记的消费者，仍然会把值写入整数列。人工确认任务在线运行后，团队先修下游，再合入原 PR。Robinhood 同时统计漏判和不必要的升级，并由人更新规则。截至 2026 年 8 月 31 日，约 60% 的数据流水线 PR 无需人工审核即可合入。敏感授权、改变数据含义的迁移和低置信度结论仍由人处理。



### [LinkedIn-如何让智能体从错误中改进，并验证改动有效](https://www.youtube.com/watch?v=yH7_SIIgI-Y)

2026-11-10 08:00:13 | 标签: AI 与智能应用, 递归自我改进, 科技评论, 视频, 智能体评估

> Ziwei Guo 和 Saloni Gandhi 介绍了改进用户理解智能体的七个步骤，从收集执行轨迹，到提出修改、验证候选项，再用留出集测试。第一层评估器给输出打分，第二层诊断失败原因，再据此提出改动。团队复核约 180 到 200 个案例，发现评估器有时过于苛刻，对证据的处理不一致，归因标签也无法表达「评估器自己判错了」。修订规则后，评估器与人工判断的一致率从 57% 升至 64%。第一个优化改动经过人工审核和量化验证后上线。



### [Every-实测-Claude-Fable-5.2：哪些任务值得让模型跑上几天](https://www.youtube.com/watch?v=VkvCrIc3jfU)

2026-11-10 03:00:13 | 标签: AI 与智能应用, AI 编程, AI Agent, 大语言模型 (LLM), 科技评论

> Every 的团队分享了 Claude Fable 5.2 在互动场景、写作、软件、研究和设计中的提前试用结果。可步行探索的耶路撒冷模型和 Kieran 的环境音乐工作站展示了模型能做成的大项目，但 Katie 的圣经研读应用用 Astra 做出来更易用，Ryan 的设计盲测也经常更喜欢高档推理的结果。Mike 说团队在自动化审查和工程师复核下，一个周末准备了 75 个 PR，并把通话和 Slack 里的产品决策整理进 Checks。Anthropic 的 Jeremy 介绍了日常用 Opus 5.5、遇到模糊或复杂任务再用 Fable 的做法，也谈到如何把执行交给更快的模型。这些案例和按 A...



### [Airbnb-如何用-LangGraph-构建面向房客和房东的可信-Agent](https://www.youtube.com/watch?v=NUgaWmws0XQ)

2026-11-09 21:53:26 | 标签: AI 与智能应用, AI Agent, MCP协议, LangGraph, 视频

> Airbnb 的信任与安全 Agent 曾对同一条记录给出两个看似合理、实则矛盾的决定。Pedro Rodriguez 从这个例子讲起，说明团队如何拆分政策查找和决策、把不确定的情况交给人工，以及怎样通过 MCP 记录证据。LangGraph 的中断机制让运行可以等待外部信号，独立数据库则负责跨运行查询案例。团队保留离线评估，也检查线上真实决定，借助不同模型家族发现逐条评分可能漏掉的不一致。



### [AI-写代码比合并更快，Uber-如何改造合并队列](https://www.youtube.com/watch?v=hX140a5klW0)

2026-11-09 15:00:15 | 标签: 编程与工程, 视频, 合并队列, 单体代码仓库, 持续集成

> 合并请求从每小时约 90 次增到 130 次时，Uber 的 P95 合并时间从 30 分钟拉长到三四小时。团队先用准入限制和延期队列调节负载，再按依赖重叠程度放宽较弱的冲突，让更多变更并行。Stovepipe 在合并后检查主干，验证通过才移动指向最后一个可用提交的引用。团队报告，峰值吞吐量达到每小时约 300 次，P95 回到 30 分钟。



### [把智能体的自主判断移出常规流程｜Matthew-Jewkes](https://www.youtube.com/watch?v=wWisOHEcMPE)

2026-11-09 12:00:33 | 标签: AI 与智能应用, AI 工作流, 个人效率, 视频, AI 自动化

> Matthew Jewkes 回顾了 Clarivate 的一项自动化项目，系统每月处理数万项药物研发文档索引任务。早期智能体流程准确率约为 80% 至 83%。团队和领域专家一起审阅约 1，000 个评估样例，发现三类问题需要分别处理：关键错误、组织还没有统一答案的模糊案例，以及需要新知识的例外。分流之后，关键路径用常规方法做到约 95%，再靠密集评估和调优达到演讲所述的 99.95%。团队抽样对照历史工作结果后才部署。聚合剩余案例也让专家能更快清理少量关键例外、暂停价值不高的模糊任务，并看见分散在异常里的新需求。Jewkes 最后解释了为何只有成熟、有可观业务回报、且能写清规则的流程才值得...



### [让智能体重构代码三周后，我读了代码｜Keiji-Kanazawa](https://www.youtube.com/watch?v=6TjFjHPjVH0)

2026-11-09 11:30:09 | 标签: AI 与智能应用, 测试与质量, 个人效率, 自主编码, 视频

> Keiji Kanazawa 让编码智能体重构个人研究助手三周。一次摘要归类错误让他想追查执行记录，却发现所谓的智能体仍是一套确定性工作流。技能和动作共用一套实现，每天的反思任务也在输出空报告。约 30 轮单元测试接上了生产推理，触发费用告警。他随后围绕明确的智能体运行时重建系统，对比了 4 套框架，并用一个视频深读智能体验证新做法。它从一堂课约 440 张关键帧中筛选材料，把板书公式和解释放到可跳转的画布里。但智能体把评估标准调得太贴合这一堂课，拿到另外 5 个视频上效果很差。他最终采用两层迭代，既改结果也改评估标准，再让不同智能体互审代码，同时把目标的决定权留在自己手里。



### [Claude-Code-的答案看着正确，却漏了-80-万美元｜AlixPartners-合同分析复盘](https://www.youtube.com/watch?v=u7fsyrXsPBE)

2026-11-09 02:00:08 | 标签: AI 与智能应用, 大语言模型 (LLM), AI 编程, 代码助手, 视频

> 分享用一家医疗企业收购的模拟案例复现了两个错误。Claude Code 给出的合同总额相差约 80 万美元，并把阻止自动续约的最后期限从 11 月 1 日报成了 12 月 1 日。团队花两周搭建结构化管道，随后一夜处理了四万多份合同。两位分享者解释了为什么智能体要引用原文、识别合同与修订的关系、明确报告权限错误，并对重叠的节省机会去重。



### [编程智能体犯错后，怎样才能真正撤销自己的操作？](https://www.youtube.com/watch?v=BT1Mo-fD-g0)

2026-11-08 16:00:03 | 标签: AI 与智能应用, 自主编码, 测试与质量, 视频, 编程智能体

> Tanmay Sah 和 Dolly Sah 区分了两种能力：完成任务，以及发生故障后恢复原先的状态。UndoBench 做了 2，880 组配对试验。常规试验的成功率是 84%，而在原本能成功的试验中，注入故障后只有 47% 能正确恢复。创建工单后丢失响应的例子说明，直接重试可能带来重复的副作用。EvoUndo 会记录变更前的状态，在测试环境执行变更及恢复计划，并在准入前由独立验证器确认恢复结果。600 项自我改进任务中，有 478 项提升了能力，其中 197 项存在恢复缺陷。扩充恢复语言后，197 项里有 180 项得以恢复，允许的改进从 281 项增加到 461 项。作者还区分了安全重试...



### [公司怎么知道自己正在发生什么？Citadel-Securities-用智能体建立状态模型](https://www.youtube.com/watch?v=jDwc0aXTAFg)

2026-11-08 15:00:36 | 标签: AI 与智能应用, 知识管理, AI Agent, 视频, AI 智能体

> Joao Wenzel 介绍了 Citadel Securities 怎样把正式状态汇报与 Slack 讨论、会议笔记、代码变更和自愿提供的智能体会话记录放在一起核对。做法借鉴机器人领域的状态估计：保留当前判断，随时间降低旧证据的权重，有新信号就重新判断。整个循环包括更新记录、降低旧信息权重、由专门的智能体观察证据、回测历史判断和收集人工纠错。系统保留历史快照，因此团队可以检查早期标记能否预示后来发生的问题。Wenzel 说，被标记为有风险的绿色项目后来变黄或变红的概率是其他绿色项目的两倍。这个结果能告诉管理者先看哪里，具体会出什么问题仍要进一步核查。演讲还讨论了数据源中断被误判成项目停滞，以...



### [别靠-Vibe-Coding-搭智能体基础设施｜Modal-CTO-Akshat-Bubna](https://www.youtube.com/watch?v=_0SQh8a1Osk)

2026-11-08 04:00:13



### [智能体如何把一小时的数据核验缩短到五分钟｜Nori-Agentic](https://www.youtube.com/watch?v=kIlVNGZZr8o)

2026-11-07 15:00:18



### [你的智能体正在隐瞒错误：Ben-Holmes-谈-Warp-的自我改进流程](https://www.youtube.com/watch?v=pz74r-4dGfQ)

2026-11-07 06:00:01



### [Salesforce-如何使用-Claude-Code](https://www.youtube.com/watch?v=4ZsVR-6YOzs)

2026-11-07 01:03:04



### [当-AI-让我们什么都能做，我们还知道自己想要什么吗？｜Ryo-Lu](https://www.youtube.com/watch?v=y9Sg--RDtks)

2026-11-06 22:44:57



### [别再把-API-密钥直接交给智能体：用令牌交换和持久执行做报销工作流](https://www.youtube.com/watch?v=YqJ4asgj1R8)

2026-11-06 05:00:16



### [Brainbase-如何把-Domino’s-比价-智能体-的准确率从-41%-提升到-97%](https://www.youtube.com/watch?v=4VmugsE-iP0)

2026-11-05 17:00:12



### [Ramp-的小模型如何在财务任务上超过-Opus：专用模型、缓存与万级智能体](https://www.youtube.com/watch?v=T-42NrYjwxM)

2026-11-05 06:00:34



### [直面-AI-的未来：唐凤谈公众如何决定-AI-的发展节奏](https://www.youtube.com/watch?v=KEDyOZui9L0)

2026-11-05 04:53:07



### [Kevin-Roose-讲述塑造现代-AI-的-50-人内幕与自己的-AI-工作流](https://www.youtube.com/watch?v=IOp5N4GxE6E)

2026-11-05 01:04:33



### [构建智能体容易，证明安全更难：NatWest-的评估与灰度实践](https://www.youtube.com/watch?v=5UgnatzpZ9E)

2026-11-04 16:00:39



### [没有缓存，智能体成本可能高十倍：George-Cameron-拆解模型选择](https://www.youtube.com/watch?v=prGP0huECPo)

2026-11-04 04:00:08



### [更好的搜索如何让智能体准确率从-36%-升至-98%-|-Aamir-Shakir，Mixedbread](https://www.youtube.com/watch?v=3Ad73Onx3Aw)

2026-11-03 16:00:24



### [什么时候自托管-AI-模型比购买-API-更划算：imec-的任务级基准研究](https://www.youtube.com/watch?v=9-Y_oS9OBLc)

2026-10-31 16:00:24



### [问错一句就可能违规：Upstart-与-Coval-的语音-AI-评估闭环](https://www.youtube.com/watch?v=3osCbSufv8g)

2026-10-31 15:00:11



### [每次会话都像新员工入职：Sonar-Vortex-如何为-AI-编程补充上下文与验证](https://www.youtube.com/watch?v=8vDzncmzxyg)

2026-10-31 03:00:14



### [研究权力-50-年后，Robert-Caro-得到了哪些认识](https://www.youtube.com/watch?v=f0J_EeW42Lo)

2026-10-31 01:18:35



### [智能体为什么白花钱：x402-支付的-6-种攻击与防护-|-Ishween-Kaur，SoFi](https://www.youtube.com/watch?v=YU1uD_YkpjU)

2026-10-30 17:00:31



### [挑战-ServiceNow：Serval-CEO-Jake-Stauch-谈企业编程智能体与权限治理](https://www.youtube.com/watch?v=EZcWEsMuLb4)

2026-10-29 18:00:20



### [GPU-利用率从-15%-走向-90%：先修数据流水线，再谈模型优化](https://www.youtube.com/watch?v=tNAV259UhCM)

2026-10-10 09:30:14



### [不到-500-美元训练金融智能体：4B-专用模型如何胜过-235B-模型](https://www.youtube.com/watch?v=TyPpSRXGhbc)

2026-10-10 08:30:10



### [从上下文到记忆：智能体需要真正的记忆层｜Oracle-Anders-Swanson](https://www.youtube.com/watch?v=BIhiYL4U9_M)

2026-10-10 02:30:09



### [基于-Codex-Harness-构建自己的智能体界面｜OpenAI-Dominik-Kundel](https://www.youtube.com/watch?v=9WiBJRO84yY)

2026-10-09 23:30:04



### [Managed-Deep-Agents：如何把关键业务-Agent-部署到生产环境](https://www.youtube.com/watch?v=XcsspzECTKA)

2026-10-09 22:41:48



### [OpenAI：按成功任务优化-AI-成本](https://www.youtube.com/watch?v=_nmlHbSB8kM)

2026-10-08 05:10:51



### [ClawLabs：从个人编码走向共享智能体](https://www.youtube.com/watch?v=wZYnJfL4c2Y)

2026-10-08 05:10:48



### [你的-AI-智能体为何自信地误判生产故障：Willem-Pienaar-谈诊断方法｜Cleric](https://www.youtube.com/watch?v=J17o5r5PKmw)

2026-10-06 01:00:02



### [把人工审批当作异步-API：Temporal-演示智能体工作流的故障恢复](https://www.youtube.com/watch?v=jc3kbZkuHTo)

2026-10-05 00:30:17



### [AssemblyAI-如何打造解决八成工单的-AI-客服智能体-Joey](https://www.youtube.com/watch?v=pyvRID_CZZU)

2026-10-04 23:00:15



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



