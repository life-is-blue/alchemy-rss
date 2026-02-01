> **更新时间**: 2026-02-01 21:25:16 | [首页](/README.md) | [分类](/TAGS.md)

## DevOps

> 关键词: DevOps, Docker, Kubernetes, K8s, CI/CD, Jenkins, GitHub Actions, Cloud, AWS, Azure



### [Amazon-Bedrock-+-Whisper：构建高效无服务器音频摘要方案-|-亚马逊云科技](https://aws.amazon.com/blogs/machine-learning/build-a-serverless-audio-summarization-solution-with-amazon-bedrock-and-whisper/)

2025-06-06 09:34:31 | 标签: 无服务器架构, AWS, Amazon Bedrock, Whisper, 音频处理

> 本文详细介绍了如何使用 AWS 服务构建无服务器解决方案，实现音频录音的转录、摘要和敏感信息脱敏。该方案利用 Amazon Bedrock 平台，通过 Anthropic 的 Claude 等模型实现内容摘要，并使用 Bedrock Guardrails 进行 PII 脱敏，结合 Amazon Bedrock Marketplace 提供的 Whisper 模型进行转录。架构采用 AWS Lambda、Step Functions 进行流程编排，S3 提供存储，CloudFront 用于前端内容分发，以及 API Gateway。文章详细阐述了架构设计、部署前提、Whisper 模型和 Bed...



### [Docker-万字教程：从入门到掌握](https://mp.weixin.qq.com/s?__biz=MzIyNjM2MzQyNg==&mid=2247705250&idx=1&sn=80139792160e38252609a4a46cc8bf95&subscene=0)

2025-04-30 14:01:00 | 标签: 容器技术, Docker, DevOps, 云原生, 镜像管理

> 文章系统性地介绍了 Docker 容器技术的核心概念、安装方法和使用技巧。首先详细阐述了 Docker 通过容器化技术解决环境不一致问题的具体机制，包括其轻量性、可移植性、隔离性和标准化特点。然后深入讲解了 Docker 的核心概念如容器、镜像、Dockerfile 和镜像仓库的工作原理。接着提供了 CentOS、macOS 和 Windows 三大操作系统的详细安装指南，包含具体命令和配置步骤。最后全面讲解了 Docker 的日常使用，包括镜像管理、容器操作、网络配置和私有仓库搭建等实用技能，并提供了丰富的命令示例和操作细节。



### [在-Hugging-Face-上部署语音转语音模型](https://mp.weixin.qq.com/s/7LjioA4FlUR3GPR-FjL0AA)

2025-03-10 23:49:55 | 标签: 语音转语音, Hugging Face, 推理端点, Docker, Docker Hub

> 本文详细介绍了如何将 Hugging Face 的语音转语音（S2S）项目部署到 Hugging Face 推理端点上。首先解释了推理端点的概念及其优势，包括简洁性、可扩展性和自定义性。然后，文章逐步指导读者构建自定义 Docker 镜像，包括克隆 Hugging Face 的标准 Docker 镜像仓库、添加语音转语音项目代码和优化 Dockerfile。接着，文章展示了如何通过图形界面和 API 调用两种方式设置推理端点，并提供了关键配置信息。最后，文章还介绍了如何构建一个简单的 WebService 服务和客户端来与端点进行交互，实现音频的录制、发送和播放。文章旨在帮助读者轻松部署和使用...



### [在企业规模下实践“左移”：Cloudflare-如何通过基础设施即代码管理自身](https://blog.cloudflare.com/shift-left-enterprise-scale/)

2025-12-09 14:00:08 | 标签: 基础设施即代码, 左移, DevOps, Terraform, Cloudflare

> 本文概述了 Cloudflare 如何在企业规模下，对其关键基础设施实施“左移”方法进行管理。面对一致地保护数百个内部账户并最大限度减少人为错误的挑战，Cloudflare 从手动配置转向了基础设施即代码（IaC）。其核心策略是将配置视为代码，通过 CI/CD 在开发生命周期的早期集成安全检查，并强制执行策略即代码。关键技术包括用于基础设施配置的 Terraform、用于 CI/CD 的 Atlantis、用于安全状态管理的自定义 `tfstate-butler`，以及使用 Rego 进行策略执行的 Open Policy Agent (OPA)。文章还探讨了遇到的挑战，例如导入遗留的点击操作...



### [开发者体验的架构：产品、平台与运维的协同架构](https://www.infoq.com/presentations/developer-experience-load-autonomy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-20 12:20:00 | 标签: 开发者体验 (Developer Experience), 平台工程 (Platform Engineering), DevOps, 内部开发者门户 (Internal Developer Portal), 自助服务 (Self-Service)

> 本文介绍了由 Renato Losio 主持的关于开发者体验 (Developer Experience， DX) 和平台工程 (Platform Engineering) 的专家小组讨论的文字记录。小组成员来自不同的背景，包括云架构 (Cloud Architecture)、担任首席技术官 (Chief Technology Officer， CTO)、首席软件架构 (Software Architecture) 和平台工程 (Platform Engineering)，他们将 DX 定义为使工程师能够毫不费力地构建、测试和交付，同时减少认知负荷 (Cognitive Load) 和摩擦。他...



### [Cloudflare-2025-年-11-月-18-日全球服务中断事件](https://blog.cloudflare.com/18-november-2025-outage/)

2025-11-18 00:00:00 | 标签: 服务中断事后分析, Cloudflare, 分布式系统, 系统可靠性工程, 网络架构

> 2025 年 11 月 18 日，Cloudflare 网络于 2025 年 11 月 18 日发生重大全球性服务中断，导致大范围的 HTTP 5xx 错误。该事件并非网络攻击，而是源于 ClickHouse 数据库集群中的一个轻微的权限变更。这个变更导致机器人管理系统的特征文件包含重复条目，实际上使其大小翻倍。当这个不符合预期格式的、过大的文件在 Cloudflare 的网络中传播时，核心代理软件（其特征文件具有固定的内存预分配限制）遇到了未处理的错误并崩溃。由于数据库变更的逐步推出，该问题的间歇性性质最初使诊断复杂化，导致错误地怀疑是 DDoS 攻击。服务中断影响了包括核心 CDN、安全服...



### [Docker-构建详解：上下文、架构与性能优化](https://www.freecodecamp.org/news/docker-build-tutorial-learn-contexts-architecture-and-performance-optimization-techniques/)

2025-10-07 20:16:40 | 标签: Docker 构建, 容器化, Dockerfile, 构建优化, BuildKit

> 本文全面介绍了 Docker 构建过程，从 Dockerfile 和构建上下文等基本概念入手。深入研究了包含 Buildx（客户端）和 BuildKit（服务器）的客户端-服务器架构，解释了它们的不同角色和通信方式，并特别强调 BuildKit 通过按需文件传输实现的效率。指南还涵盖了命名上下文和构建密钥等高级功能。重点讲解常见构建错误，如错误的上下文目录、包含过多文件及低效缓存，并提供解决方案。最后，详细介绍了各种优化策略，包括有效利用 `.dockerignore`、多阶段构建、选择合适的镜像及优化 `RUN` 命令，并提供常见构建问题排查技巧。



### [Cloudflare-15-周年：2025-生日周回顾](https://blog.cloudflare.com/birthday-week-2025-wrap-up/)

2025-09-29 14:00:00 | 标签: Cloudflare, 互联网基础设施, 网络安全, 开发者平台, 性能优化

> 今年是 Cloudflare 成立 15 周年，在 2025 年生日周上，Cloudflare 发布了众多产品和计划，继续践行其构建更好的互联网的使命。一路走来，通用 SSL、Cloudflare Workers 等创新产品不断涌现。今年的公告侧重于以下关键主题：为新的内容货币化模式（例如，x402 协议、AI 指数）准备互联网，培养社区，提供通用功能访问，并增强速度和安全性。亮点包括：雄心勃勃的实习生计划，为学生和非营利组织提供的免费开发者平台访问权限，以及用于加强社区参与的新型初创公司实体中心。在安全性方面，Cloudflare 取得了显著进展，包括定制化机器人防御、自动 SSL/TLS ...



### [R2-SQL：一种新型分布式查询引擎深度解析](https://blog.cloudflare.com/r2-sql-deep-dive/)

2025-09-25 14:00:00 | 标签: 分布式查询引擎, 无服务器, Cloudflare R2, Apache Iceberg, Apache DataFusion

> 本文深入探讨 Cloudflare 的 R2 SQL，这是一种新型的无服务器分布式查询引擎，旨在高效查询存储在 R2 中的 PB 级数据。它通过引入两阶段架构，解决了在对象存储中查询海量数据集时 I/O 和计算所面临的根本挑战：查询规划器和查询执行系统。查询规划器智能地利用 R2 数据目录（Apache Iceberg）的元数据，包括分区和列级别统计信息，以缩小搜索范围并最大限度地减少读取的数据量。它采用预先排序的流式处理管道，以尽早开始执行，并支持 LIMIT 查询的提前终止。然后，查询执行系统将工作单元（行组）分发到 Cloudflare 全球网络中的查询工作器，这些工作器利用 Apach...



### [SaaS-构建者常犯的错误](https://www.infoq.com/presentations/saas-mistakes/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-09-24 14:28:00 | 标签: SaaS, 云架构, 多租户, 精益创业, AWS

> 本文由 The Scale Factory 的 Jon Topper 提出，识别并阐述了 SaaS 构建者的四个常见陷阱。首先，它强调了精益创业原则的重要性，以确保产品解决用户愿意付费的问题，主张优化学习而非交付功能。其次，它强调了从一开始就将租户概念嵌入到应用程序架构中的必要性，讨论了池化（Pooled）、孤岛化（Siloed）和桥接（Bridge）租户模型，以及各种隔离级别。第三，它强调了尽早计算每个租户的基线成本的关键步骤，以符合市场定价和客户意愿。最后，文章强调了通过“控制平面”自动化租户配置的重要性，以避免瓶颈、管理生命周期事件并确保高效扩展，文中使用了以 AWS 为中心的示例，如 ...



### [一次缓存引发的文件系统数据不一致问题排查与深度解析](https://mp.weixin.qq.com/s?__biz=Mzg4NTczNzg2OA==&mid=2247508711&idx=1&sn=f1a6bc179ce224609af411d4443b93d7)

2025-09-10 00:30:00 | 标签: 文件系统, 数据一致性, 分布式缓存, 故障排查, Linux内核

> 本文详细记录了一次阿里 EFC 分布式文件系统客户端在 CTO 测试中遇到的数据不一致问题。起初，作者误判为缓存读取旧数据，但通过 NFS 挂载对比，发现是文件系统数据本身被破坏，表现为正常字符被空字符替换，且错误数据集中在单个 4K 页内。经过日志分析和行为推测，作者定位到核心问题是：在一次追加写操作中，文件系统扩容后填充了 NULL，而另一个客户端在分布式缓存中读取并缓存了这些 NULL 数据。随后，由于网络慢请求导致数据版本（dv）回退，当客户端进行“先读后写”的 Buffer Write 操作时，从缓存中读到了旧版本的 NULL 数据到 PageCache，再与新数据一同刷回文件系统，...



### [如何使用-GitHub-Actions-和-OpenAPI-Specifications-自动更新-API-文档](https://www.freecodecamp.org/news/how-to-automate-api-documentation-updates-with-github-actions-and-openapi-specifications/)

2025-09-09 14:28:26 | 标签: API 文档, 自动化, GitHub Actions, OpenAPI, CI/CD

> 本文旨在解决开发者们经常遇到的 API 文档过时问题，提出了一种自动化解决方案，该方案集成了 OpenAPI Specifications 和 GitHub Actions。首先解释了 OpenAPI 如何作为 API 设计的单一数据来源，以及 GitHub Actions 如何自动化验证、构建和发布。本教程提供了一个循序渐进的指南，从仓库设置、创建 OpenAPI YAML 规范开始，并使用 Redocly CLI 和 http-server 在本地进行测试。然后，逐步讲解如何配置 GitHub Actions 工作流，以在 OpenAPI Specifications 发生更改时触发文档构...



### [从单体到-LLM：拆解-DevOps-进化的三大范式](https://mp.weixin.qq.com/s?__biz=MjM5MjY3OTgwMA==&mid=2652488593&idx=1&sn=0ec72ae6ede304415c64bcdc720f723e)

2025-07-31 10:59:00 | 标签: DevOps, 软件架构, 云原生, 数据工程, 人工智能

> 文章深入探讨了 DevOps 在软件开发、数据工程和人工智能领域的进化路径。首先，它定义了 DevOps 的核心理念——打破开发与运维壁垒，实现快速可靠交付。接着，文章将 DevOps 的演进划分为三大范式：Application DevOps、DataOps 和 ModelOps。Application DevOps 聚焦于从单体到云原生微服务的转型，强调 GitOps 的声明式部署和自动化流程。DataOps 则从中心化数据仓库走向去中心化的数据网格，核心在于数据产品化和领域团队的自助式能力。最后，ModelOps 从服务预测器的 MLOps 演进到应对大语言模型独特挑战的 LLMOps，...



### [动态计算：我们如何构建无服务器服务器---Vercel](https://vercel.com/blog/fluid-how-we-built-serverless-servers)

2025-07-28 13:00:00 | 标签: 无服务器计算, 云基础设施, 分布式系统, Vercel, AWS Lambda

> 本文详细介绍了 Vercel 为构建“动态计算”而进行的为期两年的工程努力。这是一项无服务器创新，旨在克服传统无服务器平台（如 AWS Lambda）的局限性，最初的驱动力是支持 React 服务端组件 (RSC) 和 Next.js 应用路由的流式传输能力。文章解释了如何开发基于自定义 TCP 的传输层以实现流式响应和双向通信，打破了传统的每个实例一次调用的模型。文章介绍了 `compute-resolver` 服务，这是一个分布式系统组件，负责智能地将请求路由到多个区域中现有的空闲函数实例，以最大限度地重用资源并最大限度地减少冷启动。此外，它还描述了一个复杂的基于 Rust 的健康监控系统...



### [Quicksilver-v2：全球分布式键值存储的演进（第二部分）](https://blog.cloudflare.com/quicksilver-v2-evolution-of-a-globally-distributed-key-value-store-part-2-of-2/)

2025-07-17 14:00:01 | 标签: 分布式系统, 键值存储, Cloudflare, 缓存, 分片

> 作为系列文章的第二篇，本文深入探讨了 Cloudflare 关键的全球分布式键值存储 Quicksilver 的架构演进。最初，Quicksilver V1 将所有 1.6 TB 的数据存储在每台服务器上，导致磁盘空间严重受限。中间解决方案 Quicksilver V1.5 引入了带本地缓存的代理模式，虽然将磁盘使用量减半，但由于实例大小不平衡以及缓存命中率假设随时间推移变得不准确，最终难以为继。最终解决方案 Quicksilver V2 实施了一个复杂的分层存储模型：第一层在每台服务器上使用本地缓存存储频繁访问的键；第二层引入了一个数据中心范围内的分片缓存，用于存储不经常访问但仍为热点的键；...



### [Tinder-API-网关：日处理十亿次滑动的技术解析](https://blog.bytebytego.com/p/how-tinders-api-gateway-handles-a)

2025-07-15 15:31:06 | 标签: API 网关, 微服务, 分布式系统, 系统架构, Spring Cloud Gateway

> 本文阐述了 Tinder 鉴于现有 API 网关的局限性以及内部设置的碎片化，选择构建其自有 API 网关框架 TAG (Tinder API 网关) 的原因。Tinder 拥有超过 500 个微服务和庞大的全球用户群，需要一种能够提供精确控制、与云技术栈深度集成、助力产品团队实现快速迭代，并提供强大的安全性以抵御恶意流量的解决方案。TAG 基于 Spring Cloud Gateway 构建，是一个基于 JVM 的工具包，它允许每个应用团队部署和管理其定制的网关实例。这种设计通过配置驱动的变更加速了开发流程，通过隔离增强了安全边界，并优化了共享过滤器的重用。本文详细阐述了 TAG 的高效启动...



### [【第-3549-期】GitHub-Actions-全面解析：工作流结构完整指南](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651276930&idx=1&sn=30b1310665cc50bd4ac0f54b9073d10d)

2025-07-14 00:03:00 | 标签: GitHub Actions, CI/CD, 自动化, 工作流, 性能优化

> 文章深入剖析了 GitHub Actions 的工作流结构与执行机制，从核心概念（Workflow、Job、Step、Action、Runner）入手，详细阐述了工作流运行的生命周期，包括作业的并行执行与依赖关系、数据共享（Artifacts 与 Job Outputs）、步骤的顺序与原子性、以及重试机制。特别强调了如何通过 CI 关键指标（WET、NFR、POT）来诊断和优化工作流性能，提供了针对执行时间过长、流水线不稳定和耗时浪费等问题的具体排查方向与优化建议。文章结构清晰，示例丰富，为开发者构建和优化高效、可靠的 CI/CD 流程提供了全面的指南。



### [不拐弯抹角了，你的-Docker-配置可能很糟糕……](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247631961&idx=1&sn=9035e07ff848bbc33c4d5f1bcc824dd2)

2025-07-13 23:15:00 | 标签: Docker, 容器化, 镜像优化, DevOps, Kubernetes

> 文章以直截了当的方式指出 Docker 配置中常见的 15 个问题，并为每个问题提供了详细的解决方案和专业技巧。内容涵盖了从优化镜像大小、非 root 用户运行、配置管理、层缓存利用、`.dockerignore`使用、健康检查、依赖项分离、密钥管理，到日志处理、Kubernetes 优化、版本标签、网络安全、容器扫描、多平台构建以及资源限制等多个方面。文章通过对比“BAD”和“GOOD”的代码示例，清晰展示了如何避免这些陷阱，旨在帮助开发者构建更健壮、高效且安全的容器化应用，减少生产环境中的潜在问题。



### [提升异常检测能力与加速根本原因分析：Grafana-Cloud-应用可观察性的最新功能](https://grafana.com/blog/2024/06/13/improved-anomaly-detection-and-faster-root-cause-analysis-the-latest-features-in-grafana-cloud-application-observability/)

2025-07-11 02:51:47 | 标签: 可观察性, Grafana Cloud, 异常检测, 根本原因分析, 应用性能

> 本文重点介绍了 Grafana Cloud 应用可观察性的最新功能，旨在增强开发者和 SRE 的异常检测和根本原因分析。主要功能包括用于分析随时间变化的性能的时段比较（并提供实际电商案例）、用于考虑季节性的自动基线、用于缩小问题范围的分组和筛选功能，以及用于更快根本原因分析的上下文导航。根据 Grafana 2024 年的调查，虽然只有 41% 的组织积极将应用性能纳入可观察性，但 53% 的组织表示它比去年更相关。这些功能旨在帮助团队更深入地了解应用程序性能并减少平均修复时间 (MTTR)。本文还提供了在 Grafana Cloud 中开始使用应用可观察性的明确步骤，并配有演示 GIF。



### [Quicksilver-v2：全球分布式键值存储的演进（第一部分）](https://blog.cloudflare.com/quicksilver-v2-evolution-of-a-globally-distributed-key-value-store-part-1/)

2025-07-10 14:00:00 | 标签: 分布式系统, 键值存储, Cloudflare, 系统架构, 一致性模型

> 本文详细介绍了 Cloudflare 的 Quicksilver 键值存储从 v1 到 v1.5 的演进过程，其主要驱动力是在快速扩展的全球分布式网络中，对磁盘空间优化日益增长的需求。文章阐述了最初的 Quicksilver v1 如何依赖于每个服务器上的完整数据复制，但随着 Cloudflare 数据规模的增长，这种方式变得越来越低效。为了解决这个问题，Quicksilver v1.5 引入了一种更为复杂的设计，其中包含两种新的服务器角色：存储完整数据集的“副本节点”和充当持久缓存的“代理节点”。代理节点能够智能地淘汰未使用的数​​据，从而释放磁盘空间，尤其是在资源受限的叶子节点上。接下来，...



### [关于跨度事件的一切：它们是什么以及如何查询它们](https://grafana.com/blog/2024/08/15/all-about-span-events-what-they-are-and-how-to-query-them/)

2025-07-03 07:11:38 | 标签: 分布式追踪, 跨度事件, TraceQL, Grafana Cloud Traces, 性能监控

> 跨度事件与跨度和跨度属性不同，提供了一种轻量级且具有时间戳意识的方法来增强追踪数据的粒度。它们在错误追踪、性能监控和结构化日志记录方面特别有价值，提供了更深入的上下文和执行流程洞察。本文探讨了跨度事件的概念、优势和实际应用，使开发者能够在其分布式追踪策略中有效利用它们。



### [Containers-在公测阶段可用，提供简单、全球化和可编程的计算能力](https://blog.cloudflare.com/containers-are-available-in-public-beta-for-simple-global-and-programmable/)

2025-06-24 16:00:22 | 标签: Cloudflare Workers, 容器, 边缘计算, 无服务器, Cloudflare

> Cloudflare 宣布面向付费计划用户推出 Cloudflare Containers 的 公测版。这项新功能允许开发者在其现有 Workers 旁协同运行各种应用程序，涵盖从媒体处理到后端服务和批处理作业等。Containers 已集成到 Cloudflare 开发者平台中，强调其简单性、全球部署能力（“Region:Earth”概念）、选择合适工具（Worker 或 Container）的灵活性，以及通过 Workers 代码实现的可编程性。文章详细介绍了使用 Container 类和 `wrangler.jsonc` 进行配置的方法，突出了熟悉的 `wrangler dev` 和 `...



### [Cloudflare-Log-Explorer-现已正式发布，提供原生可观测性和取证功能](https://blog.cloudflare.com/logexplorer-ga/)

2025-06-18 14:00:01 | 标签: Cloudflare, Log Explorer, 可观测性, 取证, 日志管理

> Cloudflare 宣布 Log Explorer 正式发布，这款新产品在 Cloudflare 控制面板中直接提供原生可观测性和取证功能。它无需将 TB 级日志数据转发至外部 SIEM，降低了成本和复杂性，同时，得益于可立即访问完整的上下文数据，加速了检测、调查和缓解过程。主要功能包括支持 AI 驱动 的自然语言查询的自定义仪表盘、强大日志搜索（包括 SQL 接口）、用于协作的保存查询、即将推出的自定义告警以及灵活的保留选项。文章还详细介绍了基于 Cloudflare R2 构建 的可伸缩架构，该架构使用 Parquet、 Delta Lake、 DataFusion，并着重阐述了如何通过...



### [如何通过命令行获取-Linux-系统信息](https://www.freecodecamp.org/news/get-linux-system-info-through-cli/)

2025-06-11 10:15:20 | 标签: Linux, 命令行, 系统管理, 系统信息, 故障排除

> 本文提供了一份综合指南，介绍如何使用各种命令行界面 (CLI) 工具获取有关 Linux 系统的详细信息。它强调了理解系统细节对于有效进行系统管理、故障排除、安全审计、性能优化和前瞻性维护至关重要。该指南涵盖了检查操作系统和内核详细信息（如 `uname`、`cat /etc/os-release`、`hostnamectl`）、CPU 信息（如 `lscpu`、`cat /proc/cpuinfo`、`nproc`）、内存使用情况（如 `free -h`、`vmstat`、`cat /proc/meminfo`）、磁盘和文件系统详细信息（如 `df`、`du`、`lsblk`、`fdisk`...



### [Lyft-如何利用机器学习每日进行-1-亿次预测](https://blog.bytebytego.com/p/how-lyft-uses-ml-to-make-100-million)

2025-06-10 15:30:45 | 标签: 机器学习服务, 软件架构, 微服务, Kubernetes, Envoy

> 本文详细介绍了 Lyft 如何构建 LyftLearn Serving，这是一个机器学习服务平台，能够在个位数毫秒级延迟预算内处理每日数亿次的实时预测。它解决了在使用初始单体服务时面临的机器学习扩展挑战（数据平面压力和控制平面复杂性）。该解决方案利用 Lyft 现有的微服务基础设施，通过专用仓库和运行时环境（Kubernetes、Envoy）强调每个团队的隔离。关键组件包括轻量级 HTTP 服务层（Flask + Gunicorn）、处理模型生命周期和可观测性的核心服务库，以及各团队自定义的推理代码。配置生成器和自测试系统等工具确保了开发者效率和运行可靠性。该系统架构和原则为构建可扩展、可维护...



### [Vercel-Blob-现已正式发布：深度集成，持久对象存储---Vercel](https://vercel.com/blog/vercel-blob-now-generally-available)

2025-05-21 13:00:00 | 标签: 对象存储, 云服务, Vercel Blob, CDN, 缓存

> Vercel Blob 旨在解决传统存储设置的复杂性。这个构建于 AWS S3 之上的服务现已正式发布，提供持久且集成的对象存储。它独特地利用 Vercel 的全球应用程序交付和缓存基础设施，实现高性能和成本效益，从而简化了 CDN 的配置和管理。该服务确保高可靠性，并通过简单的 SDK 支持高达 5TB 的大文件上传。 与 Vercel 图像优化集成，可实现无缝的媒体资产处理。定价基于使用量，在存储和操作方面与 S3 相比具有竞争力，并且对于 Blob 资产，比 Vercel 的标准数据传输更便宜。 新的可观测性选项卡提供了详细的使用情况洞察。 即将推出的功能包括私有 Blob 对象和数据驻...



### [Halo-如何在-Xbox-平台扩展至千万玩家规模](https://blog.bytebytego.com/p/how-halo-on-xbox-scaled-to-10-million)

2025-05-06 15:31:14 | 标签: 架构设计, Saga 模式, 分布式事务, 分布式系统, Azure

> 本文深入探讨了 Halo 游戏在面对海量玩家数据时，如何从传统的单数据库架构转型到基于 Saga 模式 (Saga Pattern) 的分布式架构，从而显著提升性能和增强容错性。文章首先介绍了 ACID (原子性、一致性、隔离性、持久性) 事务的特性及其在单数据库环境中的应用。随后，阐述了 Halo 4 在用户规模和数据量激增时遇到的可扩展性挑战。接着，详细介绍了 Saga 模式 (Saga Pattern) 的概念、原理、执行模型以及在 Halo 4 统计服务中的具体应用，包括使用 Azure 表存储 (Azure Table Storage) 存储玩家数据（提供高并发读写能力），利用 Or...



### [万字解读：小红书是怎么用云的？](https://mp.weixin.qq.com/s/PVS-ewGRSJVQu7qild9X2Q)

2025-04-29 03:47:25 | 标签: 云原生, Kubernetes, 容器服务, 微服务, OpenKruise

> 文章深入分析了小红书在云原生架构演进过程中的实践经验和技术选型。面对早期粗放用云模式带来的资源利用率低、运维复杂等问题，小红书选择与阿里云合作，基于 ACK 搭建云基座，并深度融合 OpenKruise 和 Koordinator 等开源项目，构建了独有的云原生技术中台，以支持社区电商、内容分发等复杂业务场景。通过 UnitedDeployment 解决有状态服务编排问题，利用 Koordinator 实现混部调度，显著提升了资源利用率。同时，小红书还积极参与开源社区共建，例如参与代码提交、方案设计等，与阿里云共同推动技术方案的完善。文章还介绍了小红书如何通过“大 Node 小 Pod”策略和...



### [前端开发必会的-Nginx-知识及结合-Docker-的项目部署实战](https://mp.weixin.qq.com/s/Xj_kqT4BFytZA7LvJQvAXQ)

2025-04-21 05:49:21 | 标签: Nginx, Docker, 前端部署, CI/CD, 反向代理

> 文章针对前端开发人员，全面介绍了 Nginx 的核心功能及其在项目部署中的应用。内容涵盖基于 Docker 的 Nginx 安装、配置文件详解、静态资源托管、反向代理与负载均衡、HTTPS 配置（SSL 证书）等。文章通过具体的配置示例和 Dockerfile，详细展示了如何使用 Nginx 解决前端部署中的常见问题。同时，文章还提供了 SPA 和 Nuxt.js SSR 项目的 Docker 部署实战，分别介绍了使用和不使用 docker-compose 的两种方案。通过学习本文，前端开发者可以掌握从本地开发到生产环境部署的全链路技能，构建高效、安全、易于维护的 Web 应用。



### [GitHub-Actions：GitHub-托管-runners-与自托管-runners-的选择](https://github.blog/enterprise-software/ci-cd/when-to-choose-github-hosted-runners-or-self-hosted-runners-with-github-actions/)

2025-04-15 16:00:22 | 标签: GitHub Actions, CI/CD, GitHub 托管 runners, 自托管 runners, DevOps

> 本文详细对比了 GitHub 托管 runners 和自托管 runners 在五个关键领域的差异，旨在帮助用户根据自身需求选择最合适的 GitHub Actions 方案。文章从可管理性入手，指出 GitHub 托管 runners 提供全托管的基础设施，简化配置和安全管理，而自托管 runners 则需要用户自行管理基础设施、安全和监控。在可扩展性方面，GitHub 托管 runners 依赖微软的数据中心和云服务，提供高可用性和自动伸缩能力，而自托管 runners 则需要用户自行搭建伸缩方案。安全性方面，GitHub 托管 runners 提供内置的安全机制，包括网络隔离、数据加密和定...



### [便捷、可扩展且全球化：容器将于-2025-年-6-月来到-Cloudflare-Workers](https://blog.cloudflare.com/cloudflare-containers-coming-2025/)

2025-04-11 14:00:00 | 标签: 容器, Cloudflare Workers, Durable Objects, 无服务器, API 网关

> Cloudflare 计划于 2025 年 6 月发布其容器服务的公开公测版本。这项服务与 Workers 和 Durable Objects 深度集成，旨在简化容器的部署和管理，无需复杂的 Kubernetes 配置。文章详细介绍了如何使用 Cloudflare Workers 作为 API 网关、服务网格和编排器，以管理容器。通过具体的例子，它演示了如何利用容器来运行用户生成的代码、执行 CLI 工具以及从其他云平台迁移应用程序。此外，文章还介绍了 Cloudflare 容器与 Workflows 和 Agents 的集成，进一步扩展了其应用场景，例如使用 Workflows 进行短期任务...



### [突破地域限制的顺序一致性：D1-如何实现全局读取复制](https://blog.cloudflare.com/d1-read-replication-beta/)

2025-04-10 14:00:00 | 标签: 数据库, 无服务器数据库, D1, Cloudflare, 读取复制

> Cloudflare D1 数据库的读取复制功能进入公开测试阶段，无需手动管理副本，Cloudflare 自动处理。该功能通过在 Cloudflare 网络中的多个区域提供数据库的只读副本，从而降低平均延迟并提高整体吞吐量。文章详细介绍了 D1 的会话 API，该 API 通过封装所有查询来代表应用程序的一个逻辑会话，确保会话中所有查询的顺序一致性。D1 读取复制基于 SQLite Durable Objects 实现，利用 WAL 模式和存储中继服务来创建和维护只读副本。建议在非生产环境测试该 Beta 版本。



### [R2-数据目录：托管-Iceberg-表，零出口费用](https://blog.cloudflare.com/r2-data-catalog-public-beta/)

2025-04-10 14:00:00 | 标签: 数据目录, Apache Iceberg, Cloudflare R2, 数据湖, 数据湖解决方案

> Cloudflare 发布了 R2 数据目录的开放 Beta 版本，这是一个直接构建在 Cloudflare R2 存储桶中的托管 Apache Iceberg 目录。Apache Iceberg 正迅速成为对象存储中查询大型分析数据集的标准表格式。R2 数据目录提供了 Iceberg 的数据库功能，如 ACID 事务、模式演变和高效查询，而无需管理自己的外部目录。它公开了一个标准的 Iceberg REST 目录接口，可以通过 API 或 Cloudflare 控制面板启用，连接 PyIceberg、Snowflake 和 Spark 等引擎。R2 始终保持零出口费用，这意味着无论您的数据从...



### [Workers-可观测性介绍：日志、指标与查询集成平台](https://blog.cloudflare.com/introducing-workers-observability-logs-metrics-and-queries-all-in-one-place/)

2025-04-09 14:00:00 | 标签: Cloudflare, Workers, 可观测性, 日志, 指标

> Cloudflare 推出 Workers 可观测性，一项全新的控制面板功能，允许用户查询所有 Workers 的详细日志事件，以提取更深入的洞察，并解决跨 Worker 监控与调试的挑战。它包括 Workers 指标仪表盘（Beta 版）、查询构建器（Beta 版）和 Workers 日志。查询构建器提供结构化查询功能，用于深入分析，包括浏览日志、提取指标、创建可视化效果和保存查询，方便未来调查。新的 Workers 指标概览页面有助于轻松比较 Workers 之间的指标，从而提供对部署状态的深入了解。此外，“调用视图”（Invocations View）对来自每次调用的所有日志进行分组和显...



### [Cloudflare-Worker：一体化管理前端、后端和数据库](https://blog.cloudflare.com/full-stack-development-on-cloudflare-workers/)

2025-04-08 14:00:00 | 标签: 全栈开发, Cloudflare Workers, Cloudflare Pages, 边缘计算, 无服务器架构

> Cloudflare Workers 迎来重大更新，旨在简化全栈应用开发，并通过优化的数据库连接和服务器端渲染，显著提升了应用性能并降低了成本。主要更新包括对 React Router v7、Astro、Hono、Vue.js、Nuxt 和 Svelte 等框架的正式支持，以及即将支持的 Next.js、Angular 和 SolidJS。开发者现在可以在 Workers 上构建完整的全栈应用，无需框架，只需 Vite 和 React 即可。Cloudflare Vite 插件已正式发布，支持热模块替换 (HMR)。此外，Workers 还支持静态 _headers 和 _redirects ...



### [腾讯程序员：从做管理转回写代码，我所理解的工程师文化](https://mp.weixin.qq.com/s/DJIA0TJ6xB5Gka1VhEYhRQ)

2025-04-08 00:03:23 | 标签: 工程师文化, 团队管理, 管理经验, DevOps, 团队协作

> 文章作者结合自身从管理岗位转回一线代码开发的独特经历，探讨了工程师文化对团队成功的重要性。文章分析了团队在面对挑战时可能遇到的问题，如失去写代码的乐趣、沉浸在事务性工作中、因循守旧等。然后，作者提出了通过建立团队共识、找回写代码的乐趣、释放提升效率的天性以及自我成长等方式，来建设务实高效的工程师文化团队。其中，作者提出的“流程、工具、人”三要素是找回写代码乐趣的关键。文章强调，工程师文化是实现持续成功的加速器，并分享了作者在实际团队管理中的经验和方法，最后也提醒读者，工程师文化只是影响成功的因素之一，更重要的是顺应时代趋势和产品战略。



### [利用-Cloudflare-Workers-的-Images-binding-优化媒体管道](https://blog.cloudflare.com/improve-your-media-pipelines-with-the-images-binding-for-cloudflare-workers/)

2025-04-03 14:00:01 | 标签: Cloudflare Images, Images binding, Cloudflare Workers, 图像处理, 图像水印

> Cloudflare Images binding 旨在简化富媒体应用中的图像和视频处理流程，解决了传统 `fetch()` 方式在处理非 URL 可访问图像时的局限性。该 binding 允许开发者直接在 Worker 中转换、叠加和编码图像，无需通过 URL 访问图像。文章详细介绍了 Images binding 的原理和本地开发支持，并通过一个示例应用演示了如何给用户上传的图片添加水印并编码，然后上传到 R2 存储桶以存储处理后的图片。此外，文章还介绍了 Images binding 的内部实现原理，例如通过 dependency graph 和 multipart forms 与后端服...



### [Dockerfile-优化有技巧，Docker-镜像构建提速-10-倍！](https://mp.weixin.qq.com/s/1AAI0dlKle-i5QTO33nb1g)

2025-03-24 10:37:00 | 标签: Docker, Dockerfile, 镜像优化, 性能优化, 多阶段构建

> 本文详细记录了作者优化 Dockerfile 文件，从而将 Docker 镜像构建速度从十几分钟降低到一分钟左右的实践过程。文章首先展示了优化前后的效果，然后深入分析了镜像构建耗时和体积较大的原因，包括依赖下载耗时、基础镜像体积大、以及不合理的 Dockerfile 指令等。接着，文章提出了动静分离和多阶段构建等优化方案，并详细介绍了如何通过多阶段构建并行处理依赖下载和应用构建，以及如何通过移除不必要的依赖、使用 `--no-cache-dir` 参数关闭缓存、合并 RUN 指令等方式来减小镜像体积。最后，文章总结了 Dockerfile 的编码规范和镜像优化的常用手段，为读者提供了实用的 D...



### [Cloudflare-媒体转换：动态优化任何来源的视频](https://blog.cloudflare.com/media-transformations-for-video-open-beta/)

2025-03-07 14:00:00 | 标签: Cloudflare, Media Transformations, 媒体转换, 视频优化, 视频转码

> Cloudflare 的媒体转换服务类似于图像转换服务，允许用户优化存储在任何位置的短视频文件，而无需迁移。它非常适合高容量的短视频场景，如 AI 生成内容、电商产品视频和社交媒体片段。用户可以通过简单的 URL 参数（如 `mode`、`time` 和 `duration`）调整视频尺寸、裁剪、时长和音频。该服务目前在其 Beta 阶段是免费的，之后将采用与图像转换相同的计费模式。Cloudflare 计划通过统一功能和简化启用过程，进一步优化图像和媒体转换的开发者体验，使其更易于集成和使用。



### [Atlas-搜索节点：多区域可用性，助力全球扩展](https://www.mongodb.com/blog/post/atlas-search-nodes-now-with-multi-region-availability)

2025-03-06 14:41:17 | 标签: MongoDB, Atlas 搜索, 多区域可用性, 云计算, AWS

> MongoDB 的 Atlas 搜索节点现已支持多区域可用性，为用户提供了更强大的全球可扩展性和冗余性。搜索节点提供了一个专用的基础设施，让用户可以独立地扩展搜索和数据库需求，从而提高性能和可用性。多区域可用性消除了地理限制，并提供了抵御意外中断的冗余。



### [万亿级-Kafka-消息规模下的降本增效之旅](https://mp.weixin.qq.com/s/spKamSmti3VBdds6nwf7_w)

2025-03-06 04:55:20 | 标签: Kafka, AutoMQ, 云原生, Kubernetes, CubeFS

> 文章详细介绍了京东在万亿级 Kafka 消息规模下，如何通过引入 AutoMQ 这一云原生架构，并结合 CubeFS 存储进行优化，实现降本增效的实践。文章首先分析了传统 Kafka 架构在云原生环境下面临的挑战，包括存储和网络带宽的浪费，以及在 Kubernetes 上扩缩容的复杂性。随后，重点介绍了 AutoMQ 的架构优势，如与 S3 协议兼容、完全兼容 Kafka 接口、基于 WAL 和对象存储的共享存储架构等，以及 AutoMQ 如何解决京东在云原生化过程中遇到的挑战。最后，分享了 AutoMQ 在京东生产环境中的优化实践和取得的显著成效，包括存储成本降低 50%，带宽成本降低 33...



### [一文详解容器技术简介和基本原理](https://mp.weixin.qq.com/s/y56QnU8KxpzGcgXedV-q2g)

2025-02-01 18:52:56 | 标签: 容器技术, 虚拟化, Docker, Kubernetes, 云原生

> 本文详细介绍了容器技术的起源、发展和应用。首先解释了容器的基本概念及其特点，如跨平台性、一致性和可重复性、资源隔离等。接着，通过回顾虚拟化技术的发展，展示了容器如何从虚拟化演变而来。文章还详细阐述了容器的核心技术，包括 cgroup 和 namespace，以及容器网络和 Docker 的工作原理。同时，讨论了容器编排工具，如 Kubernetes 的优势及其生态系统的壮大，说明了容器技术对现代云环境和应用部署的深远影响。



### [Z-Image-Turbo-本地-Docker-部署指南](https://mp.weixin.qq.com/s?__biz=MzkxMTYyMTAzNA==&mid=2247499190&idx=1&sn=6b979fb1dd6b3063332f7cc319212e7b)

2025-12-24 09:44:00 | 标签: 图像生成, Docker, 本地部署, Z-Image-Turbo, API

> 文章提供了一个详尽的指南，教授用户如何在本地通过 Docker 部署 Z-Image-Turbo 图像生成模型。它首先区分了 Docker 部署与 ComfyUI 工作流的优势，强调了 Docker 的轻量化、API 接口统一、资源隔离和数据隐私保护。接着，文章指导用户从 ModelScope 下载模型，并创建 FastAPI 服务文件 `zimage_server.py` 和一个简洁的 HTML 前端 `index.html`。随后，详细阐述了如何拉取预构建的 Docker 镜像并运行容器，以及如何通过 Web 页面进行图像生成，包括一个详细的提示词示例。最后，文章还提供了自行构建 Dock...



### [在-Amazon-SageMaker-Studio-中引入-SOCI-索引：加快-AI/ML-工作负载的容器启动时间-|-Amazon-Web-Services](https://aws.amazon.com/blogs/machine-learning/introducing-soci-indexing-for-amazon-sagemaker-studio-faster-container-startup-times-for-ai-ml-workloads/)

2025-12-19 10:23:50 | 标签: AWS, SageMaker Studio, SOCI, 容器化, 开发运维

> 本文介绍了将 SOCI (可查找开放容器倡议) 索引集成到 Amazon SageMaker Studio 中，解决了 AI/ML 工作负载中容器镜像启动时间过长的问题。SOCI 采用延迟加载技术，仅下载应用程序启动所需的容器镜像基本部分，而非整个镜像，从而将容器启动时间缩短 35-70 %。文章详细阐述了 SOCI 的工作原理，解释了它如何通过为按需文件检索创建索引，从而在处理大型机器学习容器镜像时提高 SageMaker Studio 的生产力。此外，它还提供了使用 Finch CLI、nerdctl 或 Docker + SOCI CLI 等工具创建 SOCI 索引的实用指南，以及将现有...



### [利用-SageMaker-HyperPod-上的弹性训练为基础模型训练提供弹性基础设施-|-亚马逊云科技](https://aws.amazon.com/blogs/machine-learning/adaptive-infrastructure-for-foundation-model-training-with-elastic-training-on-sagemaker-hyperpod/)

2025-12-15 10:12:22 | 标签: AWS, SageMaker HyperPod, 弹性训练, 分布式训练, GPU 利用率

> 本文详细介绍了 SageMaker HyperPod 新推出的弹性训练功能，旨在优化基础模型训练的 AI 基础设施利用率。它解决了静态资源分配的低效率问题，即空闲 GPU 未被有效利用所产生的大量成本浪费。弹性训练允许机器学习 (ML) 工作负载根据可用计算容量动态扩容，并在更高优先级任务需要资源时优雅缩容，从而最大程度地减少了人工干预。该解决方案与 Kubernetes、PyTorch 分布式检查点 (DCP) 和 SageMaker HyperPod 的任务治理功能集成，确保在扩展事件期间保持训练质量和收敛性。本文提供了启用弹性训练的先决条件、配置和代码修改的实践指南，以及展示吞吐量提高和...



### [利用-Amazon-S3-客户端优化机器学习训练的数据加载实践-|-Amazon-Web-Services](https://aws.amazon.com/blogs/machine-learning/applying-data-loading-best-practices-for-ml-training-with-amazon-s3-clients/)

2025-12-15 09:29:31 | 标签: AWS S3, 机器学习训练, 数据加载, 性能优化, PyTorch

> 本文提供了使用 Amazon S3 优化机器学习 (ML) 训练工作负载中数据加载吞吐量的实用技术和建议。文章强调，尽管 GPU 可以加速计算，但在计算与存储解耦的云环境中，数据输入管道通常会成为瓶颈。文章以机械硬盘驱动器 (HDD) 为例，解释了随机 S3 读取（涉及大量小型 GET 请求）如何导致延迟瓶颈型性能，而通过整合数据分片进行顺序读取，则能实现带宽瓶颈型、更高吞吐量的性能。作者展示了一个计算机视觉任务的基准测试结果，比较了各种 S3 客户端，并表明将数据集整合为 100 MB – 1 GB 的分片，并使用高性能客户端（如 PyTorch S3 连接器），辅以并行化、预取和缓存，可以...



### [历史首次！英伟达-H100-在太空跑通了：太空算力赛道正式开启](https://mp.weixin.qq.com/s?__biz=Mzg3MTkxMjYzOA==&mid=2247510868&idx=2&sn=8cff891643d08a5de1f5b0ce304441a8)

2025-12-10 23:03:00 | 标签: 太空算力, 英伟达H100, 大模型训练, Starcloud, 卫星计算

> 文章详细介绍了初创公司 Starcloud 在英伟达的支持下，首次成功在太空中运行 H100 GPU，并基于莎士比亚全集训练了 NanoGPT 模型，同时成功运行了谷歌的 Gemma 大模型。这一突破性进展表明了太空算力竞赛的正式开启。文章进一步阐释了将数据中心部署在太空的优势，主要体现在能源成本低廉和可获取无限太阳能，从而解决地面数据中心面临的能源瓶颈和环境问题。未来，Starcloud 计划在 2026 年搭载 Blackwell 平台，并有多家巨头如谷歌、Lonestar Data Holdings、Aetherflux 和 OpenAI 也纷纷入局太空算力赛道。尽管存在辐射、维护和碎片...



### [使用-AWS-Graviton-优化-Mobileye-的-REM™：聚焦机器学习推理与-Triton-集成-|-亚马逊云服务](https://aws.amazon.com/blogs/machine-learning/optimizing-mobileyes-rem-with-aws-graviton-a-focus-on-ml-inference-and-triton-integration/)

2025-11-26 11:50:03 | 标签: 机器学习推理, AWS Graviton, Triton 推理服务器, 自动驾驶, 深度学习

> 本文详细介绍了 Mobileye 优化道路体验管理 (REM™) 系统的历程。重点在于计算密集型的“变更检测”组件，该组件对维护自动驾驶高清地图至关重要。该系统的核心是一个深度学习模型 CDNet。面对大规模应用和对成本效率的优先考虑，Mobileye 制定了战略性的架构决策。首先，他们选择了 CPU 实例而不是 GPU 进行机器学习推理。尽管 GPU 具有原始速度优势，但考虑到 GPU 较高的成本、较低的竞价型实例可用性，以及整个流水线 (pipeline) 的大部分环节都是 CPU 密集型的，CPU 方案更具成本效益。其次，他们集成了 Triton 推理服务器来集中化 CDNet 模型推理...



### [华纳兄弟探索：AWS-Graviton-助力实现-60%成本节约和机器学习推理加速-|-亚马逊云科技](https://aws.amazon.com/blogs/machine-learning/warner-bros-discovery-achieves-60-cost-savings-and-faster-ml-inference-with-aws-graviton/)

2025-11-25 09:26:48 | 标签: 机器学习推理, 成本优化, AWS Graviton, 亚马逊SageMaker, 推荐系统

> 华纳兄弟探索（WBD）在为全球超过 1.25 亿用户扩展实时个性化推荐系统时面临重大挑战，包括在流量高峰期维持低于 100 毫秒的延迟，同时有效管理基础设施成本。为解决这些问题，WBD 为其机器学习推理工作负载采用了基于 AWS Graviton 的亚马逊 SageMaker AI 实例。迁移过程包括：初始沙箱环境测试和微调以最大化吞吐量，然后进行生产影子测试以验证观察到的成本和性能优势，且不影响用户体验。他们有效地利用 SageMaker 推理推荐器进行自动化基准测试，并利用 SageMaker 的影子测试功能。这一战略转变带来了令人瞩目的平均 60%的成本节约，部分目录排序模型成本降低高达...



### [如何利用博客内容自动生成-Substack-电子报](https://simonwillison.net/2025/Nov/19/how-i-automate-my-substack-newsletter/#atom-everything)

2025-11-19 22:00:34 | 标签: 工作流自动化, 电子报生成, Datasette, SQLite, GitHub Actions

> 本文概述了一个实用的端到端自动化流程，用于在 Substack 上发布每周电子报，内容直接从作者的博客中提取。该工作流程始于一个基于 Django 并使用 PostgreSQL 的博客，然后通过 GitHub Actions 和 `db-to-sqlite` 工具备份并转换为 SQLite 数据库。这个 SQLite 数据库通过 Datasette 作为 JSON API 提供，并托管在 Fly.io 上。一个 Observable 笔记本从这个 Datasette 实例获取数据，过滤掉之前发送的内容，使用复杂的 SQL 查询将其格式化为 HTML，并提供一个“复制到剪贴板”按钮。最后一步是在...



### [HyperPod-利用安全和存储技术改进机器学习基础设施-|-亚马逊云服务](https://aws.amazon.com/blogs/machine-learning/hyperpod-enhances-ml-infrastructure-with-security-and-storage/)

2025-11-18 09:54:27 | 标签: 机器学习基础设施, 数据安全, 存储管理, AWS, SageMaker HyperPod

> 本文介绍了 Amazon SageMaker HyperPod EKS 的两个重要新功能，旨在满足大规模机器学习基础设施（特别是基础模型）对更高安全性和灵活存储日益增长的需求：客户管理密钥 (CMK) 支持和 Amazon EBS 容器存储接口 (CSI) 驱动支持。CMK 使客户能够使用自己的加密密钥加密主 EBS 卷和辅助 EBS 卷以及自定义 AMI，这对于满足严格的合规性和安全治理要求（如 HIPAA 和 FIPS）至关重要。本文详细介绍了 EBS 卷和自定义 AMI 的 CMK 配置，包括 IAM 权限以及用于创建和更新集群的 API 示例。EBS CSI 驱动支持支持 EBS 卷的...



### [亚马逊搜索如何通过使用-AWS-Batch-for-Amazon-SageMaker-Training-jobs-将机器学习训练效率提升至两倍-|-亚马逊云服务](https://aws.amazon.com/blogs/machine-learning/how-amazon-search-increased-ml-training-twofold-using-aws-batch-for-amazon-sagemaker-training-jobs/)

2025-11-05 09:15:35 | 标签: 机器学习运维, AWS Batch, Amazon SageMaker, 资源调度, 队列管理

> 亚马逊搜索在高效管理和优先排序跨数百个 GPU 实例的各种机器学习训练工作负载方面面临重大挑战，导致资源利用率欠佳和手动协调开销。为了解决这个问题，他们实施了一个将 AWS Batch 与 Amazon SageMaker Training jobs 集成的托管解决方案。此设置利用 AWS Batch 的服务环境来定义 GPU 容量限制，利用共享标识符来实现跨不同作业类型（生产、研究、超参数搜索）的复杂公平共享调度和优先级管理，并利用 Amazon CloudWatch 进行实时监控和警报。该解决方案的采用显著提高了 GPU 实例的峰值利用率，从 40% 提高到 80% 以上，减少了作业队列等...



### [最强开源-0.9B-级-OCR-模型！PaddleOCR-VL-本地一键部署，私密性拉满【喂饭级教程】](https://mp.weixin.qq.com/s?__biz=MzkwMzE4NjU5NA==&mid=2247511940&idx=1&sn=8b28e557469b5c72480b5327c0d7961e)

2025-11-05 00:04:00 | 标签: OCR, PaddleOCR-VL, 本地部署, 部署教程, Docker

> 本文为百度开源的 PaddleOCR-VL 0.9B 模型提供了详尽的本地 Docker 部署教程。作者首先回顾了之前关于该模型的文章及其引发的本地部署需求，并分享了自己在一键部署过程中遇到的挑战和解决方案。文章详细介绍了在 Windows 环境下，利用 Docker 部署 PaddleOCR-VL 的步骤，包括镜像拉取、版本检查、依赖安装（特别是 Flash Attention 预编译包的安装），以及解决显存溢出问题的关键参数配置（如调整 GPU 内存占用率）。部署成功后，模型实现了快速的文本识别，且显存占用优化至 6G。更重要的是，文章强调了 PaddleOCR-VL 对 OpenAI A...



### [在十字路口，云计算传奇-Jeff-Barr-和我们进行了三场「对话」，回答了-100-个问题](https://mp.weixin.qq.com/s?__biz=MzAxMDMxOTI2NA==&mid=2649099799&idx=1&sn=b6b30afa62f509679002cb3974ae6395)

2025-10-30 10:29:00 | 标签: 个人成长, 技术布道, 人工智能, 云计算, AWS Kiro

> 文章详细记录了亚马逊云传奇布道师 Jeff Barr 在上海参与的三场深度对话活动。Jeff Barr 围绕 AI 时代个人成长、技术布道、云计算发展等核心议题，回答了开发者们关心的上百个问题。他强调了亲自动手学习 AI 的重要性，指出 AI 赋能个体创业者的趋势，并鼓励非技术背景人士通过理解业务和清晰表达想法参与 AI 创造。文章还探讨了真正的技术布道者应具备的特质，展望了 AI 简化未来代码开发和部署的潜力，并回顾了云计算二十年的演进。最后，文章介绍了亚马逊云科技的 AI 驱动开发工具 Kiro 及其旨在激励开发者使用的“百万奖池计划”。



### [在-Amazon-SageMaker-AI-上托管-NVIDIA-基于-NIM-的语音模型：Parakeet-ASR-|-亚马逊云科技](https://aws.amazon.com/blogs/machine-learning/hosting-nvidia-speech-nim-models-on-amazon-sagemaker-ai-parakeet-asr/)

2025-10-28 10:09:48 | 标签: 语音辨识, Amazon SageMaker, NVIDIA NIM, AWS, MLOps

> 本文提供了一个全面的指南，介绍了如何在 Amazon SageMaker AI 异步推理管道中利用 NVIDIA 的语音 AI 技术，特别是 Parakeet ASR 模型。它通过演示 SageMaker 异步端点如何高效处理批量工作负载，并支持自动缩放至零以优化成本，从而解决了大规模处理大量音频数据的挑战。该解决方案集成了 Parakeet ASR 与 NVIDIA Riva 和 NIM，以实现高性能、可定制的语音识别。该架构利用 Amazon S3 进行数据提取，AWS Lambda 进行工作流程编排，Amazon SNS 发送通知，Amazon DynamoDB 进行跟踪，以及 Amaz...



### [HAMi-×-NVIDIA：GPU-拓扑感知调度实现详解](https://mp.weixin.qq.com/s?__biz=MzU1NDA4NjU2MA==&mid=2247647314&idx=2&sn=416fdac6b4e9a5d4dc075c6628aff2f4)

2025-10-25 05:30:00 | 标签: GPU调度, 拓扑感知, Kubernetes, Kubernetes Device Plugin, 分布式系统

> 文章详细剖析了开源项目 HAMi 在 v2.7.0 版本中推出的 NVIDIA GPU 拓扑感知调度功能。该功能旨在解决高性能计算（HPC）和 AI 大模型训练场景下的多卡通信瓶颈问题，通过智能调度将计算任务部署到物理连接最紧密、通信速度最快的 GPU 组合上。其核心设计包括两个阶段：首先，Device Plugin 利用 NVIDIA NVML 动态探测 GPU 间的物理连接（如 NVLink、PCIe），并将其量化为可理解的“通信分数”，注册到节点 Annotation 中，此为“拓扑注册”阶段。其次，调度器在接收任务后，通过设备端的 Fit 函数，结合“设备分数表”和双策略寻优算法进行“...



### [Metagenomi-使用-AWS-Inferentia-经济高效地生成数百万种新型酶-|-亚马逊云服务](https://aws.amazon.com/blogs/machine-learning/metagenomi-generates-millions-of-novel-enzymes-cost-effectively-using-aws-inferentia/)

2025-10-22 05:53:20 | 标签: 生成式人工智能, 蛋白质语言模型, AWS Inferentia, AWS Batch, 成本优化

> 本文详细介绍了 Metagenomi 通过高通量蛋白质生成式人工智能工作流程，经济高效地生成具有增强的稳定性、特异性或功效的新型酶。他们选择在 AWS Inferentia 支持的 EC2 Inf2 Spot 竞价型实例上实施 Progen2 蛋白质语言模型，并利用 AWS Batch 进行编排。相比 GPU 实例，Metagenomi 实现了高达 56% 的显著成本降低。这种优化的管道使 Metagenomi 能够生成超过一百万种用于治疗应用的新型酶，为大规模生物技术研究和开发提供了一种更经济且易于实施的解决方案。



### [ChatGPT-也遭殃，亚马逊服务器故障，半个互联网都崩了](https://www.qbitai.com/2025/10/344093.html)

2025-10-21 05:15:30 | 标签: 云服务故障, AWS, 服务中断, 高可用性, 分布式系统

> 文章详细报道了亚马逊 AWS us-east-1 区域发生的服务器宕机事件及其广泛影响。故障导致包括 ChatGPT、Docker、npm、Zoom、Netflix、PlayStation 等在内的众多线上服务，以及部分线下应用（如打车、点餐、值机）被迫中断，甚至影响到智能门锁和英超半自动越位系统。文章解释了 us-east-1 作为 AWS 最核心且托管全球控制面服务的区域，其故障能波及全球的原因，并指出 DNS 解析问题和 EC2 内部网络子系统异常是主要诱因。此次事件揭示了互联网对大型中心化云服务过度依赖的脆弱性，并呼吁开发者应重新审视部署策略，通过原生多区域、故障转移等弹性机制来避免类...



### [支持-Hugging-Face-生产基础设施的三个重要告警](https://huggingface.co/blog/infrastructure-alerting)

2025-07-08 00:00:00 | 标签: 基础设施, 告警, 监控, Kubernetes, AWS

> 本文深入探讨了 Hugging Face 的生产基础设施监控和告警策略，重点介绍了三个关键告警。首先，“NAT 网关高吞吐量”告警主动识别异常网络流量峰值，通过确保数据流经私有、更经济的路径来帮助优化成本，并提高安全可见性。它展示了如何利用域名系统覆盖和基础设施即代码来有效管理出站流量。其次，“Hub 请求日志归档成功率”告警验证了其复杂的日志记录管道（Filebeat、Logstash、Elasticsearch、AWS S3 / Athena）的完整性。该关键告警对比了应用负载均衡器 (ALB) 的请求数与成功归档的日志数，防止静默数据丢失，并确保全面的日志数据可用于分析，这在基础设施重构...



### [具身智能的终极命题：是造「人」还是造「生产力」？-｜-机器之心](https://www.jiqizhixin.com/articles/2025-06-25-3)

2025-06-25 04:50:56 | 标签: 具身智能, 机器人, 生产力, 华为, CloudRobo

> 本文分析了具身智能的两种发展视角：聚焦于人形机器人或着眼于提升各类机器的生产力。文章以华为 CloudRobo 平台为例，阐述了通过云端强智能赋能不同形态机器人，实现快速落地的路径。文中强调，具身智能的核心应是解决实际场景中的生产力问题，工业和商业领域已有大量非人形机器人通过技术跃迁兑现生产力价值。文章认为，具身智能的未来在于多形态机器人的共存与群体协同，并介绍了优艾智合等公司在构建多模态通用基座模型和端侧控制模型方面进行的探索，旨在打造可适配更广阔场景的智能生产力网络，具身智能的终极命题在于生产力工具的涌现与进化。



### [使用-Firecrawl-进行网页数据抓取变更检测](https://www.firecrawl.dev/blog/web-scraping-change-detection-with-firecrawl)

2025-05-12 17:35:11 | 标签: 网页数据抓取, 变更检测, Firecrawl, API, GitHub Actions

> 本文详细介绍了如何利用 Firecrawl API 构建一个自动化的 Web 内容变更检测系统，以监控弹壳回声游戏 Wiki 的更新。该系统利用 Firecrawl 的变更追踪功能（changeTracking），定期抓取 Wiki 页面，自动检测内容的新增、更新或删除。文章分步骤讲解了项目配置，包括 uv、.env 和 git 等工具的使用；数据模型的定义（使用了 Pydantic 库）；核心代码的实现（涉及 changeTracking 和 batch_scrape_urls 等关键功能）；以及如何使用 GitHub Actions 实现自动化部署，保证检索增强生成 (RAG) 系统知识库...



### [苹果提出原生多模态-Scaling-Law！早融合+MoE，性能飙升秘密武器](https://mp.weixin.qq.com/s?__biz=MzI3MTA0MTk1MA==&mid=2652591609&idx=3&sn=d9aaec885ee668c22058d44a04132989&subscene=0)

2025-05-05 04:58:00 | 标签: 多模态模型, Scaling Laws, 早融合, 混合专家 (MoE), 模型架构

> 本文研究了苹果公司提出的原生多模态模型（NMM）的 Scaling Law，通过大量实验，分析了不同架构和训练方式对模型性能的影响，揭示了其对于理解和优化多模态模型的重要性。研究表明，在低计算预算下，早融合架构优于后融合架构，且训练效率更高。通过引入混合专家（MoE）技术，模型能够学习特定模态的权重，从而显著提升性能。实验结果表明，早融合模型和采用 MoE 的模型在视觉问答和图像字幕任务中表现更优。此外，文章还探讨了不同数据混合方式对模型性能的影响，以及原生多模态预训练与 LLM 持续训练的对比。



### [Rocket-Companies-如何在-AWS-上实现数据科学解决方案现代化-|-亚马逊云服务](https://aws.amazon.com/blogs/machine-learning/how-rocket-companies-modernized-their-data-science-solution-on-aws/)

2025-02-21 10:45:46 | 标签: AWS SageMaker, 数据科学, 机器学习, 云计算, 模型部署

> Rocket Companies 通过迁移到 AWS SageMaker AI 套件，显著改进了其数据科学解决方案。迁移前，他们面临数据访问限制、数据科学家学习曲线陡峭、运维负担重以及部署挑战等问题。通过采用 AWS 多账户策略，将新工作迁移到 SageMaker Studio，并将遗留的 Hadoop 工作负载迁移到 Amazon EMR，Rocket Companies 成功地将数据从 HDFS 迁移到 Amazon S3，并使用 Amazon Athena 和 AWS Lake Formation 来提供适当的访问控制。迁移后，Rocket Companies 的数据科学生产力提高了 8...



### [苹果也在蒸馏大模型，给出了蒸馏-Scaling-Laws](https://www.jiqizhixin.com/articles/2025-02-14-4)

2025-02-14 05:11:19 | 标签: 知识蒸馏, Scaling Laws, 扩展法则, 模型压缩, 模型优化

> 苹果研究人员提出了蒸馏扩展定律，旨在解决大模型推理成本高昂的问题，为 AI 社区构建更高效、低成本的大模型替代方案铺平了道路。该定律基于计算预算及其在教师和学生模型之间的分配，能够估算蒸馏模型的性能。研究人员通过大规模实验，系统地研究了教师模型在蒸馏过程中的作用，实验数据规模涵盖 1.43 亿到 126 亿参数的模型，以及高达 5120 亿 token 的训练数据。研究表明，当教师模型的训练成本被考虑时，监督学习通常更有效。这项工作为 AI 社区构建更强大的模型，实现更低的推理成本和总计算成本提供了新的量化方法。



### [在-Cloudflare-平台上构建垂直微前端](https://blog.cloudflare.com/vertical-microfrontends/)

2026-01-30 14:00:00 | 标签: 微前端, Cloudflare Workers, 软件架构, Service Bindings, View Transitions

> 文章详细介绍了 Cloudflare 新的垂直微前端架构模板，该模板允许组织按 URL 路径而非水平组件拆分大型应用。这种模式使独立团队能够拥有特定路由（如 /blog 或 /dash）的整个技术栈，包括框架选择和 CI/CD 流水线。实现方案利用了一个核心的 “Router” Worker，通过 Service Bindings 进行低延迟内部路由，并使用 HTMLRewriter 进行动态资源路径修正。为了确保高质量的用户体验，该系统集成了 CSS View Transitions 以消除导航闪烁，并利用 Speculation Rules API 实现近乎即时的文档预加载，从而有效地让多...



### [【第-3651-期】vivo-互联网全链路多版本环境落地实践](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651278559&idx=1&sn=3c8686786017e4c151500f895485c051)

2026-01-30 01:02:00 | 标签: 软件架构, DevOps, 微服务, 环境管理, 流量染色

> 文章系统性地阐述了 vivo 在应对微服务架构带来的环境不稳定、资源抢占及测试瓶颈等挑战时，所采取的“全链路多版本环境管理”实践。该方案摒弃了高成本的物理隔离，转而采用基于“流量隔离”的逻辑环境模式。核心技术涵盖了通过 CI/CD 实现的一键环境编排、基于容器化的弹性资源供给，以及针对 HTTP、Dubbo 和 MQ 协议的深度流量染色与路由机制。通过 JavaAgent 技术实现的标签透明传递，确保了复杂调用链中的环境一致性，显著提升了环境交付效率与版本并发能力。



### [vivo-GPU-容器与-AI-训练平台探索与实践](https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&mid=2247506054&idx=1&sn=dedfc5e7060274856497c6682f586b30)

2026-01-28 12:01:00 | 标签: GPU 容器, GPU 虚拟化, Kubernetes, 大模型训练, 训推潮汐部署

> 文章系统性地分享了 vivo 构建高效 GPU 算力底座的经验。在容器平台层，针对大规模集群核心组件（Apiserver， etcd， CoreDNS）进行架构优化，并通过自动化运维与故障演练实现 99.99% 的可用性。在提效降本方面，vivo 研发了涵盖 MIG、内核层及 CUDA 层的自研 GPU 虚拟化技术，实现单卡 300% 的虚拟化率；同时引入基于 KEDA 的 GPU 弹性扩缩容和训推潮汐部署方案，有效利用推理业务的夜间空闲资源。在 AI 工程层，VTraining 平台通过高频故障治理与自动化容错机制，将千卡任务有效训练时长提升至 99%，并通过低优任务抢占和虚拟化技术将 GP...



### [电缆中断、风暴与-DNS：2025-年第四季度互联网中断回顾](https://blog.cloudflare.com/q4-2025-internet-disruption-summary/)

2026-01-26 14:00:00 | 标签: 互联网基础设施, 云计算, 网络安全, Cloudflare Radar, 海底电缆

> 这份来自 Cloudflare Radar 的技术报告总结了 2025 年第四季度互联网停机的多种原因。主要中断事件包括坦桑尼亚选举期间由政府主导的大规模关停；影响海地、巴基斯坦和喀麦隆的多起国际光缆中断；以及飓风 Melissa 在牙买加、气旋 Senyar 在斯里兰卡和印度尼西亚造成的重大基础设施损坏。报告还详细记录了技术故障，包括意大利和以色列的 DNS 解析问题，以及 AWS (us-east-1) 和 Microsoft Azure (Front Door) 等主要云服务商的运营事故。此外，报告还对 Cloudflare 自身发生的涉及数据库权限和请求体解析逻辑的两起事件进行了透明的...



### [缺失的两个字符：Regex-缺陷如何让-AWS-GitHub-代码库暴露于供应链风险之中](https://www.infoq.com/news/2026/01/aws-github-vulnerability/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-25 07:28:00 | 标签: 网络安全, 供应链攻击, AWS CodeBuild, CI/CD 安全, GitHub

> 本文详细介绍了由 Wiz Security 发现的名为 'CodeBreach' 的供应链漏洞，该漏洞影响了包括 AWS SDK for JavaScript 在内的高知名度 AWS GitHub 代码库。该缺陷源于 AWS CodeBuild 过滤器中一个简单的 Regex 配置错误：缺失起始 (^) 和结束 ($) 锚点，使得未经授权的 GitHub 参与者能够触发特权构建。通过利用连续的 GitHub ID，研究人员演示了如何渗透构建环境并泄露管理凭证。AWS 随后缓解了该问题，但此次事件凸显了 CI/CD 配置错误导致重大供应链风险的反复出现模式。



### [2026-年-1-月-22-日路由泄露事件报告](https://blog.cloudflare.com/route-leak-incident-january-22-2026/)

2026-01-23 14:00:00 | 标签: BGP, 网络基础设施, Cloudflare, 路由泄露, JunOS

> 2026 年 1 月 22 日，Cloudflare 位于迈阿密的数据中心发生了 BGP 路由泄露。该事件由旨在删除特定前缀列表的自动化配置更改触发；然而，生成的 JunOS 策略变得过于宽松，匹配了所有“内部”路由类型并将其通告给外部 BGP 邻居。这导致来自 Meta 等对等节点的 IPv6 流量通过 Cloudflare 的迈阿密基础设施流向 Lumen 等传输提供商。此次泄露导致骨干网拥塞、延迟增加和丢包，约有 12Gbps 的流量被安全过滤器丢弃。Cloudflare 通过手动回滚配置解决了该问题，并承诺实施基于社区的防护措施、CI/CD 策略评估，并采用 RFC9234 和 ASP...



### [AlloyDB-托管连接池](https://cloud.google.com/blog/products/databases/alloydb-managed-connection-pooling/)

2026-01-23 00:00:00 | 标签: AlloyDB, PostgreSQL, 数据库可扩展性, 连接池, Google Cloud

> 本文介绍了 AlloyDB for PostgreSQL 托管连接池的正式发布（GA）。它解决了传统数据库连接的“隐藏成本”问题，例如 TLS 握手带来的延迟和资源耗尽，这些问题在无服务器和微服务架构中尤为突出。通过将连接池直接集成到 AlloyDB 服务中（使用 6432 端口），Google 消除了管理 PgBouncer 等外部工具的运维负担。该功能支持两种模式：“事务模式”用于实现最大可扩展性，“会话模式”用于实现完全的功能兼容性。性能基准测试显示了显著的提升，包括每分钟事务数增加 5 倍，以及与标准设置相比处理并发连接的能力提升 3 倍。



### [AWS-发布欧洲主权云，美国法律管辖权问题仍存疑](https://www.infoq.com/news/2026/01/aws-european-sovereign-cloud/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-22 10:19:00 | 标签: AWS, 云计算, 数据主权, GDPR, 云法案

> AWS 正式在德国勃兰登堡推出了欧洲主权云（ESC），并投入 78 亿欧元资金。该服务拥有独立的分区（aws-eusc），由一家专门的德国子公司管理，员工全部为欧盟居民，以满足严格的监管要求。虽然工程师确认了技术上的隔离——指出即使是总部的 AWS 员工也无法访问该环境——但此举引发了激烈辩论。批评者和法律专家认为，只要 AWS 是一家总部位于美国的公司的子公司，它就仍受《云法案》和 FISA 的约束，这可能允许美国当局强制要求披露数据，无论其物理位置如何。文章将 AWS 的方案与 Hetzner、Scaleway 等欧洲本土供应商进行了对比，突显了技术主权与法律管辖权之间的紧张关系。



### [你的依赖项并不关心你的-FIPS-配置](https://www.docker.com/blog/fips-dependencies-and-prebuilt-binaries/)

2026-01-22 06:00:04 | 标签: FIPS 合规, Docker, 供应链安全, 依赖管理, OpenSSL

> 文章探讨了软件供应链安全中的一个关键挑战：如何在容器镜像中实现 FIPS 合规。虽然基础镜像可能已正确配置 FIPS，但预构建的原生二进制文件（如 Ruby gems 或数据库驱动程序）通常会捆绑其自身不合规的加密库，或链接到不兼容的 OpenSSL 版本。通过对 Rails 应用程序和 'pg' gem 的案例研究，作者证明了这些问题通常只在特定的执行路径中才会显现。解决方案包括在受控环境中强制从源代码进行本地编译，以确保与系统的 FIPS 验证 OpenSSL 链接。文章得出结论，FIPS 不是一个简单的“开关”，而是一个复杂的工程挑战，需要严格的依赖管理和测试。



### [vivo-互联网全链路多版本环境落地实践](https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&mid=2247506012&idx=1&sn=6341c3dfb3d515d174cb0eb8cc90ce2e)

2026-01-21 12:01:00 | 标签: 微服务架构, 环境管理, 流量染色, CI/CD, 容器化

> 文章针对 vivo 在微服务架构演进中遇到的测试环境不稳定、资源抢占严重及研发效能低下等痛点，提出了“全链路多版本环境管理”方案。该方案的核心思路是从传统的物理隔离转向基于流量染色的逻辑隔离，通过维护一套稳定的公用基线环境，并为变更服务按需创建特性环境。技术实现上，依托 CI/CD 平台进行自动化环境编排，利用容器化平台提供弹性资源支撑，并借助统一网关、Dubbo 治理平台及 MQ 代理实现 HTTP、Dubbo 和 MQ 全链路的流量识别与路由。此外，通过 javaagent 技术实现了环境标签在复杂调用链中的透明传递。落地实践显示，该体系将环境搭建耗时从人天级降至分钟级，版本并发能力提升了...



### [新版-Firestore-查询引擎支持流水线操作](https://cloud.google.com/blog/products/data-analytics/new-firestore-query-engine-enables-pipelines/)

2026-01-21 00:00:00 | 标签: Firestore, Google Cloud, NoSQL 数据库, 查询优化, 云基础设施

> Google Cloud 对 Firestore 进行了重大更新，在企业版中引入了先进的查询引擎。这一新引擎超越了传统的依赖索引模型，引入了 100 多种“流水线操作”，允许直接在数据库内进行复杂的数据转换，如数组展开和高级聚合。核心特性包括精确的索引控制（稀疏索引、唯一索引等）、增强的可观测性工具（如用于性能调优的“查询解释”和“查询洞察”），以及一种基于文档大小的新计费模型，对于小文档最高可节省 86% 的成本。此次更新旨在降低开发者在构建电子商务、游戏和个性化等复杂应用时的运维开销，同时保持 Firestore 无服务器和可扩展的基础架构。



### [Salesforce-将-1，000-多个-EKS-集群迁移至-Karpenter，提升扩缩容速度与效率](https://www.infoq.com/news/2026/01/salesforce-eks-karpenter/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-20 12:00:00 | 标签: Kubernetes, AWS EKS, Karpenter, 云基础设施, 自动扩缩容

> 本文详细介绍了 Salesforce 将其 1，000 多个 EKS 集群从传统的 Kubernetes Cluster Autoscaler 大规模迁移到 AWS Karpenter 的过程。面对扩缩容缓慢和资源利用率低等局限，Salesforce 开发了定制的自动化工具来处理节点轮转、AMI 验证和 Pod 优雅驱逐。这一转变将基础设施从静态的 Auto Scaling Groups 转向了动态的、感知工作负载的配置模型。核心成果包括：扩缩容延迟从分钟级降至秒级，通过开发人员自服务使运维开销降低了 80%，并预计到 2027 财年可节省高达 15% 的成本。报告还强调了遇到的技术挑战，如 ...



### [我们如何修复-Cloudflare-ACME-验证逻辑中的漏洞](https://blog.cloudflare.com/acme-path-vulnerability/)

2026-01-19 14:00:00 | 标签: Cloudflare, 网络安全, ACME 协议, WAF, 漏洞修复

> 本文详细介绍了在 Cloudflare 的 ACME（自动证书管理环境）验证逻辑中发现的一个安全漏洞。该缺陷存在于边缘网络处理 HTTP-01 挑战请求的方式中。为了防止 WAF 干扰合法的证书续期，Cloudflare 的系统被设计为对匹配 '/.well-known/acme-challenge/*' 路径的请求绕过安全规则。然而，一个逻辑错误导致带有与其他区域（Zone）相关联令牌的请求也能绕过 WAF 并继续前往客户的源服务器。Cloudflare 随后部署了一个补丁，确保仅当请求与特定主机名的有效且本地管理的挑战令牌匹配时，才会禁用 WAF 功能。



### [Pinterest-的-Moka：Kubernetes-如何重新定义大数据处理规则](https://www.infoq.com/news/2026/01/pinterest-kubernetes-bigdata/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-19 09:00:00 | 标签: Kubernetes, 大数据, Apache Spark, 云原生, Amazon EKS

> Pinterest 正在通过从基于 Hadoop 的 Monarch 平台过渡到 Moka 来现代化其大数据生态系统，Moka 是一个基于 Kubernetes 并在 Amazon EKS 上运行的云原生数据处理平台。这一战略举措旨在克服其遗留系统的限制，实现更好的可扩展性、安全性和成本效益。Moka 主要使用 Apache Spark 进行批处理和交互式分析，未来计划集成其他引擎如 Apache Flink 和 Ray，以处理包括实时流处理在内的多样化工作负载。该平台强调使用 Terraform 和 Helm 的稳健基础设施即代码、用于成本优化的多架构镜像支持（Intel 和 ARM/Gra...



### [Cloudflare-通过左移安全实践扩展基础设施即代码](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651272073&idx=4&sn=b561b3e21eac785bb194c351fede68de)

2026-01-18 02:16:00 | 标签: DevSecOps, 基础设施即代码, 左移安全, Cloudflare, Terraform

> Cloudflare 的 Customer Zero 团队面临手动配置错误可能迅速波及全球边缘服务的难题。为此，他们实施了一套以基础设施即代码（IaC）为核心的左移安全实践，将所有基础设施配置视为代码，强制进行同行评审和自动化安全检查。该方案在部署前通过约 50 个安全策略验证每个生产变更，从而在问题成本最低时捕获安全违规，实现了从事件响应到事件预防的转变。核心技术栈包括 Terraform、Cloudflare Terraform Provider、自定义 CI/CD 流水线、Atlantis 与 GitLab 集成。通过 tfstate-butler 代理确保 Terraform 状态文件...



### [Cloudflare-自动化-Salt-配置管理调试，减少发布延迟](https://www.infoq.com/news/2026/01/cloudflare-salt-configuration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-17 09:30:00 | 标签: 配置管理, SRE, SaltStack, 可观测性, DevOps

> Cloudflare 的站点可靠性工程（SRE）团队显著改善了其庞大的全球基础设施的配置管理可观测性，该系统由 SaltStack 驱动。面对静默故障、资源耗尽和依赖问题等导致发布停滞的问题，他们将其方法从被动的手动调试重新设计为主动的事件驱动自动化。通过开发内部框架 "Jetflow"，他们现在能够将 Salt 事件与 Git 提交、外部服务故障和临时发布关联起来。该系统自动标记配置错误的根本原因，减少了手动追踪作业 ID 和筛选日志的繁琐任务。结果是发布延迟减少了 5%，SRE 的繁琐工作减少，配置变更的可审计性得到改善，这表明先进的可观测性和自动化关联对于管理 Cloudflare 规模...



### [Pulumi-新增对-Terraform-和-HCL-的原生支持](https://www.infoq.com/news/2026/01/pulumi-adds-terraform-hcl/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-17 08:00:00 | 标签: Pulumi, Terraform, HCL, 基础设施即代码, 云计算

> Pulumi 通过增加对 HashiCorp Terraform 和 OpenTofu 的原生支持显著扩展了其平台功能，现在可以在 Pulumi Cloud 中直接执行 HCL 并托管 Terraform 状态。这一举措是 Pulumi 的战略转变，该公司此前专注于使用通用编程语言进行基础设施即代码（IaC）。这些功能目前处于私有测试阶段，旨在帮助组织迁移遗留代码，并应对 IBM 收购 HashiCorp 及其许可证变更带来的担忧。Pulumi 首席执行官 Joe Duffy 强调了企业中混合工具环境的普遍需求。在技术层面，Pulumi Cloud 现在可以作为 Terraform/OpenT...



### [如何在-AWS-上部署-MERN-技术栈笔记应用](https://www.freecodecamp.org/news/how-to-deploy-mern-stack-notes-app-aws/)

2026-01-17 02:25:39 | 标签: AWS, 部署, MERN 技术栈, EC2, RDS

> 本文为开发人员提供了一个实用的实践指南，指导如何将 MERN 技术栈（MongoDB、Express.js、React、Node.js）笔记应用直接部署到核心 AWS 服务上。通过解释底层 AWS 组件：用于 Express API 的 EC2、用于 PostgreSQL 数据库的 RDS，以及用于 React 前端的 S3（可选 CloudFront），旨在揭开自动化部署平台的神秘面纱。教程涵盖了从本地设置和 GitHub 集成到配置 AWS 资源的关键步骤，包括安全组、环境变量和使用 PM2 的进程管理。还涉及使用 AWS 免费层的成本节省技巧和基本故障排除。该指南旨在帮助开发人员更好地控...



### [如何在-AWS-ECS-上通过数据库迁移管理蓝绿部署：完整实现指南](https://www.freecodecamp.org/news/how-to-manage-blue-green-deployments-on-aws-ecs-with-database-migrations/)

2026-01-15 18:25:13 | 标签: AWS ECS, 蓝绿部署, 数据库迁移, DevOps, 云原生

> 本文提供了一个实用且深入的指南，介绍如何在 AWS ECS 上管理蓝绿部署，重点关注具有共享状态的数据库迁移这一挑战性方面。详细阐述了为什么蓝绿部署在涉及数据库时会变得复杂，概述了模式版本冲突、数据不一致和不可逆迁移等问题。核心解决方案是数据库模式变更的'扩展-收缩'模式，分为三个阶段：扩展（添加新列/结构）、部署（新应用版本同时写入新旧结构，仍与旧应用版本兼容以便回滚）和收缩（移除旧列）。文章还涵盖了管理其他有状态服务，如会话、S3 存储桶、消息队列和缓存层，强调版本控制以确保兼容性。通过使用 Terraform 和 Flask 应用的完整端到端实现指南，演示了地址字段迁移的扩展-收缩模式，...



### [轻松支持日均百次部署：这个-K8S-的-CICD-设计，比主流工具好用太多！](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633874&idx=1&sn=67773cce5de5b0c2ae839adb02e09c8f)

2026-01-14 23:15:00 | 标签: CI/CD, Kubernetes, Jenkins, ArgoCD, 云原生

> 本文详细介绍了一个在 Kubernetes 环境下，为满足“每日上百次部署需求”而设计的 CI/CD 解决方案。作者分享了一个拥有 500+ 应用模块、多语言类型、多环境的复杂背景下，如何通过工具选型（Jenkins、Gitlab、ArgoCD 等）、标准化规范（应用命名、分支环境、编译规范、运行环境）以及具体的 CI/CD 实施方案，来实现高并发、资源合理利用、自动化构建部署、质量检测和高效发布。文章还强调了将 CI Jobs 运行在 K8s 临时 Pod 中以提升资源利用率，并详细阐述了 CI 环节的自动化触发、Jenkins 动态 Slave 节点创建、Pipeline 运行、质量检测（...



### [为什么你应该停止手动管理-Kafka-–-Kafka-UI-与-Cruise-Control-指南](https://www.freecodecamp.org/news/stop-managing-kafka-manually-a-guide-to-kafka-ui-and-cruise-control/)

2026-01-14 15:58:54 | 标签: Kafka, Kafka UI, Cruise Control, 分布式系统, Docker Compose

> 本文提供了一个实用指南，介绍如何使用 Kafka UI 和 Cruise Control 超越手动管理 Apache Kafka 集群。首先通过使用 Docker Compose 手动设置多代理 Kafka 集群的实践演示了手动操作的痛点，包括通过 CLI 创建主题、列出分区和统计领导者数量。作者强调了手动方法在大型动态环境中的低效性和易出错性。随后，文章介绍了 Kafka UI 作为可视化仪表板，用于简化监控和基本管理，提供对代理、主题和消费者组的清晰概览。在肯定 Kafka UI 优势的同时，也指出了其在自动重新平衡、自我修复和性能优化方面的局限性。最后，为 Cruise Control ...



### [百度流式计算开发平台的降本增效之路](https://mp.weixin.qq.com/s?__biz=Mzg5MjU0NTI5OQ==&mid=2247606286&idx=1&sn=39a6adcf9002b9ab6a4899a8c3fac793)

2026-01-14 10:00:00 | 标签: 流式计算, 云原生, Kubernetes, PaaS, 降本增效

> 本文详细阐述了百度流式计算开发平台如何通过结合云原生技术和 Kubernetes 编排能力，实现流式计算的降本增效。文章首先分析了传统流式计算面临的开发门槛高、运维成本高、扩展性差等痛点。随后，提出了将流式计算与云原生理念深度融合，构建以 Kubernetes 为底座的 PaaS 化流式开发平台的解决方案，实现了从“写代码”到“配任务”、从“人肉运维”到“自动治理”、从“烟囱式架构”到“服务化复用”的转变。文章还深入讲解了平台的四层技术架构，包括硬件资源层、Kubernetes 编排层、容器化流式引擎层和可观测性层，并详细描述了配置化开发如何抽象和封装流式计算的复杂性，显著降低开发门槛和运维成...



### [3-个月-200-万下载、150-万-Windows-用户“叛逃”！一款小众-Linux-系统，被微软逼成了「现象级爆款」](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247827155&idx=2&sn=4f138b605290d40417a69cf840a57fce)

2026-01-14 08:44:00 | 标签: Linux, 操作系统, Zorin OS, Windows, 桌面系统

> 文章深入分析了 Linux 发行版 Zorin OS 18 在 Windows 10 停服期间异军突起，3 个月内实现 200 万下载量，并吸引约 150 万 Windows 用户尝试的关键原因。微软强制 Windows 11 升级、高硬件门槛（如 TPM 2.0 要求）以及日益增加的系统广告、捆绑 AI 功能等“生态控制”策略，导致大量性能尚可的老设备被淘汰，用户体验受损。在此背景下，Zorin OS 凭借其高度类 Windows 的桌面布局、开箱即用的常用软件、图形化设置和 Windows 应用兼容层，极大降低了 Windows 用户转向 Linux 的迁移成本，成为其首选。文章指出，Li...



### [先有-CNAME-还是先有-A-记录](https://blog.cloudflare.com/cname-a-record-order-dns-standards/)

2026-01-14 00:00:00 | 标签: DNS, CNAME, A 记录, RFC, Cloudflare

> 本文详细描述了 Cloudflare 的一次重大事故，其 1.1.1.1 DNS 解析器中一项旨在优化内存使用的小型代码变更导致了广泛的 DNS 解析故障。根本原因是 DNS 响应中 CNAME 和 A 记录的顺序发生了变化。虽然现代 DNS 实现通常对记录顺序不敏感，但一些较旧或特定的客户端，特别是 glibc 的 `getaddrinfo` 和某些思科交换机，严格依赖于 CNAME 记录出现在其他应答记录之前。文章深入探讨了 RFC 1034 中关于消息段内记录排序的模糊措辞，并与 RFC 2119 和 4035 等较新 RFC 中更明确的表述进行了对比。Cloudflare 随后撤销了该...



### [Salesforce-如何将其-1，000-个-EKS-集群从-Cluster-Autoscaler-迁移到-Karpenter-|-Amazon-Web-Services](https://aws.amazon.com/blogs/architecture/how-salesforce-migrated-from-cluster-autoscaler-to-karpenter-across-their-fleet-of-1000-eks-clusters/)

2026-01-12 12:03:32 | 标签: Kubernetes, Karpenter, EKS, 自动扩展, 云迁移

> 本文详细介绍了 Salesforce 如何成功将 1，000 多个 Amazon EKS 集群从 Kubernetes Cluster Autoscaler 迁移到开源节点供应项目 Karpenter。面对节点组激增导致的扩展缓慢、资源利用率低下和运营瓶颈等挑战，Salesforce 设计了一个自动化、风险可控的迁移方案。迁移策略包括开发用于无缝切换的自定义工具、自动化配置映射以及谨慎的分阶段部署。迁移过程中的关键洞察包括管理 PDB、优化节点维护工作流、解决 Kubernetes 标签限制、保护单实例应用以及精确映射存储需求。此次迁移带来了显著价值：手动运营开销减少 80%，扩展延迟从分钟级...



### [AWS-CloudWatch-通过-Apache-Iceberg-支持演进为统一可观测性平台](https://www.infoq.com/news/2026/01/aws-cloudwatch-unified-logs/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-12 10:24:00 | 标签: AWS CloudWatch, 可观测性, Apache Iceberg, 日志管理, 安全分析

> AWS CloudWatch 经历了重大增强，从一个基础监控工具转变为统一可观测性平台。核心特性是通过 Amazon S3 Tables 引入 Apache Iceberg 兼容的日志数据访问，无需复杂 ETL 即可进行原地查询，并促进与第三方分析工具的集成。结合对开放网络安全架构框架 (OCSF) 和 OpenTelemetry (OTel) 标准的原生支持，CloudWatch 能够整合跨多账户和多区域 AWS 环境的运营、安全与合规日志，同时支持来自各种第三方源的日志。该平台简化了日志管理，减少数据复制，降低运营成本，并通过自然语言或 LogsQL、PPL、SQL 等标准语言提供查询功能...



### [Cloudflare-通过左移安全实践扩展基础设施即代码](https://www.infoq.com/news/2026/01/cloudflare-security-shift-left/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-12 09:00:00 | 标签: 基础设施即代码, 左移安全, Cloudflare, Terraform, DevSecOps

> Cloudflare 通过'左移'安全方法成功扩展了其基础设施即代码（IaC）实践，消除了数百个生产账户中的手动配置错误。面对潜在的全球错误配置传播挑战，该公司采用了将所有基础设施配置视为代码的策略，强制执行强制性同行评审，并将自动化安全检查集成到其 CI/CD 流水线中。该系统每天处理约 30 个合并请求，在部署前使用约 50 个关键安全策略防止安全违规。该实现利用了 Terraform 与 Cloudflare Terraform Provider、Atlantis、GitLab 以及用于安全状态管理的自定义 Go 程序（tfstate-butler）。策略执行依赖于 Open Polic...



### [AWS-推出-VPC-加密控制功能以强制传输中加密](https://www.infoq.com/news/2026/01/aws-vpc-encryption-controls/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-11 14:10:00 | 标签: AWS, VPC, 加密, 云安全, 合规

> AWS 推出了新的 VPC 加密控制功能，使客户能够监控和强制执行其虚拟私有云内部和跨云流量的传输中加密。该功能提供了对未加密流量的可见性，支持在兼容的 Nitro 基础设施上强制执行，并允许特定排除。AWS 强调了其在实现一致加密标准和遵守 HIPAA、PCI DSS 和 FedRAMP 等监管合规框架方面的实用性，简化了先前复杂的手动流程。虽然该功能解决了重大的合规挑战，但其在免费期后开始收费的定价模式引发了社区关于此类基础安全控制是否应该收费的讨论。控制功能提供 '监控' 和 '强制执行' 两种模式，后者要求在激活前将所有 VPC 资源迁移到符合加密要求的基础设施。该服务目前已在部分 A...



### [测试人员如何确保软件安全](https://www.infoq.com/news/2026/01/ensure-software-security/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-08 11:42:00 | 标签: 软件安全, SSDLC, 软件测试, DevOps, 漏洞管理

> 本文基于 Sara Martinez 的演讲，强调将安全性嵌入整个软件开发生命周期（SDLC），而不是事后补救。文章指出测试人员作为'早期防御者'发挥着关键作用，从简单的缺陷发现转向主动集成安全性。通用缺陷枚举（CWE）统计显示，超过 85% 的缺陷源于实现问题，60% 源于设计缺陷，这凸显了早期干预的重要性。安全 SDLC（SSDLC）包括在规划阶段定义安全需求和威胁建模，开发阶段进行安全编码和自动化安全测试，测试阶段进行 DAST 和渗透测试，发布后持续监控和快速补丁管理。文章还强调安全性的'文化优先'方法，促进共同责任、CI/CD 流水线中的自动化，以及包含特定的安全相关功能测试用例。文...



### [罗技鼠标因为证书过期无法使用？我是如何解决-SSL-证书问题](https://juejin.cn/post/7592236397535346724)

2026-01-07 08:54:26 | 标签: SSL证书, acme.sh, Let's Encrypt, Nginx, 自动化

> 文章详细介绍了作者如何使用 Let's Encrypt 和 acme.sh 解决 SSL 证书过期及自动续签问题，特别是在 Let's Encrypt 证书有效期缩短至 45 天后。文章首先指出企业在证书管理上的疏忽及其可能带来的问题，随后分享了自身在不同场景下（主域名 Nginx 部署、第三方平台如七牛云）的解决方案。核心是通过配置 acme.sh 实现证书的自动签发、安装和部署，包括处理 Nginx 的 `.well-known` 验证路径配置、解决老旧 CentOS 系统 CA 根证书问题、以及自动化上传证书到第三方 CDN 服务。作者强调了 acme.sh 在轻量、高可控、不依赖 Ng...



### [Azure-Cosmos-DB-如何为-ARM-联合未来提供动力：为下一个十亿请求扩展---Azure-Cosmos-DB-博客](https://devblogs.microsoft.com/cosmosdb/how-azure-cosmos-db-powers-arms-federated-future-scaling-for-the-next-billion-requests)

2026-01-06 15:00:52 | 标签: Azure Cosmos DB, Azure Resource Manager, 分布式系统, 云架构, 数据库分片

> 本文详细介绍了 Azure Cosmos DB 如何成为 Azure Resource Manager (ARM) 联合架构的基础，使其能够扩展到数十亿请求，同时保持高可用性、低延迟和区域合规性。面对指数级增长和全球规模与区域需求的双重挑战，ARM 重新构想了其数据存储和复制策略。通过独特利用 Azure Cosmos DB 的多区域支持、可调一致性级别和无缝分片功能，ARM 实施了双重分片策略（水平和垂直）、自定义内联持久复制以及强大的跨区域复制。这种从单体结构到联合区域隔离模型的架构转变，通过分层故障转移实现了大规模可扩展性、增强的可靠性，通过本地化数据访问提升了性能，确保了严格的安全性和...



### [Slack-优化-Chef-基础设施，提升部署安全性并缩小故障影响范围](https://www.infoq.com/news/2026/01/slack-chef-deployments/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-06 12:00:00 | 标签: DevOps, Chef, 配置管理, 部署策略, 站点可靠性工程 (SRE)

> Slack 工程团队显著增强了其基于 Chef 的配置管理系统，以提高部署的安全性和韧性。此前，单一的 Chef 生产环境在快速扩展期间存在极高风险。为了解决这一问题，Slack 现在将单体 Chef 环境分割为多个特定于可用区的存储桶（例如 prod-1 到 prod-6）。这一变化限制了配置错误导致的“故障影响范围”，并有助于更早地发现问题。他们还引入了“Chef Summoner”服务，该服务仅在有新制品可用时才触发 Chef 运行，取代了固定的 cron 定时任务，并使用随机延迟值（splay value）来防止负载激增。此外，Slack 采用“发布列车”模型，将变更先后推送到沙箱、开...



### [Docker-Kanvas-挑战-Helm-和-Kustomize-在-Kubernetes-领域的统治地位](https://www.infoq.com/news/2026/01/docker-kanvas-cloud-deployment/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-06 08:00:00 | 标签: Docker, Kubernetes, 云部署, 基础设施即代码, 开发者工具

> Docker 推出了 Kanvas，这是一个利用 Docker Compose 语法来简化从本地开发到生产规模云环境（包括 Kubernetes）应用部署的扩展工具。此举标志着 Docker 向基础设施即代码 (IaC) 领域的战略扩张，旨在为开发者抽象化云端配置的复杂性。Kanvas 能够自动将 Docker Compose 文件转换为云原生部署产物，为 Terraform 和 Pulumi 等工具生成配置。该平台是与 Layer5 合作开发的，旨在为托管 Kubernetes 服务和无服务器平台提供无缝工作流，减轻工程师的认知负荷。虽然 Kanvas 为 Docker 用户带来了显著优势，...



### [深入分析委内瑞拉的-BGP-异常事件](https://blog.cloudflare.com/bgp-route-leak-venezuela/)

2026-01-06 00:00:08 | 标签: BGP, 路由泄露, 网络安全, 互联网基础设施, Cloudflare Radar

> Cloudflare 的这篇文章调查了在委内瑞拉观察到的 BGP 异常事件，特别是涉及 AS8048 (CANTV) 的情况。虽然一份网络安全简报暗示可能存在国家支持的恶意活动，但 Cloudflare 的分析指向了一个更为普通的解释：ISP 的路由导出和导入策略配置不当。文章解释了 BGP 路由泄露，包括其正式定义 (RFC7908) 和常见类型（如 Type 1 Hairpin 泄露）。详细说明了 AS8048 如何将一个提供商 (Sparkle， AS6762) 的路由重新分发到另一个提供商 (V.tal GlobeNet， AS52320)，违反了 valley-free 路由原则。作...



### [Cloud-SQL-for-MySQL-推出优化写入功能](https://cloud.google.com/blog/products/databases/cloud-sql-for-mysql-introduces-optimized-writes/)

2026-01-06 00:00:00 | 标签: Cloud SQL, MySQL, 优化写入, 数据库性能, OLTP

> Google Cloud SQL for MySQL Enterprise Plus 版本现已引入“优化写入”（optimized writes），这是一套旨在显著提升 MySQL 实例写入性能的新型自动化功能。该技术利用了五项关键优化：自适应清除、自适应 I/O 限制、可扩展分片 I/O、更快的 REDO 恢复以及自适应缓冲池预热。这些功能根据实时工作负载和基础设施指标动态调整 MySQL 配置，从而使写入密集型 OLTP 工作负载的写入吞吐量提升高达 3 倍，并降低了延迟。文章还提供了一个使用 sysbench 的可重复基准测试，详细说明了创建各种 Cloud SQL 实例和客户端虚拟机以...



### [AWS-为-S3-Tables-增加智能分层和复制功能](https://www.infoq.com/news/2026/01/s3-tables-intelligent-tiering/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2026-01-05 10:18:00 | 标签: AWS, S3 Tables, 智能分层, 复制, Apache Iceberg

> AWS 为 S3 Tables 推出了两项重大增强功能：智能分层和复制支持。智能分层可根据访问模式自动在频繁访问、非频繁访问和归档即时访问层之间移动数据，从而优化存储成本，且无需更改应用程序或影响性能。对于非频繁访问的数据，该功能可降低高达 68% 的成本。用户可以通过 AWS CLI 或控制台进行配置，使其成为管理高性价比数据湖的强大工具。此外，S3 Tables 现在支持复制功能，使用户能够在不同的 AWS 区域和账号之间维护其 Apache Iceberg 表的一致只读副本。这些副本在几分钟内即可完成更新，保留快照关系，并支持独立的加密和保留策略。用户可以使用各种兼容 Iceberg 的...



### [Cloud-TPU-上的-JAX-调试指南：核心工具与技术](https://developers.googleblog.com/a-developers-guide-to-debugging-jax-on-cloud-tpus-essential-tools-and-techniques/)

2026-01-05 00:00:00 | 标签: JAX, Cloud TPU, 调试, 机器学习, 分布式训练

> 本文是一篇针对 JAX 用户在 Google Cloud TPU 上进行调试的实用指南。文章首先阐述了调试工具所依赖的核心组件，即 libtpu（包含 XLA 编译器、TPU 驱动和硬件通信逻辑）和 JAX/jaxlib，并配以图表说明其关系。随后，文章重点介绍了三种关键的调试和监控工具：详细日志（Verbose Logging）的启用方法及日志解析示例；TPU 监控库（TPU Monitoring Library），一个用于程序化获取 TPU 硬件性能指标（如利用率、容量、延迟）的工具；以及 tpu-info 命令行工具，它提供类似 nvidia-smi 的实时 TPU 内存和利用率数据。文...



### [告别-VMware：把-2000-台虚机迁移到-KubeVirt-的血泪史](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633710&idx=1&sn=e5c5a69d9592ccaf72395af0b2f3a4af)

2025-12-29 23:15:00 | 标签: KubeVirt, VMware, 虚拟机迁移, Kubernetes, 云计算

> 本文详细记录了某公司将 2000 台 VMware 虚拟机迁移到 KubeVirt 平台的整个过程，包括技术选型、架构实现、环境配置、数据迁移和特殊问题处理等关键环节。文章首先阐述了选择 KubeVirt 的原因：统一技术栈、渐进式迁移、避免厂商锁定和成本控制，并介绍了 KubeVirt 的核心组件和生产环境配置。随后，文章深入探讨了集群准备、存储（从 Longhorn 切换到 Rook-Ceph）、CDI 部署与镜像导入，以及网络配置（Multus + OVN-Kubernetes）等详细步骤。最核心的部分是 VMware 虚拟机迁移实操，通过自研 Python 脚本收集虚机信息，结合 vi...



### [Docker-容器安全转型，免费提供安全强化镜像](https://www.infoq.com/news/2025/12/docker-hardened-images/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-28 19:00:00 | 标签: 容器安全, Docker, 开源, 供应链安全, 强化镜像

> Docker 宣布，其包含 1，000 多个安全强化容器镜像的目录（此前为商业产品）现已根据 Apache 2.0 开源许可证免费提供。这一战略举措旨在增强软件供应链安全，这是一个日益增长的问题，预计到 2025 年，攻击造成的全球成本将达到 600 亿美元。这些基于 Debian 和 Alpine Linux 构建的安全强化镜像，旨在通过移除不必要的组件、以非 root 用户身份运行，以及提供完整的软件物料清单 (SBOM)、漏洞数据和 SLSA 构建级别 3 溯源，最大限度地减少攻击面。Docker 声称这些镜像与传统基础镜像相比，可将攻击面减少高达 95 %。这项由云原生计算基金会 (C...



### [Authress-如何通过韧性设计在重大-AWS-中断中保持服务可用性](https://www.infoq.com/news/2025/12/infrastructure-resilience-aws/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-28 11:00:00 | 标签: 云弹性, AWS, 多区域架构, 灾难恢复, DNS 故障转移

> 这篇 InfoQ 文章详细介绍了身份和认证服务公司 Authress 如何设计其基础设施以抵御重大的云中断，其中一个突出例子就是 2025 年 10 月的一次重大 AWS 中断。Authress 首席技术官 Warren Parad 解释了他们的“可靠性优先”设计，该设计以多区域故障转移路由策略为中心，利用 DNS 动态路由和自定义健康检查来快速检测和响应区域故障。除了基本的故障转移，Authress 还采用了边缘优化架构，结合 AWS CloudFront 和 Lambda@Edge，不仅通过将服务置于更接近用户的位置来减少延迟，还实现了跨多个相邻区域的细粒度、多阶段数据库故障转移。该策略还...



### [Cloudflare-开源-tokio-quiche，助力-Rust-更轻松开发-QUIC-和-HTTP/3-应用](https://www.infoq.com/news/2025/12/quic-http3-rust/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-27 08:08:00 | 标签: Rust, QUIC, HTTP/3, Tokio, Cloudflare

> Cloudflare 已开源 tokio-quiche，这是一个 Rust 库，旨在通过将其久经实战考验的 quiche 实现与 Tokio 异步运行时集成，从而简化高性能 QUIC 和 HTTP/3 应用程序的开发。该库已经为 Cloudflare 的内部服务提供支持，例如边缘代理和 WARP 的基于 MASQUE 的隧道，它抽象并屏蔽了 UDP I/O、连接管理和 QUIC 状态机处理的复杂性。在内部，tokio-quiche 采用 Actor 模型进行高效的数据包路由和连接管理，并提供一个 ApplicationOverQuic trait（应用程序通过 QUIC 进行通信的接口）用于协...



### [Yelp-发布大规模管理-S3-服务器访问日志的方案](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651269428&idx=4&sn=a9b693189f6a052a581e96acbe5fe62f)

2025-12-27 03:51:00 | 标签: S3, 日志管理, 大规模数据, AWS, Parquet

> Yelp 详细介绍了其如何构建一套可扩展且成本效率高的日志处理流水线，用于处理大规模 Amazon S3 服务器访问日志（SAL）。面对 TB 级的日常日志量，传统方案在高存储成本和低查询效率方面存在瓶颈。Yelp 通过将原始日志转换为紧凑的 Parquet 格式，并采用“压缩”流程将小文件合并为大文件，实现了存储空间约 85% 的减少和对象数量 99.99% 以上的削减，显著降低了成本并提升了查询性能。底层架构上，系统利用 AWS Glue Data Catalog 统一管理 schema，结合定时批处理、Lambda 函数和分区投影实现自动化摄取，并采用幂等设计处理延迟和重复日志。这套系统...



### [4000-万行的-Linux-怎么管？Linus-爆料：两周合并-1.2-万次提交、7-周专门抓-Bug，“我不是世界之王，只能给内核定规矩”](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247826434&idx=1&sn=8a48e27fdb944b389b855049aed0a8c7)

2025-12-26 09:54:00 | 标签: Linux, 内核开发, 开源管理, Linus Torvalds, 软件工程

> 本文报道了 Linus Torvalds 在 Linux 基金会开源峰会上的对话内容，深入探讨了他作为 Linux 内核掌舵者如何在 4000 万行代码的庞大项目中进行管理和维护。Linus 详细阐述了 Linux 内核每九周一个版本的发布周期、两周代码合并窗口期处理约 1.2 万次提交的密集工作，以及七周专注于 Bug 修复的流程，并强调了“no regressions”（不允许功能倒退）的铁律。他还分享了自己对 AI 的看法，认为 AI 作为工具价值巨大，尤其在代码审查和辅助维护方面，并将其与编译器的发展相提并论，指出 AI 并不会“彻底改变编程”。文章也披露了 Linus 在面对不负责任...



### [容器部署虽易，遗留系统迁离虚拟机则难](https://stackoverflow.blog/2025/12/26/containers-are-easy-moving-your-legacy-system-off-your-vm-is-not/)

2025-12-26 08:40:00 | 标签: VM, Kubernetes, 云原生, 混合云, 容器化

> 这篇来自 Stack Overflow 播客的文章，邀请到 Nutanix 云原生副总裁兼总经理 Dan Ciruli，他讨论了将基于遗留虚拟机的系统与现代容器化（Kubernetes）环境集成的挑战和策略。Ciruli 强调，尽管容器能加快软件交付和创新，但现有虚拟机并不会很快消失，因此需要可靠的共存策略。他解释了为什么在虚拟机内运行 Kubernetes 通常能解决网络和孤岛问题，从而实现一个通用的基础设施基础。讨论深入探讨了虚拟机与 Kubernetes 集群之间互通的复杂性，特别是 Kubernetes 中 IP 地址的瞬时性问题。他还提到了部分云原生公司出于经济原因将工作负载迁回本地...



### [AWS-和-Google-Cloud-预览安全多云网络](https://www.infoq.com/news/2025/12/aws-gcp-multicloud-networking/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-25 06:50:00 | 标签: 多云网络, AWS, Google Cloud, 云互连, 混合连接

> AWS 和 Google Cloud 已合作推出一个安全多云解决方案的预览版，该方案利用 AWS Interconnect - Multicloud 和 Google Cloud 的 Cross-Cloud Interconnect。这项举措旨在简化 AWS 和 Google Cloud 之间私密、高速且加密连接的建立，使客户无需手动管理复杂的网络组件，如电路和路由配置。此次合作定义了一个开放的互操作性标准，预计其他云提供商（包括 Azure）也将采纳。尽管该解决方案为管理分布式工作负载提供了显著的运营优势，但其定价尚未公布，这引起了一些从业者对其最终价值主张的担忧。目前该预览版免费，并支持美...



### [如何在-AWS-Lambda-中运行-Docker-容器](https://www.freecodecamp.org/news/how-to-run-a-docker-container-in-aws-lambda/)

2025-12-24 23:38:56 | 标签: AWS Lambda, Docker, 无服务器, ECR, 部署

> 本教程详细解释了如何将 Docker 容器作为无服务器函数部署到 AWS Lambda。它首先概述了先决条件，包括对 Docker 和 AWS CLI 的了解。文章随后详细介绍了使用简单 Python 应用程序在本地构建、运行和测试 Docker 镜像的过程。接着，指导读者通过设置环境变量、创建存储库、进行身份验证、标记并推送镜像，从而将 Docker 镜像推送到 Amazon Elastic Container Registry (ECR)。最后，文章演示了如何通过从 ECR 镜像创建新的 Lambda 函数并测试其功能，将此镜像部署到 AWS Lambda。作者强调了容器与无服务器结合的优...



### [构建可扩展的流媒体基础设施：因为观众不愿等到明天](https://www.infoq.com/articles/evolution-backend-streaming-application/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-23 09:00:00 | 标签: AWS, 无服务器, 微服务, Kafka, 分布式系统

> 文章生动地描述了 ProSiebenSat.1 媒体集团如何将一个举步维艰的流媒体后端转变为一个健壮、可扩展和高可用的系统。最初，一个没有 AWS 经验的两人开发团队，公司解决了数据不一致、可伸缩性差和单点故障等关键问题。关键策略包括：采用无服务器优先方法，将基础设施管理委托给 AWS；通过 EventBridge 和 Kafka 实现 Hub and Spoke 模式以确保数据一致性；并利用内容声明模式处理大消息负载。为了提高可伸缩性和弹性，引入了单元化架构来减少爆炸半径并成倍提升扩展能力，同时采用了多层缓存策略和 Fargate 与 Lambda 之间的动态流量转移以优化成本。文章强调了在...



### [40%-的-K8s-成本，其实浪费在这些易忽视的冗余配置上……](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633624&idx=1&sn=a50a9164e7e80477010ac0a9c51cd2fe)

2025-12-22 23:15:00 | 标签: Kubernetes, 成本优化, 云原生, 资源管理, 弹性伸缩

> 文章围绕如何在不迁移平台的前提下，将 Kubernetes（K8s）成本降低 40%的主题展开。作者指出，K8s 成本高昂并非平台本身问题，而是由于不合理的使用方式和过度配置。文章通过分享实际经验，提出了五大成本优化策略：首先是修正资源请求，通过 Prometheus 和 VPA 将 Pod 资源限制调整至合理范围；其次是清理幽灵工作负载，移除不再需要的测试集群、批处理作业和 PR 预览环境；再次是使用较小节点而非大型节点，提升资源利用率；接着是使自动扩缩容机制真正发挥作用，通过调整 HPA 阈值和使用自定义指标实现弹性伸缩；最后是优化日志和数据存储，将冷数据迁移至低成本存储、缩短日志保留期并...



### [DevOps-也同样适用于产品工程师](https://www.infoq.com/presentations/devops-product-engineers/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-22 14:42:00 | 标签: DevOps, 平台工程, 社会技术系统, 产品工程, 组织可持续性

> 本文认为，DevOps 原则与产品工程师高度相关，而不仅仅是运维团队，因为所有工程角色都在社会技术系统中运作。它将社会技术系统定义为组织内部社会和技术方面的相互关联，强调“联合优化”原则，即两者必须协同设计。文章介绍了组织可持续性，将其作为短期增长和长期成功的持续实践，倡导将平台工程作为处理组织和技术复杂性以及规模化挑战的社会技术方案。它深入探讨了 CALMS 框架（文化、自动化、精益、度量、分享），并为平台工程重新诠释了这些 DevOps 原则，强调了社区学习、智能自动化、包含持续反馈的精益实践以及分布式领导。最后，它概述了平台的架构原则，重点关注设计驱动架构、与最终用户需求的互补性以及选择...



### [Workers-如何赋能我们的内部维护调度流水线](https://blog.cloudflare.com/building-our-maintenance-scheduler-on-workers/)

2025-12-22 14:00:00 | 标签: Cloudflare Workers, 分布式系统, 站点可靠性工程, 网络运营, 系统架构

> Cloudflare 开发了一个基于 Cloudflare Workers 的自动化内部维护调度器，旨在管理其遍布全球 330 多个数据中心的复杂且中断性强的维护操作。文章阐述了随着 Cloudflare 规模的扩大，手动协调变得愈发不切实际，因此急需一个集中的“大脑”来强制执行安全约束。主要挑战包括确保关键基础设施组件（如边缘路由器）和客户特定服务（如原名为“Aegis”的专用 CDN 出口 IP）在维护期间保持在线。他们最初在使用 Workers 加载过多数据时遇到了“内存不足”问题，后通过采用受 Facebook 的 TAO 启发的“图处理”方法解决，该方法仅获取必要的数据。这继而引发了...



### [EP194:-HTTP-的演进](https://blog.bytebytego.com/p/ep194-evolution-of-http)

2025-12-20 16:31:00 | 标签: HTTP, 系统设计, 网络调试, Nginx, 性能指标

> ByteByteGo 本期精选汇编了多篇技术回顾，旨在为繁忙的软件工程师提供快速洞察。文章概述了 HTTP 从 0.9 到 3 (QUIC) 的演进历程，重点介绍了 HTTP 头部、持久连接、多路复用和 UDP 集成等关键进展，旨在提升性能并提供实时体验。另一部分详细阐述了重要的系统性能指标：每秒查询次数 (QPS)、每秒事务数 (TPS)、并发数和响应时间，解释了它们的定义以及识别系统瓶颈时的关键相互关系。文章还探讨了 Nginx 广泛流行的原因，这主要归功于其作为高性能 Web 服务器、反向代理、负载均衡器、缓存层和 SSL/TLS 卸载器的强大功能，有效解决了可扩展性问题。此外，它列举了...



### [Code-Orange：小范围失败优先——应对近期事件的弹性计划](https://blog.cloudflare.com/fail-small-resilience-plan/)

2025-12-19 22:35:30 | 标签: 网络弹性, 配置管理, 故障恢复, 站点可靠性工程 (SRE), Cloudflare

> Cloudflare 的博客文章详细介绍了其“Code Orange：小范围失败优先”弹性计划，该计划旨在应对近期两次导致中断的网络事件。该计划侧重于三个核心领域：首先，强制所有配置变更采用受控发布，并参照现有软件发布流程，从而减轻即时全局更新带来的风险。其次，对所有处理网络流量的系统进行彻底的故障模式审查和改进，确保即使在意外情况下也能实现可预测的行为。第三，优化“紧急访问”程序，并消除循环依赖，以加速事件响应和解决。文章强调要像对待软件更新一样谨慎对待配置更新，利用现有的健康介导部署 (Health Mediated Deployment， HMD) 系统进行自动化验证和回滚。Cloudf...



### [创新遏制流媒体滥用——Cloudflare-的最新透明度报告](https://blog.cloudflare.com/h1-2025-transparency-report/)

2025-12-19 14:00:00 | 标签: Cloudflare, 版权侵权, 流媒体滥用, 透明度报告, 内容审核

> 这份来自 Cloudflare 的博客文章，随附其 2025 年上半年 透明度报告，深入探讨了公司在处理客户信息的法律请求之外，应对流媒体滥用和版权侵权问题的演进策略。文章强调，恶意分子日益运用复杂的手段（常利用 AI）来传播受版权保护的内容。Cloudflare 详细介绍了其与版权所有者进行的实验性合作，旨在识别并响应未经授权的流媒体，这使得 DMCA 报告显著增加，随后公司也迅速采取了行动，包括终止相关账户。本文还讨论了 Cloudflare 的技术创新，例如由 AI 驱动的自动化系统，用以大规模检测和遏制滥用行为，同时通过限制流媒体视频传输来维持其免费服务。至关重要的是，文章将这种协作的...



### [一流的-Docker-支持：使用-TeamCity-构建和部署容器-｜-TeamCity-博客](https://blog.jetbrains.com/teamcity/2025/12/first-class-docker-support/)

2025-12-19 12:53:54 | 标签: CI/CD, Docker, TeamCity, DevOps, 容器化

> 本文提供了一份关于如何利用 TeamCity 原生 Docker 支持来简化容器化应用程序的 CI/CD 管道的综合指南。它将 TeamCity 的集成方法与 Jenkins 中大量依赖插件且通过脚本配置的方法进行了对比，强调了 TeamCity 内置的 Docker 运行器、无缝的注册表集成以及用于配置的 Kotlin DSL。作者逐步介绍了如何设置“构建和推送”管道，从准备 Dockerfile 到配置构建步骤、推送镜像以及安全连接到容器注册表。本文强调了 TeamCity 在安全身份验证、高效镜像清理和通过层缓存实现性能优化方面的优势，最终将 TeamCity 呈现为一种更可靠、更易于维...



### [Pinterest-工程团队通过动态运行时测试分片将-Android-CI-构建时间缩短-36%](https://www.infoq.com/news/2025/12/pinterest-ci-build-reduction/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-19 12:00:00 | 标签: CI/CD, Android, 测试分片, 工程效率, 性能优化

> Pinterest 工程团队通过开发自研测试平台 PinTestLab 并实施动态运行时测试分片策略，成功将 Android 端到端 (E2E) 持续集成 (CI) 构建时间缩短了 36% 以上。此前，Pinterest 的 CI 流水线存在构建时间慢且不可预测的问题，这源于基于包的测试分片导致的工作负载不均衡，即最慢的分片会阻碍整个构建完成。PinTestLab 在 EC2 实例上运行 Android 模拟器，为团队提供了对调度、环境设置和运行时编排的完全控制。其核心创新是一个动态运行时感知算法。该算法利用历史测试执行数据，根据预期的持续时间（而非简单的数量或包名）对测试进行分组，从而最大限...



### [Docker-Hardened-Images：SRLabs-独立验证的安全性](https://www.docker.com/blog/docker-hardened-images-security-independently-validated-by-srlabs/)

2025-12-19 05:50:25 | 标签: 容器安全, 供应链安全, Docker Hardened Images, SRLabs, 漏洞管理

> 本文详细介绍了 Docker 与 SRLabs 合作，对 Docker Hardened Images (DHI) 进行独立安全验证的过程。灰盒安全评估侧重于 DHI 的构建、签名、扫描和分发流程，确认其符合 SLSA 构建级别 3 的溯源性 (provenance) 和 Cosign 签名，提供了可验证的审计追踪。SRLabs 强调了 Docker 快速的 7 天补丁服务等级协议 (SLA) 和有效的最小化策略，与传统镜像相比，这两者显著减少了攻击向量。评估没有发现任何关键或高危漏洞，仅识别出与行业普遍挑战相关的中等残余风险，并赞扬了 Docker 以安全优先的文化及其对评估结果的响应。Do...



### [终结-70%线上故障！万字长文谈-B-站变更管控体系设计与实践](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633610&idx=1&sn=38c49f014f258dad222659f75908d94c)

2025-12-18 23:15:00 | 标签: 变更管理, DevOps运维, 技术架构, 稳定性, 故障排查

> 本文深度剖析了 B 站如何从源头解决线上故障，构建其变更管控体系。作者首先指出传统变更管理的不足，特别是面对云原生和微服务复杂体系时的局限性。随后，文章引入了清晰的变更定义、生命周期和平台/场景概念，并详细阐述了变革管控的必要性。核心内容在于 B 站设计的 ChangePilot 平台，通过统一的变更信息模型、分级管控策略（G0-G4）以及灵活的检查项机制，实现了对各类变更行为的标准化接入、预检、防御和分析。特别强调了 SLO 检查、规范校验和三方检查项在防控中的作用，以及变更内容感知和智能关联分析在故障定位中的价值。文章还探讨了风险与效率平衡，引入了应急逃生机制。最后总结了 B 站变更管控在...



### [R2-SQL-现已支持-GROUP-BY、SUM-以及其他聚合查询](https://blog.cloudflare.com/r2-sql-aggregations/)

2025-12-18 14:00:00 | 标签: Cloudflare, R2 SQL, 分布式系统, 聚合查询, SQL

> Cloudflare R2 SQL 宣布新增支持聚合查询，包括 GROUP BY 和 SUM，显著增强了其数据分析能力。文章首先强调了聚合在分析中的重要性，通过 SQL 示例演示了使用 GROUP BY、ORDER BY 和 HAVING 子句进行数据汇总、排序和过滤。接着深入探讨了 R2 SQL 实现聚合的两种主要方法：scatter-gather 和 shuffling。scatter-gather 适用于不需要对聚合结果进行排序或过滤的简单聚合，其中分布式工作节点并行计算预聚合（pre-aggregates），由协调器（coordinator）进行合并。shuffling 聚合引入了一个...



### [从遗留测试套件迁移到基于-Kotlin-的-Gauge-框架的经验教训](https://www.infoq.com/news/2025/12/migrating-test-suite/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-18 11:46:00 | 标签: Testing Automation, Kotlin, Gauge, Kubernetes, CI/CD

> 本文概述了 Liran Yushinsky 团队在重构其碎片化测试体系方面的历程。该体系此前依赖脆弱的 bash 和 kubectl 脚本，导致反馈缓慢和环境漂移。他们过渡到一个统一的框架，利用 Kotlin 和 Gauge 作为测试运行器，并与 Fabric8 集成以进行 Kubernetes 客户端控制，同时使用 Ansible 和 Terraform 实现环境的自动化配置。这一转变极大地将反馈循环时间从数小时缩短到数分钟，并促进了开发和质量保证（QA）团队之间对测试的共同所有权。此次迁移强调了强大的变革管理、内部指导以及展示快速成功以克服对新技术的抵触。新框架提高了测试的可靠性，增强了可...



### [QCon-AI-纽约-2025：移山之力：将遗留代码迁移时间从数年缩短至数周](https://www.infoq.com/news/2025/12/moving-mountains-stein/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-18 02:30:00 | 标签: 遗留代码迁移, 架构变更, 自动化, CI/CD, ServiceTitan

> 本文报道了 David Stein 在 QCon AI 纽约 2025（主题为“移山之力：将遗留代码迁移时间从数年缩短至数周”）上的演讲。作为 ServiceTitan 的首席 AI 工程师，Stein 介绍了一种大规模迁移的新方法，这与过去耗时数年且风险重重的传统迁移方式截然不同。他特别强调了 ServiceTitan 内部迁移复杂遗留报告数据集的案例，该案例过去涉及大量的 C# 和 SQL 代码，耗时从数季度到数年不等。为避免“伪里程碑”（即可能阻碍迁移进程的阶段性挫折），Stein 提出了优化数据流的“加速原则”和自动化迁移的“装配线模式”。“装配线模式”通过任务分解、使用“物理引擎”进...



### [AWS-数据库现已在-Vercel-Marketplace-上线---Vercel](https://vercel.com/changelog/aws-databases-now-available-on-the-vercel-marketplace)

2025-12-17 13:00:00 | 标签: 云服务, Vercel, AWS, 数据库, 开发工具

> Vercel Marketplace 现已原生支持 AWS 数据库，包括 Amazon Aurora PostgreSQL、Aurora DSQL 和 DynamoDB。此次集成使开发者能够直接从 Vercel 控制台部署和管理可扩展、生产级的 AWS 数据库，无需手动设置。主要优势包括一键创建账户、数据库部署以及与 Vercel 项目的链接。它还通过简化的区域选择、安全凭证处理、统一监控以及连接字符串的自动环境变量，提升了开发者体验。新的 AWS 客户可以使用包含 100 美元赠金的免费新手计划。未来的增强功能将允许将数据库部署到现有 AWS 账户中，并通过 v0.app 直接访问。



### [AWS-推出“DevOps-Agent”，实现事件响应自动化并提升系统可靠性](https://www.infoq.com/news/2025/12/aws-devops-agents/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-17 12:00:00 | 标签: DevOps, 自动化, 事件响应, 系统可靠性, 可观测性

> AWS 推出了其 DevOps Agent 的公开预览版，这是一款创新的“新型智能代理”，旨在自动化事件响应、识别根本原因，并主动增强系统可靠性。它被定位为一名自主的、全天候待命的工程师，能够与现有的可观测性、部署和工单工具集成，从而自动执行许多过去由 DevOps 团队手动完成的任务。DevOps Agent 通过构建应用程序的拓扑图，并关联来自日志、指标、部署历史和基础设施配置数据的遥测数据来运行。一旦收到告警，它会自动启动调查，分析日志和代码更改，以发现可能的根本原因并推荐缓解措施。除了实时事件分流之外，它还通过审查过去的事件模式来支持长期可靠性，从而提出可观测性、架构和部署实践方面的改...



### [Netflix-迁移至-Amazon-Aurora：性能提升-75%，成本降低-28%](https://www.infoq.com/news/2025/12/netflix-migrates-amazon-aurora/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-17 08:00:00 | 标签: 数据库, 云计算, AWS Aurora, PostgreSQL, Netflix

> Netflix 已将其关系型数据库基础设施整合到 Amazon Aurora PostgreSQL 兼容版本上，从 EC2 上自管理的 PostgreSQL 迁移而来。这一战略性转变解决了碎片化数据库环境、运维苦役、不一致的延迟和复杂的故障恢复等挑战。此次迁移带来了显著的性能改进，Spinnaker 的延迟降低了 50%，策略引擎服务的延迟降低了 75%。这些收益归因于 Aurora 的架构，该架构分离了计算与存储并采用基于日志的写入方法，从而得以将更高内存分配给共享缓冲区。此举还使 Netflix 工程师能够专注于业务逻辑，而不是自定义二进制管理。尽管 Aurora 提供了显著的运营优势和成...



### [当日志失效时如何调试-Kubernetes-应用程序-–-eBPF-追踪手册](https://www.freecodecamp.org/news/how-to-debug-kubernetes-apps-when-logs-fail-you-an-ebpf-tracing-handbook/)

2025-12-16 17:03:01 | 标签: Kubernetes, eBPF, 调试, 可观测性, 追踪

> 本文提供了一份实用的指南，旨在利用 eBPF 追踪技术有效调试 Kubernetes 应用程序，尤其是在传统日志记录和指标不足以解决问题时。文章阐明了 eBPF 无需修改代码即可观察内核级活动的能力，例如系统调用、网络数据包和进程执行。这为服务瞬态且不断变化的动态容器化环境提供了通用的、至关重要的可见性。文章强调了 eBPF 相较于传统仪表化的显著优势，它克服了代码更改、语言特异性及固有盲点等限制，这在复杂的 Kubernetes 设置中尤为关键。文中通过 `Inspektor Gadget` 和 `Traceloop` 提供了动手教程，用于追踪 HTTP 请求、解释网络流，以及诊断性能瓶颈和...



### [Lyft-采用-AWS-SageMaker-与-Kubernetes-混合模式重构机器学习平台](https://www.infoq.com/news/2025/12/lyft-ml-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-16 10:30:00 | 标签: 机器学习平台, 混合架构, AWS SageMaker, Kubernetes, MLOps

> Lyft 将其机器学习平台 LyftLearn 重构为混合架构，旨在简化运营并提升开发者效率。复杂的离线训练和批处理工作负载已迁移至 AWS SageMaker，解决了以往消耗大量工程投入的集群自动扩缩容和状态管理等难题。对于延迟敏感的在线模型服务，Lyft 保留了其现有的 Kubernetes 基础设施，充分利用其既有的卓越性能和与内部工具的紧密集成。这种务实的方法使 Lyft 能够将高复杂度的运营负担转移给托管服务，同时为关键的在线服务保持精细控制和成本效益。此次迁移涉及构建跨平台 Docker 镜像，并克服了 Spark 在混合环境中的网络要求等挑战，最终显著减少了基础设施事故，并提升了...



### [深入剖析-Vercel-Workflow-DevKit：框架集成工作原理](https://vercel.com/blog/inside-workflow-devkit-how-framework-integrations-work)

2025-12-15 13:00:00 | 标签: Workflow DevKit, 框架集成, 耐用工作流, Vercel, 编译器插件

> 本文解释了 Vercel Workflow DevKit (WDK) 框架集成的底层机制，强调 WDK 的设计旨在体现 Vercel 的开放 SDK 策略 (Open SDK Strategy)，允许开发者使用任何框架进行构建。文章指出，尽管框架特性多样，但所有集成都遵循一致的两阶段模式：构建时和运行时。在构建时阶段，WDK 将工作流和步骤函数编译成可执行处理程序，包括打包、输出配置和兼容性补丁。运行时阶段将这些处理程序作为 HTTP 端点暴露，具体实现因框架而异。一个关键组件是 WDK 的 SWC 编译器插件，它将代码转换为客户端、步骤和工作流模式。文章通过 SvelteKit 集成示例进行...



### [5-年了，Rust-终于在-Linux-内核中“转正”了！](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247826052&idx=3&sn=d06373a44e783e30d17b66711f4a01a9)

2025-12-15 10:04:00 | 标签: Linux内核, Rust, 编程语言, 内存安全, 驱动开发

> 文章详细报道了 Rust 在 Linux 内核中“转正”的重要里程碑。经过长达五年的激烈争论和实验，Linux 内核维护者峰会最终达成共识，将 Rust 明确认可为 Linux 主线内核的长期组成部分。这一决策基于 Rust 持续增长的代码规模、在生产环境的真实验证（如 Google Pixel 手机驱动），以及日益成熟的 Rust 内核生态。Rust 的引入旨在解决 Linux 内核长期以来的内存安全问题，但其推广也面临工具链复杂度增加等挑战。文章指出，Rust 的“转正”意味着更多 Rust 驱动将加速落地，并向整个技术社区释放了 Rust 值得长期投入的明确信号，但 C 语言在 Linu...



### [Yelp-发布大规模-S3-服务器访问日志管理蓝图](https://www.infoq.com/news/2025/12/yelp-s3-server-access-logs/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-13 12:00:00 | 标签: AWS S3, 日志管理, 数据管道, 云存储, 成本优化

> Yelp 分享了其在大规模管理 Amazon S3 服务器访问日志（SAL）方面的蓝图，解决了日志量大、存储成本高和查询性能等挑战。核心解决方案涉及将每日数 TB 的纯文本日志转换为紧凑的 Parquet 归档文件。这个过程被称为“压缩”，它将原始日志对象合并成更少、更大的 Parquet 文件，从而使存储使用量减少 85%，对象数量减少 99.99%。这种转换使得使用 Amazon Athena 等工具进行高效且经济的分析成为可能，适用于权限调试、成本归因、事件调查和数据保留分析等用例。该架构利用了 AWS Glue Data Catalog、Lambda 函数和计划的批处理作业，并通过幂等...



### [微软推出兼容-PostgreSQL-的-Azure-HorizonDB](https://www.infoq.com/news/2025/12/azure-horizondb-postgresql/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-13 09:24:00 | 标签: Azure, PostgreSQL, HorizonDB, 托管数据库, 云计算

> 在最近的 Microsoft Ignite 大会上，微软宣布推出 Azure HorizonDB 的早期预览版，这是一项针对企业和 AI 工作负载的新型托管式 PostgreSQL 兼容数据库服务。该服务拥有令人印象深刻的可扩展性，支持多达 3072 个虚拟核心和 128 TB 数据库，并具有亚毫秒级多可用区提交延迟。一个主要亮点是它与微软 Foundry 模型的集成，通过其新的 AI 模型管理功能，结合先进的 DiskANN 过滤技术（该技术将过滤与搜索整合），可使向量搜索速度提升 3 倍。HorizonDB 采用共享存储、横向扩展计算架构，这使其与现有的 Azure PostgreSQL ...



### [同事查日志慢到不行，用这套-grep-组合拳明明能快-10-倍！](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633549&idx=1&sn=b08bbadd3574af7240fa28f1ec90f3f1)

2025-12-13 00:02:00 | 标签: 日志分析, grep, 命令行工具, Linux, 故障排查

> 文章以一个新同事低效查日志的场景引入，引出了基于 grep 的一系列高效日志排查方法。首先指出传统 tail -f | grep 和 vi 搜索的局限性，例如丢失堆栈信息、视觉疲劳和处理压缩文件困难等。随后，文章详细介绍了 grep 组合拳的四类实战场景，包括利用 -A 参数捕获完整异常堆栈、实时监控与上下文保留、使用 zgrep 直接分析压缩日志，以及结合管道进行异常趋势统计。文章还进一步分享了 grep 的高级参数应用、多维度日志关联分析、性能敏感场景优化和正则表达式调优技巧。最后，扩展了工具链，介绍了 wc、awk、sed 等常用命令及其组合，展示了在统计错误、字段提取、文本清洗等方面的...



### [10GB-vs-600MB：我们弃用-GitLab，选择了这个轻量级神器](https://juejin.cn/post/7582637280217858102)

2025-12-12 08:17:45 | 标签: Git, Gitea, GitLab, Docker, 代码托管

> 文章从作者在构建 AI 模型托管平台时遇到的 GitLab 资源占用问题切入，指出 GitLab 高达 10GB 的内存消耗难以满足轻量级项目需求。随后引出解决方案——Gitea，一个将内存占用降至约 600MB 的轻量级 Git 服务，并强调其提供完整 API 接口，便于深度集成。文章详细介绍了使用 Docker 部署 Gitea 的步骤，包括前置准备（数据库选择 MySQL）、Docker 命令部署、首次访问安装配置和用户注册。接着演示了 Gitea 中仓库的创建过程和个人访问令牌（PAT）的生成与使用。最后，文章展示了如何通过 Gitea 的 REST API 文档查看和封装接口，实现业...



### [聊聊-GitHub-Actions](https://github.blog/news-insights/product-news/lets-talk-about-github-actions/)

2025-12-11 09:40:52 | 标签: GitHub Actions, CI/CD, 工作流自动化, DevOps, 平台工程

> 本文讨论了 GitHub Actions 自 2018 年以来的巨大增长及其带来的挑战。GitHub 团队在 2024 年初对核心后端进行了重大架构重构，以应对快速增长的作业任务量、增强可靠性并提高性能，为未来的功能奠定了坚实基础。现在，这一新架构每天支持 7100 万个作业，实现了三倍的增长。在完成这项基础工作之后，GitHub 重新专注于交付社区高度请求的改进，包括用于减少配置重复的 YAML 锚点、用于持续集成 (CI) 一致性的非公开工作流模板、增加的可复用工作流深度、针对大型项目的更大缓存限制以及更多工作流触发输入。文章还提供了 2026 年初的路线图，重点介绍了时区支持、性能优化以...



### [Google-Cloud-展示-130，000-节点-GKE-集群：-Kubernetes-迈向超大规模](https://www.infoq.com/news/2025/12/gke-130000-node-cluster/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-10 12:00:00 | 标签: Kubernetes, GKE, EKS, 云原生, 分布式系统

> 本文重点介绍了 Google Cloud 和 AWS 在 Kubernetes 可伸缩性方面取得的重大进展。Google 的 GKE 团队通过重新架构控制平面，用自定义的、基于 Spanner 的系统替换 etcd，并优化 API 和调度，成功构建了一个实验性的 130，000 节点 Kubernetes 集群。这使得在单个控制平面下管理大规模 AI 训练、分布式数据处理和微服务集群成为可能。与此同时，AWS 宣布 EKS 现在支持多达 100，000 个工作节点，专门针对超大型 AI/ML 工作负载。这两项成就都强调了 Kubernetes 服务“AI 千兆瓦时代”的能力，并预示着云原生基础...



### [vivo-Celeborn-PB-级-Shuffle-优化处理实践](https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&mid=2247505811&idx=1&sn=c3d890c51f032c02dd16b6d98c09faa3)

2025-12-10 12:00:00 | 标签: 大数据, Spark, Celeborn, Shuffle, K8s

> 文章详细介绍了 vivo 在大数据平台引入 Celeborn 作为 Remote Shuffle Service，以支持 Spark on K8S 在离线混部项目的实践经验。内容涵盖了 Celeborn 的选型考量、硬件适配、Master 高可用和性能测试。重点阐述了 vivo 在 800 天生产实践中，对 Celeborn 进行的性能优化（异步处理 OpenStream 请求、小文件缓存、磁盘级线程控制）和稳定性保障（动态负载感知的 Slot 分配、智能流量调度与权限管控），并给出了具体的优化方案、实施效果和数据支撑。最后，文章展望了未来的运维平台化和社区跟进计划，为超大规模 Celebor...



### [介绍适用于-Kubernetes-的-TeamCity-Operator-|-TeamCity-博客](https://blog.jetbrains.com/teamcity/2025/12/teamcity-kubernetes-operator/)

2025-12-10 11:13:43 | 标签: Kubernetes, TeamCity, Operator, CI/CD, 云原生

> 本文介绍了新的开源 TeamCity Operator，它专为自动化 TeamCity 服务器复杂的生命周期管理而设计。尽管此前可以在 Kubernetes 上部署 TeamCity，但这通常需要对这两种系统都有深入的专业知识。该 Operator 通过使用自定义资源来解决此问题，以处理诸如自动化部署、优雅关机、多节点协同以及关键的零停机升级等任务——这些功能是传统 Helm Charts 难以实现的，因为 TeamCity 具有有状态且细致的特性。它充当集群内的“专家应用程序”，其中包含了关于 TeamCity 部署、升级和维护的专业知识。文章展示了一个部署示例，并强调了 Operator ...



### [耐久函数和-Werner-Vogels-的最后主题演讲：AWS-re:Invent-2025-亮点](https://www.infoq.com/news/2025/12/highlights-reinvent-2025-werner/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-10 08:04:00 | 标签: AWS, re:Invent, 无服务器, 人工智能模型, 云计算

> AWS re:Invent 2025 大会高度关注人工智能，这一趋势在开发者社区引发了不同的反响。尽管人工智能主导了主题演讲，但实践者对无服务器创新表现出更大的兴趣，特别是 Lambda 托管实例和 Lambda 耐久函数。一个值得关注的事件是亚马逊首席技术官 Werner Vogels 的最后一次主题演讲，它引发了广泛讨论。关键的基础设施进步包括 Graviton5 处理器、Trainium3 超级服务器，以及配备 AMD EPYC 处理器的新 EC2 实例。数据库发布内容包括新的省钱计划，为各种服务提供成本可预测性，尽管一些观察人士认为数据库更新不如往年那样实质性。存储方面的改进包括 Am...



### [VMO2-借助数据合约构建可伸缩的-AI-和数据产品](https://cloud.google.com/blog/products/data-analytics/vmo2-uses-data-contracts-to-build-scalable-ai-and-data-products/)

2025-12-10 00:00:00 | 标签: 数据合约, 数据质量, 数据治理, 数据网格, Google Cloud

> 本文详细介绍了 VMO2 与 Google Cloud 合作，采纳数据合约以解决联邦数据架构中的数据质量、信任和治理挑战。数据合约被描述为定义数据特征（模式、语义、质量指标、SLOs）的机器可读协议，它能在数据管道中实现持续执行和实时验证。实际实施涉及在 Google Cloud 上采用中心辐射模型，其中一个中心团队提供自助式合约功能，而各部门团队则对各自的数据产品及其数据质量负责。Dataplex 统一目录被用作通过自动数据质量（用于执行）和数据画像（用于洞察）来落地应用这些合约的引擎。工作流通过 GitOps 实现自动化，由 Cloud Composer 编排执行，BigQuery 存储结...



### [您的-CI/CD-工具是助推器还是绊脚石？|-TeamCity-博客](https://blog.jetbrains.com/teamcity/2025/12/is-your-ci-cd-tool-helping-or-hindering-performance/)

2025-12-09 13:45:22 | 标签: CI/CD, DevOps, DORA 指标, 软件架构, 部署策略

> 文章强调了 CI/CD 工具在实现卓越软件交付性能（通过 DORA 指标衡量）方面的关键作用。它指出，瓶颈通常源于人员、流程和工具，其中，工具本身常是流程和文化问题的根源。作者剖析了 CI/CD 平台如何影响部署频率、变更前置时间、变更失败率和平均恢复时间。现代平台，凭借内置自动化、智能资源管理、配置即代码 (Configuration as Code) 和全面的可观测性等功能，通过提升扩展性、降低手动错误、增强测试并实现故障的更快恢复，克服了遗留系统的局限性。文章以 TeamCity 作为现代 CI/CD 解决方案的示例，阐释了这些改进，最终倡导对 CI/CD 进行战略性现代化改造，以获得竞...



### [AWS-推出数据库抵扣计划：最高节省-35%-成本，实现引擎灵活切换](https://www.infoq.com/news/2025/12/aws-database-savings-plans/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-09 10:00:00 | 标签: AWS, 数据库, 成本优化, 抵扣计划, 云计算

> AWS 已正式发布数据库抵扣计划（Database Savings Plans），将成本节约机会扩展到 Amazon Aurora、DynamoDB、DocumentDB 和 Neptune 等核心数据库服务。客户承诺在一年内保持稳定的用量（按美元/小时计算），即可节省高达 35% 的成本。该计划的一个主要亮点是其灵活性：用户可以切换数据库引擎、调整部署类型（例如，从预置模式到无服务器模式），甚至可以在不同的 AWS 区域之间转移用量，而不会失去其承诺的折扣。AWS 高级开发者布道师 Betty Zheng 强调，这种灵活性让客户在优化成本的同时，在工作负载运行方式上保持选择权，尤其是在迁移或...



### [学习-AWS-云安全基础——初学者指南](https://www.freecodecamp.org/news/learn-cloud-security-fundamentals-in-aws-a-guide-for-beginners/)

2025-12-09 00:58:17 | 标签: 云安全, AWS, IAM, MFA, 责任共担模型

> 这份面向初学者的指南旨在介绍 AWS 的核心云安全理念，并重点强调客户在责任共担模型中的角色。文章首先定义了云安全及其重要性，随后深入探讨了实践层面，例如如何管理 AWS 根用户与 IAM 用户之间的关系。指南中提供了创建具有适当权限的 IAM 用户的分步说明，并强调了多因素认证（MFA）对于根账户和 IAM 账户的关键作用。此外，文章还通过 RDS 和 S3 的示例，详细阐释了 AWS 责任共担模型，明确了哪些是 AWS 负责的安全（即“云自身的安全”），哪些是客户必须保障的安全（即“云中资源的安全”）。最后，文章演示了如何利用内联策略为 IAM 用户授予特定权限，以确保最小权限原则的有效实...



### [应用设计中心现已全面可用](https://cloud.google.com/blog/products/application-development/application-design-center-now-ga/)

2025-12-09 00:00:00 | 标签: Google Cloud, 应用设计中心, Terraform, 云原生, DevOps

> 本文宣布了 Google Cloud 的应用设计中心 (ADC) 的全面可用性，这是一项旨在简化云应用程序基础设施设计和部署的重要服务。ADC 专注于“以应用程序为中心”的云体验，利用可视化、画布式界面和 AI (Gemini Cloud Assist) 来设计和修改由 Terraform 支持的应用程序模板。它支持与 DevOps 最佳实践对齐的完整生命周期管理，从而让应用程序更易于发现、观测和管理。主要功能包括：预置最佳实践的应用程序模板库 (包括 AI 推理模板)、通过自然语言实现快速原型设计的 AI 赋能设计能力、用于模板共享的安全目录，以及强大的治理和审计跟踪，以及用于自动化软件设计...



### [Python-Workers-增强版：快速冷启动、软件包与-uv-优先工作流](https://blog.cloudflare.com/python-workers-advancements/)

2025-12-08 14:00:08 | 标签: Cloudflare Workers, Python, 无服务器, 冷启动优化, 软件包管理

> Cloudflare 对其 Python Workers 平台进行了重大更新，核心在于广泛的软件包支持和显著优化的冷启动时间。此前，Python Workers 对内置软件包的支持有限；现在，它们支持任何兼容 Pyodide 的软件包，包括纯 Python 以及许多带有动态链接库的软件包。这得益于新的 `uv` 集成工具 (`pywrangler`)。一项关键的技术突破是采用了专用的内存快照，使得在导入常用软件包时，冷启动时间比 AWS Lambda 快 2.4 倍，比 Google Cloud Run 快 3 倍。文章深入阐释了这些快照的技术细节，解决了包括熵管理和 WebAssembly ...



### [HL-是一款基于-Rust-的快速-JSON-日志查看器，提供高达-2GiB/s-的解析速度](https://www.infoq.com/news/2025/12/hl-log-viewer/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-07 11:00:00 | 标签: 日志管理, DevOps, 结构化日志, Rust, 命令行工具

> 本文介绍了一款名为 `hl` 的开源日志查看器，它使用 Rust 构建，专为高效处理 JSON 或 logfmt 格式的结构化日志而设计。文章强调了 `hl` 卓越的性能，其解析速度高达约 2 GiB/s（带有自动索引），在对不断增长的文件进行重新索引时可达约 10 GiB/s，显著优于现有替代方案。该工具对于 DevOps 工程师通过命令行管理总计数百吉字节的数百个本地文件非常有价值。其主要功能包括集成翻页器、按日志级别、字段和时间范围进行全面过滤、类似 `tail -f` 的跟踪模式、可定制输出、自动时区切换以及支持 UI 主题。一个突出的功能是它能够使用逻辑和比较运算符构建复杂查询，包括...



### [AWS-推出弹性函数：Lambda-代码中的有状态逻辑](https://www.infoq.com/news/2025/12/aws-lambda-durable-functions/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-06 11:00:00 | 标签: 无服务器, AWS Lambda, 弹性函数, 工作流编排, 状态管理

> AWS 推出了 Lambda 的弹性函数，旨在简化复杂、多步骤无服务器应用和工作流的创建。该功能允许开发者直接在标准 Lambda 函数中定义有状态逻辑，无需单独的状态管理机制。主要特性包括自动进度跟踪、内置的故障重试机制，以及最长一年的执行暂停且不产生空闲计算成本。底层状态管理已被抽象化，使开发者能够使用开源弹性执行 SDK 专注于业务逻辑。该 SDK 提供了一系列基本构建块，如用于检查点和重试的 'steps'，以及用于高效、低成本暂停的 'waits'。这项创新旨在简化事件驱动架构和 AI 工作流的开发，使无服务器应用更强大且更易于管理。



### [DoorDash-服务网格实战：支撑-8000-万/秒请求的技术演进之路](https://blog.bytebytego.com/p/how-doordash-moved-to-a-service-mesh)

2025-12-05 16:30:42 | 标签: 服务网格, 微服务, 分布式系统, Envoy, Kubernetes

> 本文详细介绍了 DoorDash 如何从其微服务架构中各自为政的可靠性措施转变为采用自定义服务网格解决方案。由于级联故障导致的全站宕机，工程团队决定标准化可靠性功能。在评估了 Istio 和 Linkerd2 等现有解决方案后，他们选择使用 Envoy 作为数据平面构建自定义控制平面，利用其性能和社区支持。文章概述了他们的 MVP 架构、关键服务的初步上线、通过金丝雀部署逐步推广，以及随后的演进，包括区域感知路由和高级流量管理等功能。关键经验强调解决实际问题、从小处着手、自动化流程以及优先考虑开发者体验以实现大规模采用。



### [AWS-Lambda-托管型实例：无服务器架构的灵活性与-EC2-成本模型的结合](https://www.infoq.com/news/2025/12/aws-lambda-managed-instances/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-05 10:00:00 | 标签: AWS Lambda, Amazon EC2, 无服务器, 云计算, 成本优化

> 本文介绍了 AWS Lambda 托管型实例，这项新功能允许用户直接在他们的亚马逊 EC2 实例上执行 AWS Lambda 函数。这项创新满足了对专门计算选项的需求，并针对稳定状态工作负载进行了成本优化，同时又不牺牲无服务器开发的运维简便性。AWS 管理底层 EC2 实例，处理设置、生命周期管理、操作系统补丁、负载均衡和自动伸缩。该系统利用容量提供商来组织基于实例类型和伸缩参数等特征的 EC2 实例，确保高效的资源利用率并最大限度地减少冷启动。这种方法允许在流量高峰期间进行多并发和自动伸缩，同时保持无服务器运维模型，从而使开发人员无需关注基础设施管理。



### [Cloudflare-2025-年-12-月-5-日-宕机事件](https://blog.cloudflare.com/5-december-2025-outage/)

2025-12-05 00:00:00 | 标签: 宕机事后报告, Cloudflare, WAF, 配置管理, 代理服务器

> 本文是 Cloudflare 发布的关于 2025 年 12 月 5 日 发生的 25 分钟 服务宕机事件的根本原因分析报告。该事件影响了 Cloudflare 约 28% 的 HTTP 流量，并非网络攻击，而是内部配置更改的意外后果。Cloudflare 试图将 WAF 缓冲区大小增加到 1MB，以保护客户免受关键的 React 服务端组件漏洞 (CVE-2025-55182) 的影响。在此发布过程中，一个内部 WAF 测试工具通过全局配置系统被禁用。这种禁用，特别是在将紧急停止机制应用于具有 'execute' 操作的规则时，暴露了 FL1 代理版本中先前未检测到的 Lua 运行时错误（尝...



### [用了这么久-Linux，你真的懂文件系统的底层逻辑吗？](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633459&idx=1&sn=508bc5c5942d7224591d3f0c34942287)

2025-12-04 23:15:00 | 标签: 文件系统, Linux内核, ext2, VFS, 底层原理

> 本文以资深技术者的视角，详细拆解了 Linux 文件系统的底层工作机制。文章首先介绍了文件系统的基本概念和 VFS（虚拟文件系统）的作用，强调其屏蔽底层差异、提供统一接口的重要性。随后，以 ext2 文件系统为例，深入分析了存储介质上的数据组织，包括 superblock、group descriptor、block bitmap、inode bitmap 和 inode table 等关键元数据结构。作者通过`tune2fs`、`dd`等命令和 C 语言代码，直观展示了这些结构在磁盘上的布局、内容及相互关系。最后，文章提供了一个完整的 C 语言示例，演示了如何根据 inode 号读取文件内容...



### [Karrot-通过-AWS-上新型弹性特征平台，转化率提升-70%](https://www.infoq.com/news/2025/12/karrot-aws-feature-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-04 11:30:00 | 标签: 软件架构, 特征平台, AWS, 推荐系统, 分布式系统

> 本文详细介绍了 Karrot 如何成功对其推荐系统进行全面改革，用构建在 AWS 上的分布式、事件驱动型特征平台取代了原有的紧耦合、不可扩展的遗留架构。先前的系统面临可扩展性不足、可靠性较差以及因特征存储分散导致的数据质量等多重问题。新架构包含三大核心模块：特征服务、流式数据接入和批量数据接入。在特征服务层，Karrot 采用了复杂的多级缓存策略，利用 Amazon EKS 内存缓存、ElastiCache 和 DynamoDB，并结合概率性提前过期（PEE，一种缓存刷新技术）和抖动 TTL（Time-To-Live，一种避免缓存同时失效的技术）等手段，确保系统高性能与数据一致性。在数据接入方...



### [Discord-如何将其机器学习平台从单-GPU-工作流程扩展到共享-Ray-集群](https://www.infoq.com/news/2025/12/discord-ray/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-03 11:34:00 | 标签: 机器学习平台, 分布式训练, Ray, Kubernetes, Dagster

> Discord 通过从分散的单 GPU 工作流程过渡到共享的、标准化的分布式计算环境，成功地扩展了其机器学习平台。最初，各个团队独立设置 Ray 集群，导致配置不一致和 GPU 使用效率低下。为了解决这个问题，Discord 的平台团队重建了他们的机器学习基础设施，标准化了 Ray 和 Kubernetes。一项关键创新是单命令 CLI，允许工程师通过指定高级参数来配置集群，从而简化了 Kubernetes 配置，并确保一致地应用策略。使用 Dagster 进一步自动化训练工作流，Dagster 通过 KubeRay 编排 Ray 集群的创建和销毁，使分布式训练成为日常操作。该平台还包括 X-...



### [Linus-现身亲手组装“理想-Linux-PC”，谈-Linux-未来：若有人更适合，我愿退位！](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247825548&idx=1&sn=501601643b38e8f2d9dcb4c30fa01ca7)

2025-12-02 11:53:00 | 标签: Linux, 开源精神, 开发者文化, Linus Torvalds, PC硬件

> 本文围绕 Linux 之父 Linus Torvalds 与科技博主 Linus Sebastian 共同组装一台“理想 Linux PC”的事件展开。Torvalds 详细阐述了他对硬件选择的偏好，如对 ECC 内存的坚持、对稳定性和低噪音的追求，以及对 AMD 处理器和 Intel Arc 显卡的考量。他还分享了自己选择 Fedora 作为首选 Linux 发行版的原因，并深入探讨了 Linux 发行版碎片化的优劣。此外，Torvalds 就 Git 与 Linux 在他心中的地位、对生成式 AI 的看法（泡沫与革命并存）、对 NVIDIA 态度的转变，以及对以代码行数衡量开发者价值的批判...



### [从“版本号打架”到-30-秒内提醒用户刷新：一个微前端团队的实践](https://mp.weixin.qq.com/s?__biz=MzU2NjU3Nzg2Mg==&mid=2247547158&idx=1&sn=8a0d497cf4da7c6ffc9d08b7a4f10d59)

2025-12-02 00:30:00 | 标签: 微前端, 前端架构, 版本管理, CI/CD, Nginx

> 文章详细阐述了一个微前端团队如何解决多环境子应用中用户长时间停留在旧版本页面的痛点。作者首先分析了因频繁发布和版本号管理不当导致的“无效缺陷”和“版本号打架”等问题，并明确了 30 秒内感知更新、弹窗显示版本信息、支持用户选择刷新且不依赖后端改造的诉求。通过对比 Service Worker、WebSocket 等多种方案，团队最终选择了“纯前端轮询+静态版本文件”的低成本、低侵入式解决方案。核心技术方案包括在构建阶段通过 Webpack 插件生成唯一的`version.json`文件并注入环境变量，前端应用每 30 秒轮询该文件并禁用缓存进行版本比对，Nginx 针对 HTML 和`vers...



### [降本-30%、提效-200%！解密星巴克日志平台的极致升级优化之道](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651264806&idx=2&sn=dedc35f2ff25e8750936af6037876d5d)

2025-12-01 04:54:00 | 标签: 架构设计, 日志平台, Elasticsearch, Kubernetes, 云原生

> 文章详细介绍了星巴克中国技术部日志平台团队历经近一年的升级优化实践。该项目成功将多个 PB 级日志集群从 Elasticsearch 7.x 版本无缝升级至 8.x，并将部署架构从传统虚拟机迁移至云原生裸金属 Kubernetes 平台。面对查询缓慢、存储成本高、数据积压、运维复杂等核心挑战，团队采取了多方面措施，包括引入高性能的 Vector 替代 Logstash 作为数据管道、采用本地盘与远程存储结合的冷热分离架构、精细化优化 Kafka 和 Elasticsearch 的各项参数、以及实现日志接入流程的自动化。最终，此次升级带来了显著成果：用户查询 P99 小于 5 秒，整体吞吐能力提...



### [Java-新闻综述：Spring-Cloud、Quarkus、Hibernate-ORM、JobRunr、LangChain4j、Java-Operator-SDK](https://www.infoq.com/news/2025/12/java-news-roundup-nov24-2025/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-12-01 02:30:00 | 标签: Java 生态系统, 发行说明, Spring Cloud, Quarkus, Hibernate

> 本文简要概述了 2025 年 11 月 24 日当周 Java 生态系统的最新发展。内容涵盖了 Spring Cloud 2025.1.0 (Oakwood)、Quarkus 3.30、Hibernate ORM 7.2.0.CR3、JobRunr 8.3.0、LangChain4j 1.9.0/1.9.1 和 Java Operator SDK 5.2.0 等关键框架和库的小版本发布。此外，还提到了 OpenJDK 的早期访问构建版本（Project Jextract， JDK 26），Hibernate Reactive 和 Gradle 9.3.0 的首个候选版本，以及包含 CVE 修复...



### [MCP-网关实战：基于-Higress-+-Nacos-的零代码工具扩展方案](https://mp.weixin.qq.com/s?__biz=MzIzOTU0NTQ0MA==&mid=2247556038&idx=1&sn=f010debc506a2325678320a3a7593d26)

2025-12-01 00:30:00 | 标签: MCP网关, Higress, Nacos, Kubernetes, 私有化部署

> 本文聚焦于在严苛的企业私有化生产环境中，如何利用开源 Higress 和 Nacos 搭建一套高可用、可扩展的 MCP 智能体网关。文章首先指出 AI 助手在现有智能问答基础上，需要调用存量接口以演进为更强大的智能体，并选用 MCP 作为通信协议。针对私有化场景下的 SSE 会话维护、Prompt 动态更新和多租户鉴权等核心挑战，作者提出了以 Higress 作为 MCP Proxy、Nacos 作为 MCP Registry 的架构。文章详细介绍了 Higress 的私有化部署细节，包括 WASM 插件独立部署、粘性会话配置及自定义镜像构建。同时，也深入探讨了 Nacos 集群模式下的动态实...



### [跨云互连扩展：支持-AWS-及更多合作伙伴](https://cloud.google.com/blog/products/networking/extending-cross-cloud-interconnect-to-aws-and-partners/)

2025-12-01 00:00:00 | 标签: 多云网络, 跨云互连, 谷歌云, AWS, 云互连

> 本文宣布了谷歌云和亚马逊网络服务 (AWS) 之间的一项重要合作，旨在推出一种托管、私有且安全的跨云互连解决方案。多云应用加速发展，尤其是在人工智能兴起的推动下，该解决方案应运而生，旨在简化谷歌云和 AWS VPC 之间的网络连接。其核心创新是私有网络连接的开放规范，并最终推出了适用于 AWS 的合作伙伴跨云互连的预览版。这会将以往复杂且耗时数天的网络配置过程，转变为可在数分钟内完成的简单托管服务，并提供从 1 Gbps 到 100 Gbps 的带宽。主要优势包括简单性、速度、默认的 MACsec 加密以确保安全、固有的四重冗余弹性以及优化的总拥有成本。本文详细介绍了这一新产品如何将传统的采购...



### [Helm-4-发布：六年来的重大更新，改进-Kubernetes-包管理](https://www.infoq.com/news/2025/11/helm-4/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-30 21:30:00 | 标签: Kubernetes, Helm, Kubernetes 包管理, 云原生, GitOps

> Kubernetes 包管理器 Helm 发布里程碑式的 4.0.0 版本，迎来 10 周年，并着力解决可扩展性、安全性和开发者工作流程方面的长期挑战。新版本主要增强功能包括：现代化的 Go SDK，方便集成和嵌入命令；原生支持 Kubernetes 服务器端应用 (SSA)，与 GitOps 实践对齐；重建的插件系统，支持 WebAssembly (WASM)，提高可移植性。性能改进、Chart 分发和自动化测试机制也是更新的一部分。然而，一个核心问题仍然是缺乏对自定义资源定义 (CRD) 生命周期管理的强大支持，这引起了社区的失望。尽管有批评者认为 Argo CD 等 GitOps 工具已...



### [Cloudflare-发布本地开发远程绑定功能](https://www.infoq.com/news/2025/11/cloudflare-remote-bindings/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-30 06:26:00 | 标签: Cloudflare Workers, 本地开发, 远程绑定, 开发者体验, 分布式系统

> Cloudflare 宣布正式推出用于本地开发的远程绑定，该功能允许开发者将其本地运行的 Cloudflare Worker 代码直接连接到实时生产资源，例如 R2 存储桶和 D1 数据库。这无需本地模拟或预先填充数据库，从而能够针对实际数据和服务实时测试代码更改。文章强调，通过提供更快的执行时间和防止本地环境和生产环境之间的差异，这显著改善了开发者体验。远程绑定功能在 Wrangler、Cloudflare Vite 插件和 @cloudflare/vitest-pool-workers 包中均已支持 (Wrangler v4.37.0)。底层架构利用 Cloudflare 现有的服务绑定机...



### [Docker-Desktop-4.50-发布：新增免费调试工具与-AI-集成增强](https://www.infoq.com/news/2025/11/docker-desktop-ai/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-29 12:00:00 | 标签: Docker Desktop, 容器化, 调试工具, Kubernetes 支持, 企业特性

> 本文宣布发布 Docker Desktop 4.50 版本，带来一系列旨在提高开发者生产力和企业治理的增强功能。主要更新包括为所有用户免费提供的 Docker Debug，它能在 VSCode 和 Cursor 等 IDE 中直接进行内置 Dockerfile 调试。此版本还显著改进了多服务到 Kubernetes 的转换支持，简化了从本地开发到生产环境的过渡。对于企业，新引入的治理控制包括通过安装程序标志实现的集中式代理设置和改进的证书处理，从而确保更好的合规性和安全性。值得注意的是，对模型上下文协议 (MCP) 工具的实验性支持，标志着 Docker 着重支持 AI 原生基础设施和代理工作...



### [Azure-虚拟桌面：通过启用-Arc-的服务器实现完全混合](https://www.infoq.com/news/2025/11/azure-avd-fully-hybrid-arc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-29 11:15:00 | 标签: Azure 虚拟桌面, 混合云, Azure Arc, 桌面虚拟化, 本地部署基础设施

> 本文宣布了 Azure 虚拟桌面 (AVD) 混合环境的有限预览版，使客户能够在现有的本地基础设施上运行虚拟桌面和应用程序。通过将 Azure Arc 与 AVD 集成，会话主机现在可以部署在各种平台上，如 Microsoft Hyper-V、Nutanix AHV、VMware vSphere 和物理 Windows 服务器，都通过 Azure 控制平面集中管理。对于金融服务和医疗保健等数据驻留和主权至关重要的行业，这一重大更新解决了关键的合规性和监管要求。专家强调，此举扩大了 AVD 的范围，为云、边缘和本地部署场景提供了一个统一的平台，增强了灵活性并消除了以前的限制。组织可以注册预览版以...



### [Kubernetes-社区宣布停止支持-Ingress-NGINX-控制器](https://www.infoq.com/news/2025/11/kubernetes-ingress-nginx/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-29 09:00:00 | 标签: Kubernetes, Ingress, Gateway API, 云原生, 网络

> Kubernetes SIG 网络与安全响应委员会已宣布停止维护流行的 Ingress NGINX 控制器，尽力维护将于 2026 年 3 月结束。此决定源于不可持续的维护人员短缺和累积的技术债，特别是最初被认为是灵活的“snippets”注解，现已演变为安全漏洞。停止维护对许多运行 Kubernetes 的组织具有重大影响。社区的主要建议是迁移到 Gateway API，这是一种现代的、基于角色的替代方案，旨在解决 Ingress 规范的局限性，为各种协议（HTTP、HTTPS、TCP、UDP、gRPC）和高级功能（如流量拆分）提供原生支持。对于那些无法采用 Gateway API 的用户，...



### [微软-Azure-Cobalt-200-ARM-芯片：AI-驱动，性能提升-50%](https://www.infoq.com/news/2025/11/azure-cobalt-200-chip/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-28 10:00:00 | 标签: 云计算, 定制硅, ARM, Azure, 微软

> 微软在其年度 Ignite 大会上发布了 Azure Cobalt 200 ARM 芯片，标志着其定制硅产品的重大进步。作为 Cobalt 100 处理器的继任者，它承诺为各种 Azure 工作负载（包括数据库、Web 服务器、存储缓存、网络事务和数据分析）带来 50% 的性能提升。Cobalt 200 的开发过程是高度数据驱动的，利用了从 CPU 微架构到服务器设计的“数字孪生”模拟。微软利用 AI 和 Azure 计算，模拟了 140 个基准测试在 2，800 种片上系统 (SoC) 和系统设计参数组合下的性能和功耗。总共评估了超过 350，000 个配置候选方案。这种广泛的模拟能够快速迭...



### [这个-GitHub-项目真给劲儿，搜集了各种开源平替。](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247529187&idx=1&sn=50fb04109f21a2bf1e3f195e6a55debc)

2025-11-27 07:48:00 | 标签: 开源软件, 自部署, Docker, 开源平替, 技术选型

> 本文重点介绍了一个名为“Deploy Your Own SaaS”的 GitHub 开源项目，该项目精心收录了海量可供用户自行部署的开源软件，旨在提供主流 SaaS 服务的替代方案。文章详细挑选并介绍了多个实用性强的开源平替，包括免费开源的视频会议工具 Jitsi Meet、轻量级笔记应用 Memos 和 Bangle.io、Google Photos 的最佳开源替代 Immich 云相册（集成了 AI 能力）、个人理财管理系统 Firefly III、高速静态网站生成器 Hugo、实时协作任务管理看板 Planka 以及私有云音乐播放器 Black Candy。这些项目绝大多数支持 Dock...



### [成为-Linus-Torvalds-座上宾：我用-47%性能飞跃完成了一次鹅厂程序员的逆袭](https://mp.weixin.qq.com/s?__biz=MzI2NDU4OTExOQ==&mid=2247693333&idx=1&sn=a9df102ff26b418e81d97ae306fe9b00)

2025-11-27 00:46:00 | 标签: 虚拟化, Linux内核, KVM, 调度器优化, 高密部署

> 本文深入探讨了在云计算高密虚拟化场景下，Linux KVM 调度器面临的性能瓶颈。作者指出，传统调度器的“一次性偏好”机制和缺乏 IPI 通信感知导致了严重的“乒乓抢占”和错误的 vCPU 提升，在高密部署中成为关键障碍。为解决这些问题，文章提出了一套创新的语义感知调度框架，包含两个核心机制：vCPU Debooster 和 IPI-Aware Directed Yield。vCPU Debooster 通过在 Cgroup 层级的最低公共祖先处施加 vruntime 惩罚，为目标任务提供持久化的调度偏好，有效避免了乒乓抢占。IPI-Aware Directed Yield 则通过轻量级 IP...



### [你的平台不是孤岛：融入生态系统的演进](https://www.infoq.com/presentations/platform-engineering-evolution/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-26 13:35:00 | 标签: 平台工程, 企业架构, Kubernetes, 云原生, DevOps

> Rachael Wonnacott 在富达国际的演示深入探讨了大型企业平台工程的战略。报告 критически 认为，平台不应被视为孤立的技术方案，而应是组织生态的重要组成，受组织成熟度、结构和文化等因素影响。尽管开发者体验 (DX) 是关键，Wonnacott 坚信平台投资的最终目标是可衡量的业务价值。她以富达从内部 Cloud Foundry PaaS 迁移到公有云 Kubernetes 平台的转型为例，生动地阐述了这些原则。该案例研究突显了在大型组织中驾驭遗留系统、混合云环境以及扩展 DevOps 实践的复杂性。Wonnacott 提出了“Kubernetes 酒店”与“公有云房屋”的...



### [使用-AWS-网络防火墙保护亚马逊弹性-VMware-服务-Amazon-EVS-|-亚马逊云科技](https://aws.amazon.com/blogs/architecture/secure-amazon-elastic-vmware-service-amazon-evs-with-aws-network-firewall/)

2025-11-26 08:22:03 | 标签: 云安全, 网络架构, AWS 网络防火墙, AWS Transit Gateway, Amazon EVS

> 本文详细介绍了一种用于保护混合云环境的有效解决方案，特别关注与 AWS VPC 和本地数据中心集成的亚马逊弹性 VMware 服务 (Amazon EVS) 工作负载。它强调了在这些不同环境中统一网络安全面临的挑战，并介绍了 AWS 网络防火墙作为一种托管服务来满足这些需求。该解决方案的核心是利用 AWS 网络防火墙与 AWS Transit Gateway 的原生集成的集中式检查架构，从而简化了部署和管理。本文提供了设置 Transit Gateway、连接 VPC、配置 AWS 网络防火墙和更新路由表的分步指南。它还包括出口、入口和东西向流量检查的实际测试场景，演示了 FQDN 过滤、HT...



### [如何在-Kubernetes-上部署您自己的-CockroachDB-实例-开发者全面指南](https://www.freecodecamp.org/news/deploy-your-own-cockroach-db-instance-on-kubernetes-full-book-for-devs/)

2025-11-25 17:16:50 | 标签: 数据库, 分布式系统, Kubernetes, CockroachDB, 云原生

> 这篇内容广泛的文章是为开发者准备的 CockroachDB 部署与管理全面指南，详细介绍了如何在 Kubernetes 上部署和管理 CockroachDB。文章首先解释了 CockroachDB 的分布式 SQL 架构，强调其多主架构、自动分片 (*ranges*（数据范围）) 以及通过 Raft consensus（Raft 一致性算法）实现的容错能力，并将其与 PostgreSQL 和 MongoDB 等传统数据库进行对比。然后，本指南提供了实用的分步实践，用于设置本地 Kubernetes 环境 (Minikube) 并使用 Helm 部署 CockroachDB。它进一步涵盖了关键的...



### [Win10-退役后的“大逃亡”？Zorin-OS-曝五周破-100-万下载，其中-78%来自-Windows-设备](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247825359&idx=2&sn=2f3281bbaa1352e1db09af9c94a2b307)

2025-11-25 07:45:00 | 标签: 操作系统, Linux, Zorin OS, Windows, 用户迁移

> 文章深入分析了 Linux 发行版 Zorin OS 18 近期下载量激增的现象，指出其在五周内突破 100 万次下载，且超过 78%的用户来自 Windows 系统，创下该发行版历史新高。这一增长主要归因于 Windows 10 的退役和微软对 Windows 11 的强推策略引发的用户不满。Zorin OS 18 通过提供类似 Windows 11 和 macOS 的混合 UI、集成 PWA 应用安装器、OneDrive 文件系统支持以及增强的 Windows 应用兼容性，显著降低了 Windows 用户的迁移门槛。文章强调，Zorin OS 的成功并非单纯是 Linux 的崛起，更是 W...



### [Spring-Cloud-2025.1.0-aka-Oakwood-版本-已发布](https://spring.io/blog/2025/11/25/spring-cloud-2025-1-0-aka-oakwood-has-been-released)

2025-11-25 00:00:00 | 标签: Spring Cloud, 微服务, Spring Framework, Spring Boot, 网关

> 本文宣布 Spring Cloud 2025.1.0 (Oakwood) 正式发布。这是一个重要的版本，将所有项目更新到 5.0.0 版本，并基于 Spring Framework 7 和 Spring Boot 4。主要变更包括：Spring Cloud 网关和 Commons 引入了 JSpecify 的 null-safety 注解；一个新的断路器模块，它利用了 Spring Framework 7 的内置弹性功能；此外，多个组件迁移到了 Jackson 3。此版本还侧重于简化生态系统，具体措施包括删除网关、断路器、Stream、Netflix 和 Contract 等模块中大量已弃用的...



### [K8s-离奇崩溃致-P0-事故！排查一晚竟是-etcd-数据库碎片化的祸……](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633310&idx=1&sn=5621eaa97afab91c85d7b4290fe5b12d)

2025-11-24 23:15:00 | 标签: K8s故障排查, etcd碎片化, Kubernetes, etcd, 分布式系统

> 文章记录了一起因 etcd 数据库碎片化导致的 K8s 集群 P0 级故障。事故表现为 K8s API Server 无响应、etcd 集群健康检查失败及业务服务全量下线。作者通过检查 etcd 日志发现`database space exceeded`错误，进而确认 etcd 数据库膨胀至 8GB+，碎片化率高达 98.1%。根因分析指出，频繁的 Pod 重启风暴、历史版本堆积以及`auto-compaction-retention: "0"`的错误配置共同导致了问题。紧急抢救分为扩容存储、手动压缩、数据库碎片整理和恢复验证四个阶段，最终将数据库大小从 8.4GB 降至 180MB，集群恢复...



### [Docker-如何快速响应-Shai-Hulud-2.0-攻击](https://www.docker.com/blog/security-that-moves-fast-dockers-response-to-shai-hulud-2-0/)

2025-11-24 14:15:35 | 标签: 供应链安全, 容器安全, Docker Scout, SBOM, 实时威胁检测

> 本文详细介绍了 Docker 对 Shai Hulud 2.0 npm 供应链攻击的快速和自动化响应。该攻击通过在 `npm preinstall` 阶段窃取开发者凭证，危及了超过 25，000 个 GitHub 仓库。该事件突显了安全系统需以“容器速度”运行，对抗快速演变的威胁。Docker 的架构利用 Docker Scout，实现多方位防御：自动摄取威胁情报，针对 Docker 强化镜像和客户镜像的软件物料清单 (SBOM) 进行即时供应链分析，以及自动分发检测规则。这种持续验证过程确保了 Docker 自身的 инфраструктура (基础设施) 在数小时内安全无虞。该方法基于五...



### [利用有效负载日志提升-Web-应用防火墙可见性](https://blog.cloudflare.com/waf-payload-logging/)

2025-11-24 14:00:00 | 标签: WAF, 安全日志, 调试, Cloudflare, Wirefilter

> 本文详细介绍了 Cloudflare 在 Web 应用防火墙 (WAF) 有效负载日志方面的进展，旨在帮助客户更好地了解 WAF 规则的触发原因，从而提高可见性。它解决了误报的挑战，以及在调试复杂 WAF 规则表达式时的模糊性，尤其是在处理转换（如小写或解码）或托管规则中的累积评分时。核心解决方案——有效负载日志，记录导致 WAF 操作的特定字段及其转换后的值，从而减少模糊性。本文解释了此功能是如何构建在 Rust 语言的 Wirefilter 引擎之上的，该引擎使用执行上下文重新评估表达式以确定匹配的字段。主要改进包括数组类型的局部评估（仅记录匹配的元素）和运算符（仅记录具有“之前”和“之后...



### [Crossplane-从-CNCF-毕业，实现了生产环境成熟](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651263952&idx=4&sn=4dc6d708c6bef55c758b05a11e68f7a8)

2025-11-23 02:15:00 | 标签: 云原生, Crossplane, Kubernetes, 基础设施即代码, 控制平面

> 文章详细报道了 Crossplane 项目从 CNCF 毕业的重要里程碑，该项目旨在将 Kubernetes 转变为云基础设施的通用控制平面。毕业意味着 Crossplane 已达到运营成熟、广泛采用并具备强大的治理模式，不再是实验性想法，而是经过生产验证的基础。文章介绍了 Crossplane 自 2018 年由 Upbound 创建、2020 年捐赠给 CNCF 后的发展历程，包括其庞大的贡献者社区、通过安全审计以及生态系统的扩展。它强调了 Crossplane 在企业中的广泛应用，如耐克、Autodesk、NASA 等，尤其作为内部开发者平台的支柱，通过自定义 API 提供自助服务基础设...



### [Cloudflare-全球中断：内部数据库变更引发](https://www.infoq.com/news/2025/11/cloudflare-global-outage-cause/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-22 10:00:00 | 标签: Cloudflare 中断, 事件管理, 系统可靠性, 事后分析, 数据库管理

> 本文详细介绍了 Cloudflare 于 2025 年 11 月 18 日经历的一次全球中断，该中断导致大范围的 5xx 错误，并中断了对客户站点的访问。根本原因被确定为在对 ClickHouse 数据库集群进行例行安全改进时，意外引入了一个小问题。具体来说，一项旨在优化表访问权限的更新，无意中更改了机器人管理系统使用的元数据查询。该查询以前返回一个干净的列列表，但现在开始从底层数据库分片中获取重复的行。因此，“特征文件”（用于跟踪机器人威胁的配置集）的大小增加了一倍。Cloudflare 的核心代理软件专为性能而设计，为此文件预先分配了内存，并设置了 200 个特征的硬性安全限制。过大的文件...



### [以零信任原则保护现代软件供应链](https://www.infoq.com/presentations/trust-security-cloud-native/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-21 10:50:00 | 标签: 软件供应链安全, 零信任, CI/CD 安全性, 依赖管理, 制品安全

> 本文详细阐述如何利用零信任原则，构建安全的现代软件供应链。首先，分析当前面临的威胁，包括 XZ Utils、SolarWinds 等典型攻击，以及开源组件、CI/CD 流水线和运行时环境中的潜在漏洞。文章核心围绕零信任的三大原则：最小权限访问、验证一切、假定违规，并将其映射到供应链安全实践。针对依赖管理，建议在安装前进行合法性检查（校验和、数字签名、社区反馈），实施版本锁定，并集成软件成分分析工具 (SCA) 和软件物料清单 (SBOM)。在构建和制品阶段，强调制品签名、分支保护策略、签名后的 Git 提交以及完善的审计机制。此外，安全密钥管理、避免硬编码以及密钥生命周期管理也至关重要。最后，...



### [Azure-Databricks：重新定义-AI-时代的数据仓库](https://www.databricks.com/blog/redefining-data-warehouse-ai-era-azure-databricks)

2025-11-21 08:10:00 | 标签: 数据仓库, 湖仓一体, Azure Databricks, 数据治理, 人工智能数据平台

> 本文认为，传统数据仓库已无法满足当今流式、非结构化数据的处理需求，以及 AI 时代的高级分析需求。文章介绍 Azure Databricks，它将数据仓库的可靠性与湖仓一体的开放性结合，提供统一的解决方案。该平台集分析、数据治理和人工智能于一体，并与微软工具（如 Power BI、Microsoft Purview 和 Azure Data Factory）紧密集成。文章强调三个核心支柱：通过 Unity Catalog 实现稳健的数据治理，集中管理所有数据资产的权限、元数据和血缘；通过 Photon 引擎、自动液体聚类和无服务器计算等功能提供持续高性能；以及由 Lakeflow 管理的可靠数...



### [Cloudflare-史诗级宕机：一次数据库权限变更，引爆半壁互联网瘫痪](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633219&idx=1&sn=92fd23ed5634dbc5cce98d6a6cd3461b)

2025-11-19 23:15:00 | 标签: Cloudflare, 宕机分析, 分布式系统, 数据库, ClickHouse

> 本文深入剖析了 2025 年 11 月 18 日 Cloudflare 发生的全球性重大宕机事件。该事件导致包括 ChatGPT、X 等众多知名互联网服务瘫痪数小时。文章详细梳理了事件时间线，指出根本原因并非网络攻击，而是内部 ClickHouse 数据库权限变更触发了潜伏 Bug，使得机器人管理（Bot Management）配置文件体积异常膨胀，超出系统限制，进而引发全球节点软件崩溃。Cloudflare 团队在初期误判为 DDoS 攻击后，最终准确识别问题，通过停止生成异常文件并回滚至旧版本，最终恢复了服务。此次事件凸显了大型分布式系统在配置管理、权限控制以及复杂故障排查方面的严峻挑战。



### [AWS-事故：关键云基础设施的脆弱性暴露](https://www.infoq.com/news/2025/11/aws-disruption-cloud/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-19 12:00:00 | 标签: 云基础设施, AWS, 分布式系统, 系统韧性, 中断分析

> 本文详细描述了 2025 年 10 月 20 日发生的一起重大 AWS 中断事件。该事件源于美国东部 1 区，起因是影响 DynamoDB 端点的 DNS 解析失败，并由此引发了服务级联。此次事件扰乱了全球数百万用户和数千家公司的互联网服务。根本原因在于 DynamoDB 自动化 DNS 管理系统中的一个潜在竞争条件：清理任务错误地删除了活动的 DNS 记录，导致 DynamoDB 即使内部运行状况正常也无法访问。该故障引发了一系列连锁反应，包括来自客户端 SDK 的“重试风暴”以及 EC2 和 Lambda 等服务的控制平面故障，进而导致大范围的区域不稳定。该事件突显了过度依赖单一云区域或供...



### [我加入-Docker-的原因：以安全为核心重塑软件供应链](https://www.docker.com/blog/why-i-joined-docker-security-at-the-center-of-the-software-supply-chain/)

2025-11-19 08:55:09 | 标签: 软件供应链安全, 网络安全, 容器安全, 开发安全运维 (DevSecOps), Docker

> 这篇文章由 Docker 新任首席信息安全官 Mark Lechner 撰写，详细介绍了他将 Docker 定位为软件供应链安全核心的战略愿景。Lechner 强调，现代网络威胁利用系统互联，使每个依赖项和容器都可能成为攻击面。他基于在金融、加密等行业的十年防御经验，强调了从固有信任到可验证完整性的转变，并以 Shai Hulud npm 蠕虫事件为例。人工智能工作负载的兴起加剧了风险，为模型供应链引入新的暴露层。Lechner 认为，Docker 作为现代软件互联互通的基础，在应对这些挑战方面具有独特优势。他的愿景是使安全成为默认设置，具体包括：透明的、密码学上可验证的来源；全面的软件物料清...



### [Disney-Hotstar-现-JioHotstar-如何扩展其基础架构以支持-6000-万并发用户](https://blog.bytebytego.com/p/how-disney-hotstar-now-jiohotstar)

2025-11-18 16:31:27 | 标签: 架构设计, 分布式系统, Kubernetes, AWS EKS, CDN

> 这篇文章详细介绍了 Disney+ Hotstar 扩展其流媒体平台的技术演进，旨在支持 2023 年重大板球赛事期间的 6000 万并发用户，相比之前 2500 万用户的容量实现了大幅提升。由于现有自管理 Kubernetes 基础设施的限制，该团队开始进行全面改革，迁移到 Amazon EKS 并采用新的“X 架构”，强调灵活性、可扩展性和成本效益。关键的初步优化包括在 CDN 层策略性地分离可缓存和不可缓存的 API (应用程序编程接口)，以减少边缘服务器负载并提高吞吐量。进一步的基础设施改进包括将 NAT 网关从每个可用区 (AZ) 重新配置为每个子网一个，以实现均匀的负载分配，并在高...



### [AWS-在-ECR-中引入远程构建缓存机制，以加速-Docker-镜像构建](https://www.infoq.com/news/2025/11/aws-remote-build-cache-docker/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-17 12:00:00 | 标签: CI/CD, AWS, Docker, ECR, CodeBuild

> 为了解决基于容器的 CI/CD 中的一个关键瓶颈，AWS 引入了一项新功能，允许 Amazon ECR 作为 CodeBuild 的远程 Docker 镜像层缓存，利用 Docker BuildKit。此增强功能使得 Docker 镜像构建层可以在不同的运行和构建代理之间持久保存和重用，从而显著减少镜像构建时间。该实现包括配置构建管道，使其能够从 ECR 推送和拉取缓存层。 这样可以绕过未更改的 Dockerfile 段的冗余重建。AWS 强调，这种方法显著改善了开发人员的反馈循环，并减少了构建资源消耗。 这也符合更广泛的行业趋势，即智能缓存。早期采用者报告显著的时间节省，构建完成速度更快。文...



### [充分利用-Docker-加固镜像试用---第-1-部分](https://www.docker.com/blog/making-the-most-of-your-docker-hardened-images-trial-part-1/)

2025-11-14 09:19:44 | 标签: 容器安全, Docker, DevSecOps, 基础镜像, 漏洞管理

> 本文介绍 Docker 加固镜像 (DHI)，它是一种持续维护的最小化基础镜像，旨在通过最小化攻击面和提供供应链证明来减少应用程序安全漏洞。文章概述了一个为期 30 天的试用过程，着重于提供学习体验，而非直接应用于生产环境。主要步骤包括了解 DHI 目录（最小化设计、标准、FIPS 和开发等变体）、将镜像复制到组织的仓库，以及通过替换 Dockerfile 中的基础镜像来迁移一个简单的项目。评估的核心是使用 Docker Scout 比较原始镜像和加固镜像，展示 CVE 的显著减少（从 25 个减少到 0 个）、软件包数量（减少 90%）和镜像大小（缩小 41.5%）。文章还强调了嵌入式软件物...



### [Crossplane-通过-CNCF-毕业，达到生产成熟度](https://www.infoq.com/news/2025/11/crossplane-grad/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-13 07:00:00 | 标签: 云原生, Kubernetes, Crossplane, 基础设施即代码, 控制平面

> 本文宣布 Crossplane 从云原生计算基金会 (CNCF) 毕业，标志其在运营成熟度、广泛采用和强大治理模型上取得重要进展。Crossplane 最初由 Upbound 创建，并扩展了 Kubernetes，使其能够作为管理各种云基础设施的通用控制平面。这允许从业者使用 Kubernetes 原生 API 来配置和管理 VPC、数据库和 Kubernetes 集群等资源。这种能力使组织能够构建内部开发者平台，为开发者提供自助服务基础设施 API。同时，平台团队可以通过组合管理底层配置、安全性和网络。包括 Nike 和 NASA Science Cloud 在内的知名用户使用 Crossp...



### [Spring-Cloud-2025.1.0---RC1-亦称-Oakwood-已发布](https://spring.io/blog/2025/11/13/spring-cloud-2025-1-0-RC1-aka-oakwood-has-been-released)

2025-11-13 00:00:00 | 标签: Spring Cloud, 发行说明, 微服务, 分布式系统, Spring Boot

> Spring Cloud 2025.1.0 - RC1 (Oakwood) 发布版本现已可用，提供了一系列模块更新与增强。主要亮点包括支持 Spring Boot 4.0.0 - RC2，在 Spring Cloud Function (函数)、Stream (流)、Config (配置) 等多个组件中迁移到 Jackson 3，以及为 Spring Cloud Gateway 和 Commons 等模块中的公共 API 引入 JSpecify 空指针安全注解。此版本还在 Spring Cloud Function 的类型发现方面进行了显著改进，在 Spring Cloud Consul 中添...



### [连接生产环境：Cloudflare-Workers-远程绑定架构解析](https://blog.cloudflare.com/connecting-to-production-the-architecture-of-remote-bindings/)

2025-11-12 14:00:00 | 标签: Cloudflare Workers, 远程绑定, 本地开发, 开发者体验, Wrangler

> 本文详细介绍了 Cloudflare Workers 的全新远程绑定功能，旨在解决长期存在的针对生产数据进行本地开发的难题。以往，`wrangler dev` 依赖于本地模拟，而 `wrangler dev --remote` 提供了与生产环境的连接，但开发体验欠佳。远程绑定融合了两者的优势：开发者可以在 `wrangler.toml` 文件中为特定绑定（如 KV、R2、D1）设置 `remote: true`，从而使本地 Worker 代码能够与实际部署的资源进行交互。技术深入探讨揭示了一种创新架构，该架构重用了 Cloudflare 现有的生产绑定机制。本地 `workerd` 运行时直接...



### [HashiCorp-的新指南提供关于编写和优化-Terraform-模块的实用建议](https://www.infoq.com/news/2025/11/advice-rightsizing-terraform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-12 12:00:00 | 标签: Terraform模块, 基础设施即代码, DevOps, 模块设计, 最佳实践

> InfoQ 的文章报道了 HashiCorp 用于创建可维护和可扩展的 Terraform 模块的综合框架，详见其博客文章“如何编写和优化 Terraform 模块”。作者 Mitch Pronschinske 借鉴了 Rene Schach 的见解，重点关注四个关键支柱：模块作用域、代码策略、安全性以及测试。该指南强调以用户为中心的设计、最小耦合以及将模块生命周期与资源易变性对齐，以实现有效的范围定义。对于代码策略，它提倡将模块视为具有语义化版本控制、结构清晰的文件组织、完善的文档和遵循提供商模式的软件工件。安全性涉及早期输入验证和策略即代码框架（如 Sentinel 或 OPA），而测试则...



### [Google-Cloud-发布分布式系统混沌工程框架与实践](https://www.infoq.com/news/2025/11/google-chaos-engineering/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-12 09:00:00 | 标签: 混沌工程, 分布式系统, 云原生, 弹性工程, Google Cloud

> 本文详细介绍了 Google Cloud 的全新混沌工程框架，强调其在构建高弹性云原生分布式系统中的关键作用。文章挑战了一种常见的误解，即云服务提供商的服务等级协议 (SLA) 能自动保证应用弹性，并强调应用本身必须具备处理故障的能力。该框架围绕五个基本原则构建：建立稳定状态假设、模拟真实世界环境、直接在生产环境进行实验、自动化弹性测试，以及彻底评估任何中断的爆炸半径 (Blast Radius)。文章概述了六个实际的实施步骤，从定义稳定状态指标和制定可测试的假设，到通过 CI/CD 管道实现自动化执行，并从中获取可执行的见解。此外，文章还重点介绍了开源混沌工具包 Chaos Toolkit ...



### [功能齐全的下载管理器：界面美观、下载神速-|-开源日报-No.787](https://mp.weixin.qq.com/s?__biz=Mzg2NTk2OTM2OA==&mid=2247493555&idx=1&sn=8d75d3e133c975f139712bb6b2310b1c)

2025-11-12 01:00:00 | 标签: 开源项目, 下载管理器, Docker, VPN, 作业队列

> 文章作为“开源日报”栏目，集中介绍了五个近期或热门的开源项目。首先详细介绍了 Motrix 下载管理器，强调其多协议支持、简洁界面和丰富的下载功能。接着简述了 docker-easyconnect 项目，旨在解决深信服 VPN 在 Docker 环境下的部署与代理问题。随后，介绍了 Rails 框架的数据库作业队列 solid_queue，突出其性能和兼容性。最后，文章还涉及了人工智能领域的 Vary 项目（扩展视觉语言模型的视觉词汇）和 awesome-llm-interpretability 资源列表，为 AI 研究者提供了有价值的参考。整体而言，文章旨在为技术从业者提供一系列实用或前沿的...



### [在-GKE-上为大型语言模型运行高可扩展性的强化学习](https://cloud.google.com/blog/products/compute/run-high-scale-rl-for-llms-on-gke/)

2025-11-11 00:00:00 | 标签: 大型语言模型的强化学习, GKE, 机器学习基础设施, 云计算, Google Cloud

> 本文解决了企业在为大型语言模型实施和扩展强化学习时面临的重大基础设施挑战，例如内存争用以及高延迟推理和高吞吐量训练阶段之间的迭代切换。它介绍了 Google Cloud 的全面、全栈方法，强调了从定制硬件到编排的集成解决方案的必要性。该方法基于四大支柱：灵活高性能计算（张量处理单元和 NVIDIA 图形处理器）、从裸机到顶层的全栈优化、在开源领域的领导地位（Kubernetes、Ray、vLLM、MaxText、Tunix），以及通过 GKE AI mega-clusters 验证的 mega-scale 编排能力。本文详细介绍了现有 GKE 基础设施如何完美适配这些高要求的工作负载。文章概述...



### [Cloudflare-用-Rust-重写核心系统：CDN-性能提升-25%，响应时间缩短-10-毫秒](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651262762&idx=3&sn=355c032a0ad3c57b3aa3911466e9f8ca)

2025-11-10 05:26:00 | 标签: 架构设计, Rust, 性能优化, 系统重构, Cloudflare

> 文章详细介绍了 Cloudflare 将其核心子系统 FL（负责处理网络中的安全与性能功能，被誉为“Cloudflare 的大脑”）从基于 LuaJIT 的旧版本重构为基于 Rust 的 FL2 的实践。重构旨在解决旧系统多语言混合带来的数据转换开销和维护复杂性。新系统 FL2 基于 Cloudflare 内部开发的代理框架 Oxy 构建，该框架支持监控、软重载和动态配置，并具备无中断的“平滑重启”机制。为确保平稳过渡，Cloudflare 采用了渐进式迁移策略，包括在旧系统内创建 Rust 模块中间层、使用 Flamingo 系统进行端到端测试，并设计了 FL2 的回退机制。最终，FL2 实...



### [百亿损失！AWS-大规模宕机警示：用好-K8s-才不会被云厂商“绑架”](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247633059&idx=1&sn=cd819be512d6f3286850ff734e86578d)

2025-11-08 00:03:00 | 标签: 云原生, Kubernetes, 多云架构, 分布式系统, 弹性设计

> 文章以 2025 年 10 月 AWS us-east-1 区域大规模宕机事件为引，指出单一云架构带来的巨大脆弱性和百亿美元损失。作者分析了过度依赖单一云厂商专有 API 的风险，并阐明了传统多云方案因 API、服务和工具差异导致的复杂性和高成本，使其难以落地。随后，文章深入探讨了 Kubernetes（K8s）作为“云操作系统”和“伟大抽象层”的价值，它提供了一致的、与云平台无关的 API，实现了真正的应用程序可移植性、基础设施即数据（GitOps）以及联合和故障转移能力，从而有效应对云厂商锁定和宕机风险。更重要的是，文章强调 K8s 在提升开发者生产力方面的日常魔力，通过多租户、虚拟测试环...



### [代码推送量背后的秘密：2025-开发者工作流趋势](https://github.blog/news-insights/octoverse/what-986-million-code-pushes-say-about-the-developer-workflow-in-2025/)

2025-11-07 08:00:00 | 标签: 开发者工作流, 软件工程, CI/CD, Git, 功能开关

> 本文从 9.86 亿次代码推送中洞察到 2025 年开发者工作流向更快迭代和持续交付的重大演变。它强调了编码、审查和交付的根本模式已发生改变，从大型、不频繁的发布转变为更小、更频繁的提交。关键的实际变化包括广泛采用功能开关来安全地部署未完成的工作，依赖全面的 CI/CD 管道进行自动化测试和部署，以及倾向于更小、更专注的拉取请求，从而简化审查。数十亿 GitHub Actions 分钟证明了自动化测试的大幅增加，这对于以这种加速的速度保持质量至关重要。此外，文章还建议团队沟通和招聘实践必须适应这种新模式，优先考虑效率和清晰的沟通。最后，它预测了新工具和标准的持续涌现，Markdown 转代码工...



### [Cloudflare-Stream-音频提取功能](https://blog.cloudflare.com/extract-audio-from-your-videos-with-cloudflare-stream/)

2025-11-06 14:00:00 | 标签: Cloudflare, Stream, 音频提取, 视频处理, 媒体转换

> 本文介绍了 Cloudflare Stream 新的音频提取功能，解决了仅需音频轨道时，处理整个视频文件所带来的复杂性和成本问题。它强调了音频文件的相对简单性，并概述了关键用例，例如为转录、翻译和摘要提供支持的 AI/ML 模型，以及加强内容审核工作。该功能提供了两种灵活的方法：通过媒体转换进行的即时音频提取，通过简单的 URL 参数激活；以及直接 M4A 音频下载，用于在 Stream 中管理的内容。一个实用的 Workers AI 演示展示了一个两步流程，用于转录和翻译视频音频。文章还深入探讨了技术实现，详细介绍了该功能如何扩展 Cloudflare 现有的实时编码 (OTFE) 和视频点...



### [Grafana-和-GitLab-推出-CI/CD-无服务器可观测性集成](https://www.infoq.com/news/2025/11/grafana-gitlab-serverless-cicd/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-06 12:00:00 | 标签: CI/CD, 可观测性, DevOps, Grafana, GitLab

> 本文介绍了 GrafanaLabs 的一项新开源解决方案，该方案通过无服务器架构集成 GitLab CI/CD 事件与 Grafana 的可观测性平台。这项创新解决了源代码控制、CI/CD 工具和监控系统之间常见的可见性碎片化挑战，从而减少事件响应时间和手动关联工作。通过利用轻量级的无服务器函数（如 AWS Lambda）捕获 GitLab Webhooks（例如，推送、合并请求、流水线完成），并将其转换为 Grafana Cloud Logs (由 Loki 提供支持) 的结构化日志。这使得团队可以获得实时的、统一的洞察力。这允许在部署事件和应用程序性能指标之间进行直接关联，从而更好地监控流...



### [Azure-API-管理通过原生服务总线策略简化事件驱动架构](https://www.infoq.com/news/2025/11/azure-apim-service-bus-policy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-06 10:00:00 | 标签: 事件驱动架构, 异步消息传递, Azure APIM, Azure 服务总线, Azure 集成

> 微软发布 Azure API 管理 (APIM) 预览功能，通过新的内置策略使开发人员能够直接向 Azure 服务总线发送消息，从而简化 API 层和事件驱动异步系统之间的连接。以前，将 APIM 与服务总线集成通常需要自定义解决方案或中间服务（如 Azure 逻辑应用或 Azure 函数）充当通道适配器，从而增加了复杂性和开销。新的 `send-service-bus-message` 策略允许将来自 API 调用的 HTTP 请求负载直接转发到服务总线队列或主题。这种原生集成减少了对其他组件的需求，简化了异步后端处理的架构设计和部署。该功能对于需要 API 调用触发解耦工作流的场景尤其有价...



### [Databricks-如何实现基于-Kubernetes-的智能负载均衡](https://blog.bytebytego.com/p/how-databricks-implemented-intelligent)

2025-11-05 16:30:42 | 标签: Kubernetes, 负载均衡, 客户端负载均衡, 微服务, 分布式系统

> 本文探讨了 Databricks 如何实现一套复杂的客户端负载均衡系统，以解决 Kubernetes 默认路由的不足，特别是对于基于 HTTP/2 的持久 gRPC 连接。核心问题在于 Kubernetes 的连接级负载均衡导致流量分配不均、尾部延迟较高以及资源利用率低下。Databricks 的解决方案是构建一个自定义控制平面，即端点发现服务 (EDS， Endpoint Discovery Service)，该服务持续监控 Kubernetes API，获取服务和端点变更信息，从而构建实时集群拓扑。然后，此信息通过 xDS 流式传输到自定义 RPC 客户端，使客户端能够维护最新的健康后端 ...



### [Azure-前门服务中断：单个控制平面缺陷暴露的架构脆弱性](https://www.infoq.com/news/2025/11/azure-afd-control-plane-failure/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-05 10:00:00 | 标签: 中断分析, 云架构, Azure 前门服务, 控制平面, 分布式系统

> 本文详细描述了 Azure 前门 (AFD)（微软的云 CDN）近九个小时的全球服务中断，该中断严重影响了 Microsoft 365、Xbox Live 等微软主要服务以及数千个客户应用程序。根本原因被确定为错误的控制平面配置更改，由于软件缺陷，无意中绕过了安全机制。此次事件暴露了集中式全球控制平面的内在脆弱性，尤其是在身份提供商（Entra ID）等核心服务与边缘结构紧密耦合时，形成了一种“架构反模式”。广泛的影响范围凸显了整个微软生态系统及其客户对 AFD 的深刻依赖。微软的快速恢复涉及标准的 SRE 实践，包括故障转移 Azure 门户、阻止进一步的配置更改、回滚到“最近一次良好状态”...



### [前端开发，真的有必要学-Docker-吗？](https://juejin.cn/post/7567769662479630345)

2025-11-03 03:46:37 | 标签: 前端开发, Docker, 容器化, CI/CD, 环境管理

> 本文深入探讨了前端开发者学习 Docker 的必要性，指出在当前复杂的前端生态中，环境不一致是团队协作的常见痛点，而 Docker 通过容器化技术完美解决了这一问题。文章进一步阐述，随着 Next.js、Nuxt.js 等框架的兴起，前端应用已趋向后端服务化，需要像后端服务一样进行部署和管理。因此，前端工程师需要掌握 Docker 的看懂和使用能力，甚至进一步达到编写和编排的水平，以适应现代工程化开发的需求，从“页面仔”进阶为“全栈工程师”。文章提供了具体的 Dockerfile 和 docker-compose.yml 代码示例，指导读者如何实践。



### [Cloudflare-推出零数据出口费用数据平台](https://www.infoq.com/news/2025/11/cloudflare-data-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-11-01 10:57:00 | 标签: Cloudflare, 数据平台, 云计算, Apache Iceberg, 零数据出口费用

> Cloudflare 现已启动数据平台的公开测试版。这是一个托管解决方案，旨在帮助用户轻松摄取、存储和查询分析数据表。该平台集成了 Cloudflare Pipelines，用于事件收集和 SQL 处理；R2 数据目录，用于 Apache Iceberg 元数据管理和维护；以及 R2 SQL，一个分布式无服务器查询引擎，用于处理 Petabyte 级别的数据集。其主要目标是简化传统数据基础设施，并降低其运营成本，因为传统数据基础设施通常既昂贵又复杂。Cloudflare 的一个关键优势是其“零数据出口费用”政策。这从根本上改变了数据仓库的经济模式，Cloudflare 旨在挑战主要云提供商在数...



### [BGP-僵尸与过度的路径搜索](https://blog.cloudflare.com/going-bgp-zombie-hunting/)

2025-10-31 15:30:00 | 标签: BGP, 网络路由, 互联网基础设施, 路径搜索, Cloudflare

> 这篇来自 Cloudflare 的文章深入探讨了“BGP 僵尸”，即在撤回后仍然在互联网的无默认路由区域（DFZ），即互联网核心路由器集合中保持活跃的 BGP 路由。文章将它们的形成归因于“路径搜索”，即路由器详尽地搜索最佳路径，以及被最小路由通告间隔 (MRAI) 放大的延迟。文章通过跨 ISP 环路和内部网络问题的例子，阐述了 BGP 僵尸的形成原因。文章还指出，由于 IPv4 的前缀数量更多，因此更容易受到影响。Cloudflare 的观察结果与使用“自带 IP (BYOIP)”按需通告的客户尤其相关。为了减轻影响，Cloudflare 提出了内部 BGP 流量转发改进，以实现平滑撤回，...



### [合规管理变革：DevOps-原则驱动的控制与审计](https://www.infoq.com/presentations/compliance-devops-management/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-31 14:31:00 | 标签: 合规性, 审计, DevOps, 云原生, 自动化

> 本文认为，传统的合规性和审计实践从根本上存在缺陷，表现为手动操作、周期性检查、以流程为中心和非标准化的模式。这些问题导致巨大的运营成本，并且缺乏对组织合规状态的实时可见性。作者介绍了持续合规框架（CCF），这是一个由 Container Solutions 开发的开源项目，旨在应对这些挑战。CCF 集中来自不同系统的发现，允许持续监控，并与 OSCAL 标准集成，以实现机器可读的合规性。该框架旨在将合规性从周期性的“税收”转变为集成的、自动化的和持续的过程，使组织能够实现高枕无忧。文章还涉及了像 DORA 这样的新兴监管规定和机器可读的监管规定，这些规定使得这种转变成为必要。



### [亚马逊云科技发布采用第五代-AMD-霄龙（Turin）处理器的-M8a-通用型-EC2-实例](https://www.infoq.com/news/2025/10/aws-m8a-ec2-amd-processors/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-31 11:00:00 | 标签: 云计算, 云基础设施, AWS EC2, 通用型实例, AMD 霄龙

> 亚马逊云科技宣布其 M8a 通用型 EC2 实例全面上市，该实例采用第五代 AMD 霄龙（Turin）处理器，最高频率为 4.5GHz。这些实例针对高性能和高吞吐量应用进行了优化，例如游戏、金融分析、机器学习推理和视频编码。与之前的 M7a 代相比，M8a 实例性能提升 30%，性价比提升高达 19%。它们还提供显著的 I/O 改进，拥有高达 75 Gbps 的网络带宽和 60 Gbps 的亚马逊弹性块存储带宽，比上一代提高 50%。M8a 实例构建于亚马逊云科技 Nitro 系统之上，提供 10 种虚拟化大小和两种裸金属选项，支持高达 192 个 vCPU 和 768 GiB RAM，确保低...



### [备战-Kubernetes-管理员认证-CKA-并成功通过](https://www.freecodecamp.org/news/prepare-for-the-kubernetes-administrator-certification-and-pass/)

2025-10-29 14:00:19 | 标签: Kubernetes, CKA 认证, 容器编排, 云原生, DevOps

> 这篇 freeCodeCamp.org 文章是 Kubernetes 管理员认证 (CKA) 的实践指南，以命令行操作为中心，旨在与 YouTube 课程结合使用。它系统地组织了 CKA 课程所有主要主题中的可执行命令和 YAML 配置文件。涵盖的关键领域包括使用 `kubeadm` 对单/多节点 Kubernetes 集群的基础设置、全面的集群生命周期管理（升级、etcd 备份/恢复、高可用控制平面）、基于角色的访问控制 (RBAC) 配置，以及使用 Helm 和 Kustomize 的应用程序部署策略。此外，它还深入研究了工作负载和调度概念，如 Deployments（部署）、Config...



### [如何构建你自己的-VPN，或者---WARP-的历史](https://blog.cloudflare.com/how-to-build-your-own-vpn-or-the-history-of-warp/)

2025-10-29 13:00:00 | 标签: 网络, VPN, Linux, Netfilter, NAT

> 本文详细介绍了 Cloudflare 构建 WARP 的最初方法，WARP 是一款移动优先的性能和安全应用程序，通过构建利用 Linux 网络堆栈的高性能第 3 层 VPN。它解决了为数百万移动客户端安全有效地出口用户数据包的挑战。该解决方案涉及关键的 Linux 组件：通过 Netfilter 和 `nftables` 配置的网络地址转换 (NAT)，用于重写 IP 数据包源地址，以及用于有状态 NAT 和连接跟踪的 `conntrack` 模块。此外，本文还详细阐述了如何利用带有 `conntrack` 和 `nftables` 的数据包标记来实现细粒度的防火墙策略，并为 WARP 客户端...



### [突破-Linux-网络协议栈的限制：Cloudflare-的软单播-IP-转发实践](https://blog.cloudflare.com/so-long-and-thanks-for-all-the-fish-how-to-escape-the-linux-networking-stack/)

2025-10-29 13:00:00 | 标签: Linux 网络协议栈, 内核黑客, Cloudflare, 软单播 IP 转发, 数据包转发

> 本文探讨了 Cloudflare 在 Linux 网络协议栈内实现软单播 IP 地址共享时面临的挑战。文章着重介绍了 Netfilter/连接追踪与套接字子系统之间交互所产生的复杂性，特别是在数据包重写与本地套接字使用相结合时出现的五元组冲突。作者详细阐述了规避这些问题的多种尝试，首先是管理 iptables 规则，然后是自定义代理服务 ("fish")，之后尝试使用 Netlink 进行连接追踪操作，但效率低下。一种更具创新性的方法是巧妙运用内核特性，如 `TCP_REPAIR` 或 `TCP 快速打开`，以创建“已连接”的套接字来保留五元组。这导致了一个新问题：本地路由规则优先考虑本地套接...



### [CNCF-重点介绍-vCluster-如何解决-Kubernetes-多租户难题](https://www.infoq.com/news/2025/10/cncf-vcluster-multitenancy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-29 12:00:00 | 标签: Kubernetes, 多租户, vCluster, 云原生, 容器编排

> InfoQ 的这篇文章总结了 CNCF 博客中关于 Loft Labs 开源项目 vCluster 如何解决 Kubernetes 多租户挑战的内容。它详细介绍了 vCluster 如何在单个主机集群中启用虚拟集群，为租户提供隔离的控制平面，同时高效地共享底层计算资源。这种方法克服了传统命名空间隔离的局限性，尤其是在部署集群范围资源（如自定义资源定义 CRDs）和实现团队间强隔离方面。文章解释说，虚拟集群作为主机命名空间中的应用程序运行，提供完整的 Kubernetes API 服务器和控制器管理器，并通过同步器将虚拟集群资源镜像到主机。一个关键优势是，它赋予团队自主权（例如安装 CRD），而...



### [Duolingo-的-FinOps-之旅：利用云支出提升工程洞察力](https://www.infoq.com/news/2025/10/duolingo-finops-engineering/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-29 09:00:00 | 标签: FinOps, 云成本优化, 工程文化, AWS, 微服务

> 本文详细介绍了 Duolingo 成功实施 FinOps 的案例，强调了一种深刻的文化转变，即将财务意识直接嵌入到工程工作流程中。Duolingo 将成本效率提升到核心工程质量的高度，与可靠性和可扩展性等既定指标并列，使开发人员能够了解其架构和部署选择的实时财务影响。关键策略包括促进工程、数据和财务团队之间的密切合作，将抽象的账单数据转化为可操作的洞察。该公司采用了“每个活跃用户的成本”和“每个功能的成本”等特定指标，使产品团队能够权衡创新与运营效率，并将云支出与产品性能直接联系起来。这种背景使工程师能够优先考虑在技术和财务方面都具有优势的优化方案。Duolingo 利用内部仪表板，这些仪表板...



### [Cloudflare-通过-Rust-重构提升-CDN-性能与安全性](https://www.infoq.com/news/2025/10/cloudflare-rust-proxy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-28 21:00:00 | 标签: Rust, 性能优化, 系统架构, Cloudflare, CDN

> Cloudflare 成功地将其关键的 FL 子系统，即 CDN 的核心大脑，负责处理安全和性能特性，迁移到一个新的基于 Rust 的版本，名为 FL2。此次重写，继 Pingora 之后，利用了 Cloudflare 内部的 Oxy 代理框架，该框架提供了优雅重启、动态配置等功能。此次迁移带来了 25% 的性能提升，减少了 10 毫秒的响应时间，并将 CPU 和内存使用量减少了一半以上，这主要归功于 Rust 的高性能和消除了跨语言数据转换的开销。替换一个有 15 年历史的系统是一项关键挑战。Cloudflare 通过允许新的 Rust 模块在旧的基于 LuaJIT 的 FL1 中运行，并实...



### [新的基础设施即代码工具-"formae"-旨在对标-Terraform](https://www.infoq.com/news/2025/10/iac-formae/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-28 20:00:00 | 标签: 基础设施即代码, 平台工程, DevOps, 云基础设施, 配置管理

> 平台工程实验室推出了 formae，一个开源的基础设施即代码 (IaC) 平台，旨在克服现有工具的根本限制。针对平台工程团队的常见痛点，如云蔓延、配置漂移和脆弱的工具链，formae 引入了一种新颖的方法。它以“协调”和“补丁”模式运行，将实时环境本身视为状态，然后在代码中进行版本控制，从而消除了显式的状态文件管理。一个关键的区别在于它可以自动发现和编纂所有现有的基础设施资源，无论其原始创建方法（Terraform、手动控制台或其他方式）如何。Formae 使用 Apple 的 PKL 配置即代码语言，这与竞争对手使用的 HCL 不同，这一选择引起了不同的反应。专家们承认其对清单与资源声明的“...



### [别再傻傻敲单条命令！这-30-个-Linux-命令组合，才是运维效率的王炸](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632928&idx=1&sn=182926c78ba1f539947a013de92f6cd6)

2025-10-27 23:15:00 | 标签: Linux 命令, 运维效率, Shell 脚本, 系统监控, 日志分析

> 本文强调，Linux 运维的核心效率在于“命令组合”而非单个命令，并针对此理念，详细介绍了 30 个解决日常运维问题的命令组合。文章将这些组合划分为系统监控与资源排查、日志分析与数据提取、文件管理与批量操作、进程与服务管理、网络连接与故障排查、权限与安全审计六大高频场景。每个命令组合都配备了清晰的场景说明、深入的命令解析、可直接复制的实战案例，以及重要的注意事项，确保读者能够快速理解和应用。例如，在系统监控部分，提供了快速查看 CPU/内存/磁盘状态、查找高 CPU 进程和定位大文件等实用组合。日志分析部分则涵盖了统计错误日志、查找 500 错误 IP 和 URL、实时监控 SSH 登录以及提...



### [Cloudflare-大规模数据测量：来自实习生的洞察](https://blog.cloudflare.com/experience-of-data-at-scale/)

2025-10-27 13:00:01 | 标签: 网络安全, 数据测量, Cloudflare, 分布式系统, TCP/IP

> 本文作者为前 Cloudflare 实习生、现任助理教授，探讨了大规模数据测量的复杂性，特别是在检测互联网连接篡改方面。文章对比了面临资源和规模限制的传统主动测量技术，以及一种使用 Cloudflare 广泛的真实流量数据的创新被动方法。作者详细介绍了遇到的重大挑战与障碍，包括管理具有偏差抽样的巨大数据量，过滤来自 DoS 攻击和合法协议等不同来源的噪声，以及用于验证的关键真值的缺失。尽管存在这些障碍，该项目成功开发了 19 个篡改签名，揭示了全球网络中独特的干扰行为，结果持续发布在 Cloudflare 雷达上。文章总结说，即使拥有全球数据视图，基础设施提供商也不是全知的，提取有意义的洞察需...



### [Cloudflare-速度测试的原理是什么？](https://blog.cloudflare.com/how-does-cloudflares-speed-test-really-work/)

2025-10-27 13:00:01 | 标签: 网络性能, 速度测试, Cloudflare, 互联网测量, 延迟

> 本文详细解释了 Cloudflare 的速度测试，强调了其在测量互联网连接质量方面与仅关注带宽的传统方法的不同之处。文章指出，传统的速度测试旨在饱和连接以找到最大吞吐量，而 Cloudflare 的测试运行在其全球网络上，利用 Workers 和任播技术，发送预定义的数据块来模拟真实的使用模式。该测试优先考虑对现代应用程序（如视频会议和游戏）至关重要的指标，包括空闲和加载延迟、抖动和数据包丢失。结果以箱线图和综合互联网测量 (AIM) 分数的形式呈现，提供了一个直观的性能总结。文章包含了实际示例，比较了住宅光纤和蜂窝 5G 连接，以指导用户解释他们的结果并理解常见的瓶颈，如 Wi-Fi。Clo...



### [Docker-Hub-事件报告-2025-年-10-月-20-日](https://www.docker.com/blog/docker-hub-incident-report-october-20-2025/)

2025-10-24 16:09:26 | 标签: 事件管理, 云计算, AWS, Docker Hub, 弹性工程

> 这份 Docker 发布的事件报告，透明地描述了 2025 年 10 月 20 日影响 Docker Hub 及多个相关服务的重大中断。该中断源于 AWS US-East-1 区域的大规模故障，DynamoDB、EC2 和网络负载均衡器等关键服务均受影响。报告详细记录了从初始性能下降到完全服务中断，再到约 27 小时后逐渐恢复的精确时间表，并强调了全球依赖 Docker 进行日常工作的开发者所受到的关键影响。展望未来，Docker 提出了即时生效的弹性策略，重点是扩展缓存层以减轻上游故障的影响范围，并实施多区域冗余，首先应用于镜像读取操作，随后扩展到写入操作，以确保服务的持续可用性。



### [自托管替代方案：掌握您的数据](https://www.docker.com/blog/self-hosted-alternatives-control-your-data/)

2025-10-24 06:00:00 | 标签: 自托管, 数据主权, 开源, Docker, 隐私

> 本文提倡将自托管作为云服务的可行替代方案，强调了对数据控制和数字独立性与日俱增的需求。文章首先指出了对云服务的常见不满，例如不断上涨的订阅费、功能变更、服务关闭以及隐私问题，如数据货币化和 AI 驱动的内容篡改。自托管的核心动机被确定为隐私和数据主权，摆脱订阅疲劳，避免平台锁定以及定制的乐趣。然后，本文详细介绍了不同的自托管方法：在个人硬件（如树莓派或 NAS）上运行，使用租用的虚拟专用服务器（VPS）或混合组合。它解释了每种方法的优缺点，包括对硬件、操作系统（主要是 Linux）和备份策略的考虑。最后，它介绍了几种流行的、初学者友好的开源应用程序，通常可以通过 Docker 容器部署，以满足...



### [如何通过代理路由在单个环境中进行分布式系统测试](https://www.infoq.com/news/2025/10/testing-distributed-system/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-23 11:35:00 | 标签: 分布式系统测试, 微服务, 代理路由, CI/CD, 自动化测试

> 本文描述了一种创新的方法，用于在没有专用质量保证(QA)环境的情况下测试分布式微服务系统。面对用于环境设置的缓慢且难以维护的传统命令行界面(CLI)工具，该组织采取了将测试活动提前到开发周期的早期阶段（即“左移”）策略，优先考虑自动化测试和完善的工具链。他们的解决方案涉及一个内部部署工具，该工具利用持续集成(CI)和动态代理路由（使用 Traefik 和自定义 Baggage headers）在单个 ECS 开发集群上部署和测试多个服务版本。这允许开发人员为新功能或框架升级运行隔离的集成测试。至关重要的是，他们实施了全面的遥测技术来监控和调试各个服务版本，从而能够清楚地区分错误和性能问题。该架...



### [Google-最新-Nano-Banana-模型空降北京-DevFest](https://mp.weixin.qq.com/s?__biz=MzAwODY4OTk2Mg==&mid=2652159671&idx=1&sn=fbc7ad2c6714856dc71922f318c2fa86)

2025-10-23 09:33:00 | 标签: 开发者大会, 技术交流, 谷歌开发者, 人工智能, Google Cloud

> 文章是关于 2025 年 Google DevFest 北京场的活动预告与详细议程。活动将围绕人工智能、Google Cloud 出海、Android 和 Web 等热门技术展开，通过主题演讲和 Workshop 形式，邀请 Google 官方专家、谷歌开发者专家(GDE)及资深社区讲师分享前沿见解和实战经验。特别亮点是“Nano Banana”模型工作坊，强调零代码、极速上手，旨在帮助不同背景的参与者快速掌握 AI 图像生成技术。文章还提供了详细的活动时间、地点、报名方式及各分会场的具体议程，旨在吸引开发者参与，拓展技术视野并促进社区交流。



### [跨站点互连正式发布：简化二层网络连接](https://cloud.google.com/blog/products/networking/cross-site-interconnect-now-ga-simplifies-l2-connectivity/)

2025-10-23 00:00:00 | 标签: 云网络, 二层连接, 广域网, 混合云, Google Cloud

> 本文宣布 Google Cloud 的跨站点互连正式发布，这是一种云交付的托管式二层连接方案。Google Cloud 成为第一家通过其网络提供透明二层连接的主要云提供商。它强调了现代企业在网络连接方面面临的日益严峻的挑战，例如复杂的云迁移、高负载的 AI/ML 工作负载以及受限的全球连接市场。跨站点互连利用 Google 的全球基础设施提供透明的、按需的二层连接，简化广域网管理，提高可靠性，并提供高性能、高带宽的连接。主要优势包括提供 SLA 保障的抽象弹性、架构灵活性、按需付费的消费模式和优化的基础设施。它建立在 Google 广泛的网络之上，确保可靠性、强大的安全性（支持 MACsec ...



### [InfoQ-云和-DevOps-趋势报告---2025](https://www.infoq.com/articles/cloud-devops-trends-2025/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-22 11:00:00 | 标签: 云计算, DevOps, 平台工程, FinOps, Kubernetes

> 这份 2025 年 InfoQ 趋势报告针对架构师和技术领导者，对云和 DevOps 的关键发展提供了主观看法。它根据技术采用生命周期对趋势进行分类，从创新者到后进采用者。创新者类别中主要的新兴趋势包括用于云工程的 AI 代理，从简单的聊天机器人发展到能够执行复杂任务的智能代理，以及用于治理的实用 AI 自动化。该报告还介绍了 Anthropic 公司的模型上下文协议 (MCP)，作为 LLM 集成的开放标准。在早期采用者类别中，平台工程正朝着“平台即产品”的方向发展，但面临着工具碎片化的挑战。由于合规性和数字主权，跨云/云原生混合方法正成为战略默认选择，Kubernetes 是稳定的基础。开...



### [InfoQ-云和-DevOps-趋势报告-2025](https://www.infoq.com/podcasts/cloud-devops-trends-2025/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-22 11:00:00 | 标签: 云计算, DevOps, 人工智能, 平台工程, Kubernetes

> 本期 InfoQ 播客由编辑团队和专家从业者共同探讨 2025 年的云和 DevOps 趋势。主要议题包括：AI 的普及，但尚未达到企业级应用的标准，正从聊天机器人演变为 AI 代理，这需要人工监督和有效治理。云环境日益多元化，区域云供应商的出现和对数字主权的关注，使得混合云和多云成为更常见的选择，而 Kubernetes 则稳固了其作为底层基础设施的地位。平台工程备受管理层关注，但“平台即产品”的有效落地仍面临挑战，需要重视价值流导向，减少工具碎片化。“以更少的资源做更多的事情”的理念推动了 FinOps 的发展和整合，促使企业在 AI 预算受限的情况下，更加重视战略性的自建或购买决策。最后...



### [BPF-LPM-Trie-性能优化详解](https://blog.cloudflare.com/a-deep-dive-into-bpf-lpm-trie-performance-and-optimization/)

2025-10-21 14:00:01 | 标签: BPF, LPM Trie, 性能优化, Linux 内核, 网络

> 本文详细 بررسی 了 Cloudflare 中 BPF LPM Trie 遇到的性能问题，特别是处理数百万条目时因操作缓慢导致的软锁和数据包丢失。首先简要回顾 Trie 数据结构，解释其在前缀匹配方面的效率，并介绍多位 Trie、路径压缩和级别压缩等优化概念。基准测试结果表明，查找、更新、删除，尤其是释放操作的性能显著下降。分析核心揭示 BPF LPM Trie 的双子节点设计限制了分支效率，阻碍了级别压缩等高级优化。此外，各个 Trie 节点的动态分配导致内存地址分散，随着 Trie 规模扩大，造成不利的 L1 dcache 和 dTLB 缺失。文章最后概述了 Cloudflare 对上...



### [关于-2025-年-10-月-20-日-Vercel-服务中断的更新---Vercel](https://vercel.com/blog/update-regarding-vercel-service-disruption-on-october-20-2025)

2025-10-21 13:00:00 | 标签: 云故障, 事件响应, AWS, Vercel, 分布式系统

> 本文全面回顾了 2025 年 10 月 20 日发生的 Vercel 服务中断事件，该事件由意外的 AWS `us-east-1` 故障触发。Vercel 强调其完全责任，详细描述了两个独立的事件：由于其全球缓存基础设施中的级联故障导致客户生产流量的临时中断，以及由特性开关提供商故障引起的控制平面（仪表板、API、构建）的二次中断。报告从请求的角度详细解释了本次中断，突出了诸如 DNS、CDN 和 L3-L7 防火墙等弹性组件。同时，也指出了诸如区域缓存和 `us-east-1` 特定函数调用等故障点。详细的时间表概述了 Vercel 的检测、重新路由、缓解和恢复工作。Vercel 承诺将进行...



### [软件工程治理：加速价值交付，降低安全风险](https://www.infoq.com/news/2025/10/software-engineering-governance/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-20 11:55:00 | 标签: 软件工程, 治理, 技术战略, DORA 指标, DevOps

> 本文借鉴了 Sarah Wells 的见解，将软件工程治理定义为一套能够实现一致、知情和安全的技术决策的原则、实践和工具。Wells 提倡治理应授权团队交付价值，并维护组织的安全、可靠性和成本效益，而不是通过繁琐的审批流程来创建瓶颈。文章强调了缺乏治理相关的重大风险，例如安全漏洞、未管理资源导致的云成本上升，以及由于团队不一致而导致的重复工作。它将有效的治理与 DORA 指标紧密联系起来，强调所有流程都需要“快速流动性”和“快速反馈”。Wells 还强调了清晰沟通的技术战略和组织技术雷达在指导分散决策中的关键作用。文章批评了传统的变更咨询委员会 (CAB)，认为它们在阻碍生产力的同时，提供了一...



### [AWS-ALB-现在支持原生-URL-和主机头重写](https://www.infoq.com/news/2025/10/aws-alb-url-host-header-rewrite/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-20 10:00:00 | 标签: AWS, ALB, 负载均衡, URL 重写, 主机头重写

> AWS 在其应用负载均衡器 (ALB) 服务中直接推出了原生 URL 和主机头重写功能，这是管理七层流量的一项重大增强。以前，需要复杂请求路由（例如修改 URL 路径前缀或更改主机头）的组织必须实施额外的代理层，如 NGINX Ingress Controller。这通常会导致架构复杂性增加、维护开销更高以及潜在的延迟。新的原生功能简化了此过程，允许用户直接在新或现有的 ALB 上配置基于正则表达式的 URL 路径和主机头重写。这些配置可以通过 AWS 管理控制台、AWS SDK 或 AWS API 进行管理，从而可以精细地控制到各种后端服务的流量流，包括 EC2 实例、容器和 Lambda ...



### [AWS-推出-EC2-实例认证](https://www.infoq.com/news/2025/10/ec2-instance-attestation/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-18 13:05:00 | 标签: 云安全, AWS EC2, 实例认证, NitroTPM, 可认证 AMI

> AWS 已经推出了 EC2 实例认证，这是一项重要的安全增强功能，使客户能够以加密方式验证他们的 EC2 虚拟机正在运行经过批准的软件配置。此功能由 Nitro Trusted Platform Module (NitroTPM) 和专门设计的可认证 AMI 提供支持，这些 AMI 包括表示其所有内容的加密哈希。该功能解决了关键的安全漏洞，以前，虽然可以删除操作员访问权限，但没有可验证的证据。AWS 首席安全架构师 J.D. Bean 强调了其在可信计算模式和利用完整 Nitro 实例功能方面的潜力。将以前在 Nitro Enclaves 中发现的保护扩展到标准 EC2 实例，这允许构建具有零...



### [Terraform-Google-Cloud-Provider-7.0-全面上市](https://www.infoq.com/news/2025/10/terraform-google-provider-7-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-18 09:00:00 | 标签: Terraform, 谷歌云, 基础设施即代码, 云安全, DevOps

> HashiCorp 宣布 Terraform Google Cloud Provider 7.0 全面上市，重点在于改进安全性以及对大规模谷歌云资源的管理和验证。这个主要版本引入了用于生成短期凭证的临时资源，并扩展了只写属性，以防止密码或 API 密钥等敏感数据存储在 Terraform 状态文件中。此外，更严格的模式验证现在可以在计划阶段更早地捕获配置错误。此版本与谷歌对 Terraform 的更广泛支持相一致。虽然它包含需要用户审查配置并需要遵循升级指南的重大变更，但这些增强功能显著提高了基础设施自动化的安全性和可靠性，对寻求更高安全保障的团队具有吸引力。



### [负载均衡监控组：面向高可用应用的多服务健康检查](https://blog.cloudflare.com/load-balancing-monitor-groups-multi-service-health-checks-for-resilient/)

2025-10-17 14:00:08 | 标签: 负载均衡, 健康检查, 分布式系统, Cloudflare, 应用韧性

> 现代分布式应用需要比单服务检查更完善的健康评估。Cloudflare 的新监控组功能旨在解决这一问题，它允许用户将多个健康监控器捆绑到一个逻辑实体中。这使得可以直接在 Cloudflare 平台上进行复杂的多服务健康评估。用户无需再构建自定义聚合服务。该功能通过关键监控器、观察型探针和基于仲裁的健康状态提供细粒度控制。其中，关键监控器可以立即将端点标记为不健康，观察型探针用于在不影响健康状态的情况下进行监控，基于仲裁的健康状态则仅当超过 50% 的非关键活动监控器报告失败时，才认为端点不健康。Cloudflare 的全球网络增强了此系统的有效性。它从 300 多个数据中心执行健康检查，从而确保...



### [如何构建端到端机器学习流程追溯](https://www.freecodecamp.org/news/how-to-build-end-to-end-machine-learning-lineage/)

2025-10-16 13:43:13 | 标签: 机器学习血缘, MLOps, DVC, AWS Lambda, 数据漂移

> 本文详细阐述了机器学习流程追溯对于可靠的 ML 系统中的可重复性、可审计性和合规性的关键作用。它通过为部署在无服务器 AWS Lambda 上的 ML 应用提供实用的、逐步的集成指南，解决了创建全面追溯方案的复杂性。该解决方案概述了整个 ML 管道的覆盖范围，包括 ETL、使用 Evently AI 进行数据漂移检测、预处理、模型调优，以及风险/公平性评估的介绍，但在详细介绍后续阶段之前内容结束。DVC（数据版本控制）对于跟踪各阶段数据、实验、模型和预测至关重要，并将元数据推送到 AWS S3。Prefect 用于工作流编排，安排每周运行以检测更改并触发追溯流程。本文提供了详细的 DVC 配置...



### [HashiCorp-警告传统-Secret-扫描工具面临挑战](https://www.infoq.com/news/2025/10/hashicorp-secrets/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-15 07:00:00 | 标签: 应用安全, 密钥管理, DevSecOps, CI/CD, 云原生

> 文章强调了 HashiCorp 的警告，即传统的 Secret 扫描工具无法跟上现代软件开发的复杂性。这些工具通常依赖于提交后检测和严格的模式匹配，造成重大的安全漏洞。这导致高误报率、遗漏的自定义密钥和延迟的修复。微软和 Dropbox 发生的高调事件突显了凭据泄露问题的严重性。HashiCorp 提倡“预防优先”方法，强调在 IDE 中进行实时检测、提交前扫描，并扩大 CI/CD 管道、容器和协作平台的覆盖范围。目标是改善开发者体验，加速事件响应，并在开发生命周期的早期集成密钥管理。文章指出，这种转变是一种行业趋势，GitHub 正在扩展其推送保护功能，Gitleaks 和 Trivy 等开...



### [Kubernetes-部署十大错误：原因、修复方法及技巧](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632771&idx=1&sn=8ed9746f3d34820c1551bd30fa1b84d4)

2025-10-13 23:15:00 | 标签: Kubernetes, 部署, 故障排除, 容器, 云原生

> 本文聚焦 Kubernetes 部署中高达 80% 由配置错误引发的安全性与稳定性问题。作者首先分析了导致部署失败的三大关键原因：声明式配置错误、镜像与资源限制不当，以及节点与集群级问题。随后，文章详细列举并诊断了十大常见 Kubernetes 部署错误，包括 CrashLoopBackOff、ImagePullBackOff、OOMKilled 等，并为每个错误提供了具体的故障排除步骤和 `kubectl` 命令。为了帮助读者系统化解决问题，文章提出了一个通用故障排除框架，强调了 `kubectl describe`、日志检查、Dry Run、资源监控和健康探测的重要性。最后，作者分享了预防...



### [AWS-推出-ECS-托管式实例，用于容器化应用](https://www.infoq.com/news/2025/10/aws-ecs-managed-instances/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-12 06:38:00 | 标签: 云计算, AWS ECS, 容器化, EC2, 基础设施管理

> 本文宣布了 AWS 的新 ECS 托管式实例，旨在简化在 EC2 上部署容器化应用。它可以自动完成 EC2 实例的配置、扩展和维护，从而减少运营开销。该服务支持各种 EC2 类型，默认为成本优化的选择，并允许指定 GPU 加速等属性。与 Fargate 的一个主要区别是，可以选择底层实例并启用每个实例的多个任务的容器打包（或资源优化部署），从而提供更大的控制。它通过计划的补丁简化了维护。然而，社区讨论也强调了其潜在的复杂性，并且该服务在标准 EC2 成本之上引入了额外的按需付费费用。专家认为这是朝着更加灵活和易于管理的通用计算服务发展的重要一步。



### [破局云原生质量困境：如何构建可落地、轻量的全面保障体系？](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632714&idx=1&sn=66dbc242ecf1cb7ddaac19ec820b520d)

2025-10-10 23:15:00 | 标签: 稳定性保障, 云原生, 运维, DevOps, SRE

> 本文详细探讨了金融证券行业在云原生背景下，面对业务连续性、客户信任度和架构演进压力所带来的稳定性挑战。作者提出了一套全面的质量保障体系，强调运维左移，深度介入软件全生命周期，并构建智能协同防线。文章借鉴 Google SRE 模型，将稳定性保障分为被动防御、主动预防和架构免疫三层，并指出需要一个中枢神经系统将这些能力整合。为此，文章介绍了国泰海通的实践成果——君巡智检平台，该平台通过数据整合、指标量化与智能评估三大策略，构建了贯穿研运全流程的稳定性保障体系，实现了从传统救火式运维到预防性保障的转变。平台设计上，通过自动指标扫描与人工条目评审相结合，解耦数据采集与预处理，有效解决了数据分散、标准...



### [Cloudflare-通过“分片与调度”一致性哈希技术实现-Workers-99.99%-的热启动率](https://www.infoq.com/news/2025/10/workers-shard-conquer-cold-start/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-10 10:00:00 | 标签: 无服务器, 冷启动, Cloudflare Workers, 一致性哈希, 分布式系统

> Cloudflare 推出了名为“分片与调度”(Shard and Conquer) 的创新技术，旨在显著降低其无服务器平台 Cloudflare Workers 上的冷启动。随着 Workers 适配更大、更复杂的应用程序（脚本体积和 CPU 占用增加），冷启动时长超过 TLS 握手时间，最终用户可明显感受到延迟，这成为了日益严峻的挑战。为了解决这一问题，Cloudflare 借鉴了其 CDN HTTP 缓存中使用的一致性哈希方法。核心问题在于，低流量 Workers 常常因流量分散在多个服务器上而频繁经历冷启动，导致实例淘汰。新的架构将每个 Worker 的脚本 ID 映射到一个一致性哈希...



### [Azure-容器存储-v2.0.0-正式发布：性能提升高达-7-倍](https://www.infoq.com/news/2025/10/azure-container-kubernetes/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-09 11:00:00 | 标签: Kubernetes 存储, Azure 容器存储, NVMe, AKS, 有状态工作负载

> 微软正式发布 Azure 容器存储 v2.0.0，标志着 Azure Kubernetes 服务 (AKS) 上的有状态工作负载迎来重大进展。新版本通过优化的本地 NVMe 磁盘集成和条带分割技术，实现了高达 7 倍的 IOPS 提升和 4 倍的延迟降低。这意味着在实际应用中，PostgreSQL 的每秒事务处理量可提高 60%，而与 Kubernetes AI 工具链操作器 (KAITO， Kubernetes AI Toolchain Operator) 集成后，通过在 GPU 节点本地缓存模型文件，大型语言模型的加载速度可提升 5 倍以上。在架构方面，v2.0.0 简化了用户体验，不再使...



### [利用-Docker-和-Redis-实现时间序列模型的持久化状态](https://www.freecodecamp.org/news/how-to-persist-state-in-time-series-models-with-docker-and-redis/)

2025-10-09 01:18:59 | 标签: 时间序列模型, 状态持久化, Docker, Redis, Docker Compose

> 本文旨在解决开发人员在 Docker 中部署时间序列模型时面临的常见挑战：时间序列模型对历史上下文（内存）的需求与 Docker 容器的无状态、临时设计之间的固有冲突。文章详细阐述了 Docker 容器如何在重启时重置状态，导致“模型失忆”，进而使预测失效。为此，提出了将模型状态外部化至 Redis 的解决方案，使 Redis 成为能够记住历史数据的“外部大脑”。实践部分演示了如何通过 Docker 卷确保 Redis 数据在重启后持久存在，从而将系统从“非持久化”转变为“持久化”设置。此外，文章还简要探讨了使用 Redis 集群和 Sentinel 实现高可用性的扩展方案，并针对常见问题（如...



### [“开发-Linux-是业余爱好”？内核开发者：这是-Linus-唯一的错话，曾被忽视、嘲笑的-OS-打破“未来全是-Windows”的幻想！](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247823250&idx=1&sn=23ca714665fc1fff470770461574fe64)

2025-10-07 07:34:00 | 标签: Linux, 开源软件, 操作系统, 内核开发, 软件开发流程

> 文章整理了 Linux 资深内核开发者 Jonathan Corbet 在欧洲开源峰会上的演讲内容，深度回顾了 Linux 内核从 1991 年诞生至今的非凡发展。文章将 Linux 的成长分为“被无视”、“被嘲笑”、“战斗与抗争”和“赢得胜利”四个阶段，详细阐述了每个阶段的关键事件和从中汲取的经验教训。初期 Linux 因被视为“玩具”而遭忽视，但其独特的开放开发流程、GPL 许可证和内核与用户空间分离的模块化设计，使其建立了强大的社区并迅速成长。面对微软的嘲笑和 SCO 的法律诉讼，Linux 社区展现出惊人的韧性，并通过 BitKeeper 事件催生了 Git。文章还强调了开发工具、尽早...



### [为什么同样-3-年运维，有人成专家有人还在打杂！](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632706&idx=1&sn=57f3fcb9c4cb8e6ec0d9490e85dec5cc)

2025-10-07 00:01:00 | 标签: 运维学习, 职业发展, 知识体系, 系统运维, Linux

> 本文深度剖析了运维领域知识体系的广度与深度，指出运维学习的核心在于“学得准”而非“学得多”。作者通过“三层九域”模型（基础层、应用层、架构层）系统地梳理了运维所需技能，并针对新人常犯的“盲目追新”、“万金油”和“只学工具不学原理”三大误区给出了避坑指南。文章还提供了“明确目标岗位”、“最小闭环学习”和“7:2:1 精力分配”的学习路径选择，以及“搭建个人实验室”、“复盘故障案例”和“参与开源社区”等实战技巧，旨在帮助运维从业者高效成长，从技术执行者转型为解决方案专家。



### [Cloud-KMS-发布量子安全密钥封装机制，迎接后量子时代](https://cloud.google.com/blog/products/identity-security/announcing-quantum-safe-key-encapsulation-mechanisms-in-cloud-kms/)

2025-10-07 00:00:00 | 标签: 后量子密码学, Cloud KMS, 密钥封装机制, 数据安全, 混合密码学

> 本文宣布 Google Cloud 密钥管理服务 (Cloud KMS) 推出后量子密钥封装机制 (KEMs) 预览版，旨在帮助用户防御“先收集，后解密”攻击。文章指出，迁移到后量子 KEMs 并非简单的算法替换，而是一项架构转变。开发者应采用混合公钥加密 (HPKE) 等标准实现安全集成，并重视后量子算法带来的性能影响。为应对算法新颖性带来的潜在风险，建议采用结合经典和后量子算法的混合方案。Cloud KMS 支持 ML-KEM-768、ML-KEM-1024 (NIST FIPS 203 标准) 以及 X-Wing KEM，并通过 Cloud KMS API 和 Tink 等开源库提供集成...



### [OpenAI-如何使用-Kubernetes-和-Apache-Kafka-进行生成式-AI](https://blog.bytebytego.com/p/how-openai-uses-kubernetes-and-apache)

2025-10-06 15:30:46 | 标签: 流处理, 实时数据流, Apache Flink, Kubernetes, Apache Kafka

> 本文解释了 OpenAI 的高级流处理平台，该平台对于向其快速发展的 AI 模型提供大量新鲜数据至关重要。OpenAI 认识到批量处理的局限性，因此设计了一个基于 Apache Flink 的实时数据流解决方案。考虑到 Python 在 AI 开发中的广泛应用，该方案特别采用了 PyFlink 作为其 Python API。该平台解决了诸如云容量限制、需要提供对 Python 友好的开发体验以及管理多主节点 Kafka 设置等挑战。关键的架构组件包括用于多集群作业管理和故障转移的自定义控制平面、用于部署且具有每个命名空间隔离的 Kubernetes、用于动态 Kafka 拓扑调整的监控服务，以...



### [从基础到规模化：Vanguard-的-SRE-转型之路](https://www.infoq.com/presentations/vanguard-sre-transformation/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-10-06 13:06:00 | 标签: SRE 转型, 站点可靠性工程 (SRE), 可靠性工程, DevOps, 组织变革

> 本文详细介绍了 Vanguard 全面的 SRE 转型，从传统的单体发布和孤立的开发/运维 (Dev/Ops) 转变为具有持续交付的现代微服务架构。这一旅程始于由个人贡献者驱动 (IC-driven) 的混沌工程计划，从而开发了用于混沌和性能测试的自助式内部工具。在认识到最初的“本末倒置”方法后，该计划随后优先考虑强大的可观测性 (Observability)，标准化 OpenTelemetry，并采用服务级别指标 (SLI)、服务级别目标 (SLO) 和错误预算 (Error Budgets) 来进行细致的可用性评估，并采用 CASE 方法 (Context-heavy， Actionabl...



### [2025-年-CI/CD-现状：来自最新-JetBrains-调查的关键见解-|-TeamCity-博客](https://blog.jetbrains.com/teamcity/2025/10/the-state-of-cicd/)

2025-10-06 12:45:59 | 标签: CI/CD, DevOps, GitHub Actions, Jenkins, GitLab CI

> 本文介绍了 JetBrains TeamCity 博客中一项关于 2025 年 CI/CD 工具市场的调查。该调查由 JetBrains 的 TeamCity 和研究部门联合进行，共有 805 名参与者，探讨了工具使用情况、常见任务、挑战以及 AI 在 CI/CD 中的作用。主要发现表明，由于 GitHub Actions 的本地集成、易用性和免费层级，它是个人项目中最受欢迎的工具（使用率 62 %）。相比之下，组织仍然严重依赖成熟的企业工具，如 Jenkins 和 GitLab，GitHub Actions 也发挥着重要作用，但不如前者主导。调查强调了组织中“多工具并存”的现实，32 % 的...



### [静态-IP：更安全的连接---Vercel](https://vercel.com/changelog/static-ips-are-now-available-for-more-secure-connectivity)

2025-10-02 13:00:00 | 标签: Vercel, 云计算, 网络安全, IP 白名单, 无服务器函数

> Vercel 宣布即日起 Pro 和企业版客户可以使用静态 IP。此功能确保源自 Vercel 构建和函数的流量通过一致的、共享的静态 IP 地址路由。对于需要连接到外部服务或数据库，并强制执行 IP 白名单以确保安全的组织来说，此功能至关重要。用户可以通过项目或团队设置中的“连接性 (Connectivity)”部分轻松启用静态 IP。静态 IP 与 Vercel 现有的安全计算解决方案协同工作。安全计算为有更严格隔离要求的用户提供完全专用的 VPC 模型。推出静态 IP 是 Vercel 战略的一部分，旨在让更多企业级功能易于访问，并支持用户自助服务。



### [Airbnb-如何在-Kubernetes-上规模化、可靠地运行分布式数据库](https://blog.bytebytego.com/p/how-airbnb-runs-distributed-databases)

2025-10-01 15:30:18 | 标签: 架构设计, 分布式数据库, Kubernetes, 云原生, AWS

> 本文探讨了 Airbnb 如何在 Kubernetes 上大规模部署分布式 SQL 数据库，以应对有状态工作负载带来的挑战。与常见的模式不同，Airbnb 将数据库集群部署在多个 Kubernetes 集群上，每个集群映射到一个不同的 AWS 可用区，以提高可靠性和容错隔离。关键技术包括使用 AWS EBS 卷，并结合 Kubernetes 持久卷声明（PVCs），以实现持久化存储。这种方式支持快速重新挂载，并使用自定义 Kubernetes Operator 精细化地管理节点更换，确保数据库仲裁和数据一致性。本文还详细介绍了应对策略，包括使用准入钩子和序列化替换来处理计划内事件、主动基础设施...



### [Databricks-如何利用智能-Kubernetes-负载均衡优化服务通信](https://www.databricks.com/blog/intelligent-kubernetes-load-balancing-databricks)

2025-10-01 00:00:00 | 标签: Kubernetes, 负载均衡, 分布式系统, 微服务, gRPC

> 本文详细介绍 Databricks 如何克服 Kubernetes 默认负载均衡的局限性，特别是在使用持久 HTTP/2 连接的高吞吐量、延迟敏感型 gRPC 服务中。默认的四层负载均衡常因连接保持导致流量倾斜和高尾部延迟。Databricks 的解决方案是：一个由自定义 xDS 控制平面支持的无代理、客户端驱动的七层负载均衡系统，代表着架构上的重大转变。此系统提供实时服务发现，并支持 Power of Two Choices (P2C) 和区域亲和性路由等高级策略，直接集成到其内部 RPC 客户端框架中，确保客户端拥有服务拓扑的准确实时视图，从而通过 Envoy 集成改善内部和外部流量的分配...



### [利用-GKE-计算类和灵活-CUDs-轻松迁移至新-VM-系列](https://cloud.google.com/blog/products/compute/adopt-new-vm-series-with-gke-compute-classes-flexible-cuds/)

2025-09-29 00:00:00 | 标签: Google Kubernetes Engine, Compute Engine, 虚拟机系列, 云原生, 云基础设施

> 本文讨论了组织在 Google Kubernetes Engine (GKE) 环境中迁移到更新、性能更高的 Google Compute Engine (GCE) 虚拟机系列（例如，N4、C4）时面临的常见挑战。这些挑战包括兼容性测试、管理区域容量、应对与特定硬件绑定的财务承诺以及复杂的工作负载迁移。  拟议的解决方案集成了两个强大的谷歌云功能：GKE 计算类和计算灵活承诺使用折扣。GKE 计算类通过允许用户为 GKE 自动伸缩定义优先级排序的机器系列列表来提供技术敏捷性。这使得可以安全地、增量地推出新硬件，并在较新的硬件不可用时自动回退到较旧的硬件，从而最大限度地降低运营风险并确保应用程序...



### [Cloudflare-雷达推出新的区域互联网流量和证书透明度分析功能](https://blog.cloudflare.com/new-regional-internet-traffic-and-certificate-transparency-insights-on-radar/)

2025-09-26 14:00:01 | 标签: Cloudflare 雷达, 网络流量分析, 证书透明度, 网络安全, 数据可视化

> Cloudflare 雷达引入了两项重大增强功能：区域互联网流量分析和详细的证书透明度 (CT) 数据。区域流量分析提供了互联网趋势的本地化视图，支持在国家/地区内的更细粒度级别进行分析，包括字节、请求、设备类型和机器人/人类流量份额等指标，并利用地理名称数据进行精确的地理信息划分。这允许通过雷达界面、数据探索器和 API 对特定区域和自治系统内的流量模式进行精细探索。新的 CT 功能是 Merkle Town 的演进，提供了对 TLS 证书颁发的深入分析，涵盖了数量、特征（如公钥、签名算法、验证级别和持续时间）、证书颁发机构 (CA) 所有者的颁发趋势（例如，Let's Encrypt 的重...



### [消除冷启动-2：分片与征服](https://blog.cloudflare.com/eliminating-cold-starts-2-shard-and-conquer/)

2025-09-26 14:00:01 | 标签: Cloudflare Workers, 无服务器, 冷启动, 分布式系统, 一致性哈希

> Cloudflare 详细介绍了一种新技术——Worker 分片，旨在进一步减少其无服务器 Workers 的冷启动。文章解释说，随着 Workers 在复杂性和规模上的增长，之前在 TLS 握手期间进行预热的方法效果变差，导致冷启动时间超过握手持续时间。新方法利用类似于其 CDN 缓存的一致性哈希环，智能地将请求路由到数据中心内现有的热 Worker 实例。这种策略将低流量 Workers 合并到更少的服务器上，从而大幅降低淘汰率，并将热请求率从 99.9% 提高到 99.99%。文章还解决了服务器过载和复杂的嵌套 Worker 调用等挑战。为了应对这些挑战，文章采用了基于 Cap'n Pr...



### [瘦身-90%！如何将-Docker-镜像优化到极致？](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632656&idx=2&sn=ef9205140571af10dd5dc681753a51ab)

2025-09-25 23:16:00 | 标签: Docker, 镜像优化, 容器化, 构建优化, 多阶段构建

> 文章以一次生产事故为引，强调了 Docker 镜像优化在实际生产环境中的关键作用。作者作为运维老兵，系统性地介绍了五大核心优化策略：首先，推荐选用 Alpine 或 Distroless 等精简基础镜像以大幅减小体积；其次，重点阐述了多阶段构建的革命性作用，通过分离构建与运行环境，实现镜像的显著瘦身；接着，讲解了如何通过`.dockerignore`文件排除无关内容，以及通过合并`RUN`指令和优化层结构来提升构建效率和缓存利用率。文章还介绍了运行时优化技巧，如使用非 root 用户提升安全性和配置健康检查。此外，通过一个完整的 Node.js 项目实战案例，直观展示了优化前后镜像大小、构建时...



### [Cloudflare-开发者平台全面升级：更快、更强、更易用！](https://blog.cloudflare.com/cloudflare-developer-platform-keeps-getting-better-faster-and-more-powerful/)

2025-09-25 14:00:00 | 标签: Cloudflare 开发者平台, 平台更新, 开发者工具, 无服务器, 边缘计算

> 本文详细介绍了 Cloudflare 开发者平台的最新增强，重点在于提高性能、扩展功能和简化开发者体验。主要更新包括显著增强 Cloudflare Workers 的 Node.js 兼容性，从而支持更多 Node.js API 和软件包的无缝运行。AI 搜索服务（原 AutoRAG）现已支持 OpenAI、Anthropic 等多模型，应用场景不再局限于 LLM 应用检索。远程绑定现已正式发布，支持本地开发直接连接生产环境资源。Cloudflare Containers 提供更大的实例类型和更高的并发限制，而 Workers Builds 现已正式发布，拥有更大的磁盘空间和 CPU 算力。R...



### [Cloudflare-邮件服务私测版发布](https://blog.cloudflare.com/email-service/)

2025-09-25 14:00:00 | 标签: 邮件服务, 事务性邮件, 邮件路由, Cloudflare Workers, 无服务器

> Cloudflare 宣布推出邮件发送服务的私有测试版。这项新功能与 Cloudflare Workers 集成，旨在简化事务性邮件的发送，为开发者提供简单、可靠、深度集成的解决方案，从而减轻管理邮件基础设施的负担。它与现有的邮件路由服务相结合，形成统一的 Cloudflare 邮件服务，为应用程序的邮件需求提供完整的端到端解决方案。主要功能包括通过 Worker 绑定轻松集成，自动配置 DNS 记录（SPF、DKIM、DMARC）以确保高送达率，并通过 Cloudflare 的全球网络实现低延迟。该服务还支持现有的邮件框架（如 React Email），并提供邮件发送的可观测性。通过将邮件发...



### [GKE-Autopilot：所有合格集群均可使用](https://cloud.google.com/blog/products/containers-kubernetes/gke-autopilot-now-available-to-all-qualifying-clusters/)

2025-09-24 00:00:00 | 标签: Kubernetes, GKE Autopilot, 云计算, 容器编排, 自动扩缩容

> 本文宣布 GKE Autopilot 的容器优化计算平台普遍适用于所有符合条件的 GKE 标准集群。这一扩展使用户能够利用 Autopilot 完全托管的计算容量、快速的水平和垂直自动扩缩容以及仅为请求资源付费的成本效益等优势。这种集成通过新的内置 `autopilot` 和 `autopilot-spot` 计算类来实现，从而简化了工作负载部署。还引入了一种新的计算类配置机制，可以在不中断现有工作负载的情况下逐步采用这些功能。文章还重点介绍了在 Autopilot 管理的节点上使用 GPU 和 TPU 运行 AI 工作负载的便利性。这可带来自动化管理、更高的可靠性和更强的安全性。



### [为什么你的-Docker-镜像比我的大一倍？这-5-个致命差异是关键……](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632635&idx=1&sn=1e9c6f2fea6d497bf52bbb7567dfea50)

2025-09-22 01:46:00 | 标签: Dockerfile, 镜像优化, 容器化, 软件架构, CI/CD

> 本文深入探讨了资深开发者在构建 Docker 镜像时常用的五大技巧，旨在解决镜像臃肿、构建缓慢和生产环境稳定性差等问题。文章开篇通过一个初级开发者与资深开发者的对比，引出了镜像大小差异的“秘诀”——经验。首先，文章强调通过合并`RUN`指令并清除临时包元数据（如`apt-get clean`）来最小化镜像层数，有效减小镜像体积并提高构建效率。其次，介绍了`.dockerignore`文件的作用，指导开发者避免将不必要的本地文件（如`.git`、`node_modules`）复制到构建上下文中，从而加速构建过程并防止镜像膨胀。接着，详细讲解了多阶段构建的强大功能，允许在不同阶段使用不同的基础镜像...



### [Cloudflare-2025-年度创始人公开信](https://blog.cloudflare.com/cloudflare-2025-annual-founders-letter/)

2025-09-21 18:00:00 | 标签: 商业模式, 人工智能, 内容货币化, 互联网经济, Cloudflare

> 信中回顾了互联网 15 年发展，肯定加密技术进步，但 IPv6 普及缓慢。信中批判性地审视了互联网持久的基于流量的商业模式，认为该模式在推动内容创作的同时，也激励了低质量的标题党内容。作者认为，AI 驱动的“答案引擎”的兴起，直接提供答案而非搜索链接，从根本上颠覆了传统模式，导致内容创作者（尤其是媒体公司）面临巨大的流量和收入损失。他们警告说，这种转变对内容丰富的互联网构成了生存威胁。乐观地看，信中提出了一个新的、更健康的互联网商业模式，即 AI 公司认识到自身对内容的依赖，通过经济手段补偿创作者，奖励其创作的填补‘集体知识空白’的独特内容。Cloudflare 旨在通过开放标准、协作以及通过...



### [SGLang-×-RoleBasedGroup（RBG）：打通大模型推理-PD-分离架构规模化落地的“最后一公里”](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651256455&idx=2&sn=bb66bf6cd3f113924ab94e8975601948)

2025-09-18 06:01:00 | 标签: 大模型推理, PD分离架构, SGLang, RoleBasedGroup, Kubernetes

> 文章深入探讨了大模型推理 PD 分离（Disaggregated Prefill and Decoding）架构的显著价值及其在生产环境中落地的“鸿沟”。PD 分离通过将计算密集型预填充（Prefill）和显存密集型解码（Decode）阶段分开部署，能有效提升推理吞吐和降低延迟。然而，由于 LLM 推理服务本质上的状态依赖特性（特别是 KVCache 复用），与云原生环境（如 Kubernetes）擅长编排无状态服务存在矛盾，导致 PD 分离架构在部署、调度、升级、故障恢复和弹性伸缩方面面临巨大挑战。为解决这一难题，SGLang 社区开源了 RoleBasedGroup（RBG）项目。RBG ...



### [GKE-网络接口演进：从-kubenet-到-eBPF/Cilium-再到-DRANET](https://cloud.google.com/blog/products/networking/gke-network-interface-from-kubenet-to-ebpfcilium-to-dranet/)

2025-09-17 00:00:00 | 标签: 网络, Kubernetes, GKE, eBPF, Cilium

> 本文记录了谷歌 Kubernetes 引擎 (GKE) 网络接口的演进，其驱动力是容器化和 AI/ML 工作负载不断增长的需求。它从提供基本 Pod 连接的 `kubenet` (2015-2017) 开始，然后转向 `VPC 原生` (2018-2019)，该网络将 Pod 直接集成到 VPC 中，以增强安全性、性能和可扩展性 (GKE 数据平面 V1)。2020 年起，`eBPF 革命` 带来了重大突破，产生了基于 `Cilium` 构建的 `GKE 数据平面 V2` (DPv2)。DPv2 通过绕过传统的内核路径显著提高了性能，提供了内置的网络策略执行、深度可观察性和高级功能（如多网络和...



### [ARMO-研究揭示：io_uring-Rootkit-技术绕过-Linux-安全工具](https://www.infoq.com/news/2025/09/linux-security-rootkit/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-09-16 10:00:00 | 标签: Linux 安全, io_uring, Rootkit, 内核安全, eBPF

> ARMO 安全研究人员发现 Linux 运行时安全工具中的一个重大漏洞。该漏洞演示了如何利用 `io_uring` 异步 I/O 接口绕过传统的系统调用监控。他们开发了 "Curing"，这是一个完全通过 `io_uring` 操作运行的概念验证 Rootkit，成功逃避了 Falco 和 Linux 版 Microsoft Defender for Endpoint 等主要解决方案的检测。这种绕过利用了 `io_uring` 的共享环形缓冲区，这些缓冲区创建了一个替代通信路径。通常情况下，基于 eBPF 的安全代理不会监控此路径。该研究强调了当前仅依赖系统调用钩子的安全方法存在根本局限性，暴...



### [Pinterest-通过-PinConsole-平台整合工程工具](https://www.infoq.com/news/2025/09/pinterest-pinconsole-unified-idp/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-09-15 14:00:00 | 标签: 内部开发者平台, 开发者体验, 平台工程, Kubernetes, Backstage

> Pinterest 推出了统一的内部开发者平台 (IDP) PinConsole，旨在解决因部署、监控和服务管理等分散的工程工具所导致的效率问题。PinConsole 将这些工作流整合到一个统一的界面中，提供一致的抽象层，使工程师能够专注于业务逻辑，而无需关注基础设施的复杂性。该平台集成了持续部署、监控、告警和所有权元数据，并借鉴了 Backstage、Kubernetes 和 gRPC 等行业标准。在内部，PinConsole 利用构建于 AWS RDS 上的 PostgreSQL、Pinterest 的 Gestalt 设计系统，以及自定义的 PinCompute 插件来管理具有自定义资源...



### [软件开发困境与七大心智模型破局](https://www.infoq.com/podcasts/software-development-sucks-mental-models/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-09-12 09:00:00 | 标签: 软件开发, 团队效率, 心智模型, 敏捷方法, DevOps

> 本文为播客文字稿，探讨软件交付中的常见挑战，指出团队常在不理解基本原则的情况下盲目实践，并过度关注功能交付。Thanos Diacakis 提出了七大心智模型以应对这些挑战：识别四类工作（功能、缺陷、技术债务、风险），将技术债务视为亟需偿还的“主权债务”，每次关注一个瓶颈，优先考虑全局效率而非局部优化，限制在制品 (WIP)，先“执行”后“计划”，并将质量重新定义为快速修复错误的能力。他还概述了一个四步改进框架：从快速代码到生产开始，然后添加质量系统，管理复杂性，最后关注预测性计划。核心信息强调转变思维模式，以构建更有效、更愉悦的软件开发过程。



### [别等挂了才后悔！企业级-K8s-监控体系设计全攻略](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632485&idx=1&sn=a1738b841208bcb166e17d4cb3fb27dd)

2025-09-11 23:16:00 | 标签: Kubernetes, 监控系统, Prometheus, VictoriaMetrics, AlertManager

> 文章深入探讨了企业级 K8s 监控体系的构建，旨在实现基础设施、K8s 核心组件和业务应用的立体化覆盖。首先，文章详细阐述了 K8s 的分层架构和基于 Prometheus、VictoriaMetrics、AlertManager 及 Grafana 的监控体系设计要点，强调高可用和数据持久化。其次，介绍了以 AppID 为核心的告警分组策略和溯源机制。接着，提供了 Prometheus 高可用部署、镜像加速、指标采集（包括 K8s 内置对象和自定义 CRD 标签暴露）的具体实践步骤和脚本。最后，展示了全局概览和应用级监控看板的可视化设计原则及关键 PromQL。文章总结了标签治理、采集优化、...



### [Airbnb-Istio-升级-14-次零宕机！Google、Uber、Netflix-都在借鉴](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651255497&idx=3&sn=40884c467d9940cc3a1c8b7cea1c76bd)

2025-09-08 04:42:00 | 标签: 服务网格, Istio, 高可用, 零宕机升级, Kubernetes

> 文章深入剖析了 Airbnb 如何在数万个 Pod 和数千个 VM 上，成功执行了 14 次 Istio 升级而未发生任何宕机。其核心策略包括部署双版本 Istio 控制平面，利用 revision 标签区分版本，并通过 mutating webhook 将工作负载绑定到指定版本，实现金丝雀发布。为自动化此过程，Airbnb 开发了 Krispr 框架处理 Kubernetes 工作负载的标签更新，并利用 mxagent 和 mxrc 协调 VM 环境的 istio-proxy 升级。文章还对比了 Netflix、LinkedIn、Google 和 Uber 等公司在服务网格升级方面的不同实践...



### [利用谷歌云上的-Horizon-加速-Android-Automotive-操作系统构建，缩短产品上市周期](https://cloud.google.com/blog/topics/manufacturing/slash-android-automotive-os-build-times-and-get-to-market-faster-with-horizon-on-google-cloud/)

2025-09-08 00:00:00 | 标签: 汽车软件, Android Automotive 操作系统, 软件定义汽车, 云开发, DevOps

> 汽车行业正在经历一场向软件定义汽车 (SDV) 的深刻转型，这给制造商在软件交付效率和质量方面带来了重大挑战。谷歌和埃森哲联合推出了 Horizon，这是一个开源参考开发平台，旨在解决 Android Automotive 操作系统 (AAOS) 及其他领域所面临的挑战。Horizon 提倡一种虚拟优先的产品设计方法，通过车辆硬件抽象层 (VHAL)、虚拟化 I/O (virtio) 和高保真云端虚拟设备（如 Cuttlefish）与 AAOS 深度集成，从而实现可扩展的自动化测试，并为构建车辆的数字模型奠定基础。该平台标准化了整个软件开发生命周期，提供灵活的代码管理（Gerrit、Gemin...



### [AI-Week-2025：回顾](https://blog.cloudflare.com/ai-week-2025-wrapup/)

2025-09-03 15:00:01 | 标签: 人工智能安全, Cloudflare, 生成式人工智能, 人工智能开发, 云安全

> Cloudflare 2025 人工智能周发布了一系列产品、合作关系和功能，旨在帮助组织更安全地利用人工智能。回顾强调了四个核心领域：保护人工智能环境和工作流程，保护原创内容免受人工智能滥用，助力开发人员构建安全的人工智能体验，以及通过人工智能增强 Cloudflare 自身的服务。主要的新增功能包括 AI 提示保护、Shadow AI 分析和 Cloudflare One 中的 AI 应用信心评分，以管理员工的人工智能工具使用。对于内容创作者，Cloudflare 增强了 AI 爬虫洞察，引入了签名代理，用于对话搜索的 NLWeb/AutoRAG，以及 AI 爬虫控制。开发人员受益于升级后的...



### [OOM-杀进程-or-应用卡顿？该如何抉择](https://mp.weixin.qq.com/s?__biz=Mzg4NTczNzg2OA==&mid=2247508544&idx=1&sn=1489e52a70d66fd9601a44199367f29f)

2025-09-02 00:31:00 | 标签: 内存管理, Linux内核, OOM, 系统性能优化, 云原生

> 文章详细探讨了 Linux 系统在内存占用接近阈值（Near-OOM）时，因内核保守的内存回收机制可能导致系统负载飙升、应用卡顿甚至夯机的深层原因。它回顾了 Linux 内存水线机制及其在业务延时敏感场景下的不足。针对此问题，文章对比了业界主流的 oomd 方案在 cgroupV1 和 PSI 关闭场景下的局限性，并重点介绍了阿里云操作系统控制台推出的 FastOOM 功能。FastOOM 作为用户态提前杀进程的解决方案，通过采集预测模块实时判断内存压力，并根据用户配置的策略，支持节点和 Pod 级别的精细化 OOM 干预，有效避免了 Near-OOM 引起的系统抖动。文章通过两个实际案例（节...



### [高级自动扩缩容技术助力企业降低-70%-AWS-成本](https://www.infoq.com/news/2025/08/autoscaling-karpenter-automode/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-31 22:00:00 | 标签: Kubernetes 自动扩缩容, AWS EKS, Karpenter, AWS EKS 自动模式, 云成本优化

> 本文探讨下一代 Kubernetes 自动扩缩容技术，重点关注 Karpenter 和 AWS EKS 自动模式，以实现显著的云成本节约和性能提升。文章详细介绍了如何通过 Karpenter 替换传统 Kubernetes 集群自动扩缩器，并采用多架构设置（AMD64、ARM64），实现了 70% 的成本降低，资源利用率从 25% 提升至 70%。文章还介绍了 AWS EKS 自动模式，作为一种简化的演进，抽象了基础设施管理，并提供了类似的成本和时间节省。关键策略包括价格优化（例如竞价型实例）和效率优化（提升资源利用率）。文章强调了在实施这些高级工具时，可观测性和安全性至关重要，并为工程师提供...



### [小红书-FinOps-实践：云成本优化与资源效率提升之道](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651254580&idx=2&sn=87a3de3b050103743ef865a57eeeb293)

2025-08-29 05:15:00 | 标签: FinOps, 云成本优化, 资源效率, 混合云, K8s

> 文章深入剖析了小红书在 FinOps 框架下的云成本优化实践。首先概述了小红书大规模用云现状及其面临的成本挑战，如成本增速过快、归属不清晰。为解决这些问题，小红书推行技术商品化，实现内外账分离，明确采购、中台和业务团队的成本权责。在成本优化实践方面，文章详细介绍了 CPU 算力优化，包括解决在线业务混部中的 CPU 利用率分层和抖动问题，以及采用“大 VM 小 Pod”策略提升效率。针对 GPU 算力，则分享了内容大模型降本增效的经验，涵盖数据存储与传输优化（tfrecord 转 parquet）、智能调参、模型量化（FP8）和知识蒸馏等技术，显著提升了模型训练和推理效率，每年节省数亿成本。文...



### [Vercel-核心数据库故障转移测试：为最坏情况准备](https://vercel.com/blog/preparing-for-the-worst-our-core-database-failover-test)

2025-08-28 13:00:00 | 标签: 灾难恢复, 故障转移测试, 分布式系统, 云架构, Azure Cosmos DB

> 本文详细介绍了 Vercel 成功地将其核心控制平面数据库从 Azure 美国西部故障转移到美国东部 2，实现了零客户影响。文章强调，强大的架构固然重要，但定期进行灾难恢复计划的实际生产环境测试对于确保真正的系统韧性至关重要。准备阶段发现了一些重大挑战，例如专有的 Cosmos DB 客户端缺乏故障转移意识，以及转换期间数据库分区识别延迟等问题，这些问题需要深入的技术解决方案和广泛的预演测试才能解决。由配备齐全的随叫随到团队按照详细的运行手册管理的现场演练，验证了运维就绪状态。这次经历提供了宝贵的经验教训，强调了持续改进系统和流程以确保高可用性和快速故障恢复的重要性。



### [Crossplane-2.0-发布：同时支持云基础设施和应用管理](https://www.infoq.com/news/2025/08/crossplane-applications-v2/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-28 09:00:00 | 标签: 平台工程, Crossplane, Kubernetes, 云基础设施, 应用编排

> Crossplane 2.0 标志着一个重要的演进，将其范围从仅管理云基础设施扩展到使用类似 Kubernetes 的 API 进行全面的应用和基础设施编排。此版本使平台团队能够通过单个 YAML 清单部署应用程序及其所需的基础设施，从而简化了部署工作流程。关键的架构变更包括允许组合包含任何 Kubernetes 资源，而不仅仅是 Crossplane 管理的基础设施，这有助于为配置各种组件提供统一的抽象。引入的命名空间优先方法（即以命名空间为中心的架构）改进了多租户、细粒度的访问控制和资源隔离，从而脱离了以前的集群范围默认设置。此外，一种新的 Operation 类型支持用于升级和备份等任务...



### [Storage-Insights-数据集优化存储占用](https://cloud.google.com/blog/products/storage-data-transfer/storage-insights-datasets-optimizes-storage-footprint/)

2025-08-28 00:00:00 | 标签: 云存储, 云基础设施, 成本优化, Google Cloud, BigQuery

> 本文介绍了 Google Cloud 的 Storage Insights 数据集，这是存储智能的一项关键功能，旨在帮助云管理员和 FinOps 团队深入了解并有效控制其云存储占用情况。它直接解决了关键挑战，例如了解存储支出、数据分布和搜索特定元数据，这些对于成本优化、安全性以及合规性至关重要。Storage Insights 数据集自动生成关于云存储对象及其活动的综合报告，将这些元数据无缝集成到 BigQuery 链接的数据集中。然后可以使用熟悉的 BigQuery 工具分析这种结构化、可查询的数据，并且每 24 小时自动刷新。本文详细介绍了几个实际用例，包括计算内部成本分摊以进行成本归因，...



### [容器优化计算助力-Autopilot-实现自动伸缩](https://cloud.google.com/blog/products/containers-kubernetes/container-optimized-compute-delivers-autoscaling-for-autopilot/)

2025-08-28 00:00:00 | 标签: GKE, Kubernetes, Autopilot, 自动伸缩, 云计算

> 本文介绍了谷歌为 GKE Autopilot 设计的新容器优化计算平台，旨在解决以往自动伸缩的挑战。该平台通过动态调整 VM 大小和预配置容量，显著提升了应用扩展速度。新平台实现了更快的 Pod 调度、增强的应用响应，以及更高效的 HPA 性能。GKE Autopilot 1.32+ 已支持该平台，适用于通用工作负载，但不建议用于单 Pod 单节点或批量部署。



### [AWS-Lambda-响应流式处理将有效负载限制提高到-200-MB](https://www.infoq.com/news/2025/08/lambda-stream-200mb-payload/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-27 10:00:00 | 标签: AWS Lambda, 无服务器, 响应流式处理, 有效负载限制, 云服务

> AWS 宣布对其 Lambda 响应流式处理功能进行重大增强，将最大默认有效负载大小从 20 MB 增加到 200 MB。这一更新使开发者能够直接从无服务器函数中流式传输更大的高数据量响应。响应流式处理是一种调用模式，允许 Lambda 函数在生成部分结果时立即发送给客户端，无需缓冲整个响应。这种机制对于提高首字节时间 (TTFB) 性能至关重要，因为客户端可以立即开始渲染或处理数据。以前，处理超过 20 MB 的响应需要复杂的解决方法，例如压缩有效负载或使用 Amazon S3 等中间服务。增加的限制消除了这些复杂性，降低了开发者的延迟和维护开销。



### [Cloudflare-重新架构-Workers-KV-以应对-GCP-故障，实现-40-倍性能提升](https://www.infoq.com/news/2025/08/cloudflare-workers-kv/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-25 12:30:00 | 标签: 分布式系统, 键值存储, Cloudflare Workers KV, 混合存储, 冗余

> Cloudflare 已经重新架构了其 Workers KV 全局键值存储，以显著提高冗余性和性能。此举由 2025 年 6 月发生的严重谷歌云平台 (GCP) 故障所促使，该故障影响了其服务。本次重新架构改变了之前完全依赖 GCP 的策略，突出了关键边缘基础设施对外部依赖的风险。新的设计实现了混合存储架构：小对象（中值 288 字节）占据了 Workers KV 的大部分流量，存储在 Cloudflare 自己的分布式数据库中，而较大的对象会自动路由到 Cloudflare R2 对象存储。这种透明的路由由 KV 存储代理 (KVSP，KV Storage Proxy) 管理。  为了确保高...



### [Pinterest-在迁移到-Kubernetes-的过程中发现了罕见的搜索失败](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651253905&idx=3&sn=79df36d5d19c2a857e59f1066f0e42a0)

2025-08-23 02:16:00 | 标签: 云原生迁移, 故障调试, 时序问题, 边缘案例, Kubernetes

> 文章深入剖析了 Pinterest 在将其搜索基础设施迁移到 Kubernetes 过程中，遭遇并成功调试一个“百万分之一”搜索故障的经历。该故障表现为极低频率的查询不匹配，难以重现，最终被追溯到容器化组件与遗留基础设施过渡期间，网络和存储同步中的罕见时序条件。Pinterest 的调试方法结合了增量隔离、自定义日志记录、生产流量重放以及专门的诊断工具。文章强调，即使是周密计划的云原生迁移，也可能暴露未曾预见的边缘情况，需要组织投资于强大的可观测性、混沌测试和混合部署策略。通过对比 Netflix、LinkedIn 和 Airbnb 在类似迁移中遇到的挑战和解决方案，文章总结了在核心系统迁移至...



### [如何在-AWS-EKS-上部署-Kubernetes-应用](https://www.freecodecamp.org/news/how-to-deploy-a-kubernetes-app-on-aws-eks/)

2025-08-22 11:55:41 | 标签: Kubernetes, AWS EKS, 云部署, 容器编排技术, DevOps

> 本文详细介绍了如何在 Amazon Elastic Kubernetes Service (EKS) 上部署 Kubernetes 应用。首先概述必要前提，然后介绍 Kubernetes 集群的基本概念以及使用托管 EKS 的优势。指南重点介绍实践操作：安装 CLI 工具（eksctl、kubectl），创建 EKS 集群，定义应用清单（Deployment、Service/LoadBalancer），部署应用并通过公网 IP 访问。EKS 的托管控制平面、可扩展性和与 AWS 的集成，使其成为希望摆脱本地 Kubernetes 环境的开发者的理想选择。



### [使用-GitHub-Actions-自动化-Flutter-Android-和-iOS-应用的测试与构建](https://www.freecodecamp.org/news/how-to-automate-flutter-testing-and-builds-with-github-actions-for-android-and-ios/)

2025-08-21 21:59:14 | 标签: CI/CD, Flutter, GitHub Actions, 移动开发, 自动化

> 本文为 Flutter 开发者提供了一份详细的指南，旨在帮助他们使用 GitHub Actions 实施持续集成和持续部署（CI/CD）。首先，文章解释了集成 GitHub Actions 的诸多优势，例如自动化测试、持续构建、代码分析和简化的发布流程。随后，本指南阐述了实施 CI/CD 的先决条件，并继续介绍了实际操作步骤，包括创建 Flutter 项目、将其推送到 GitHub，以及设置 `ci.yml` 工作流程文件。文章细致地分解了工作流程的触发器和三个不同的作业：`flutter_test` 用于在 Ubuntu 上运行单元测试和代码分析；`build_iOSApp` 用于在 mac...



### [惊魂-72h！K8s-升级后，Java-应用集体“自杀”，竟因为这个“隐形杀手”……](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632324&idx=1&sn=2b673a74dee2b363a1f6b34a93f02bae)

2025-08-18 23:15:00 | 标签: K8s, Java, JVM, cgroup v2, OOM

> 文章记述了一次 K8s 集群从 CentOS 7.9 升级至 Ubuntu 22.04 后，部分 Java 应用出现 OOMKilled 的生产事故。作者首先尝试增加内存，发现治标不治本且资源消耗异常，随后通过对比 JVM 参数（jcmd VM.flags）发现 JVM 错误地认知了 Pod 的资源限制。最终定位到根本原因在于新系统默认启用 cgroup v2，而旧版 Java 运行时未能正确识别其资源限制。文章提供了两种解决方案：一是推荐升级 Java 运行时和依赖库以完全支持 cgroup v2，二是作为临时方案回退节点至 cgroup v1。整篇文章以实战案例的形式，详细展示了问题排查的...



### [以存储为基石：构建可扩展的-AI-模型工件管理方案](https://cloud.google.com/blog/topics/developers-practitioners/scalable-ai-starts-with-storage-guide-to-model-artifact-strategies/)

2025-08-15 00:00:00 | 标签: MLOps（机器学习运维）, 模型服务, 云存储, Kubernetes, 谷歌云

> 本文提供了一个全面的指南，旨在优化大型 AI 模型工件的存储和服务，解决常见的机器学习运维瓶颈，例如部署缓慢和启动时间延迟。它提倡将模型集中在谷歌云存储中，实现模型与代码分离，并将模型工件视为拥有独立生命周期的一等公民。讨论的关键优化技术包括量化，以减少模型大小并提高推理速度，以及缓存预热，以加速 LLM 的初始提示处理。该指南全面比较了各种模型加载策略，强调了云存储 FUSE CSI 驱动对于 GKE 的效率，该驱动将存储桶直接挂载到 pod 文件系统中，以实现近乎瞬时的启动。它还探讨了先进的高性能存储解决方案，如谷歌云托管 Lustre，以满足极端的延迟要求，以及 Hyperdisk ML...



### [理解-Yahoo-Mail-的多租户-GKE-平台设计](https://cloud.google.com/blog/products/containers-kubernetes/understanding-yahoo-mails-multi-tenant-gke-platform-design/)

2025-08-13 00:00:00 | 标签: 云迁移, GKE, 多租户, Kubernetes, 分布式系统

> 本文详细介绍了 Yahoo Mail 正在进行的多年迁移，旨在将其包含 100 多个服务的广泛应用程序迁移到谷歌云。该策略结合了现有基础设施的直接迁移方法，以及关键组件的战略性平台重构，以利用云原生功能。其中一个重要的重点是设计一个多租户 Google Kubernetes Engine (GKE) 平台，该平台由谷歌专业服务部门和 Yahoo Mail 团队广泛合作开发。设计过程包括对系统使用情况的详细分析、容量规划以及关于 GKE 集群、VPC 和工作负载组织的关键决策，从而平衡运营复杂性与风险缓解。多租户 GKE 平台的主要特征包括：使用节点池标签和污点/容忍度进行复杂的工作负载放置；通...



### [平台工程指南](https://cloud.google.com/blog/products/application-modernization/a-guide-to-platform-engineering/)

2025-08-13 00:00:00 | 标签: 平台工程, 内部开发者平台, 软件架构, DevOps, 质量特性

> 本文介绍了 Google 的“责任下沉”策略，这是一种平台工程方法，它将软件开发决策和责任直接嵌入到下层的内部开发者平台（IDP）中。这与“左移”DevOps 趋势形成对比，它通过减少单个开发人员的运营负担，并利用现有资源最大化价值。该策略旨在以可接受的质量、风险和可持续成本，在不同的商业模式中实现高创新速度。主要经验包括从商业模式倒推，关注中央软件控制的质量特性，利用抽象和耦合作为技术工具，以及采用共同责任、教育和策略作为社会工具。文章还强调使用“生态系统图”来使控制与业务风险对齐，并根据质量特性的监督和保证程度来识别不同的平台和生态系统类型。核心信息是在平台工程中做出主动选择，为特定的业务...



### [沙箱即服务：构建自动化-AWS-沙箱平台](https://www.infoq.com/articles/aws-sandbox-as-a-service/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-11 11:00:00 | 标签: 云架构, AWS, 云治理, DevOps, 自动化

> 本文探讨了当企业加大在云上的投入时，对安全、灵活和成本可控的实验环境的关键需求。它强调了缺乏规范的沙箱管理中常见的挑战，包括闲置资源导致的成本超支、隔离不足导致的安全风险以及手动配置带来的运维负担。为了应对这些挑战，文章提出了一个自动化的“沙箱即服务”框架。该框架的核心架构集成了 AWS Control Tower 用于账户配置和组织单元 (OU) 管理，AWS Organizations 通过服务控制策略 (SCPs) 来强制执行严格的安全和成本控制，以及 CloudFormation StackSets 用于基线配置。此外，它还利用临时云环境 (DCE) 等开源工具进行租约管理，并使用 A...



### [持续部署和结对编程助力精益软件交付，无需-Jira](https://www.infoq.com/podcasts/lean-software-delivery-without-jira/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-11 11:00:00 | 标签: 持续交付, 结对编程, 精益软件开发, DevOps, 主干式开发

> 在播客中，Sparebank1 的 Asgaut Mjølne Söderbom 和 Ola Hast 讨论了他们实现持续部署和结对编程的历程。他们强调从提交到生产环境仅需五分钟的交付周期，并将高质量代码和“开发者满意度”作为关键指标。Sparebank1 始于 2012 年的精益理念，以及 2016 年提出的从想法到生产环境 24 小时（从代码到生产环境 30 分钟）的大胆目标是基础。他们在 2018-2019 年实现了这些目标，从基于 ITIL 的流程和虚拟机过渡到基于 Kubernetes 的云环境，并由 Optimus 团队推动。关键实践包括小团队、高级别的 OKR 而非任务管理系统、...



### [Cloudflare-Quicksilver-多级缓存迁移实践：数十亿请求下的性能优化](https://www.infoq.com/news/2025/08/cloudflare-key-value-store/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-09 14:30:00 | 标签: 分布式系统, 缓存, 键值存储, Cloudflare, 系统架构

> Cloudflare 的工程团队详细介绍了内部全局键值存储 Quicksilver 从“在所有地方存储所有内容”的 V1 模型到新的 V2 多级缓存系统的复杂迁移过程。面对 330 个数据中心快速扩展的 1.6TB 数据集带来的不可持续的磁盘使用量，他们采用了一种增量式的分布式缓存方案。V2 架构结合了本地服务器缓存、数据中心范围的分片缓存以及专用存储节点上的完整数据集副本，利用 RocksDB 进行持久存储。这个复杂的转换涉及迁移数十万个实时数据库，同时每秒处理数十亿个请求，并通过多版本并发控制 (MVCC) 和滑动窗口技术严格保持顺序一致性。最终实现了存储效率的大幅提升，以及全球网络中亚毫...



### [平台团队：以同理心赋能软件开发](https://www.infoq.com/news/2025/08/empathy-driven-platform-teams/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-07 11:47:00 | 标签: 平台团队, 开发者体验, DevOps, 认知负荷, 心理安全

> 本文基于 Erin Doyle 在 InfoQ Dev Summit Boston 的演讲，阐述了同理心驱动的平台团队在软件开发中的关键作用。文章追溯了从传统 IT 运维到 DevOps 的演变，指出在赋予开发团队更多权力的同时，也带来了显著的认知负荷。这种负荷体现在决策不一致、成本管理不善和安全漏洞等问题上。核心在于，平台团队通过理解和体谅产品开发者面临的日常挑战，可以有效减轻这些负担。Doyle 建议平台工程师采取实际方法培养同理心，包括临时或永久嵌入开发团队，直接体验缓慢反馈循环、技术债务等问题。虽然嵌入有益，但也存在平台工程师被拉入产品工作，或开发团队过度依赖他们的风险，因此需要谨慎实...



### [后端-FinOps：云中微服务的成本效益工程](https://www.infoq.com/articles/backend-finops-cost-efficiency/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-08-06 00:00:00 | 标签: FinOps, 云成本优化, 微服务, 资源管理, Kubernetes

> 本文介绍了一种系统方法——后端 FinOps，旨在帮助工程团队将财务规范融入微服务的设计、部署和运营中。它强调持续的反馈循环，以实现持续的成本节省。文章详细说明了资源碎片化、无服务器冷启动开销和孤立资源等核心挑战，并量化了它们的隐藏成本。实证基准测试表明，编程语言的选择（Java、Golang、Python、.NET）和部署模型（Kubernetes/EKS、AWS Lambda、Azure Functions）如何显著影响成本和性能，其中 Golang 表现出卓越的效率，而 Java 则产生较高的冷启动成本。然后，本文概述了跨开发生命周期的可行 FinOps 模式：设计时策略（服务粒度、平台...



### [Kubernetes-环境中作业帮大模型服务流量调度优化实践](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651252174&idx=2&sn=dfd46cb8fda9fa9748d9a803c1a867cd)

2025-08-02 02:12:00 | 标签: 大模型服务, 流量调度, Kubernetes, 云原生, GPU优化

> 文章深入探讨了在大模型服务广泛应用背景下，Kubernetes 环境中传统 Ingress 在流量调度方面面临的挑战，包括基于路径的路由限制、缺乏并发控制、KV Cache 利用不足、不支持异构硬件优化以及成本跟踪缺失。为解决这些问题，作业帮提出并实践了一种创新的“模型网关（Model API Gateway）”方案。该方案集成了模型路由、基于最小堆的并发控制、KV Cache 亲和路由、异构设备感知调度以及基于 token 的成本分配五大核心功能。文章详细阐述了每项功能的实现原理、优势及其如何克服传统方案的痛点，最终实现大模型服务的易用性、稳定性、性能和成本管理的全面提升。该方案对企业级 A...



### [亚马逊如何在软件开发中应用安全措施](https://www.infoq.com/news/2025/07/guardrails-software-development/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-07-31 00:00:00 | 标签: 软件开发, 工程效率, 安全措施, 代码审查, CI/CD

> 本文基于 QCon San Francisco 的演讲和对 Carlos Arguelles 的采访，探讨了亚马逊如何在软件开发生命周期中实施安全措施，以在快速增长的同时保持生产力和质量。文章强调，虽然公司初期阶段通常优先考虑速度而较少采用安全措施，但随着规模扩展，采纳最佳实践并通过代码审查、覆盖率检查和 Linter 等自动化检查来强制执行这些实践变得至关重要。这些安全措施虽然会带来一定的阻力并降低初始速度，但对于保证质量和长期生产力至关重要。亚马逊的“左移测试”理念确保在内部开发循环中尽早发现问题，防止更大范围的影响。一个关键的区别是亚马逊的多仓库策略与谷歌的单体仓库策略；亚马逊的方法能够...



### [将-Elasticsearch-升级到新的-AWS-Java-SDK](https://www.elastic.co/blog/elasticsearch-upgrade-aws-java-sdk)

2025-07-30 01:26:22 | 标签: Elasticsearch, AWS SDK, 迁移, 云集成, 软件升级

> 本文详细介绍了 Elastic 将 Elasticsearch 的 AWS 集成从已弃用的 AWS Java SDK v1 升级到较新的 SDK v2 的关键过程，这是由 SDK v1 在 2025 年 12 月 31 日终止支持所驱动的。它透彻地解释了此次升级的必要性，以确保 Elasticsearch 用户的持续安全和支持。核心叙述强调了升级过程中遇到的工程挑战，特别是管理 SDK 版本之间的行为差异和调整测试方法。Elastic 的解决方案包括开发强大的兼容性层，并转向与 SDK 无关的端到端测试，旨在使大多数用户无感升级。文章最后建议用户进行潜在的、虽然很小的配置调整（例如显式设置 A...



### [速看！你的容器化正在扼杀应用程序性能……](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632097&idx=1&sn=91eaf5efa1e582c07fbaa2a63fa8a31e)

2025-07-28 23:15:00 | 标签: 架构设计, 容器化, 微服务, 性能优化, Docker

> 文章详尽阐述了容器化实践中易被忽视的性能开销，包括“容器税”、过度微服务化、内存过度分配、臃肿的容器镜像、不当的网络配置、监控盲区、资源限制误配、不合理的存储策略以及容器编排调优等九大陷阱。作者通过具体案例和优化前后对比，揭示了这些问题如何悄无声息地扼杀应用程序性能并推高云成本。最后，文章提供了一套系统化的修复方案，包括建立性能基线、分布式追踪、优化容器配置、重新审视架构决策和持续性能测试，为读者提供了实用的性能提升指南。



### [Pinterest-基于-AWS-EKS-的-Kubernetes-原生可扩展-Spark-架构：从-Hadoop-到云原生转型](https://www.infoq.com/news/2025/07/pinterest-spark-kubernetes/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-07-28 00:00:00 | 标签: 数据处理, Spark, Kubernetes, AWS EKS, Hadoop迁移

> 本文详细介绍了 Pinterest 从其传统的基于 Hadoop 的数据平台到 Moka（一个新的在 AWS EKS 上运行 Spark 的 Kubernetes 原生系统）的战略转型。迁移的主要原因是需要更现代化的基础设施、更好的容器编排能力和更高的安全性。Moka 利用基于容器的隔离和工作负载整合，允许将不同的工作负载整合到共享集群上，并支持基于 ARM 的实例，从而大幅节省基础设施成本并提高效率。此次转型涉及重新设计关键组件，例如任务提交（通过一项名为 Archer 的新服务）、调度（使用 Apache YuniKorn）、存储（从 HDFS 迁移到 S3），以及实施 Apache Ce...



### [Zapier-如何在-AWS-Lambda-上运行隔离任务并大规模函数升级-|-亚马逊云服务](https://aws.amazon.com/blogs/architecture/how-zapier-runs-isolated-tasks-on-aws-lambda-and-upgrades-functions-at-scale/)

2025-07-25 06:30:06 | 标签: 无服务器架构, AWS Lambda, 云运维, 运行时管理, 可扩展性

> 本文探讨了无代码自动化提供商 Zapier 如何利用 AWS Lambda 运行超过 10 万个隔离的自动化工作流程（Zaps）。文章重点介绍了 Zapier 的架构，该架构使用 Lambda 固有的安全功能（Firecracker microVM）来实现跨租户计算隔离。核心挑战在于如何保持大量 Lambda 函数更新到最新运行时版本。特别是考虑到 AWS 运行时弃用策略，这项任务尤为繁琐。Zapier 的解决方案涉及三个主要工作流程：使用 AWS Trusted Advisor 和 CloudWatch 识别和清理未使用的函数；根据使用情况和重要性确定升级的优先级；以及为工程团队提供自动化工...



### [Azure-Pipelines-中-GitHub-API-调用的简化方法](https://github.blog/enterprise-software/ci-cd/how-to-streamline-github-api-calls-in-azure-pipelines/)

2025-07-24 16:00:00 | 标签: CI/CD, Azure Pipelines, GitHub API, GitHub Apps, 身份验证

> 本文全面介绍了 GitHub API 调用在 Azure Pipelines 中的集成，旨在满足对 CI/CD 功能的扩展需求。文章重点比较了个人访问令牌、OAuth 令牌和 GitHub Apps 等身份验证方法。鉴于 GitHub Apps 在安全性、权限控制和速率限制方面的优势，文章推荐使用 GitHub Apps。文章阐述了 GitHub App 的两步身份验证流程（JWT + 安装令牌），并介绍了在 Azure Pipelines 中生成令牌的策略。文章强调应利用 Azure DevOps 扩展和服务连接，确保凭据管理的安全性。文章提供了深入的概念分析和实践案例，但在详细介绍自定义扩...



### [【吃瓜】这可能是-2025-年最荒谬的前端灾难：一支触控笔"干掉"了全球-CSS-预处理器](https://juejin.cn/post/7529903134296653839)

2025-07-23 07:10:08 | 标签: 前端开发, NPM, 包管理, CI/CD, 开源生态

> 文章以作者亲身经历开篇，讲述其 CI/CD 流水线因 CSS 预处理器 Stylus 包突然从 NPM 注册表消失而构建失败的离奇遭遇。在排查自身配置无果后，作者发现这是一场波及全球前端社区的重大事故。经过调查，真相令人啼笑皆非：NPM 的安全团队误将前端的“stylus”库与 ChromeOS 设备的“Stylus”触控笔混淆，导致该库被错误封禁。文章详细描述了这一乌龙事件对 Nx、TypeScript、Vue 等生态的巨大冲击，以及开源社区在官方无回应下，通过 GitHub 源、Package.json overrides 和国内镜像等方式进行自救的尝试。最后，作者深刻反思了对中心化 NP...



### [2025-年第二季度全球互联网中断分析](https://blog.cloudflare.com/q2-2025-internet-disruption-summary/)

2025-07-22 14:00:01 | 标签: 互联网中断, 网络弹性, 全球连接, 网络监控, Cloudflare

> 这篇 Cloudflare 博客文章全面总结了 2025 年第二季度观察到的互联网中断事件，利用 Cloudflare 全球网络的数据和观测能力，提供了对互联网中断的独特见解。该报告将中断事件分为政府主导的关闭（利比亚、伊朗、伊拉克、叙利亚、巴拿马，通常与政治动荡或考试作弊有关）、电力中断（西班牙、葡萄牙、摩洛哥、波多黎各，突显了互联网对稳定电力的依赖）、光纤电缆中断（海地、马拉维）、重大技术问题和网络攻击（俄罗斯）。报告强调这只是一个总结，并非详尽的列表，并使用基于字节的和基于请求的流量图来展示影响。分析强调了连接中断的多种原因以及基础设施在互联网弹性中的关键作用。



### [AWS-为-ECS-引入集成蓝绿部署功能](https://www.infoq.com/news/2025/07/aws-blue-green-ecs/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-07-22 00:00:00 | 标签: 蓝绿部署, AWS ECS, 容器化, 部署自动化, 云服务

> 这篇 InfoQ 文章宣布了 AWS 针对 Amazon Elastic Container Service（ECS）的新的集成蓝绿部署功能，解决了开发团队之前依赖复杂的自定义工具或 AWS CodeDeploy 所面临的重大挑战。新功能简化了容器化应用程序的部署过程，实现了安全发布，并具备接近即时回滚的能力。它与现有的 ECS 配置无缝集成，允许用户通过 ECS 控制台、AWS CLI 或基础设施即代码工具启用它。文章重点介绍了可配置的“观察期”和集成的生命周期钩子，这些钩子可以触发 Lambda 函数，以便在流量转移之前对新软件版本进行自定义验证和测试。它还将此功能与 Microsoft ...



### [用了十年-Docker，我为什么决定换掉它？](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247632041&idx=1&sn=5d3f102add9710ee5b9685f3bb5917d5)

2025-07-21 23:15:00 | 标签: 容器化, 软件架构, Docker, Kubernetes, 容器运行时

> 文章以“用了十年 Docker，我为什么决定换掉它？”为引，首先肯定了 Docker 在过去十年对软件开发和 DevOps 的巨大贡献，包括简化环境配置、推动微服务落地等。然而，随着系统规模膨胀和开发场景多元化，Docker 在资源占用、安全隐患（root 权限运行）以及与 Kubernetes 解耦等方面逐渐暴露出局限性。文章随后分模块介绍了多种替代方案：针对本地开发场景，推荐了 ServBay 这类轻量级、无需 Docker 的工具，旨在简化本地环境配置；在容器运行时层面，阐述了 containerd、runc、CRI-O 作为 Kubernetes 官方推荐运行时，以及 Podman（支...



### [Zendesk-推出基础接口平台，大幅简化基础设施供应](https://www.infoq.com/news/2025/07/zendesk-interface-platform/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-07-21 00:00:00 | 标签: 平台工程, 基础设施供应, Kubernetes 操作器, 自助服务, DevOps

> 本文详细介绍了 Zendesk 的新基础接口，这是一个统一的自助服务平台，旨在革新基础设施供应方式。工程师现在可以在声明式 YAML 文件中定义基础设施需求（例如数据库、对象存储、计算资源和密钥），这些文件会被自动验证、供应和监控。核心架构被描述为 'genie and helpers' 模型（即“精灵和助手”模型），包括用于初始验证的 Gatekeeper、将请求转换为 Kubernetes 自定义资源 (CRs) 的 Orchestrator，以及用于自动供应的特定领域 Kubernetes 操作器。Watchdog 组件持续监控 CR 的状态，确保与 Spinnaker 无缝集成以进行应...



### [在攻击者利用前检测-GitHub-Actions-工作流注入](https://github.blog/security/vulnerability-research/how-to-catch-github-actions-workflow-injections-before-attackers-do/)

2025-07-16 16:00:00 | 标签: GitHub Actions, 安全, 漏洞, CodeQL, CI/CD

> 本文重点介绍了 GitHub Actions 工作流注入作为一种常见的安全漏洞，攻击者利用问题标题或分支名称等不受信任的输入，在工作流中注入并执行恶意命令。文章解释了 `${{}}` 语法如何导致此类注入，并提供了一个实际示例。为了防止这些攻击，文章建议使用环境变量来处理不受信任的数据，遵循工作流权限的最小权限原则，并谨慎使用 `pull_request_target` 触发器。此外，文章还介绍了 GitHub 的代码分析工具 CodeQL，利用污点追踪技术有效检测这些漏洞，并鼓励采用该工具。核心信息强调持续的安全意识和主动措施。



### [Cloudflare-Q2-2025-DDoS-威胁报告：超大流量攻击激增](https://blog.cloudflare.com/ddos-threat-report-for-2025-q2/)

2025-07-15 14:00:01 | 标签: DDoS攻击, 网络安全, 威胁情报, Cloudflare, 僵尸网络

> Cloudflare 2025 年第二季度 DDoS 威胁报告全面分析了不断演变的 DDoS 态势，重点介绍了超大容量 DDoS 攻击的显著增加，规模创历史新高，达到 7.3 Tbps 和 4.8 Bpps。尽管与 2025 年第一季度相比，攻击量总体有所下降（由于第一季度前所未有的大规模攻击活动），但 2025 年第二季度仍然同比增长 44%。电信和服务提供商等关键基础设施行业仍然是主要目标。该报告详细介绍了受攻击最多的地点（中国、巴西、德国）和攻击来源（印度尼西亚、新加坡、香港）的变化。一个关键的发现是基于 VM 的僵尸网络日益普及和强大，据估计比基于 IoT 的僵尸网络强 5，000 倍...



### [Figma-每天-30-万美元的-AWS-账单凸显了云依赖风险](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651250574&idx=4&sn=2f7149792c5f18798ab1ff6ccd1a43bd)

2025-07-12 02:16:00 | 标签: 云计算成本, 云服务, 供应商锁定, AWS, 基础设施

> 文章以 Figma 在 IPO 文件中披露的每日 30 万美元（每年约 1 亿美元，占收入 12%）的 AWS 云成本为切入点，深入探讨了大型科技公司对超大规模云服务提供商的高度依赖所带来的财务和运营风险。文章指出，Figma 的基础设施与 AWS 深度耦合，不仅面临高昂的费用，还存在供应商锁定、服务条款变更以及潜在服务中断的风险。文章引用行业专家观点，强调了云服务并非简单的虚拟机租赁，而是深度集成到身份权限、网络、工具链等多个核心层面，使得从云平台迁移成为一项极其复杂且耗时的任务。此外，文章还提及了 37signals 等公司“退出云计算”并实现显著成本节省的案例，进一步论证了云计算成本随公...



### [OpenTofu-1.10-发布，支持-OCI-仓库和面向-AI-基础设施即代码-的-MCP-服务器](https://www.infoq.com/news/2025/07/opentofu-1-10/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-07-11 00:00:00 | 标签: Infrastructure as Code, OpenTofu, Terraform, DevOps, Cloud Native

> OpenTofu 1.10 是一个开源 IaC 项目，本次发布是其最全面的更新，引入了对提供商和模块分发的原生 OCI 仓库支持，这对于高安全性和气隙环境至关重要，也是与 Terraform 的一个重要区别。它还具有原生的 S3 状态锁定，无需 DynamoDB 和外部密钥提供商集成，以增强安全性和合规性。新的规划选项、全局提供商缓存锁定和 OpenTelemetry 跟踪等功能，均旨在提高开发者生产力。一个值得注意的补充是 MCP 服务器，旨在促进 AI 编码助手生成准确、最佳实践的资源配置，用于 AI 基础设施即代码，并辅以 VS Code 扩展和语言服务器协议支持。此版本巩固了 Open...



### [Kafka-网络成本失控？如何彻底根除-AWS、GCP-上的-Kafka-网络隐性成本](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651250398&idx=3&sn=3037432740fc2840ceab8848ca2c1b05)

2025-07-10 07:41:00 | 标签: Kafka, 云原生, 成本优化, 分布式系统, AWS

> 文章详细剖析了在 AWS、GCP 等公有云上运行 Apache Kafka 时，跨可用区（AZ）数据传输所产生的巨额隐性成本，指出其可能占总账单的 50% 以上。接着，文章引入了 AutoMQ 这一 100% 兼容 Kafka 的云原生解决方案。核心内容围绕 AutoMQ 如何通过重写底层存储架构，引入 S3 WAL（预写日志）机制，以及创新的机架感知 Broker 映射和自平衡调度，确保生产者流量始终在本地 AZ 内，从而彻底规避了 Kafka 数据复制带来的跨 AZ 网络开销。文章通过详尽的图文和数据，展示了 AutoMQ 在生产和消费路径上降低成本的原理，并探讨了不同 WAL 方案的适用...



### [Figma-每日-30-万美元-AWS-账单：云依赖的代价与风险](https://www.infoq.com/news/2025/07/figma-aws-300k-daily-bill/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-07-09 00:00:00 | 标签: 云计算, AWS, 厂商锁定, 云回迁, 基础设施成本

> 本文报道了 Figma 近期提交的 IPO 文件，显示其在亚马逊云服务 (AWS) 上的每日支出约为 30 万美元，每年总计约 1 亿美元，占其收入的 12%。Figma 对 AWS 基础设施的完全依赖使其容易受到性能漏洞和潜在的服务条款变更的影响，深度集成也增加了迁移难度。文章引用了 Scrimba 的 Per Borgen 和 Hacker News 评论员的观点，他们分别提倡使用专用服务器和强调云依赖的复杂性。Figma 的情况加剧了当前行业关于云成本上涨的争论，促使一些公司（如 37signals）探索云回迁策略，从而实现了可观的节省。文章最后将 Figma 的云账单视为一个鲜明的提醒...



### [Cloudflare-SASE-平台：基于主机名的简单安全出站策略](https://blog.cloudflare.com/egress-policies-by-hostname/)

2025-07-07 14:00:01 | 标签: 网络安全, SASE（安全访问服务边缘）, 出站策略, Cloudflare网关, DNS

> 本文详细介绍了 Cloudflare 的新出站策略，该策略允许客户根据主机名、域名、内容类别和应用程序来控制其组织的互联网流量。以前，此类策略依赖于目标 IP 地址，由于动态 IP 更改以及客户无法控制外部服务的 IP，因此带来了挑战。核心创新在于“合成 IP”机制：Cloudflare 网关的 DNS 解析器拦截 DNS 查询，并使用临时的内部 IP 地址（“初始解析 IP”）进行响应，然后使用此合成 IP 在网络第四层（L4）执行出站策略。在应用策略之后，网关会在转发流量之前将合成 IP 重写为实际的目标 IP。这种方法实现了基于网络第七层（L7）主机名信息，在网络第四层（L4）执行策略。...



### [eBPF-助力-NAS-分钟级别-Pod-实例溯源｜得物技术](https://mp.weixin.qq.com/s?__biz=MzkxNTE3ODU0NA==&mid=2247540454&idx=1&sn=f279b38d1e8d5e0b77dc96719066ddea)

2025-07-07 10:30:00 | 标签: NAS, eBPF, 分布式文件系统, NFS, Kubernetes

> 文章深入探讨了得物在分布式文件存储 NAS 场景下，如何通过 eBPF 技术解决传统监控无法定位到具体服务实例 IO 流量的问题。文章首先阐述了 NAS 基于 NFS 的工作原理及其在内核空间访问的局限性，导致 NFS Server 只能定位到主机级别。接着，详细介绍了通过关联进程 cgroup 信息和 NAS 挂载设备 ID，实现在内核中获取进程与容器上下文及 NAS 地址的关联数据。核心方案是利用 eBPF 在内核层捕获 NFS 文件操作的跟踪点数据，并结合用户空间缓存的容器与 NAS 元数据，实现分钟级别的 Pod 实例 IO 流量溯源。最终，文章展示了该方案在实际生产环境中构建的 NA...



### [Docker-Compose：赋能完整的应用生命周期](https://www.docker.com/blog/docker-compose-powering-the-full-app-lifecycle/)

2025-07-07 09:24:40 | 标签: Docker Compose, 容器化, DevOps, Kubernetes, 应用生命周期管理

> 本文介绍了 Docker Compose 作为现代应用开发必不可少的支柱，解决了从本地开发到部署的碎片化工作流程的挑战。它展示了一个“前后”场景，演示了 Compose 如何简化先前需要手动且易错配置的多容器设置。借助 Compose，开发人员可以使用单个 `compose.yaml` 文件来定义其整个应用程序堆栈，从而确保跨环境的一致性，增强安全性并集成调试工具。此外，本文还强调了 Compose 在简化 CI/CD 管道中的作用，通过镜像本地环境来实现可靠的集成测试。新的 Compose Bridge 功能被认为是一个至关重要的补充，它可以自动将 Compose 文件转换为可用于生产的 K...



### [安全性与便捷性——为何不能兼得？](https://www.infoq.com/presentations/security-productivity/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-07-03 00:00:00 | 标签: 安全, 生产力, BLISS 框架, 安全框架, DevOps

> 本文提出 BLISS 框架（隔离舱、层级、影响、简洁性、成功之坑）来解决软件开发中安全性与生产力的平衡问题。通过一个工程师排查关键问题的典型场景（涉及 VPN 故障、密码更换和环境访问问题），批判了传统安全措施在阻碍工作效率的同时却未能提升安全性的现象。该框架强调通过系统设计来限制安全漏洞的影响范围（而非单纯预防），简化安全实践流程，并将安全操作设为默认选项（'成功之坑'）。具体建议包括：放宽设备管理限制、采用长密码短语（如'正确马电池订书钉'这类 30 字符以上的短语）替代复杂密码规则，以及充分利用 CI/CD 流水线自带的安全防护机制。其中关于密码策略的讨论被特别强调为最具实操价值的建议。



### [在-Azure-Kubernetes-服务上运行高性能-PostgreSQL](https://azure.microsoft.com/en-us/blog/running-high-performance-postgresql-on-azure-kubernetes-service/)

2025-07-02 15:00:00 | 标签: PostgreSQL, Kubernetes, Azure, AKS, CloudNativePG

> 本文重点介绍了 PostgreSQL 在 Kubernetes 上的应用现状（目前占数据库工作负载的 36%）以及 Microsoft Azure 在 AKS 上运行高性能 PostgreSQL 的优化解决方案。Azure 提供两种存储选项：用于高性能本地 NVMe 存储的 Azure 容器存储（实现 14，812 TPS 和 4.321 毫秒延迟）和用于经济高效扩展的高级 SSD v2 存储（8，600 TPS 和 7.417 毫秒延迟）。通过与 CloudNativePG 集成，采用基于副本的架构和 Azure Blob 存储备份实现高可用性。基准测试清晰地展示了这些解决方案之间的性能与成...



### [Elastic-平台-8.18-和-9.0：ES|QL-Joins-新特性与-Lucene-10](https://www.elastic.co/blog/whats-new-elastic-platform-9-0-0)

2025-07-02 09:36:59 | 标签: Elasticsearch, ES|QL, Lucene, Elastic Cloud, 数据分析

> Elasticsearch 8.18 和 9.0 版本带来了多项重大更新，旨在提升用户工作流程效率和降低运维成本。ES|QL 引入了 Lookup Join，支持类似 SQL 的 LEFT OUTER JOIN 操作，简化数据分析流程；同时改进了超时查询的处理，并新增了标准差、MD5 等函数，增强了分析能力。logsdb 索引模式默认启用，优化了日志存储，降低了存储成本。Elasticsearch 9.0 运行在 Lucene 10 之上，提升了搜索效率和 I/O 处理能力。此外，新版本还简化了索引升级流程，并改进了 Kibana 的用户体验。这些更新旨在提升 Elastic 在搜索、安全分析...



### [Kubernetes-2.0-会是什么样子](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651249761&idx=2&sn=d04216b767f5e8455bbee230fcd913b5)

2025-07-02 08:41:18 | 标签: Kubernetes, 容器编排, 云原生, 基础设施即代码, 配置管理

> 文章回顾了 Kubernetes 从 Borg 系统发展至今的历程，总结了其在容器编排领域的三大成功之处：1) 实现大规模容器部署的灵活性；2) 降低基础设施维护成本；3) 提供可靠的作业系统和服务发现机制。针对当前痛点，作者提出了 Kubernetes 2.0 的四大改进方向：1) 用 HCL 完全替代 YAML 作为配置语言，解决类型安全和可维护性问题；2) 支持可替换的 etcd 后端存储，提高资源利用效率；3) 设计名为 KubePkg 的原生包管理系统，取代 Helm 解决依赖管理和安全验证等核心问题；4) 默认支持 IPv6 以简化网络架构。文章特别强调'默认值是技术最强大的力量'...



### [HTTP-报文签名现已加入-Cloudflare-可信机器人计划，简化机器人身份验证](https://blog.cloudflare.com/verified-bots-with-cryptography/)

2025-07-01 11:00:01 | 标签: 网络安全, Cloudflare, 可信机器人计划, HTTP 报文签名, 机器人管理

> Cloudflare 宣布将 HTTP 报文签名集成至其可信机器人计划，旨在简化机器人运营商和网站所有者的身份验证流程。这种基于密码学的方法取代了 IP 地址范围和 User-Agent 请求头等可靠性较低的识别技术，提供了更安全、可验证的机器人识别方案。博客详细说明了机器人运营商如何使用报文签名加入可信机器人计划，包括生成签名密钥、托管公钥以及使用提供的开源密码学库对请求进行数字签名。网站所有者将受益于 Cloudflare 边缘节点网络对这些签名的自动化验证，无需额外配置即可实现更精准的机器人流量管理。文章还详细阐述了签名验证的技术实现细节、推动 IETF 标准化的长期规划，以及构建更可信...



### [JVM-GC-诡异问题排查，k8s-差点害死我……](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247631853&idx=1&sn=aae3ef8acdb899c187bec64e0c879f57)

2025-06-30 23:16:00 | 标签: JVM调优, 垃圾收集, JVM性能优化, Kubernetes, 容器化

> 文章详细记录了一个生产环境中 JVM 垃圾收集问题的完整排查过程。最初发现 GC 暂停时间经常超过 400ms，严重影响业务。通过从 ParallelGC 切换到 G1GC 的尝试，发现仍有问题。进而通过监控数据分析、JMX 事件监听、GC 日志检查等多种手段，逐步排除了各种可能性。最终发现根本原因是 K8s 资源隔离与 JVM 参数不匹配：JVM 感知到 72 个 CPU 核心，默认启用了 48 个 GC 线程，但实际 Pod 只分配了 4 个 CPU 核心，导致严重资源竞争。通过显式设置-XX:ParallelGCThreads=4 参数解决了问题。案例展示了系统性排查 JVM 性能问题的...



### [大厂裁员潮下的运维底牌：这-20-题不会=淘汰！](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247631843&idx=1&sn=2b07aac902e5d7588cccd9a58205018a)

2025-06-29 00:01:30 | 标签: 运维工程, Linux系统, 性能优化, 网络安全, 高可用架构

> 本文针对运维工程师的核心能力评估，精心设计了 20 个关键问题，覆盖 Linux 系统与性能优化、网络与安全、高可用架构、自动化与 DevOps、容器与云原生、故障排查实战以及进阶架构设计等 7 大领域。每个问题都配有详细的解答要点，包含具体命令、排查流程和优化策略。文章特别设置了评分标准：初级(<10 题)、中级(10-15 题)、高级(>15 题)，为求职者和在职工程师提供了清晰的技能评估框架。这些实战问题直接来源于企业真实生产场景，对技术面试准备和日常工作都有重要指导意义。



### [AWS-Lambda-现原生支持-Avro-和-Protobuf-格式的-Kafka-事件，并集成-Schema-Registry](https://www.infoq.com/news/2025/06/aws-lambda-avro-protobuf-kafka/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-06-27 00:00:00 | 标签: 云计算, AWS Lambda, Apache Kafka, 事件流处理, Schema Registry

> AWS 宣布，当在预配置模式下使用 Apache Kafka 事件源映射(ESM)时，AWS Lambda 现已原生支持 Apache Avro 和 Protocol Buffers (Protobuf) 格式的事件。这一增强功能通过直接与 AWS Glue Schema Registry、Confluent Cloud Schema Registry 及自托管 Confluent Schema Registry 等主流 Schema Registry 集成，简化了高效二进制 Kafka 事件的处理流程。  此前需要编写自定义代码来处理这些事件，现在 Lambda 的 ESM 原生支持 Sch...



### [Omarchy-震撼面世](https://world.hey.com/dhh/omarchy-is-out-4666dd31)

2025-06-26 23:07:19 | 标签: Linux, Arch Linux, Hyprland 瓦片式窗口管理器, 开发环境, 开发者工具

> David Heinemeier Hansson 发布了 Omarchy，这是他预配置的 Arch Linux 发行版，搭载 Hyprland 瓦片式窗口管理器，提供他心目中「理想范式」的开发环境。该配置包含 Hyprland 精美的默认设置（通常需要大量自定义）以及常用工具集。作为 Omakub（他的 Ubuntu 配置项目）的姊妹项目，Omarchy 面向高级用户，同时承认 Arch 以复杂著称的特性。Hansson 强调 Linux 在开发者中日益增长的吸引力，指出 Valve 的 Steam Deck（运行 Arch 系统）和知名 YouTuber PewDiePie 转向 Linux...



### [俄罗斯网民无法访问全球互联网](https://blog.cloudflare.com/russian-internet-users-are-unable-to-access-the-open-internet/)

2025-06-26 22:33:30 | 标签: 网络限速, Cloudflare, 俄罗斯互联网服务提供商(ISP), 俄罗斯, 网络错误日志

> 自 2025 年 6 月 9 日起，包括俄罗斯电信(Rostelecom)、梅加丰(Megafon)、维佩尔通讯(Vimpelcom)、MTS(莫斯科城市电话系统)和 MGTS 在内的俄罗斯互联网服务提供商开始实施流量节流措施，限制用户仅能获取 Cloudflare 防护网站的前 16KB 内容——这种新型技术手段导致绝大多数网页无法正常浏览。这一超出 Cloudflare 控制范围的措施影响了所有连接方式及协议(HTTP/1.1、HTTP/2 和 HTTP/3)，显然是俄罗斯为构建国内互联网隔离环境、降低对西方技术依赖度的系统性举措。Cloudflare 内部数据(含流量趋势、网络错误日志及...



### [Amazon-Bedrock-在-AWS-Landing-Zone-中的基线架构-|-亚马逊云科技](https://aws.amazon.com/blogs/architecture/amazon-bedrock-baseline-architecture-in-an-aws-landing-zone/)

2025-06-23 11:36:51 | 标签: 云架构, AWS, Amazon Bedrock, VPC Lattice, 网络安全

> 本文详细介绍了一种基线架构，旨在保护在 AWS Landing Zone 内对 Amazon Bedrock 的网络访问。该架构旨在解决数据保护、模型访问控制和成本优化等挑战。提出的多账户策略利用一个集中的生成式 AI 账户，工作负载账户可以通过利用 AWS VPC Lattice 的服务网络账户来访问该集中式 AI 账户。文章解释了 VPC Lattice 如何提供简化连接，通过授权策略（包括服务网络和服务级别）实现安全性，并利用 CloudWatch、CloudTrail 和 VPC Lattice 日志促进监控，从而确保以安全、受控的方式跨账户访问 AI 功能。



### [如何使用-Ansible-设置-Grafana-Mimir](https://grafana.com/blog/2024/07/23/how-to-set-up-grafana-mimir-using-ansible/)

2025-06-22 08:07:42 | 标签: Grafana Mimir, Ansible, DevOps, 配置管理, 监控

> - 使用 Grafana Ansible 集合部署 Grafana Mimir - 提供分步指南，包含代码示例和配置模板 - 配置高可用性 Mimir 部署 - 使用 Grafana 探索 Mimir 指标 - 展示 Ansible 在自动化 Mimir 配置和管理方面的强大功能



### [Docker-发布强化基础镜像](https://www.infoq.com/news/2025/06/docker-hardened-images/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-06-21 00:00:00 | 标签: 容器安全, 软件供应链, 漏洞管理, 企业安全, Docker

> Docker 推出了 Docker 强化镜像 (DHI)，这是一套新的最小基础镜像，专为生产环境使用而设计，并采用无发行版方法构建。通过移除 shell 和包管理器等不必要的组件，这些镜像显著减小了攻击面，与传统镜像相比，已知漏洞减少高达 95 %。DHI 包括针对严重漏洞的自动化补丁，并带有 SLA 保障，同时提供签名的 SBOM 和出处元数据，以增强软件供应链安全。它们被设计为与现有 Dockerfile 兼容的直接替换品，并提供一个定制层。与 Microsoft 和 GitLab 等合作伙伴的早期集成确保了与 CI/CD 工具的兼容性。初始目录涵盖 Python、Go 和 Java 等运...



### [Grafana：GitHub-工作流漏洞事后审查与安全改进](https://grafana.com/blog/2025/05/15/grafana-security-update-post-incident-review-for-github-workflow-vulnerability-and-whats-next/)

2025-06-20 04:27:45 | 标签: 安全, 漏洞, 事件响应, DevSecOps, GitHub Actions

> 本文详细介绍了 Grafana Labs 对一起安全漏洞的事后审查。该漏洞源于不安全的 GitHub Action，利用了 `pull-request-target`（目标拉取请求）。它允许从受信任环境中的恶意分支执行代码，从而暴露包括凭证在内的环境变量。通过 CIA triad（保密性、完整性和可用性）框架分析影响，调查确认没有生产系统受到入侵，没有代码修改，也没有客户数据暴露。作为回应，Grafana 将 Gato-X、Zizmor 和 TruffleHog 等开源工具集成到 CI/CD 流水线中。此外，还通过隔离式 Vault 和短期令牌增强了凭证管理，并增加了金丝雀令牌（一种预先部署的...



### [AWS-创新沙箱：临时环境的资源调配与管理](https://www.infoq.com/news/2025/06/aws-innovation-sandbox/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-06-20 00:00:00 | 标签: 云服务, AWS, 云管理, 环境管理, 沙箱

> AWS 推出了 AWS 创新沙箱（Innovation Sandbox on AWS），这是一个新的开源解决方案，旨在简化安全、经济高效的临时 AWS 沙箱环境的资源调配和管理。通过自动化安全策略、成本管理和账户回收流程，该解决方案解决了开发人员和组织面临的常见挑战。该解决方案利用 CloudFormation 和 Web UI，提供了即时账户调配、自动化成本监控（带有成本警告，但无硬性上限）、预配置安全最佳实践以及自动化账户清理等功能。它通过根据预定义时长或支出阈值回收账户来促进重用，而不是创建或关闭新账户。此次发布满足了社区对更易于使用的临时环境的长期请求，与以前的手动方法或竞争对手产品（...



### [AWS-开源-Smithy-API-模型：增强公共访问与开发者工具能力](https://www.infoq.com/news/2025/06/aws-smithy-api-models-opensource/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-06-19 00:00:00 | 标签: API, Smithy, AWS, 开源, 开发者工具

> AWS 已通过 Maven Central 和一个新的 GitHub 仓库公开发布了其权威的 Smithy API 模型。这些模型此前在内部用于 AWS SDK 和 CLI 的生成，使用协议无关的 Smithy IDL 定义，现已向外部开发者开放。此举旨在促进更广泛的生态系统，使开发者能够为不受官方支持的编程语言生成自定义 SDK，创建 API 实现（包括用于 AI 代理 的服务器存根），构建模拟测试器 或 IAM 策略生成器 等专用开发者工具，并更清晰地了解 AWS API 的行为。此举被视为对增强开发者 与 AWS 服务 的交互和相关工具具有重要意义。



### [理解-BigQuery-增强型向量化](https://cloud.google.com/blog/products/data-analytics/understanding-bigquery-enhanced-vectorization/)

2025-06-18 00:00:00 | 标签: 数据分析, 大数据, 云基础设施, 云服务, Google Cloud

> 本文介绍了 BigQuery 的增强型向量化，它是其高级运行时的关键组件，旨在提高查询性价比。它解释了增强型向量化如何通过直接处理编码数据（字典、游程长度编码）、应用如表达式折叠和公共子表达式消除等复杂的优化技术，以及利用可并行化连接和聚合算法，基于标准向量化执行进行了扩展。文章强调了与 BigQuery 的列式存储格式 Capacitor 更紧密的集成，这使得谓词下推和数据编码感知优化成为可能。一个具体的查询示例展示了通过这些技术实现的 21 倍加速。文章最后指出，增强型向量化将很快对所有客户默认启用，未来计划支持 Parquet 和 Iceberg 格式。



### [优化资源分配的-GKE-功能](https://cloud.google.com/blog/products/containers-kubernetes/gke-features-to-optimize-resource-allocation/)

2025-06-17 00:00:00 | 标签: Kubernetes, GKE, 资源管理, 自动扩缩容, 云服务

> 本文深入探讨了如何在 Google Kubernetes Engine (GKE) 中有效管理工作负载调度和资源分配，特别是在面临容量限制时。它将资源管理视为一个涉及成本、性能和灵活性的多维度约束优化问题。文章重温了 GKE 的四种维度的自动扩缩容（HPA、VPA、CA、NAP）的核心组成部分，强调了设置资源请求的重要性。接着，文章介绍了具体的场景以及相应的 GKE 功能来解决这些问题，例如使用优先级类和 Taints/Tolerations 处理固定容量，使用占位 Pod 和自动扩缩容配置集应对突发需求高峰，使用自定义计算类解决节点类型可用性问题，以及使用多集群编排器/网关解决跨区域容量问题...



### [Spanner-荣获-2025-年-ACM-SIGMOD-系统奖](https://cloud.google.com/blog/products/databases/spanner-wins-the-2025-acm-sigmod-systems-award/)

2025-06-17 00:00:00 | 标签: 分布式数据库, 云数据库, Google Cloud, Spanner, TrueTime

> 该文章宣布，Google 的 Spanner（一种全球分布式数据库）因其在全球规模上实现具备外部一致性的可串行化能力而荣获 2025 年 ACM SIGMOD 系统奖。文章重点介绍了 Spanner 的核心创新 TrueTime，该技术利用有界时钟不确定性确保事务跨数据中心反映真实的全球序列化顺序，解决了 ACID 保障与分布式可伸缩性之间的历史难题。文章详细阐述了 Spanner 作为 Google Cloud 服务 的价值，强调其 99.999% 可用性、简化运维和通过熟悉的 SQL 接口提升的开发者生产力。文章通过展示其在金融服务、游戏、零售和交通等行业的关键业务应用中的使用，证明了 S...



### [如何调试-CI/CD-流水线：使用可观测性工具进行故障排除手册](https://www.freecodecamp.org/news/how-to-debug-cicd-pipelines-handbook/)

2025-06-16 23:34:03 | 标签: CI/CD, 调试, 可观测性, DevOps, 故障排除

> 本文是一本实用的手册，介绍如何利用可观测性调试复杂的 CI/CD 流水线故障。文章对比了可观测性的深入洞察（结合日志、指标、跟踪）与传统调试的局限性。本指南比较了 Grafana Loki（一种轻量级替代方案）和精简的 ELK 技术栈在 CI/CD 可观测性方面的应用，并提供了详细的 Docker Compose 配置，以便在预算有限的基础设施上设置 Loki 和基本的 ELK 环境。文中还解释了如何配置 CI/CD 工具以输出日志、使用结构化日志，以及通过各种方法（本地、Docker 驱动、远程转发器）将 CI 代理连接到 Loki。目标是集中日志，以便进行有效搜索、分析和故障排除。



### [为何-Linus-一个人就能写出这么强悍的系统？](https://mp.weixin.qq.com/s?__biz=MzkzMjYzNjkzNw==&mid=2247631756&idx=1&sn=0a0b22fd430baaa3eb50e7a06afe97d5)

2025-06-14 00:03:00 | 标签: 操作系统, Linux, 开源, 软件工程, 技术领导力

> 文章深入探讨了 Linux 操作系统诞生的历史背景及其成功的多重因素。作者认为，尽管当代能编写操作系统的人不少，但在 80 年代末的技术和信息环境下，Linus Torvalds 的独立开发能力无疑是杰出的。更关键的是，Linus 通过在 BBS 上发布代码并接受广泛反馈和贡献，开创了一种适应互联网时代的大规模、去中心化开源协作模式，与传统“教堂”式开发形成鲜明对比。此外，文章强调了 Linus 独特的“无为而治”领导风格在管理和凝聚庞大开发者社区中的重要作用。最后，文章也提及了同期中国面临的更紧迫的 IT 发展任务（如中文支持），解释了当时未能从头开发操作系统的原因，并总结认为 Linux ...



### [Cloudflare-服务中断-2025-年-6-月-12-日](https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/)

2025-06-12 14:00:08 | 标签: 服务中断, 事后分析, Cloudflare, 基础设施故障, 依赖管理

> 本文提供了关于 2025 年 6 月 12 日 Cloudflare 严重服务中断事件的详细事后分析报告。此次中断持续超过两小时，全球范围影响了 Workers KV、WARP、Access 和 Workers AI 等关键服务。根本原因追溯至 Workers KV 服务的底层存储基础设施故障，该基础设施本身依赖于一家发生中断的第三方云提供商。尽管故障由外部触发因素引起，Cloudflare 仍承认对此负责，并强调其许多产品依赖 Workers KV 进行配置和身份管理。报告列出了对每个受影响服务的具体影响，并指出 DNS 和 WAF 等核心服务未受到直接影响。没有数据丢失，本次事件并非安全事...



### [我们将开发者移出门户：APIOps-和-IaC-如何重塑我们的-API-战略](https://www.infoq.com/articles/apiops-iac-reshaped-api-strategy/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-06-12 00:00:00 | 标签: APIOps, 基础设施即代码, API 管理, CI/CD, DevOps

> 本文详细介绍了一家公司如何从依赖手动、UI 驱动的 API 管理门户，转向利用基础设施即代码 (IaC) 的自动化 APIOps 方法。传统方法导致了不一致性、错误和瓶颈。通过以代码（OpenAPI、Terraform、Helm）形式定义 API、策略和基础设施，并通过 Git 管理，再经由 CI/CD 流水线（特别是 GitHub Actions）部署，他们消除了开发者对门户的直接访问。这一转型带来了显著提高的安全性、环境间的一致性、更快的 API 交付、降低的运维负载以及全面的可审计性，这些成果已通过减少部署时间和错误等指标得到验证。经验教训强调了工具链、验证、分阶段推广以及将 API 视...



### [Google-Cloud-Run-现在提供用于-AI-和批量处理的无服务器-GPU](https://www.infoq.com/news/2025/06/google-cloud-run-nvidia-gpu/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-06-09 00:00:00 | 标签: 云计算, 无服务器, 无服务器计算, Google Cloud, Cloud Run

> Google Cloud 已为其无服务器平台 Cloud Run 提供了 NVIDIA GPU 支持的全面可用性。此增强功能专为 GPU 加速工作负载设计，主要用于 AI 推理和批量处理。重点强调的关键优势包括按秒计费、自动缩容至零以提高成本效益、快速启动时间（不到 5 秒），以及对实时 LLM 响应等交互式应用的全面流式支持。该服务提供 NVIDIA L4 GPU 支持，无需配额请求，并且已生产就绪，提供 SLA 覆盖和区域冗余选项。在开发者社区中，该服务被认为相对于 AWS Lambda 等平台在现代 AI 工作负载方面具有竞争优势，因为 Lambda 的限制（超时、仅限 CPU）对现代 ...



### [EP166:-什么是事件溯源？](https://blog.bytebytego.com/p/ep166-what-is-event-sourcing)

2025-06-07 15:30:32 | 标签: 系统设计, 事件溯源, CRUD, CI/CD, 数据湖

> 本文汇编了几个简短的技术回顾，涵盖了各种系统设计和软件工程概念。它简要介绍了事件溯源，这是一种与 CRUD 不同的只追加日志范例，概述了从规划到生产的软件开发生命周期中的标准 11 个步骤，解释了数据湖的高层架构，描述了 Netflix 构建分布式计数器抽象的分层方法，并详细介绍了三步 TCP 握手过程。每个主题都配有简单的图示。文中还包含赞助内容和招聘信息。



### [优步针对微服务和大规模计算工作负载完成了大规模的-Kubernetes-迁移](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651246577&idx=4&sn=0d436113566422dc923f23c46461be3a)

2025-06-03 06:29:00 | 标签: 架构迁移, 微服务, Kubernetes, Mesos, 大规模系统

> 本文详细回顾了优步将其庞大的计算平台从 Mesos 迁移到 Kubernetes 的历程。文章指出，尽管 Mesos 在早期服务良好，但为了向更云原生的方向发展，优步决定进行这项影响全球数千服务的重大架构转型。这项大规模、复杂的迁移历时多年，优先确保了服务可靠性，采用了双栈方法，并精心调整了内部工具链。文中特别强调了迁移微服务和大规模计算工作负载（如机器学习训练、数据处理）的复杂性，并介绍了针对这些挑战开发的定制化解决方案，如使用 CRD 和 Federator。最终，这项企业级 Kubernetes 落地实践带来了运营效率、开发者生产力、资源利用率和可扩展性等多方面的显著提升，并为其他考虑类...



### [Cloud-Run-GPU-现已正式发布](https://cloud.google.com/blog/products/serverless/cloud-run-gpus-are-now-generally-available/)

2025-06-02 00:00:00 | 标签: 云服务, Google Cloud, Cloud Run, GPU, 无服务器

> Google Cloud Run 宣布正式提供 NVIDIA GPU 支持，使开发者能够在无服务器环境中运行 GPU 加速工作负载。主要优势包括按秒计费、针对零星工作负载的自动缩容至零以实现成本优化、快速启动（少于 5 秒）以及完整的流式支持。此功能已达到生产就绪级别，具有 SLA 覆盖和可用区冗余，并可在多个全球区域使用。至关重要的是，NVIDIA L4 GPU 支持无需配额请求，降低了入门门槛。此能力适用于请求驱动的 Cloud Run 服务（用于 AI 推理等实时任务）以及 Cloud Run 作业（用于批处理、模型微调和媒体处理）。客户评价强调了显著降低成本和提高效率。此次 GA 版本...



### [实战案例：检测跨百万级持久化对象的-Workers-构建错误](https://blog.cloudflare.com/detecting-workers-builds-errors-across-1-million-durable-durable-objects/)

2025-05-29 14:00:01 | 标签: CI/CD, 错误检测, 系统架构, 云原生, 分布式系统

> 本文阐述了 Cloudflare 如何运用 Cloudflare 开发者平台的各种组件，为其 Workers 构建 CI/CD 产品实现自动化错误检测系统。该系统旨在主动识别构建失败，不仅限于简单的成功/失败状态。它通过分析构建日志，区分用户错误和平台问题。系统利用 Workers 队列实时处理构建失败，从相关的 BuildBuddy 持久化对象中提取日志，并应用模式匹配进行错误分类。特别值得一提的是，文章详细介绍了一种创新方法：使用单个带有告警机制的持久化对象，协调处理存储在百万级持久化对象中的历史构建数据追溯流程，展示了在 Workers 环境中进行大规模后台数据处理和任务编排的有效方案。



### [Uber-完成微服务和大规模计算工作负载的-Kubernetes-大规模迁移](https://www.infoq.com/news/2025/05/uber-kubernetes-migration/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-05-24 09:00:00 | 标签: 基础设施迁移, Kubernetes, 微服务, 云原生, Apache Mesos

> 本文详细介绍了 Uber 历时多年的大规模迁移，将其整个计算平台从 Apache Mesos 迁移到 Kubernetes，横跨全球数据中心和云。该项目涉及转换数千个微服务和大规模计算工作负载，并通过双栈等风险规避策略优先考虑可靠性。主要技术挑战包括调整内部工具，以及通过自定义 Kubernetes 解决方案（如 CRD 和集群联邦层 (Federator)）专门处理资源密集型计算工作负载，如机器学习训练和数据处理。成功的迁移带来了显著的效益，包括提高运维效率、开发者生产力、资源利用率和可扩展性，助力 Uber 更好地采用云原生技术。本次迁移为类似的大型组织提供有价值的参考。



### [掌控您的-IP：Cloudflare-助力高效地址空间管理](https://blog.cloudflare.com/your-ips-your-rules-enabling-more-efficient-address-space-usage/)

2025-05-19 14:00:01 | 标签: 网络, Cloudflare, 分布式系统, BYOIP, IP 管理

> 本文通过介绍 Cloudflare 的 BYOIP (自有 IP) 前缀服务绑定新功能，解决了 IPv4 地址日益稀缺和成本增加的问题。以前，整个 BYOIP 前缀都绑定到单个服务。新功能允许客户将单个前缀的子范围同时分配给不同的 Cloudflare 服务，如 CDN、Spectrum 和 Magic Transit。文章详细阐述了为实现动态灵活性而克服的技术挑战，包括：使用 iptables/IP 集动态重分配前缀；更新基于 eBPF 的 Tubular 服务，实现动态 IP/端口绑定且无需重启服务；以及在庞大的服务器集群中协调这些变更。一个实际的例子演示了客户如何将 /24 前缀在 Sp...



### [亚马逊将开始对-AWS-Lambda-初始化阶段收费](https://www.infoq.com/news/2025/05/aws-lambda-init-phase/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-05-17 00:00:00 | 标签: 云服务, AWS Lambda, 无服务器计算, 定价, 云计算

> 亚马逊宣布，从 2025 年 8 月开始，将对特定托管运行时的 AWS Lambda 函数执行的初始化阶段 (INIT) 收费。 之前，只有调用 (INVOKE) 阶段会针对这些函数收费。 这一变化统一了不同 Lambda 打包方法（ZIP 与 OCI 容器）和并发模型（按需与预配置并发）的计费方式。在这些模型中，初始化阶段 (INIT) 已经包含在计费中。 虽然 AWS 将此视为标准化，且对用户的影响最小（通常影响不到 1% 的调用），但社区中的一些人认为这是变相的价格上涨。 文章解释了 Lambda 执行生命周期和常见的 INIT 阶段活动。 它强调了优化 INIT 持续时间以及利用 La...



### [AWS-Lambda-推出-CloudWatch-Logs-分级定价，扩展日志目标选项](https://www.infoq.com/news/2025/05/lambda-cloudwatch-logs-tiered/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-05-17 00:00:00 | 标签: AWS Lambda, CloudWatch Logs, AWS S3, AWS Data Firehose, 云日志服务

> AWS 更新了 Lambda 日志功能，实施了基于用量的 CloudWatch Logs 分级定价，指定为“供应商日志”。此更改显著降低了每月超过 10 TB 高用量用户的每 GB 成本，解决了常见的隐藏成本。此外，Amazon S3 和 Amazon Data Firehose 作为新的直接日志目标，无需自定义转发解决方案，从而为长期存档、高级分析以及与第三方可观察性工具的更轻松集成提供了灵活性。虽然 CloudWatch Logs 仍然是默认设置，但用户可以选择配置 S3 或 Firehose。这些更新旨在提供更直接和更具成本效益的日志记录体验，尤其有利于大型企业。具有自定义报告的用户可能...



### [适应性设计：云边一体化基础设施趋势](https://azure.microsoft.com/en-us/blog/adaptability-by-design-unifying-cloud-and-edge-infrastructure-trends/)

2025-05-15 19:44:56 | 标签: 云边协同, 云原生, 边缘计算, 混合云, Azure

> 本文基于 Forrester Consulting 的研究，探讨了云边集成技术如何提升业务适应性。研究显示，领先企业正积极采用云边融合方案，以增强客户体验、运营弹性与数据隐私。文章强调打破 IT 壁垒，优化人工智能部署，设计安全且可扩展的架构，并将云原生技术扩展到边缘。来自 Dick's Sporting Goods、LALIGA、AVEVA 和 Delta Dental 的案例研究说明了这些策略。文章建议采用 Azure 的弹性云方案来统一云和边缘，满足不断发展的基础设施需求，65% 的组织计划在未来 12 个月内合并其边缘和云环境。



### [如何使用多阶段构建创建轻量级的-Docker-镜像](https://www.freecodecamp.org/news/build-slim-fast-docker-images-with-multi-stage-builds/)

2025-05-14 15:06:11 | 标签: Docker, Docker 镜像优化, 多阶段构建, 镜像优化, 容器化

> 本文详细讲解了 Docker 多阶段构建的使用方法，通过 Flask 应用示例，演示如何使用多阶段构建优化 Docker 镜像，将构建过程分为多个阶段，从而在最终镜像中只保留运行时所需的依赖和代码，减少镜像体积。文章对比了多阶段构建和单阶段构建的 Dockerfile，并通过实际构建和镜像大小对比，突出了多阶段构建在减小镜像体积和提升构建速度方面的优势。文章还讨论了多阶段构建和单阶段构建的适用场景，为读者提供了选择依据。



### [基于事件驱动的发票处理系统实现高可用的大规模财务监控-|-亚马逊云科技](https://aws.amazon.com/blogs/architecture/implement-event-driven-invoice-processing-for-resilient-financial-monitoring-at-scale/)

2025-05-12 10:00:20 | 标签: AWS 架构, 事件驱动架构, 发票处理, 无服务器, 可扩展性

> 本文介绍了一种基于 AWS 的无服务器事件驱动架构，用于处理海量发票事件（每日高达 8600 万），并提供准实时可视化（满足 2 分钟服务等级协议）。详细描述了业务事件监控系统 (Business Event Monitoring System， BEMS)，该系统使用 Amazon API Gateway、Amazon EventBridge、Amazon SNS、Amazon SQS、AWS Lambda、Amazon Timestream (时间序列数据库) 和 Amazon QuickSight，每分钟可处理 60，000 个事件的突发流量。单元架构实现了独立区域扩展，同时确保金融合规...



### [Grafana-12-新特性：更智能、更易编辑且支持团队定制的动态仪表盘](https://grafana.com/blog/2025/05/07/dynamic-dashboards-grafana-12/)

2025-05-07 08:01:17 | 标签: 数据可视化, Grafana, 动态仪表盘, 可观测性, DevOps 工具

> 本文详述了 Grafana 12 基于 Scenes 库重构的动态仪表盘，在导航、编辑和架构设计方面的重大改进。关键特性包括：用于分段的标签页、快速导航的仪表盘大纲、降低视觉噪声的条件渲染，以及自适应面板的智能网格布局。基于 Kubernetes CRD 模型的新仪表盘架构通过自动数据源识别简化了 JSON 管理，减少差异噪声并提升可移植性。这些改进解决了多数据源大型仪表盘面临的视觉噪声和低效导航等挑战。目前作为实验性功能，由于可能影响自动化工作流，Grafana 建议在生产环境使用前先在开发环境充分验证。



### [游戏业务出海：TAPISIX-稳定运营实践](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651244212&idx=2&sn=b859f78ca5a757b9ff08414caae2b2d0&subscene=0)

2025-05-07 07:23:00 | 标签: 游戏出海, 业务网关, APISIX, Kubernetes, 可观测性

> 本文深入探讨了腾讯天美工作室群如何基于 APISIX 开源网关，构建定制化的 TAPISIX 业务网关，以满足其海外游戏业务对合规性、运维效率和可迁移性的需求。文章详细阐述了 TAPISIX 在网关扩展、部署运维、Runtime 运维以及其他方面的实践经验。在网关扩展方面，重点介绍了如何降低开发门槛、快速验证插件功能以及确保插件的可靠性，例如通过定制化插件实现鉴权、流量录制等功能。在部署运维方面，分享了如何选择合适的部署模式、利用 Kubernetes 进行配置管理以及实现配置热更新。在 Runtime 运维方面，探讨了如何进行 metrics 采集、trace 上报和日志收集，并突出了自研监...



### [Slack-如何优化其端到端流水线](https://www.infoq.com/news/2025/05/slack-optimizes-e2e-pipeline/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-05-05 00:00:00 | 标签: 持续集成和部署, 端到端测试, DevOps (运维开发), 单一代码仓库 (Monorepo), Slack

> Slack 的开发者体验团队通过优化其端到端 (E2E) 测试流程，实现了持续集成和部署 (CI/CD) 流程的精简，使工程师能够更快速有效地迭代。团队引入了前端构建条件判断机制。通过 Git 差异检测 PR (Pull Request) 是否包含 frontend 更改。如果没有检测到 frontend 更改，构建过程将跳过 frontend 构建步骤，而是重用存储在亚马逊 S3 中的预构建版本，并通过内容分发网络加速访问。这一优化使得 frontend 构建频率降低了 60%，总体构建时间减少了 50%。



### [Spring-Cloud-2025.0.0-RC1-又名-Northfields-已发布](https://spring.io/blog/2025/05/01/spring-cloud-2025-0-0-rc1-released)

2025-05-01 00:00:00 | 标签: Spring Cloud 发布列车, Spring Cloud, 微服务, Spring Cloud Config, Spring Cloud Gateway

> Spring Cloud 2025.0.0 发布列车的第一个候选版本（RC1）已发布，此版本基于 Spring Boot 3.5.0-RC1。主要更新包括：Spring Cloud Config 增加了对 AWS S3 存储桶中特定 YAML 配置文件 profile 的支持；Spring Cloud Gateway 允许注册自定义的过滤器和断言作为 Bean，并支持设置 Spring.webflux.base-path；Spring Cloud Task 增加了对远程分区和任务启动器的弃用通知；Spring Cloud Function Web 基本被弃用，由 Spring Cloud Ga...



### [Kubernetes-1.33-“Octarine”-发布：原生边车（Sidecar）和原地-Pod-资源调整](https://www.infoq.com/news/2025/04/kubernetes-octarine-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-04-30 00:00:00 | 标签: Kubernetes, 容器化, Sidecar, Pod, 云原生

> Kubernetes v1.33 “Octarine” 版本正式发布，带来了 64 项增强功能，旨在提升云原生应用的稳定性、可扩展性和安全性。重点包括将边车（Sidecar）容器提升为稳定状态，大幅简化服务网格和日志解决方案的部署，降低运维复杂度。原地资源调整功能也升级为 Beta 状态，允许管理员在不中断应用的情况下调整 Pod 的 CPU 和内存分配，提升资源利用率。此外，Service Account Tokens 的安全性得到增强，Service IP 地址分配系统经过优化设计，存储功能通过 CSI 迁移得到改进，IPv4/IPv6 双栈网络持续成熟，同时一些旧功能被弃用或移除。这些更...



### [Cloud-WAN：高级层级与验证对等互联提供商](https://cloud.google.com/blog/products/networking/premium-tier-and-verified-peering-providers-enable-cloud-wan/)

2025-04-30 00:00:00 | 标签: Cloud WAN, Premium Tier, Verified Peering Provider, Google Cloud, 网络性能优化 (Network Performance Optimization)

> 传统 WAN 在云和 SaaS 应用中，成本高、复杂且不够稳定。谷歌云的 Cloud WAN 通过高级层级和验证对等互联提供商 (VPP) 计划来解决这些问题。高级层级优化谷歌网络内及互联网的流量路由，确保数据传输快速稳定。VPP 计划识别与谷歌具有高质量连接的 ISP，简化了企业的连接，企业无需自行满足复杂的对等互联要求。结合高级层级和 VPP，Cloud WAN 提供了更高的性能、更低的延迟和更高的正常运行时间，从而提供更易于管理和高效的企业网络解决方案。



### [运维必须刻进-DNA-里的-20-条故障保命法则](https://mp.weixin.qq.com/s/_SE7ZpSBhgzqt1T195eKpA)

2025-04-29 00:00:00 | 标签: 运维, 故障排查, Linux, 服务器, 数据库

> 本文梳理了运维工作中经常遇到的 20 个高频故障，包括服务器无法访问、数据库连接失败/性能下降、磁盘空间不足、CPU 使用率过高、网络延迟高/DNS 解析失败等常见问题。针对每个故障，文章都详细列出了故障现象、排查步骤和修复方法，旨在帮助运维人员快速定位和解决问题，确保业务的正常运行。内容覆盖 Linux 系统管理、网络配置、数据库服务、应用服务等多个方面，具有较强的实用性和参考价值。



### [Capital-One-无服务器优先实践之路：经验教训与最佳实践](https://www.infoq.com/presentations/serverless-best-practices/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-04-24 00:00:00 | 标签: 无服务器, AWS Lambda, 最佳实践, 微服务, 云计算

> Capital One 分享了其采用无服务器优先战略的实践经验和最佳实践。文章首先介绍了采用无服务器架构的原因，包括合规和降低运维负担。接着，分享了在无服务器转型过程中遇到的挑战，如开发者学习曲线、成本控制和标准化问题，并介绍了如何通过建立无服务器卓越中心 (Center of Excellence， COE) 来解决这些问题。COE 负责制定 Lambda 默认配置、编程语言选择、命名规范和默认配置等标准，并提供培训和技术支持。文章还强调了开发最佳实践，如使用 SAM 工具进行本地开发和 CI/CD，以及延迟加载优化冷启动时间。最后，强调了成本控制的重要性，以及如何通过 CloudWatch...



### [工程生产力的拐点：以提升生产力和实现卓越运营为目标](https://www.infoq.com/news/2025/04/improve-productivity-excellence/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-04-24 00:00:00 | 标签: 工程生产力, DevOps, 开发者工具, 软件工程, 亚马逊

> 在旧金山 QCon 大会上，Carlos Arguelles 指出，随着公司在工程规模、成熟度和复杂性方面的增长，有必要投资于定制化开发者工具。文章将“拐点”定义为工程生产力投资开始显现价值的关键时刻。这些拐点包括工程师数量增加、高速增长、达到需要改进工程或卓越运营的成熟度水平以及进入新市场。文章引用了亚马逊在会员日事件后对负载测试、压力测试和混沌测试工具的投资。文章强调，识别这些拐点，并主动调整工程生产力工具，对实现卓越运营至关重要。



### [如何使用-Docker-容器化-Django-项目](https://www.freecodecamp.org/news/how-to-dockerize-your-django-project/)

2025-04-18 16:37:57 | 标签: Docker, Django, 容器化, Dockerfile, docker-compose

> 本文为 Django 开发者提供了一份 Docker 容器化项目的详细指南。文章从创建 Django 项目开始，逐步介绍了如何编写 Dockerfile 和 docker-compose.yml 文件，配置 Django 项目的运行环境。文章详细解释了每个步骤的目的和作用，包括设置环境变量、安装依赖、挂载数据卷等。此外，文章还提供了常见问题的解决方案，如端口冲突和数据库连接问题。通过本文，读者可以轻松地将 Django 项目容器化，实现环境一致性和便捷部署，从而简化部署和管理。



### [全球软件开发团队-TestOps-扩展实践](https://www.freecodecamp.org/news/scale-testops-for-global-software-development-teams/)

2025-04-17 15:41:07 | 标签: TestOps, DevOps, 自动化测试, CI/CD, 全球化软件开发

> 本文深入探讨了在全球软件开发团队中扩展 TestOps 的策略。文章介绍了 TestOps 的概念和挑战，例如沟通障碍和工具兼容性。主要策略包括使用 Jest 等框架标准化测试流程，采用 LambdaTest 等云工具，使用 GitHub Actions 自动化测试，以及通过 Slack 促进跨区域协作。文章还强调了将 TestOps 集成到 DevOps 管道的重要性，并突出了早期和持续测试的价值。文章通过医疗保健软件公司的例子，展示了如何使用 Cypress 实现自动化测试。此外，还讨论了如何利用 Docker 实现环境一致性的容器化，以及如何实现可扩展的测试编排。真实的案例，如使用 Gi...



### [Vercel-请求生命周期：应用感知路由的奥秘](https://vercel.com/blog/life-of-a-request-application-aware-routing)

2025-04-15 13:00:00 | 标签: 路由, Vercel, 云原生, CDN, 微服务

> Vercel 通过应用感知的网关处理请求路由，该网关理解代码库，减少手动配置和降低风险，最小化延迟，并支持更高级的架构。Vercel 的路由内置于平台中，作为一个应用感知的网关，能够实时解释应用逻辑，做出更智能的决策，例如跳过不必要的计算。文章详细介绍了 Vercel 如何利用框架代码定义基础设施，实现路由感知和应用感知，从而优化构建输出和请求处理。此外，还介绍了 Vercel 如何通过别名将域名映射到特定部署，实现即时回滚、增量发布和防止版本不匹配等功能。Vercel 的网关作为一个智能反向代理，能够基于实时代码逻辑，对请求进行持续评估和动态决策。这种方案提升了开发效率，改善了用户体验。



### [Cloudflare-Workers-上的下一代证书透明度日志-Azul](https://blog.cloudflare.com/azul-certificate-transparency-log/)

2025-04-11 14:00:01 | 标签: 证书透明度, 网络安全, 静态 CT API, Cloudflare Workers, Workers

> 本文探讨了证书透明度 (CT) 的演变和 CT 日志的运营挑战，介绍了 Cloudflare 基于静态 CT API 的下一代 CT 日志 Azul。Azul 是一个开源的 Rust 实现，利用 Cloudflare 的分布式全球网络和无服务器平台，提高了效率，降低了运营成本，并增强了可靠性。新的设计通过静态、可缓存的分片来组织日志数据。文章详细介绍了 Azul 的设计决策、实现和优势，强调了其降低 CT 日志运营商门槛并确保 WebPKI 安全的潜力。



### [用于在-Cloudflare-Workers-上构建安全混合云应用的全球虚拟私有云](https://blog.cloudflare.com/workers-virtual-private-cloud/)

2025-04-11 14:00:00 | 标签: 虚拟私有云, Cloudflare Workers, 混合云应用, 多云, 网络安全防护

> Cloudflare 发布了 Workers VPC 的预览版，旨在克服传统 VPC 在混合云应用开发中的局限性。Workers VPC 允许将 Cloudflare 上的应用资源分组到隔离的环境中，并使用 Workers VPC Private Links 私有连接连接到公共或私有云中的传统 VPC，从而简化了开发人员构建混合云应用的过程。这使得 Cloudflare 资源和私有网络中的资源可以互相访问，如同位于同一 VPC 中。Workers VPC 利用 Cloudflare 的网络和路由功能来降低出站费用并优化应用性能。该功能计划于 2025 年晚些时候发布。在此处表达兴趣并注册（英文...



### [使用-Workers、Durable-Objects-和-Queues-将-Super-Slurper-性能提升-5-倍](https://blog.cloudflare.com/making-super-slurper-five-times-faster/)

2025-04-10 14:00:00 | 标签: 数据迁移, Cloudflare Workers, Durable Objects, Queues, R2

> Cloudflare 使用 Cloudflare Workers、Durable Objects 和 Queues 重新构建了 Super Slurper，显著提高了数据迁移速度，最高可达 5 倍。文章详细介绍了原始架构及其性能瓶颈，包括 Kubernetes 资源约束和 PostgreSQL 单点数据库的限制。新架构通过使用 Workers 进行轻量级计算任务、使用 Queues 进行异步传输和自动扩展，以及使用 Durable Objects 作为分布式数据库来解决这些问题。此外，它还实施了处理重复消息的策略。测试表明，新架构在大型数据集上实现了高达 5 倍的迁移速度。



### [QCon-London-2025：Matthew-Liste-谈关键任务基础架构构建-20-年经验](https://www.infoq.com/news/2025/04/building-resilient-infra-qcon/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-04-10 00:00:00 | 标签: 平台工程, DevOps, 基础架构, 云平台, 可扩展性

> Matthew Liste 在 QCon London 2025 上分享了他过去二十多年在构建云基础架构平台方面的经验。他强调了在金融服务等关键领域，平台需要同时满足稳定性、安全性和可扩展性这三个核心要求。Liste 提出了几个关键原则，包括构建标准化的可互换组件，保持平台的常青状态（evergreen，即持续更新和维护平台），避免不必要的重复劳动（undifferentiated heavy lifting，专注于核心价值），以及在决策时要着眼于平台的长期可持续性（be long-term greedy，避免短期利益）。他还强调了团队文化和利用开源社区在平台建设中的重要作用，并分享了他在摩根...



### [Cloudflare-践行-CISA-安全设计承诺：加速内核更新](https://blog.cloudflare.com/cloudflare-delivers-on-commitment-to-cisa/)

2025-04-04 14:00:01 | 标签: 安全补丁, 内核更新, 自动化运维, Cloudflare, CISA

> Cloudflare 通过自动化 Linux 内核更新，展示了其履行 CISA 安全设计承诺的实践。面对安全补丁和用户体验的平衡难题，Cloudflare 采用 Unimog 负载均衡系统，安全地重启服务器，应用最新的内核补丁。在控制平面，Cloudflare 使用 Reboau 工具实现内核更新的自动化，确保基础设施及时获得安全补丁。Cloudflare 的内核生命周期管理流程，包括内部测试、员工体验和逐步推广到客户流量，确保更新的稳定性和性能。通过这些措施，Cloudflare 将内核更新频率提高到每月一次，显著减少了漏洞暴露时间，提升了整体基础设施的安全性和可靠性。Cloudflare ...



### [多因素身份验证-MFA-现已推出---Vercel](https://vercel.com/changelog/mfa-is-now-available)

2025-04-03 13:00:00 | 标签: 多因素身份验证, MFA, 安全, Vercel, 账户安全

> Vercel 宣布推出多因素身份验证 (MFA) 功能，用户可以通过基于时间的一次性密码 (TOTP) 验证器应用（如 Google Authenticator 或 Authy）或通行密钥 (Passkey) 来保护其帐户，有效降低账户被盗风险。MFA 增加了一个额外的安全层，即使初始登录方法遭到破坏，也能保护帐户安全。通行密钥 (Passkey) 登录方式本身即为双因素验证，无需额外验证。对于使用团队范围 SAML SSO 登录的用户，身份验证由身份提供商 (IdP) 负责，Vercel 内部不需要额外的身份验证步骤。



### [开源项目维护者必备的-5-个-GitHub-Actions](https://github.blog/open-source/maintainers/5-github-actions-every-maintainer-needs-to-know/)

2025-03-27 16:00:46 | 标签: GitHub Actions, GitHub, 自动化, 开源项目, 项目维护

> 文章介绍了五种对于开源项目维护者非常有用的 GitHub Actions（GitHub 自动化 Actions），解决人工处理问题 issue、代码评审、生成发布说明等重复性任务。首先，Stale Action (过期 Issue/PR 关闭 Action) 可以自动关闭不活跃的问题 issue 和拉取请求 PR，保持积压问题 backlog 的整洁。其次，Super-linter Action 可以进行代码风格检查、语法错误检测和安全漏洞识别，减少人工代码评审的工作量。Create-or-update-comment Action 能够自动发送欢迎消息或对检测到的问题进行标准化反馈。Rele...



### [Azure-Elastic-SAN-的新增功能](https://azure.microsoft.com/en-us/blog/whats-new-in-azure-elastic-san/)

2025-03-26 19:03:20 | 标签: Azure Elastic SAN, 块存储, 存储区域网络, 自动缩放, 快照

> 本文介绍了 Azure Elastic SAN 的最新功能和增强特性，旨在提高云环境中的高扩展性和成本效益。这些更新解决了传统 SAN (存储区域网络) 在云环境中的扩展性和成本问题。主要更新包括容量自动缩放，简化了存储管理并降低了成本；快照支持，实现了即时备份和灾难恢复；CRC (循环冗余校验) 保护，通过校验和验证来维护数据完整性。此外，文章还讨论了 Elastic SAN 在 Azure 虚拟机上的 SQL Server（提供高可用性和灾难恢复）、Azure VMware 解决方案（降低 TCO (总拥有成本)）和 Azure Kubernetes 服务 (AKS)（简化存储管理）中的应...



### [如何将你的-AWS-EC2-实例连接到-VS-Code](https://www.freecodecamp.org/news/how-to-connect-your-aws-ec2-instance-to-vs-code/)

2025-03-25 17:48:02 | 标签: AWS, EC2, VS Code, SSH, 远程开发

> 本文详细介绍了如何将一个 AWS EC2 实例连接到 Visual Studio Code，使开发人员能够直接从本地编辑器操作云端服务器。面向希望进行云开发的开发人员，它介绍了 AWS EC2 的概念和优势，然后提供了一个五步指南：创建 EC2 实例，配置 SSH 连接，安装编程语言（以 Java 和 Maven 为例），在 Visual Studio Code 中打开远程窗口，以及访问项目文件夹。每个步骤都包含屏幕截图和代码示例，以方便理解和操作。本文提供了多平台操作指南，为 Windows 和 Linux 环境提供了具体说明。



### [平台工程之旅：从复制粘贴部署到全面-GitOps](https://www.infoq.com/presentations/platform-engineering-journey/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-03-25 00:00:00 | 标签: 平台工程, DevOps, GitOps, 自动化, CI/CD

> 作者分享了职业生涯中总结的经验教训，包括技术快速发展、自动化节省时间、提前规划责任以及心理安全的工作环境的重要性。本文讲述了平台工程的演进，从最初的手动复制粘贴部署（解决了传统部署方式的低效和不可靠问题），到后来的自动化 CI/CD，再到完全的 GitOps。文章还介绍了技术雷达（Tech Radar）和 InnerSource 等实用工具和方法，以帮助企业更好地采纳新技术、提高协作效率。此外，文章还详细介绍了如何使用 Terraform Cloud 实现 GitOps，从而实现基础设施的自动化管理。



### [Cloudflare-Access-大幅增强私有应用支持，推出可重用访问策略](https://blog.cloudflare.com/improved-support-for-private-applications-and-reusable-access-policies-with-cloudflare-access/)

2025-03-20 13:00:08 | 标签: ZTNA, Cloudflare Access, 私有应用程序, 私有网络, 安全策略

> Cloudflare Access 通过支持私有 IP 地址和主机名以及可重用访问策略，简化了零信任网络访问（ZTNA）的部署和策略管理。过去需经 Cloudflare Gateway 间接实现，存在配置复杂、日志分散等问题；现在可直接在 Access 中定义私有应用。重新设计的自托管私有应用程序管理体验与公共主机名上的 Web 应用程序体验相匹配。用户现在可以直接在 Access 中定义私有主机名和 IP 地址的应用程序，并使用可重用访问策略。文章还介绍了私有应用程序的定义、访问方式，以及之前使用 Cloudflare Zero Trust 保护私有应用程序的方式，并解释了为什么新功能是一个...



### [Cloudflare：全新统一仪表盘，简化应用安全管理](https://blog.cloudflare.com/new-application-security-experience/)

2025-03-20 13:00:00 | 标签: 应用安全, Cloudflare, 安全仪表盘, 安全策略, 威胁检测

> Cloudflare 推出了全新的统一应用安全体验，旨在简化 Web 资产管理流程。通过集成 Web 应用防火墙（WAF）、DDoS 缓解、Bot 管理和 API 安全等功能，新仪表盘消除了不必要的界限，提供了一个集成平台，显著降低安全配置的复杂性，减少配置错误。新的体验包括：概览页面，用于聚合安全建议；简化安全分析，用于识别可疑活动；Web 资产页面，用于管理攻击面；以及统一安全规则页面，用于管理所有缓解规则。Cloudflare 旨在实现更高效的策略配置、更快的威胁检测以及对应用程序各个方面的一致保护。



### [DevOps-实践：质量保证工程师的转型之路](https://www.infoq.com/news/2025/03/DevOps-Quality-Assurance/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-03-20 00:00:00 | 标签: DevOps, QA, 软件测试, 自动化, 协作

> 本文探讨了质量保证工程师如何通过应用 DevOps 原则来优化软件开发流程，提升交付效率。InfoQ 采访了 QA Challenge Accepted 的 Nedko Hristov，分享了他作为质量保证工程师在 DevOps 方面的经验。文章指出，DevOps 通过自动化测试、持续集成和开发与 IT 团队之间的协作来简化软件开发，实现高效交付。QA 工程师的关键角色是利用其适应性、学习能力和沟通技巧，从失败中学习，并避免过度优化。文章强调了 DevOps 文化中开发、测试和运维团队之间协作的重要性。



### [TeamCity-2025-年路线图：更新用户界面、TeamCity-功能及其他-|-TeamCity-博客](https://blog.jetbrains.com/teamcity/2025/03/teamcity-roadmap-2025/)

2025-03-19 14:32:32 | 标签: 持续集成/持续交付, TeamCity, 研发运维, Jenkins, Kotlin 领域特定语言

> TeamCity 2025 年路线图包含旨在构建更高效、用户友好和安全的持续集成/持续交付平台的重大更新。它实现了 TeamCity Enterprise 界面的现代化，简化项目设置，并通过 YAML 支持和完整分支管理增强构建链编辑，从而可能将构建时间缩短高达 40%。版本控制系统集成得到改进，简化了连接；TeamCity 新功能简化了构建配置。依赖缓存得到增强，可自动管理通用构建系统目录，从而减少构建持续时间和成本。Jenkins 迁移工具简化了从 Jenkins 的迁移过程。此外，还探索了用于灵活构建链的动态管道，并使用 K2 编译器增强了 Kotlin 领域特定语言。通过从 Git 读...



### [高精度启发式规则提升机器人管理能力](https://blog.cloudflare.com/bots-heuristics/)

2025-03-19 13:00:00 | 标签: 机器人管理, Cloudflare, 规则集引擎, 机器人检测, 安全性

> Cloudflare 通过将机器人管理启发式规则从 Lua 引擎迁移到规则集引擎，解决了旧引擎在规则复杂性和部署效率上的限制。新引擎使用 YAML 语法，支持更灵活和精确的规则编写，显著提高了机器人检测的准确性，降低了误报率，并提升了规则部署速度。此外，Cloudflare 还为机器人管理企业客户提供了机器人检测 ID，增强了对机器人流量的可见性，并支持在防火墙规则中使用这些 ID 进行更精细的控制。新增的账户接管检测 ID 可以帮助客户识别可疑的登录活动，从而更好地保护应用程序。



### [利用人工智能迷宫对抗恶意爬虫](https://blog.cloudflare.com/ai-labyrinth/)

2025-03-19 13:00:00 | 标签: 人工智能安全, 人工智能防御, 人工智能爬虫, 机器人管理, Cloudflare

> Cloudflare 的人工智能迷宫利用人工智能生成的内容创建一个互联页面迷宫，这些页面会呈现给未经授权的 AI 爬虫，从而降低它们的效率并浪费资源。这有助于将它们识别为恶意机器人，增强 Cloudflare 客户的安全性。该系统使用 Workers AI 预先生成多样化且内容准确的内容，并将其存储在 R2 中以便快速检索。这些页面通过隐藏链接集成到现有站点中，对人类用户不可见，并充当下一代蜜罐。通过分析爬虫在人工智能迷宫中的行为，Cloudflare 增强了其机器人检测系统，并向所有客户提供此功能，包括免费套餐的客户。



### [通过新的-DDoS、泄露的凭据和机器人数据集扩展-Cloudflare-雷达的安全洞察](https://blog.cloudflare.com/cloudflare-radar-ddos-leaked-credentials-bots/)

2025-03-18 13:00:00 | 标签: Cloudflare, Cloudflare 雷达, DDoS, 泄露的凭据, 机器人

> Cloudflare 雷达通过添加新的以 DDoS 为重点的图表、泄露的凭据趋势和专门的机器人页面，扩展了其安全洞察。安全和攻击页面已被重构为应用层和网络层部分，以优化导航体验。应用层页面现在提供 DDoS 攻击的地理和网络视图，而泄露的凭据部分显示受损凭据的趋势。新的机器人页面提供对机器人流量来源和特征的及时洞察。这些更新旨在让用户从宏观层面了解新兴威胁，并帮助整个行业更好地理解这些威胁，通过识别和阻止恶意活动，帮助用户主动防御这些威胁。



### [如何使用-SigNoz-Terraform-Provider-自动化告警配置管理](https://www.freecodecamp.org/news/automate-alert-provisioning-with-the-signoz-terraform-provider/)

2025-03-17 19:09:07 | 标签: 自动化, Terraform, SigNoz, 告警配置管理, IaC

> 本文提供了关于使用 SigNoz Terraform Provider 自动化告警配置管理的全面指南，提供了详细的步骤和代码示例以供快速实施。它强调了自动化告警配置管理对于一致性、安全性、可扩展性和 CI/CD 集成的重要性，目标读者包括 DevOps 工程师、SRE 以及对基础设施自动化感兴趣的从业者。本文介绍了 SigNoz 和 Terraform，解释了它们协同的优势。它详细介绍了如何使用 Terraform 配置 SigNoz 告警规则，内容涵盖 Provider 设置、通知渠道定义和告警规则创建等方面。讨论了最佳实践和安全注意事项，例如版本锁定、凭证外部化和版本控制。还探讨了高级定制...



### [这样构建-K8s-中间件运维平台，运维真的能少遭很多罪……](https://mp.weixin.qq.com/s/4d8dhgkaU1qD0SYqgOZjzA)

2025-03-11 10:35:23 | 标签: 运维平台, Kubernetes, 中间件, 自动化运维, 多云管理

> 本文深入探讨了如何通过构建基于 Kubernetes (K8s) 的可视化运维平台，解决传统中间件运维面临的管理分散、成本高昂和黑屏操作依赖等问题。文章详细阐述了平台建设的核心目标，包括标准化运维操作、减少人工干预和提供直观的 UI 界面。文章还介绍了平台架构、多云管理、中间件运维 (Kafka 和 Elasticsearch)、Node 管理、PV 云盘管理、CPU Burst 管理和 YAML 管理服务等关键组成部分，展示了如何通过这些服务实现跨云资源统一托管、Kafka 扩容可视化、Node 资源高效调度、闲置云盘自动释放和配置变更安全可控。最后，文章总结了项目收益，包括运维效率提升、成...



### [多云应用的设计、实施与安全：突破云边界](https://www.infoq.com/presentations/multiple-clouds/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-03-11 00:00:00 | 标签: 多云, 架构设计, 数据管理, DevOps (开发运维), 云安全

> 本文讲述了企业采用多云策略时面临的挑战与解决方案。通过 Moota 公司的案例，展示了多云在冗余、成本优化和合规性方面的优势，例如通过在不同云平台部署服务来避免单点故障，利用各云厂商的定价优势来降低成本，以及满足不同地区的合规性要求。文章深入探讨了架构、CI/CD 和安全等方面的挑战，并提出了利用 Terraform (基础设施即代码)、Pulumi (基础设施即代码工具) 等云无关 IaC 工具，Knative (Serverless 框架) 等云无关 serverless 框架，以及 Kafka、RabbitMQ 等云无关消息队列来解决架构复杂性问题。对于 CI/CD 挑战，文章建议集成统...



### [SRE-Kubernetes-生产环境最佳实践清单](https://www.infoq.com/articles/checklist-kubernetes-production/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-03-10 00:00:00 | 标签: Kubernetes, SRE, 生产环境, GitOps, 监控

> 本文为站点可靠性工程师（SRE）提供一份关于在生产环境中管理 Kubernetes 的实用 checklist，旨在减少人为错误、提高问题解决效率。文章涵盖了 Kubernetes SRE 管理的关键领域，包括资源管理、工作负载放置、高可用性、健康检查、持久存储、可观察性和监控、GitOps 自动化和成本优化。通过遵循这些实践，可以降低工程师的学习和维护成本，并避免不必要的停机时间，从而确保 Kubernetes 环境的稳定性和效率。文章还强调了在开发和运营工作流程中嵌入 GitOps 和自动化实践的重要性，以确保它们在大型集群中统一且透明地应用，帮助 SRE 更好地管理 Kubernetes...



### [MongoDB-在-2024-年-Microsoft-Build-大会上的新动态](https://www.mongodb.com/blog/post/whats-new-from-mongodb-at-microsoft-build-2024)

2025-03-06 17:00:53 | 标签: MongoDB, Microsoft Build, Azure, 搜索节点, 开发者工具

> 在 2024 年 Microsoft Build 大会上，MongoDB 揭幕了新技术，包括在 Azure 上的搜索节点和开发者工具中的智能特性。



### [K8S-异常诊断之俺的内存呢](https://mp.weixin.qq.com/s/4j-1mn9C70_458s1SXx1bg)

2025-03-06 09:51:16 | 标签: K8S, Kubernetes, OOM, OOM 诊断, systemd

> 文章详细记录了一次 K8S 集群 OOM 故障的排查过程。通过分析驱逐 pod 的原因、节点资源使用情况以及 kubelet 配置参数，发现 cgroup 的 limit 值与节点 Allocatable 值不一致。进一步通过分析 OOM 日志，结合 K8S 和 systemd 的原理，最终定位到 systemd 覆盖了 kubelet 的 cgroup limit 值，问题原因是 kubelet 计算完保留值后，写入 systemd 的 memory.limit 后，再加载客户自定义配置重新计算 limit 的逻辑时，没有再次更新 systemd 的 memory.limit 的值。文章最后...



### [使用-Java-和-eBPF-构建超高性能防火墙](https://www.infoq.com/presentations/firewall-java-ebpf/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-03-05 00:00:00 | 标签: 防火墙, eBPF, Java, OpenJDK, Linux 内核

> 本文深入探讨了使用 Java 和 eBPF 构建高性能防火墙的方法。传统的防火墙方案性能较低，而 eBPF 技术允许开发者将自定义的包过滤逻辑注入到 Linux 内核中，在网络数据包进入网络协议栈之前进行处理，从而显著提高性能。文章详细介绍了 eBPF 的工作原理和优势，以及其在实际应用中的潜力。通过演示，展示了如何使用 Java 编写 eBPF 程序，从而简化内核级网络流量控制的开发过程。此外，文章还探讨了 eBPF 的生态系统和未来发展方向，并强调了其在网络安全和可观测性领域的重要作用。eBPF 通过 verifier 机制提供了安全保障。



### [Cloud-SQL-高可用性解析](https://cloud.google.com/blog/products/databases/understanding-cloud-sql-high-availability/)

2025-03-04 00:00:00 | 标签: 高可用性, 读写分离, Cloud SQL, 谷歌云, 数据库即服务 (DBaaS)

> 本文深入探讨如何利用谷歌云 Cloud SQL 实现高可用性和业务连续性保障。文章指出了传统数据库部署面临的挑战，如单点故障、维护停机和跨区域灾难恢复的复杂性。随后，详细介绍了 Cloud SQL 的高可用性特性，包括自动故障转移和通过读副本分离读写工作负载的最佳实践。文章重点介绍了 Cloud SQL Enterprise Plus 提供的增强硬件、数据缓存和近零停机维护等功能，这些功能可以显著提升数据库性能、简化扩展过程并缩短维护停机时间。最后，文章还提供了计划内维护的最佳实践，以进一步增强业务连续性。



### [AWS-推出-CDK-资源回收功能](https://www.infoq.com/news/2025/03/aws-cdk-garbage-collection/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-03-03 00:00:00 | 标签: AWS CDK, 资源回收, 基础设施即代码, 云资源, S3

> 亚马逊在 AWS CDK 中引入了资源回收的预览版。这项新功能会自动删除存储在 CDK 创建的 S3 存储桶和 ECR 仓库中的旧的、未使用的资产，这有助于降低维护和部署成本。`cdk gc` 命令允许开发人员查看、管理和删除这些资产，从而解决社区长期以来清理累积数据的请求。资源回收功能可以使用 `--rollback-buffer-days` 和 `--created-buffer-days` 等参数进行自定义，以控制资源回收的激进程度。此功能从 AWS CDK 2.165.0 版本开始提供，旨在节省存储成本，同时不影响客户使用 CDK 的方式。



### [Flux-v2.5-发布：通过-CEL-集成和-GitHub-应用认证扩展-GitOps-功能](https://www.infoq.com/news/2025/03/flux-gitops-release/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-03-03 00:00:00 | 标签: GitOps, Kubernetes, Flux, GitOps 工具, CEL

> Flux v2.5 版本发布，引入了多项新功能，显著增强了其功能性和灵活性。其中最重要的是集成了通用表达式语言（CEL），支持使用 CEL 表达式进行自定义健康检查，从而精确定义 Flux 如何判断自定义资源的健康状况，提升部署的可靠性。此外，Receiver API 现在支持基于 CEL 表达式过滤资源，从而更精细地控制触发调和/同步的事件。另一个重大改进是增加了 GitHub 应用身份验证支持，通过 Flux CLI 命令简化了配置，提供与用户帐户无关的身份验证机制，增强了安全性。Flux Operator v0.14 引入了临时环境，加速了开发流程的反馈。同时，该版本还包括多项 CLI ...



### [Kubernetes-跨集群-Pod-可用性保护](https://mp.weixin.qq.com/s/RTxnZLsl60L0MKykKRVvpg)

2025-02-28 02:45:31 | 标签: Kubernetes, 多集群, Pod可用性, 可用性保护, 高可用

> 本文介绍了字节跳动开源的 Podseidon 项目，旨在解决 Kubernetes 多集群部署中因控制平面问题导致的 Pod 意外删除和服务容量丢失问题。Podseidon 通过引入 PodProtector CRD，结合准入 webhook 和数据聚合机制，在跨集群的最小可用性要求不满足时，拒绝 Pod 删除请求。文章详细阐述了 Podseidon 的整体设计、数据同步方案、快照时间推断方法、批量更新机制以及对各种多集群范式的适配，包括单集群、单主多成员联邦架构和去中心化集群网等。此外，还讨论了 Podseidon 在 Kubelet 适配、类似项目对比以及潜在改进方向。Podseidon ...



### [构建脚本的终结：Docker-Bake-正式发布](https://www.infoq.com/news/2025/02/docker-bake-ga/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-02-24 00:00:00 | 标签: Docker, Docker Bake, 镜像构建优化, 构建编排, CI/CD

> Docker Bake 是 Docker 官方发布的构建编排工具，旨在简化复杂 Docker 镜像的构建过程，解决了传统构建方式中配置复杂、易出错的问题。它允许开发者使用 HCL、YAML 或 JSON 等格式声明式地定义构建阶段和部署环境，替代了传统的使用大量命令标志和环境变量的 Docker 构建方式。Docker Bake 通过自动并行构建、消除冗余操作和引入权限控制等功能，提高了构建效率，提升了构建速度和资源利用率。此外，它还通过引入权限控制改进了安全性，并集成了 Docker Build Cloud，从而能够利用云基础设施加速构建过程。Docker Bake 与现有的 Docker ...



### [如何设置-Kubernetes-网络策略并保护您的集群](https://www.freecodecamp.org/news/set-up-kubernetes-network-policy-and-secure-your-cluster/)

2025-02-18 14:45:59 | 标签: Kubernetes, 网络策略, 网络隔离, 安全, CNI

> 本文详细介绍了 Kubernetes 网络策略，首先解释了 Kubernetes 网络连接的类型，包括容器间通信、Pod 间通信、Pod 与服务间的交互以及外部到内部的访问。接着深入探讨了 Kubernetes 网络策略的作用，即通过定义规则来管理 Pod 之间的流量，从而实现细粒度的访问控制和增强集群安全性。文章还提供了在 Amazon EKS 上设置 Kubernetes 网络策略的步骤，包括安装 Calico CNI 插件，并展示了允许或拒绝流量的配置示例。最后，总结了实施 Kubernetes 网络策略的最佳实践，包括确保所有 Pod 都被网络策略覆盖、与其他安全措施配合使用、在生产环...



### [Agoda-将-macOS-基础架构与-Kubernetes-进行了集成](https://mp.weixin.qq.com/s/ecp8SnrNg3LMcf-ITo9-Kg)

2025-02-18 06:44:35 | 标签: Kubernetes, macOS, 虚拟化, 虚拟化框架, Agoda

> Agoda 通过开发 macOS 虚拟化 Kubelet (macOS-vz-Kubelet)，实现了 macOS 基础设施与 Kubernetes 的集成，解决了传统 macOS 基础设施在可扩展性和性能方面的问题，尤其是在 Apple Silicon 出现后。macOS-vz-Kubelet 使用 Go 语言构建，并利用苹果的虚拟化框架来运行 macOS 虚拟机，支持在 macOS 工作负载上无缝部署 Pod，降低了成本并提高了资源利用率。该方案还支持创建混合运行时 Pod，其中 macOS VM 充当构建环境，而 Docker 容器则处理日志记录等辅助任务。Agoda 使用 JAMF 等...



### [EP150：系统设计面试的-12-个算法](https://blog.bytebytego.com/p/ep150-12-algorithms-for-system-design)

2025-02-15 16:30:54 | 标签: 系统设计, Kubernetes, 容器编排, 云原生, PostgreSQL

> 本期 ByteByteGo Newsletter 概览了多个技术主题，涵盖后端开发和系统设计的要点。介绍了系统设计面试中常用的 12 个算法，包括布隆过滤器、一致性哈希等。概述了 Kubernetes 的工作原理和关键组件，简化应用部署和管理。介绍了 PostgreSQL 的架构和关键特性。最后，提供了 API 安全的 12 个实用技巧，以保障数据安全。整体为技术概览，非深入探讨。



### [ClickHouse-迁移至-AWS-ARM-实例，性能提升-25%](https://www.infoq.com/news/2025/02/clickhouse-arm-graviton/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)

2025-02-15 00:00:00 | 标签: 云计算, 数据库, ClickHouse, AWS Graviton, ARM

> ClickHouse 将其云工作负载迁移到 AWS Graviton 实例，实现了 25% 的性能提升。迁移策略包括评估兼容性、对 x86 和 ARM 架构进行基准测试以及降低风险。由于 Graviton 实例的可用性限制，采用了混合实例策略，结合了 Graviton2 实例和 Graviton3 实例。调整了内存分配以确保平稳的自动伸缩，并且动态 Pod 分配将较小的 Pod 指向 ARM 实例。基准测试表明整体性能有所提高，尤其是 Graviton4 实例。现在，近 80% 的 ClickHouse 生产 vCPU 在 Graviton 实例上运行。



### [自动审计日志:全新升级，提升透明度与可信赖性](https://blog.cloudflare.com/introducing-automatic-audit-logs/)

2025-02-13 14:00:00 | 标签: 审计日志, Cloudflare, API 网关, API, 安全

> Cloudflare 的自动审计日志系统目前处于 Beta 测试阶段，它统一了各产品的审计日志，解决了之前日志分散和不一致的问题，并提供环境活动的完整一致视图。该系统标准化了日志记录，将产品覆盖范围从 62 个扩展到 111 个(覆盖率从 75% 提高到 95%)，并提供精细的过滤功能。每个日志条目都包含详细的上下文信息，例如身份验证方法和 Cloudflare Ray ID。该系统记录创建、编辑、删除操作、GET 请求和失败的尝试。它将 HTTP 请求流式传输到 Worker，以便使用 Cloudflare OpenAPI 模式脱敏敏感信息。丰富后的日志存储在数据库中，计划于 2025 年下...



### [Vercel-v0:连接设计与代码，加速开发流程](https://vercel.com/blog/bridging-the-gap-between-design-and-code-with-v0)

2025-02-12 13:00:00 | 标签: 原型设计, 设计工具, 设计流程, 低代码/无代码, Vercel

> Speakeasy 使用 Vercel v0 来连接设计与代码的工作流程，加速原型设计，并减少实现时间。v0 作为一个动态设计工具(通过代码生成和组件库，可以共享交互式原型，展示功能行为，超越了静态设计的局限)，Speakeasy 团队秉持“代码驱动设计”的理念，设计师和工程师可以在 v0 中实时协作，使用自定义 Tailwind 配置来构建和设置组件样式。通过在代码原生环境中进行原型设计，Speakeasy 加速了迭代，提高了产品质量，并保持了设计和工程的同步。



### [如何使用-Docusaurus-和-GitHub-Actions-实现文档即代码](https://www.freecodecamp.org/news/set-up-docs-as-code-with-docusaurus-and-github-actions/)

2025-02-05 17:26:30 | 标签: 文档, Docusaurus, GitHub Actions, Vale, 持续集成/持续交付 ( CI/CD )

> 本教程提供了使用 Docusaurus 设置文档网站的逐步操作指南，通过 Git 和 GitHub 管理更改，并通过 GitHub Actions 自动化语法审查。它引入了“文档即代码”的概念，将版本控制、自动化和协作等软件开发实践应用于文档管理，解决了诸如过时内容和断链等常见问题。文章涵盖了安装和自定义 Docusaurus、集成 Vale 以进行可定制的语法和风格检查、部署到托管平台（如 GitHub Pages 或 Netlify），以及使用 GitHub Actions 设置 CI/CD 流水线。通过将文档视为代码，技术作者可以确保其工作流程的准确性、一致性和效率，同时专注于为用户提供...



### [Cloudflare-致力于通过-FedRAMP-High、IRAP-和-ENS-提升全球公共部门安全性](https://blog.cloudflare.com/cloudflares-commitment-to-advancing-public-sector-security-worldwide/)

2025-02-05 14:00:00 | 标签: Cloudflare, 联邦风险管理计划 (FedRAMP), 澳大利亚 IRAP, 西班牙 ENS, 网络安全

> 本文探讨了 Cloudflare 在全球范围内加强公共部门和受监管行业安全性的战略举措。通过获得关键合规认证，例如美国的联邦风险管理计划 (FedRAMP) High、澳大利亚的 IRAP 和西班牙的 ENS，Cloudflare 将合规能力直接集成到其全球网络中，而非创建孤立的政府专用基础设施。这使 Cloudflare 能够提供弹性、安全且高性能的服务，同时满足法规要求。关键技术如区域服务和私有骨干网确保流量在认证边界内高效且安全地处理，从而优化用户体验与合规性。自 2022 年获得 FedRAMP 中等授权以来，Cloudflare 扩展了其 Cloudflare for Governm...



### [如何使用-Vim-文本编辑器——开发者入门指南](https://www.freecodecamp.org/news/how-to-use-the-vim-text-editor-intro-for-devs/)

2025-02-04 17:17:39 | 标签: Vim, 文本编辑器, Linux, 命令行, 开发工具

> 本文介绍了 Vim，这是一款深受许多开发者和系统管理员喜爱的强大文本编辑器。Vim 以其速度、多功能性以及键盘驱动的设计而著称，能够在不依赖鼠标的情况下实现快速高效的编辑。文章涵盖了 Vim 独特的模态系统，该系统将命令模式和编辑模式分开，并提供了关于 Vim 基本命令的教程。文中还给出了文本操作和文件管理的实际示例，并介绍了 Vim 在远程和资源受限环境中的优势。与 VS Code 等现代文本编辑器相比，Vim 以其效率和简洁性脱颖而出，成为追求高效生产力的开发者的首选工具。



### [这里没有幻觉：通过扩展功能的-Cloudflare-雷达系统追踪最新的人工智能趋势](https://blog.cloudflare.com/expanded-ai-insights-on-cloudflare-radar/)

2025-02-04 14:00:00 | 标签: 人工智能趋势, Cloudflare 雷达系统, 人工智能监控工具, 生成式人工智能, robots.txt

> 文章介绍了 Cloudflare 雷达系统的全新“AI Insights”页面，该页面通过详细指标和可视化图表来跟踪与 AI 相关的趋势。其中包括 AI 机器人和爬虫流量行为特征的数据、基于 DNS 流量的生成式 AI 服务市场占有率排名（突出显示像 DeepSeek 这样的平台在几天内从第 9 位上升到第 3 位），以及对 robots.txt 指令的分析，展示不同行业如何管理 AI 机器人访问。此外，它还提供了关于 Workers AI 支持的 AI 模型和任务用户偏好排名的见解，并附带 API 和数据浏览器工具进行更深入的探索。这些资源帮助用户实时跟踪 AI 技术的应用变化及市场格局的快...



### [介绍灵活计算：无服务器形式中的服务器强大功能---Vercel](https://vercel.com/blog/introducing-fluid-compute)

2025-02-04 13:00:00 | 标签: 无服务器, 云基础设施, 可扩展性, 成本效益, Vercel

> 灵活计算是 Vercel 推出的一项创新基础设施解决方案，旨在解决传统无服务器计算的挑战。它通过优先使用现有资源而非扩展新实例来提高效率，实现实时扩展并减少与冷启动相关的延迟。灵活计算通过优化计算使用和最小化浪费，提供成本节约，潜在降低计算成本高达 85%。该模型支持高级用例，包括 AI 工作负载、后台处理和多区域故障转移的全球计算，同时确保零配置和维护开销。专为现代 Web 应用程序设计，灵活计算实现了无缝的可移植性和灵活性，避免了供应商锁定，并与 Node.js 和 Python 运行时兼容。



### [通过将-Content-Credentials-集成到-Cloudflare-Images-中以保护数字内容溯源](https://blog.cloudflare.com/preserve-content-credentials-with-cloudflare-images/)

2025-02-03 14:00:00 | 标签: 数字内容溯源, C2PA 标准, Cloudflare Images, 内容凭据 (Content Credentials), 图像处理

> 本文宣布了 Cloudflare Images 对 C2PA（内容溯源与真实性联盟）标准的集成，以保护数字内容的溯源。这使得创作者和发布者能够从图像创建到编辑再到交付的过程中维护一个可验证的证据链。该解决方案通过加密签名元数据变更，确保即使经过调整大小或格式转换等操作后，图像的真实性仍然得到保障。数字内容溯源对于打击虚假信息至关重要，尤其是在新闻领域，验证图像来源可以防止假新闻的传播。它还确保创作者获得应有的认可，从而带来更多职业机会。文章解释了 Content Credentials 如何使用 JUMBF 容器和带有加密签名的 JSON 清单来确保防篡改记录。还提供了实际示例，包括摄影记者和...



### [Spring-Cloud-Stream-应用-2024.0.1-和-2025.0.0-现已发布](https://spring.io/blog/2025/02/02/spring-cloud-stream-applications-2024_0_1-and-2025_0_0-are-now-available)

2025-02-02 00:00:00 | 标签: Spring Cloud Stream 应用, 发布公告, 依赖升级, Spring Boot, Spring Cloud

> 本文宣布了 Spring Cloud Stream 应用版本 2024.0.1 和 2025.0.0 的发布，这些版本现已在 Maven Central 提供。这些版本包含了重要的错误修复、依赖升级以及对 Spring Boot 和 Spring Cloud 版本的更新。具体来说，2024.0.1 版本更新至 Spring Boot 3.3.8 和 Spring Cloud 2023.0.5，而 2025.0.0 版本更新至 Spring Boot 3.4.2 和 Spring Cloud 2024.0.0。发布说明提供了进一步的技术细节，文章鼓励用户在 GitHub 和 StackOverf...



### [2026-01-04-Hacker-News-Top-Stories-#](https://supertechfans.com/cn/post/2026-01-04-HackerNews/)

2026-01-04 15:44:50 | 标签: Hacker News, 技术热点, 国际政治, 操作系统, Linux

> 本文汇总了 2026 年 1 月 4 日 Hacker News 上的热门话题，内容广泛，既有国际政治新闻（美国突袭逮捕委内瑞拉总统马杜罗）、技术趋势讨论（Linux 桌面、C3 语言、jank 语言），也有流行文化彩蛋分析（Daft Punk 歌曲 BPM），以及对产品可靠性的质疑（Clicks Communicator）。其中，美国对委内瑞拉局势的干预引发了广泛讨论，尤其关注其背后的动机和国际影响。同时，关于个人内容所有权的 POSSE 原则、Windows 操作系统体验的下降以及 Linux 桌面环境的崛起也受到关注。文章还列举了 2025 年 Hacker News 上最受欢迎的博主及...



### [2025-12-11-Hacker-News-Top-Stories-#](https://supertechfans.com/cn/post/2025-12-11-HackerNews/)

2025-12-11 07:46:18 | 标签: Hacker News, 科技趋势, 技术合集, Rust, Linux内核

> 该文章精选了 2025 年 12 月 11 日 Hacker News 上的十大热门讨论，内容广泛且深度兼具。其中，《生命之大》以独特视角展现生命的多样性与规模；Rust 在 Linux 内核中成功转正，标志着其在系统编程领域的重大进展；Let's Encrypt 十周年回顾了 HTTPS 普及的巨大成就，也引发了对 EV 证书实际价值的讨论。此外，文章还关注了 AI 生成代码对编程范式的影响、澳大利亚青少年社交媒体禁令引发的社会争议及其可能带来的风险、纽约拥堵收费对城市环境的积极作用及其 PM2.5 来源的深层讨论，Palantir 技术在军事冲突中的伦理争议，以及 Django 6.0 的...



### [中国工商银行软件开发中心普惠经营快贷产品-BizDevOps-实践](https://mp.weixin.qq.com/s?__biz=MjM5ODI5Njc2MA==&mid=2655930928&idx=2&sn=9140bfb259e2bda79f8b3579c75e3d11)

2025-11-07 04:19:00 | 标签: BizDevOps, 研发管理, 软件工程, 敏捷实践, 价值交付

> 文章详细介绍了中国工商银行软件开发中心在普惠经营快贷产品上实践 BizDevOps 的经验。首先阐述了 BizDevOps 作为“价值转化中枢”的重要意义，强调其在统一业务与技术目标、提升资源统筹规划方面的作用。随后，文章深入剖析了工行构建的 BizDevOps 业务价值管理能力体系，该体系涵盖目标管理、价值探索、价值承接和价值评估四大维度，并详细说明了每个维度的具体实践内容，如基于北极星指标拆解的目标链体系、WSJF 需求优先级评估、标准化业务架构底座及 ITBP 深度协同机制等。通过实际案例，展示了 BizDevOps 如何解决业务痛点并实现价值。最后，文章总结了实践成效，包括需求交付周期...



### [2025-10-30-Hacker-News-Top-Stories-#](https://supertechfans.com/cn/post/2025-10-30-HackerNews/)

2025-10-30 08:01:07 | 标签: 平台治理, 用户自由, 云计算成本, 开源生态, Linux游戏

> 文章精选并总结了近期 Hacker News 上的多个热门技术与商业话题。核心内容包括：Google 计划强制 Android 开发者集中注册，此举被认为严重威胁 Android 的开放性与侧载自由，引发社区对推动新开源移动平台和设备控制权的广泛讨论；三星在高端智能冰箱上推送广告，反映智能家电厂商日益依赖广告收入的趋势，激起用户对购买后体验被强制改变的不满，并引发对消费品耐久性与商业模式的讽刺；OneUptime 团队分享了从 AWS 迁移至裸金属服务器两年后的经验，实现了超百万美元的年节省和更高的控制力，强调了在稳定基线业务中自建硬件优于完全上云的价值，并引发对云服务隐性成本和技术锁定的深入...



### [2025-09-06-Hacker-News-Top-Stories-#](https://supertechfans.com/cn/post/2025-09-06-HackerNews/)

2025-09-06 07:12:45 | 标签: 容器技术, Podman, Docker, Kubernetes, Systemd

> 本文深入探讨了作者从 Docker 迁移至 Podman 的决策背景、技术考量及实际操作。作者指出 Docker 基于守护进程的架构存在安全隐患和单点故障风险。Podman 则通过无守护进程设计、轻量级资源占用、与 Systemd 和 Kubernetes 的良好原生集成以及遵循 Unix 哲学的工具链，提供了更安全、高效和灵活的容器管理替代方案。文章详细介绍了迁移过程中的 Dockerfile 兼容性、镜像构建、容器运行、生产部署和多服务应用管理等环节，并针对卷权限、遗留工具兼容性等常见问题提供了解决方案。整体而言，文章为考虑从 Docker 转向 Podman 的技术从业者提供了全面的理论...



### [写过代码、当过架构师、也做过-CEO：一位程序员的-IT-职业「血泪史」](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247821875&idx=3&sn=53a2cafb7a68135b8196cb9fc8e192d7)

2025-08-29 09:21:00 | 标签: 职业发展, 软件工程, 架构设计, DevOps, CI/CD

> 文章记录了一位拥有软件工程师、架构师、创业公司 CEO 及售前等多重身份的 IT 从业者，在十年职业生涯中积累的深刻教训。作者坦言这些经验并非全新理论，而是其亲身经历并付出代价后总结的实践智慧。内容涵盖了 CI/CD 在减少人为错误上的关键作用、测试体系对系统可演进性的保障、Pull-based GitOps 在避免配置覆盖风险上的优势，以及文档记录“为什么”的重要性。此外，文章还触及了《人月神话》的团队管理启示、早期决策的价值、关注业务而非技术炫技，以及产品驱动增长和敏捷文化对团队建设的积极影响。这些经验为技术从业者提供了宝贵的实践指导，帮助他们避免常见误区，更快建立起自己的“工程方法论”。



### [Kubernetes-十一周年：如果从零重构，一个-2.0-版会怎么设计？](https://mp.weixin.qq.com/s?__biz=MzkzMDY1NDgyOQ==&mid=2247819317&idx=3&sn=f57819c9c3d485e54dcd3f54aadd94f6)

2025-06-20 09:54:00 | 标签: 架构设计, Kubernetes, 云原生, 包管理, YAML

> 文章回顾了 Kubernetes 诞生 11 年来的成就，包括容器规模化、降低运维成本、作业调度和服务发现等。资深 DevOps 工程师作者基于多年实践，尖锐地指出当前 K8s 设计痛点，如 YAML 的复杂与不安全、etcd 局限、Helm 不足及 IPv4 网络问题。基于这些痛点，文章系统性设想 K8s 2.0 的重构方向：HCL 替代 YAML、支持多存储、构建原生包管理器(KubePkg)和默认启用 IPv6。作者强调“默认选项”的重要性，认为这些设想对平台未来发展和用户体验至关重要。



### [Matthias-Haeussler-/-Eva-Panadero-@-Spring-I/O-2025：Spring-Boot-与容器的新变化](https://www.youtube.com/watch?v=nesRmaUi4Ts)

2025-09-19 12:24:55 | 标签: Spring Boot, 容器化, Docker, Kubernetes, Buildpack

> Matthias Haeussler 和 Eva Panadero 在 Spring I/O 的演讲探讨了 Spring Boot 与容器技术的最新进展和不断发展的集成。他们讨论了容器如何标准化应用程序打包、开发环境和构建过程，并强调了新的特性和更新。主要议题包括使用 Dockerfiles 和 Buildpacks 优化容器镜像创建，使用 GraalVM Native Images 实现更快的启动时间和更小的占用空间，以及使用 Docker Compose 集成和 Testcontainers 简化本地测试。本次演示还涉及在 Kubernetes 中使用 Spring Boot Actuat...



