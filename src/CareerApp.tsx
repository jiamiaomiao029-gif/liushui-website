import { useState } from "react";

type ProjectCategory = "growth" | "product" | "business" | "operations";
type Project = {
  id: string;
  category: ProjectCategory;
  tag: string;
  name: string;
  headline: string;
  description: string;
  highlights: string[];
  challenge: string;
  contribution: string[];
  decisions: string[];
  result: string[];
  review: string;
  evidence: string;
  link?: { label: string; href: string };
};

const media = (file: string) => "/images/" + file;

const projects: Project[] = [
  {
    id: "personal-ip",
    category: "growth",
    tag: "CONTENT STRATEGY / GROWTH",
    name: "大学生成长个人 IP",
    headline: "让真实的大学生活问题，变成有传播力的内容",
    description: "面向大学生，独立策划、拍摄、剪辑并运营抖音与小红书成长内容。",
    highlights: ["47.5万单条播放", "双平台各4000+粉丝"],
    challenge: "大学生有大量职业规划、校园资源与成长困惑，但泛泛的建议缺乏吸引力。内容需要找到他们真正感受到的矛盾，并给出可操作的回答。",
    contribution: [
      "独立完成选题、脚本、出镜、拍摄、剪辑及发布。",
      "围绕大学人脉、职业选择等议题持续形成系列内容。",
      "观察不同作品的播放和互动表现，调整选题表达。"
    ],
    decisions: [
      "选题先考虑目标用户是否真的面临这个问题，而非只追热点。",
      "先呈现矛盾，再输出明确观点和实际建议。",
      "将传播表现与粉丝、咨询等不同层级指标分开分析。"
    ],
    result: [
      "截图可见四条代表作品约47.5万、10.9万、8.2万、2.2万播放。",
      "抖音账号截图显示4,439名粉丝，小红书截图显示4,297名粉丝（均为截图当时）。"
    ],
    review: "内容传播不等于商业转化。现有截图证明的是作品播放与账号规模，无法单独证明某条视频带来的新增粉丝数。",
    evidence: "本人提供的抖音、小红书主页和代表视频截图。"
  },
  {
    id: "securityflex",
    category: "product",
    tag: "AI PRODUCT / REQUIREMENTS",
    name: "SecurityFlex",
    headline: "适老化 AI 银行助手｜账单分析 PRD",
    description: "在团队 AI Agent 项目中负责账单分析场景的业务需求与规则设计。",
    highlights: ["个人PRD可核查", "团队演示系统"],
    challenge: "银行用户希望用自然语言理解账单，银发用户尤其需要易理解的表达；同时金融场景中的查询、提醒和敏感操作必须有清楚的权限边界。",
    contribution: [
      "负责账单分析PRD，覆盖消费分类、异常交易识别和月度/年度账单报告。",
      "梳理模糊查询、退款、转账单列、异常判断等业务口径。",
      "根据跨模块接口、安全约束和需求评审修改文档。"
    ],
    decisions: [
      "将大模型理解意图与确定性的操作流程分离。",
      "不确定的查询条件先澄清，避免擅自推断。",
      "敏感操作独立确认与验证，降低误执行风险。"
    ],
    result: [
      "账单分析PRD在2026年9月完成v1需求冻结。",
      "团队实现覆盖账单、转账、订阅等场景的本地演示系统。"
    ],
    review: "我负责的是需求设计，不把团队的前后端与模型开发包装为个人独立开发；演示系统并非真实银行生产系统。",
    evidence: "GitHub仓库中的账单分析PRD、项目文档和团队分工。",
    link: { label: "查看GitHub仓库与PRD", href: "https://github.com/DrErwin/hackerthon-bank-agent" }
  },
  {
    id: "snapvee",
    category: "growth",
    tag: "PRODUCT MARKETING / OPERATIONS",
    name: "SnapVee",
    headline: "产品内容推广与咨询用户承接",
    description: "独立制作短视频与图文内容，在抖音、小红书开展产品推广实践。",
    highlights: ["日更视频与图文", "数百名新增粉丝 · 多名主动咨询"],
    challenge: "如何把产品功能翻译成普通用户愿意看、看得懂的使用场景，并进一步吸引用户咨询。",
    contribution: [
      "独立开展短视频和图文制作、发布。",
      "将海外内容素材转化为符合国内平台语境的表达。",
      "参与内容后续的咨询和私域用户承接。"
    ],
    decisions: [
      "先讲用户场景与具体收益，而不是仅介绍产品功能名称。",
      "通过视频与图文尝试不同内容表达方式。",
      "关注用户咨询与私域承接，不只看播放数据。"
    ],
    result: [
      "视频带来数百名新增粉丝，并产生多名主动咨询用户。",
      "保持日更视频与图文的内容产出节奏。"
    ],
    review: "相关数字目前没有可公开的后台截图，因此不标记为第三方可核验数据，也不推算注册和付费转化。",
    evidence: "本人提供的实习项目经历与结果记录，未提供公开作品链接和后台截图。"
  },
  {
    id: "commercial-ip",
    category: "business",
    tag: "PERSONAL BRAND / BUSINESS",
    name: "传统行业个人 IP",
    headline: "从线下经验到线上内容与商业信任",
    description: "准备并主讲个人IP线下分享，参与财会、体育教培、餐饮客户的内容陪跑。",
    highlights: ["90分钟主题分享", "3位付费客户"],
    challenge: "很多传统行业老板拥有真实的专业经验，却缺少将这些经验组织成线上内容、建立信任的表达方式。",
    contribution: [
      "设计并主讲《传统老板为什么要做个人IP》沙龙内容。",
      "制作包括业务认知、内容策划、获客逻辑与行动建议的课件。",
      "为客户挖掘内容素材，编写脚本并协助拍摄指导。"
    ],
    decisions: [
      "先理解老板现有的生意和目标受众，而不是先追求高流量。",
      "把经营经验翻译成故事和可理解的内容，逐步建立信任。",
      "将内容传播、客户咨询与成交视为不同环节。"
    ],
    result: [
      "完成可公开展示的沙龙课件。",
      "根据本人项目经历，有3位付费内容陪跑客户，涉及财会、体育教培和餐饮。"
    ],
    review: "客户侧的具体获客结果和累计收入缺少可核验资料，因此不展示推算数字。",
    evidence: "《传统老板为什么要做个人IP》HTML分享课件与本人项目记录。"
  },
  {
    id: "tiktok-sop",
    category: "operations",
    tag: "OPERATIONS / SOP",
    name: "TikTok 推广 SOP",
    headline: "复杂业务链路的标准化表达",
    description: "将海外小说、短剧推广的内容制作与分发归因过程整理为可复用的团队教程。",
    highlights: ["完整SOP已交付", "步骤与FAQ"],
    challenge: "项目涉及平台选择、素材处理、视频制作、挂载与口令归因，多个步骤之间有依赖关系，新成员容易遗漏关键点。",
    contribution: [
      "拆解内容制作与分发变现两条业务主线。",
      "编写锚点、口令、视频制作及发布的逐步指引。",
      "补充地域匹配、项目暂停和常见异常的FAQ。"
    ],
    decisions: [
      "先让使用者理解归因链路，再逐步解释工具操作。",
      "将容易遗漏的关键流程单独提示。",
      "用步骤化文档降低不同执行者的理解差异。"
    ],
    result: [
      "完成包含流程、图示指引和FAQ的业务SOP，供30+人内部团队参考使用。"
    ],
    review: "没有可核实的培训覆盖人数、执行效率提升或推广收益数字，不将SOP完成等同于绩效提升。公开展示需做好内部信息和素材授权处理。",
    evidence: "本人提供的完整TikTok推广SOP文字。"
  }
];


const featuredVideos = [
  { no: "01", title: "大学里如何铺自己的人脉网", topic: "大学人脉", views: "47.5万", note: "围绕校园人脉的具体问题，给出分步骤的行动建议。", accent: "lead" },
  { no: "02", title: "必须走捷径", topic: "成长策略", views: "10.9万", note: "从反常识观点切入，引发对成长路径的讨论。", accent: "sage" },
  { no: "03", title: "大学里的大佬幼年体如何走捷径", topic: "成长方法", views: "8.2万", note: "将抽象的成长建议转化为更具体的讨论。", accent: "olive" },
  { no: "04", title: "大学里为什么要选流派", topic: "校园选择", views: "2.2万", note: "聚焦大学阶段的信息筛选和路径选择。", accent: "sand" }
];

const platformAccounts = [
  { platform: "小红书", code: "XIAOHONGSHU", followers: "4,297", reactions: "5.6万", reactionLabel: "获赞与收藏", variant: "xhs" },
  { platform: "抖音", code: "DOUYIN", followers: "4,439", reactions: "5.6万", reactionLabel: "获赞", variant: "douyin" }
];

function ContentEvidence() {
  return <section id="content-evidence" className="content-evidence" aria-labelledby="content-evidence-title">
    <div className="content-evidence-heading">
      <div><p className="eyebrow">PROJECT EVIDENCE / PERSONAL IP</p><h3 id="content-evidence-title">内容增长，看得见的作品结果。</h3></div>
      <p>用统一的数据卡呈现真实作品。具体能力和判断见上方「大学生成长个人 IP」项目复盘。</p>
    </div>
    <p className="evidence-subheading">01 / 代表内容表现</p>
    <div className="video-evidence-grid">
      {featuredVideos.map(video => <article className={"video-evidence-card theme-" + video.accent} key={video.no}>
        <div className="video-evidence-visual">
          <div className="video-card-topline"><span>CONTENT {video.no}</span><span>{video.topic}</span></div>
          <div className="video-visual-number">{video.no}</div>
          <p>{video.title}</p>
        </div>
        <div className="video-evidence-bottom"><span>视频播放</span><strong>{video.views}</strong></div>
        <p className="video-evidence-insight">{video.note}</p>
      </article>)}
    </div>
    <p className="evidence-subheading account-label">02 / 账号积累</p>
    <div className="account-evidence-grid">
      {platformAccounts.map(account => <article className={"account-evidence-card " + account.variant} key={account.platform}>
        <div className="account-platform"><span>{account.platform}</span><small>{account.code}</small></div>
        <div className="account-figures">
          <div><strong>{account.followers}</strong><span>粉丝</span></div>
          <div><strong>{account.reactions}</strong><span>{account.reactionLabel}</span></div>
        </div>
        <p>账号：六水六水 <span>· 截图记录时点</span></p>
      </article>)}
    </div>
    <details className="evidence-footnote">
      <summary>关于原始截图与数据口径 <span>+</span></summary>
      <p>以上视频播放量来自本人提交的代表作品截图；粉丝和互动数据来自抖音、小红书个人主页截图。这里是基于原始截图制作的可视化，不是重绘的后台页面。原始图片尚未上传到公开网站，因此暂不提供失效的「查看原图」按钮。截图不能单独证明单条作品的精确涨粉归因。</p>
    </details>
  </section>;
}

const filters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "全部项目" },
  { value: "growth", label: "内容与增长" },
  { value: "product", label: "AI产品" },
  { value: "business", label: "IP商业化" },
  { value: "operations", label: "流程与SOP" }
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    {description && <p className="section-description">{description}</p>}
  </div>;
}

function ProjectCard({ project }: { project: Project }) {
  return <article className={"project-card card-" + project.category}>
    <div className="project-cover">
      <span>{project.tag}</span>
      <strong>{project.name}</strong>
      <i aria-hidden="true" />
    </div>
    <div className="project-summary">
      <h3>{project.headline}</h3>
      <p>{project.description}</p>
      <div className="project-tags">{project.highlights.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </div>
    <details className="project-details">
      <summary>展开完整案例 <span>↗</span></summary>
      <div className="project-detail-content">
        <h4>01 / 背景与问题</h4><p>{project.challenge}</p>
        <h4>02 / 我的贡献</h4><ul>{project.contribution.map((a, i) => <li key={i}>{a}</li>)}</ul>
        <h4>03 / 关键判断</h4><ul>{project.decisions.map((a, i) => <li key={i}>{a}</li>)}</ul>
        <h4>04 / 结果</h4><ul>{project.result.map((a, i) => <li key={i}>{a}</li>)}</ul>
        <h4>05 / 复盘</h4><p>{project.review}</p>
        <div className="evidence"><b>证据与边界</b><p>{project.evidence}</p></div>
        {project.id === "personal-ip" && <a className="source-link" href="#content-evidence">查看内容与账号数据卡片 ↘</a>}
        {project.link && <a className="source-link" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label} ↗</a>}
      </div>
    </details>
  </article>;
}

export default function CareerApp() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  return <div className="career-site">
    <header className="site-header" id="top">
      <div className="container nav-bar">
        <a className="wordmark" href="#top">六水<small>LIUSHUI / CLARA</small></a>
        <nav className="nav-items" aria-label="主导航">
          <a href="#value">我的能力</a>
          <a href="#projects">项目案例</a>
          <a href="#thinking">专业思考</a>
          <a href="#habits">长期坚持</a>
          <a href="#about">关于我</a>
        </nav>
        <a className="nav-contact" href="#contact">联系我 ↗</a>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="container hero-layout">
          <div>
            <p className="eyebrow">JIA MIAOMIAO / CLARA · 2027届</p>
            <h1>从用户洞察，<br />到<span>内容、产品<br />与增长。</span></h1>
            <p className="lead">你好，我是<strong>贾淼淼</strong>，也叫六水。西南大学本科生，求职方向聚焦 <b>AI产品增长、产品营销与运营</b>，同时关注个人IP商业化与AI产品。我希望把对用户的理解，转化成真正可执行的内容与业务方案。</p>
            <div className="hero-cta">
              <a className="button primary" href="#projects">查看代表项目 ↘</a>
              <a className="button outlined" href="#habits">工作之外的我 ↗</a>
            </div>
            <div className="tag-row"><span>AI产品增长</span><span>产品营销</span><span>IP商业化</span><span>AI产品需求</span></div>
          </div>
          <figure className="hero-image">
            <img src={media("portrait.png")} alt="贾淼淼个人照片" />
            <figcaption>贾淼淼 <span>JIA MIAOMIAO · CLARA</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="value">
        <div className="container">
          <SectionHeading eyebrow="01 / WHY HIRE ME" title="我能为团队带来什么？" description="不靠抽象形容词，而是让项目经历对应可承担的实际工作。" />
          <div className="value-grid">
            <div className="value-item"><span>01 / INSIGHT</span><h3>用户洞察<br />与内容策划</h3><p>从具体问题出发，独立完成选题、脚本、出镜、拍摄、剪辑与发布。</p></div>
            <div className="value-item"><span>02 / GROWTH</span><h3>内容增长<br />与用户承接</h3><p>实践跨平台内容运营、产品推广、用户咨询与私域承接。</p></div>
            <div className="value-item"><span>03 / COMMERCIAL</span><h3>个人IP定位<br />与商业交付</h3><p>参与线下分享、客户需求沟通、内容策划与持续陪跑。</p></div>
            <div className="value-item"><span>04 / AI PRODUCT</span><h3>产品需求<br />与流程设计</h3><p>将模糊业务场景拆成PRD、规则、SOP与团队协作要求。</p></div>
          </div>
          <div className="proof-strip">
            <div><strong>47.5万</strong><span>代表内容单条视频播放</span></div>
            <div><strong>4,000+</strong><span>抖音、小红书分别积累粉丝</span></div>
            <div><strong>3位</strong><span>传统行业付费陪跑客户</span></div>
          </div>
          <p className="fineprint">数据说明：视频播放与粉丝规模来自本人提供的平台截图；商业客户数量来自项目经历记录。以上不是同一指标，也不代表已验证的客户转化数据。</p>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="02 / SELECTED PROJECTS" title="项目不是经历清单，而是解决问题的证据。" description="每个案例呈现背景、我做出的判断、实际交付、结果，以及尚未被验证的部分。" />
          <div className="project-filters" role="group" aria-label="筛选项目方向">
            {filters.map((f) => <button type="button" key={f.value} className={filter === f.value ? "active" : ""} aria-pressed={filter === f.value} onClick={() => setFilter(f.value)}>{f.label}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => <ProjectCard key={project.id} project={project}/>)}
          </div>
          <ContentEvidence />
          <p className="fineprint">项目数据均区分“截图支持”“可公开核验”和“本人经历记录”，不把团队成果、计划或理论学习包装成个人已经完成的商业结果。</p>
        </div>
      </section>

      <section className="section" id="thinking">
        <div className="container">
          <SectionHeading eyebrow="03 / MY THINKING" title="我如何理解业务问题？" description="不是课程笔记展览，而是从亲自参与的项目中形成的判断。" />
          <div className="thinking-grid">
            <article><small>CONTENT × GROWTH</small><h3>为什么播放量很高，<br />却不一定有客户？</h3><p>注意力只是起点，业务还需要信任、需求匹配和后续承接。内容目标与最终商业结果应当分开看待。</p></article>
            <article><small>AUDIENCE × CREATIVE</small><h3>为什么有些选题，<br />天然更值得做？</h3><p>先理解用户真实感受到的冲突，再用明确表达形成注意力，通过发布结果检验假设。</p></article>
            <article><small>AI × PRODUCT</small><h3>为什么AI Agent，<br />需要确定的权限边界？</h3><p>大模型擅长理解语言，但金融敏感操作需要明确的确认、验证与程序化控制。</p></article>
          </div>
          <p className="article-link">原创文章：<a href="https://x.com/Clara_J_0529/article/2088161481259196416" target="_blank" rel="noopener noreferrer">《一文写清〈定位〉：先瞄准，后开枪》 ↗</a></p>
        </div>
      </section>

      <section className="section habit-section" id="habits">
        <div className="container">
          <SectionHeading eyebrow="04 / LONG-TERM PRACTICE" title="工作之外，我长期投入的事。" description="写作让我整理复杂思考，游泳帮助我获得专注与恢复。它们不是为简历制造标签。" />
          <p className="habit-quote">有些成长不发生在一场活动或一个项目里，而发生在反复记录、训练和重新开始的日常里。</p>
          <div className="habit-grid">
            <article className="habit-card flomo-card">
              <div className="habit-body">
                <p className="eyebrow">WRITING / FLOMO · 2024—2026</p>
                <h3>让思考留下痕迹。</h3>
                <p className="habit-description habit-lead">从2024年开始，我记录阅读、营销观察、内容灵感和日常复盘。写作是我把零散想法变成可回顾思考材料的方式。</p>
                <div className="flomo-metrics">
                  <div><strong>718</strong><span>条笔记</span></div>
                  <div><strong>252.6k</strong><span>约计字数</span></div>
                  <div><strong>229</strong><span>记录天数</span></div>
                </div>
                <div className="flomo-year-panel">
                  <div className="flomo-year-heading"><span>年度积累</span><small>WORDS / YEAR</small></div>
                  {[
                    {year:"2024", notes:157, days:48, words:"28,670字", width:"15%"},
                    {year:"2025", notes:176, days:56, words:"31,813字", width:"17%"},
                    {year:"2026", notes:385, days:125, words:"约192.1k字", width:"100%"}
                  ].map(row => <div className="flomo-year-row" key={row.year}>
                    <div className="flomo-year-summary"><b>{row.year}</b><strong>{row.words}</strong></div>
                    <div className="flomo-year-track"><span style={{width:row.width}}/></div>
                    <p>{row.notes}条笔记 <i aria-hidden="true">·</i> {row.days}天记录</p>
                  </div>)}
                </div>
                <details className="habit-evidence-note">
                  <summary>数据说明 <span>+</span></summary>
                  <p>数据来自flomo提供的三个年度统计截图：2024年157条、28,670字、48天；2025年176条、31,813字、56天；2026年385条、约192.1k字、125天。三年约252.6k字，合计229个记录日；不等于连续229天打卡。原始截图未上传到公开网站。</p>
                </details>
              </div>
            </article>
            <article className="habit-card swim-card">
              <div className="swim-graphic">
                <div className="swim-lanes" aria-hidden="true"><span/><span/><span/><span/><span/></div>
                <div className="swim-feature">
                  <small>POOL SWIM / APR 04, 2025</small>
                  <strong>1,000<span>m</span></strong>
                  <p>一次完整的自由泳记录</p>
                </div>
              </div>
              <div className="habit-body">
                <p className="eyebrow">SWIMMING / RECOVERY</p>
                <h3>游泳，让我重新回到当下。</h3>
                <p className="habit-description">游泳是我释放压力、恢复精力的方式。在水里，不必随时处理新信息，只需要专注呼吸、动作与节奏。</p>
                <div className="swim-stat-grid">
                  <div><strong>29′22″</strong><span>完成用时</span></div>
                  <div><strong>20 <small>趟</small></strong><span>50米泳池</span></div>
                  <div><strong>226 <small>kcal</small></strong><span>运动消耗</span></div>
                  <div><strong>125 <small>bpm</small></strong><span>平均心率</span></div>
                </div>
                <details className="habit-evidence-note">
                  <summary>数据说明 <span>+</span></summary>
                  <p>2025年4月4日单次运动记录：1000米、29分22秒、自由泳、50米泳池、20趟、226 kcal、平均心率125 bpm。记录仅对应这次游泳，不能用于推断连续训练天数。原始运动App截图尚未上传到公开网站。</p>
                </details>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <SectionHeading eyebrow="05 / ABOUT ME" title="我的生活，不只由工作组成。" description="旅行、观察、运动和内容表达，都让我持续接触真实的人与场景。" />
          <div className="about-editorial">
            <figure className="about-editorial-photo">
              <img src={media("work-1.png")} alt="个人生活与旅行记录" loading="lazy"/>
              <figcaption>BEYOND WORK · 真实生活记录</figcaption>
            </figure>
            <div className="about-editorial-story">
              <p className="eyebrow">CURIOUS ABOUT LIFE</p>
              <h3>不把生活变成一面需要填满的照片墙。</h3>
              <p>旅行和观察让我始终愿意接触不同的人与场景。网站里只选一张代表性的生活照，其余注意力留给项目和思考本身。</p>
              <div className="editorial-chips"><span>观察</span><span>表达</span><span>行动</span></div>
            </div>
          </div>
          <div className="about-grid">
            <div>
              <h3>我喜欢把一件事从“想清楚”，推进到“真正做出来”。</h3>
              <p>从个人内容、实习项目到客户服务，再到AI产品PRD，我不断在练习同一件事：理解用户，抓住问题，完成交付，然后接受真实反馈。</p>
            </div>
            <div className="work-rules">
              <strong>我的工作方式</strong>
              <p>先了解用户与业务目标，而不是直接套方案。</p>
              <p>把模糊任务拆成可以执行、可以沟通的步骤。</p>
              <p>用作品、数据和反馈检验自己的判断。</p>
              <p>区分个人完成的工作与团队共同取得的结果。</p>
            </div>
          </div>
          <div className="timeline">
            <div><span>2023—2024</span><strong>校园宣传、组织与内容表达</strong></div>
            <div><span>2024—2025</span><strong>内容编辑、用户沟通与竞品研究</strong></div>
            <div><span>2026</span><strong>个人IP增长、商业IP服务与平台运营</strong></div>
            <div><span>2026</span><strong>AI产品需求与跨团队协作实践</strong></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <p className="eyebrow">06 / CONTACT</p>
          <h2>希望下一份工作，<br/>让我继续把思考变成行动。</h2>
          <p>AI产品增长 / 产品营销与运营 / 个人IP商业化 / AI产品</p>
          <a className="contact-email" href="mailto:jiamiaomiao029@gmail.com">jiamiaomiao029@gmail.com ↗</a>
          <small>此网站作为求职作品集使用，不重复放置PDF简历，也不公开私人手机号。</small>
        </div>
      </section>
    </main>

    <footer><div className="container"><span>© 2026 LIUSHUI · 贾淼淼 / CLARA</span><span>THINK DEEPLY. BUILD PATIENTLY.</span></div></footer>
  </div>;
}
