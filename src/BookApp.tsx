import { useEffect, useState, type ReactNode } from "react";

type Spread = {
  id: string;
  chapter: string;
  eyebrow: string;
  left: ReactNode;
  right: ReactNode;
};

const portrait = "/images/portrait.png";
const imageOne = "/images/work-1.png";
const imageTwo = "/images/work-3.png";
const xUrl = "https://x.com/Clara_J_0529";
const email = "jiamiaomiao029@gmail.com";
const careerUrl = "/?view=career";

const spreads: Spread[] = [
  {
    id: "cover",
    chapter: "扉页",
    eyebrow: "A PERSONAL FIELD NOTES BOOK · 2026",
    left: (
      <div className="book-cover-copy">
        <span className="book-seal">六水的个人创作手账 · VOL. 01</span>
        <p className="book-overline">CURIOUS AT HEART.</p>
        <h1>不止<span>想想</span><span className="book-cover-dot">.</span></h1>
        <p className="book-cover-lead">把复杂的事想明白，<br />把有趣的想法做出来。</p>
        <p className="book-cover-desc">写下观察，拆解问题，做出作品，<br />再让真实世界修正我的判断。</p>
        <span className="book-handnote">一本关于思考、商业、创造与生活的手账。↗</span>
      </div>
    ),
    right: (
      <div className="book-cover-photo">
        <img src={portrait} alt="六水的个人肖像" />
        <div className="book-photo-overlay">
          <span>CHAPTER ZERO</span>
          <p>好奇，是故事的起点。<br />行动，才有下一页。</p>
        </div>
      </div>
    )
  },
  {
    id: "hello",
    chapter: "关于我",
    eyebrow: "01 / HI, I'M LIUSHUI",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">A LITTLE ABOUT ME</span>
        <h2>你好，<br />我是<span>六水。</span></h2>
        <p>我对人、传播和商业问题有很强的好奇心。看见一个现象，我常常会想：它为什么发生？什么因素真正起了作用？换一个条件，结论还成立吗？</p>
        <p>我喜欢把问题拆开，找到可执行的切口，再用内容、产品、项目或真实沟通验证答案。做个人 IP、短视频、产品推广和客户咨询，都是这个习惯的延伸。</p>
        <p>我的优势不在于已经掌握了多少标准答案，而在于愿意持续观察、提问、组织信息、表达判断，并接受结果的修正。</p>
        <div className="book-tagline-tags"><span>用户洞察</span><span>内容策略</span><span>结构化表达</span><span>复盘迭代</span></div>
        <p className="book-aside">理性是我理解世界的方式；<br />热情是我愿意持续行动的原因。</p>
      </div>
    ),
    right: (
      <div className="book-body-page book-perspectives">
        <span className="book-kicker">HOW I WORK</span>
        <h3>比起“我擅长什么”，<br />更想展示<span>我怎么做事。</span></h3>
        <div className="book-lens"><span>01 / SEE THE FACTS</span><strong>先观察真实发生了什么。</strong><p>从用户的语言、平台内容、客户反馈和实际数据出发，不先让结论走在事实前面。</p></div>
        <div className="book-lens"><span>02 / FIND THE REAL PROBLEM</span><strong>区分现象、原因与假设。</strong><p>把“内容没人看”“客户不买”还原为更具体、可以验证的问题。</p></div>
        <div className="book-lens"><span>03 / MAKE & TEST</span><strong>把判断做成可以交付的东西。</strong><p>视频、脚本、方案、PRD、咨询建议或 SOP；先做，再看真实反馈。</p></div>
        <div className="book-lens"><span>04 / REVIEW & REBUILD</span><strong>承认判断可能有错。</strong><p>区分传播与转化，区分理解与结果，也区分个人贡献与团队成果。</p></div>
        <p className="book-tiny-note">后面几页不是能力口号，而是从真实文字和项目中选出的证据。</p>
      </div>
    )
  },
  {
    id: "observe",
    chapter: "看见问题",
    eyebrow: "02 / THE HABIT OF NOTICING",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">USER INSIGHT / WECHAT MOMENTS</span>
        <h2>很多问题的答案，<br />藏在<span>真实的人身上。</span></h2>
        <p>2026 年 7 月，我在直播后整理过一条判断链：自媒体不是创作者一个人的表达，它首先要面对用户。</p>
        <div className="book-quote-block">
          <span>朋友圈 · 2026.07.07 · 本人原文</span>
          <blockquote>“自媒体其实是用户媒体<br />用户媒体的核心是有用户意识<br />做到用户意识需要读懂人性<br />而读懂人性，需要换位思考”</blockquote>
        </div>
        <p>这还是待验证的工作假设，所以我给自己设了一个长期观察场景：在直播和内容实践中检验它，而不是把一句漂亮的话当作定论。</p>
        <p className="book-aside">好内容不只是“我想说什么”，<br />还包括“对方为什么需要听”。</p>
      </div>
    ),
    right: (
      <div className="book-body-page">
        <span className="book-kicker">OBSERVATION → HYPOTHESIS → TEST</span>
        <h3>一个小实验：<br />短推为什么能传播？</h3>
        <p>我曾复盘 X 短内容的传播表现，没有停在“这条火了”，而是试着拆出可以继续测试的变量。</p>
        <div className="book-lens"><span>01 / 观察事实</span><strong>比较不同语言区的高传播内容。</strong><p>注意到一些跨语言改写的短推也获得了传播。</p></div>
        <div className="book-lens"><span>02 / 提出问题</span><strong>究竟是哪种情绪被触发？</strong><p>用 AI 辅助分析选题、情绪和表达结构，归纳可供测试的假设。</p></div>
        <div className="book-lens"><span>03 / 重新实践</span><strong>不直接复制，尝试改写表达。</strong><p>将选题、情绪和结构重新组合，再观察内容表现。</p></div>
        <div className="book-quote-block">
          <span>朋友圈 · 2026.05.18 · 复盘原文节选</span>
          <blockquote>“这个帖子为什么爆？踩中了哪些情绪？能不能总结出爆款公式。”</blockquote>
        </div>
        <p className="book-tiny-note">这是个人观察与方法记录，不意味着任何内容都能稳定复现爆款。</p>
      </div>
    )
  },
  {
    id: "marketing",
    chapter: "商业思考",
    eyebrow: "03 / THINK IN THE CUSTOMER'S SHOES",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">MARKETING NOTES / X</span>
        <h2>真正值得问的，<br />是<span>客户为什么不买。</span></h2>
        <p>2026 年 7 月，我看了一场营销访谈，整理了六个有价值的观察。其中最打动我的，不是某句漂亮的销售话术，而是要把注意力从“卖得更多”移到“客户的障碍在哪里”。</p>
        <div className="book-lens"><span>表面问题</span><strong>内容已经讲了很多好处，为什么没有成交？</strong><p>如果客户真正顾虑的是效果、成本或自己能否执行，再放大收益也未必有效。</p></div>
        <div className="book-lens"><span>更深一层的问题</span><strong>客户究竟在担心什么？</strong><p>把模糊的“不买”拆成可识别的风险、信任与决策阻力，方案才有针对性。</p></div>
        <div className="book-quote-block"><span>X · 2026.07.28 · 访谈拆解节选</span><blockquote>“营销的本质，不是把东西卖出去。<br />而是理解：为什么客户不买？”</blockquote></div>
        <a className="book-inline-link" href="https://x.com/Clara_J_0529/status/2082060993581183399" target="_blank" rel="noreferrer">阅读完整营销访谈拆解 <span aria-hidden="true">↗</span></a>
      </div>
    ),
    right: (
      <div className="book-body-page">
        <span className="book-kicker">CUSTOMER UNDERSTANDING</span>
        <h3>不是给一个通用框架，<br />而是<span>看见具体的人。</span></h3>
        <p>同样是“我要做个人 IP”，不同人的经历、能力、资源和当下困境并不相同。套用一套定位公式很容易，真正困难的是找出对方眼前最需要解决的那个问题。</p>
        <div className="book-quote-block"><span>X · 2026.08.13 · 咨询心得原文</span><blockquote>“我认为真正的1v1咨询不是给受众一个‘框架’，或是把理论重新说一遍<br />而是要在‘看见’客户的基础上<br />真正的，个性化的解决他的问题”</blockquote></div>
        <p>这也影响我的内容思路：先判断对方真正需要什么，再决定讲什么、怎么讲、交付什么。</p>
        <a className="book-inline-link" href="https://x.com/Clara_J_0529/status/2087897021122572418" target="_blank" rel="noreferrer">查看原始咨询心得 <span aria-hidden="true">↗</span></a>
        <p className="book-tiny-note">咨询涉及的客户个人资料及内部复盘不公开。本页只展示本人已经公开发表的方法思考。</p>
      </div>
    )
  },
  {
    id: "projects",
    chapter: "实践与作品",
    eyebrow: "04 / PROJECTS & EVIDENCE",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">PROOF OVER ADJECTIVES</span>
        <h2>说得再清楚，<br />也要<span>拿作品说话。</span></h2>
        <p>我做过自己的内容账号、产品增长内容、个人 IP 服务、团队业务 SOP，也参与过 AI 产品需求设计。它们看起来属于不同岗位，但共同点都是：理解人和业务，完成可验证的交付。</p>
        <div className="book-proof"><span>01 / 个人 IP · 内容策略</span><strong>47.5 万播放</strong><p>一条大学生成长视频的播放数据（作品截图时点）。</p></div>
        <div className="book-proof"><span>02 / SnapVee · 产品推广</span><strong>数百名新增粉丝</strong><p>日更短视频和图文，带来多名主动咨询用户（本人项目记录）。</p></div>
        <div className="book-proof"><span>03 / TikTok · 业务运营</span><strong>30+ 人参考</strong><p>将推广与分发过程拆成可操作的 SOP，供内部团队使用。</p></div>
        <a className="book-inline-link" href={careerUrl}>完整项目、复盘与证据 <span aria-hidden="true">↗</span></a>
      </div>
    ),
    right: (
      <div className="book-body-page">
        <span className="book-kicker">WHAT I'VE LEARNED FROM DELIVERING</span>
        <h3>我关心的，<br />不只是<span>完成任务。</span></h3>
        <div className="book-lens"><span>内容增长</span><strong>一个视频获得播放，不等于商业转化。</strong><p>需要分别看曝光、关注、咨询及后续承接；把不同层级的指标分开报告。</p></div>
        <div className="book-lens"><span>系统化运营</span><strong>一个复杂流程，怎样让别人也能做？</strong><p>把任务拆成步骤、依赖、异常情形和 FAQ；SOP 的价值不只是“写完文档”。</p></div>
        <div className="book-lens"><span>AI 产品</span><strong>什么应该交给模型，什么必须确定？</strong><p>在账单分析 PRD 中思考意图理解、业务规则和权限边界；个人负责需求设计，团队负责系统实现。</p></div>
        <div className="book-lens"><span>商业服务</span><strong>每个客户的问题，不能靠同一张模板解决。</strong><p>从现有资源、真实能力与具体目标出发，优先寻找可以动手的第一步。</p></div>
        <p className="book-tiny-note">展示项目边界，不将个人参与写成独立完成，也不推算缺乏证据的转化收益。</p>
      </div>
    )
  },
  {
    id: "content-review",
    chapter: "内容复盘",
    eyebrow: "05 / FROM AN OPINION TO A STRUCTURE",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">FLOMO / CONTENT REVIEW</span>
        <h2>从“我想说”，<br />到<span>“用户能得到什么”。</span></h2>
        <p>2026 年 5 月，账号数据不理想，我开始重新审视对标账号、内容类型，以及表达自我和满足观众的关系。</p>
        <div className="book-lens"><span>发现的问题</span><strong>故事本身不一定构成用户价值。</strong><p>如果只讲自己的经历，观众可能看完也不知道这和自己有什么关系。</p></div>
        <div className="book-lens"><span>提出的判断</span><strong>内容结构照顾用户，内核保留自己的真观点。</strong><p>既不只为自我表达，也不靠空泛情绪去迎合受众。</p></div>
        <div className="book-lens"><span>具体的修改方向</span><strong>从故事叙述变成可借鉴的经验。</strong><p>调整脚本，让观众既看到经历，也能理解过程和方法。</p></div>
        <div className="book-quote-block"><span>Flomo · 2026.05.15 · 复盘原话节选</span><blockquote>“我做到了什么+我怎么做到的+你可以怎么学。”</blockquote></div>
      </div>
    ),
    right: (
      <div className="book-body-page">
        <span className="book-kicker">THE SAME QUESTION, THREE LAYERS</span>
        <h3>一条内容，<br />至少要回答<span>三个问题。</span></h3>
        <div className="book-review-step"><b>01</b><div><strong>事实：我做了什么？</strong><p>可被看见的实践、行为、项目与结果，而不是“我懂很多”。</p></div></div>
        <div className="book-review-step"><b>02</b><div><strong>分析：为什么这样做？</strong><p>目标受众、判断依据、取舍与关键变量。</p></div></div>
        <div className="book-review-step"><b>03</b><div><strong>价值：别人可以怎样借鉴？</strong><p>给观众留下一条可迁移、可尝试、可检验的方法。</p></div></div>
        <p>这不意味着每次修改都能产生爆款。但比起把成绩归因于“运气”或“平台不推”，我更愿意先找到自己能改变的变量。</p>
        <div className="book-quote-block"><span>朋友圈 · 2024.09.09</span><blockquote>“我认为真正的学习方式，是为了做好本职工作，去像其他职位的人那样思考。”</blockquote></div>
        <p className="book-tiny-note">跨职能视角，让内容不只是写给平台看的，也能理解产品、销售与实际交付。</p>
      </div>
    )
  },
  {
    id: "iterate",
    chapter: "反思与迭代",
    eyebrow: "06 / QUESTION MY OWN ASSUMPTIONS",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">PUBLIC SELF-REVIEW / X</span>
        <h2>会分析别人，<br />更要敢于<span>修正自己。</span></h2>
        <p>2026 年 9 月，我把自己做自媒体时的失误写成一篇公开复盘。最尖锐的结论不是“努力还不够”，而是我曾把理解商业的感觉，误当成做成商业的能力。</p>
        <div className="book-lens"><span>原先的误区</span><strong>沉迷宏大框架，却没有盯紧眼前的业务。</strong><p>研究模式、漏斗和长期闭环，却没用足够具体的客户与作品结果检验自己。</p></div>
        <div className="book-lens"><span>重新找到的变量</span><strong>客户、交付，以及那些琐碎的执行细节。</strong><p>机位、字幕、语气、反馈、交付质量，每个动作都比空泛的“高认知”更可检查。</p></div>
        <div className="book-quote-block"><span>X · 2026.09.03 · 《罪己诏》原话节选</span><blockquote>“琐碎之中见功底。”</blockquote></div>
        <a className="book-inline-link" href="https://x.com/Clara_J_0529/status/2095431344126058913" target="_blank" rel="noreferrer">阅读完整公开复盘 <span aria-hidden="true">↗</span></a>
      </div>
    ),
    right: (
      <div className="book-body-page">
        <span className="book-kicker">BETTER QUESTIONS, BETTER ACTIONS</span>
        <h3>真正的复盘，<br />应该让<span>下一步变得具体。</span></h3>
        <div className="book-review-step"><b>01</b><div><strong>不再问：我是不是很有认知？</strong><p>改问：解决了谁的什么问题？能交付什么？</p></div></div>
        <div className="book-review-step"><b>02</b><div><strong>不再问：为什么还没有大成功？</strong><p>改问：当前阶段最关键的增长和作品指标是什么？</p></div></div>
        <div className="book-review-step"><b>03</b><div><strong>不再问：怎样一次想明白所有事情？</strong><p>改问：今天能做什么实验，明天能拿到什么反馈？</p></div></div>
        <div className="book-quote-block"><span>X · 2026.09.03 · 公开复盘原话节选</span><blockquote>“我如果真的决定创业，那为什么不去盯自己最近谈成了几个客户，反而思考自己又收获了多少的高认知。”</blockquote></div>
        <p className="book-tiny-note">记录错误并不等于已经解决错误；这页展示的是我愿意用更具体的标准要求自己。</p>
      </div>
    )
  },
  {
    id: "life",
    chapter: "生活的底色",
    eyebrow: "07 / BEYOND THE WORK",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">THE OTHER SIDE OF ME</span>
        <h2>认真工作，<br />也<span>认真生活。</span></h2>
        <p>我爱和人聊天，爱旅行，爱记录那些微小但真实的生活经验。曾经在酒店前台体验工作，也和街头不同的人聊过他们的日常。</p>
        <p>我尤其喜欢游泳。2024 年，我从连 10 米都游不出去，到用三个月自学完成 1.5 公里自由泳。2025 年，又记录了自己 1000 米游进半小时的那天。</p>
        <div className="book-swim-progress"><div><small>AT THE BEGINNING</small><strong>10<span>m</span></strong><p>最初还游不出去</p></div><i aria-hidden="true">→</i><div><small>THREE MONTHS LATER</small><strong>1.5<span>km</span></strong><p>2024 年的自学成果</p></div></div>
        <p>Flomo 则是另一种长期习惯：持续记录、提问、反思，有些记录关于商业，有些只是生活的碎片。</p>
        <div className="book-quote-block"><span>朋友圈 · 2023.09.29</span><blockquote>“世界这本书今天我又多读了一篇！”</blockquote></div>
      </div>
    ),
    right: (
      <div className="book-image-page">
        <img src={imageOne} alt="六水个人相册中的照片" loading="lazy" />
        <div className="book-image-caption"><span>CURIOUS AT HEART.</span><p>见世面，是见世界的每一面。</p></div>
        <div className="book-quote-block book-image-quote"><span>朋友圈 · 2025.04.04 · 原话</span><blockquote>“可惜你不游泳不知道我自由泳1000m下半小时的成就感有多强”</blockquote></div>
        <p className="book-image-footnote">有些喜欢的事，不必转化成收入；它们也会让工作之外的生活保持充实。</p>
      </div>
    )
  },
  {
    id: "contact",
    chapter: "一起做点什么",
    eyebrow: "08 / LET'S MAKE SOMETHING",
    left: (
      <div className="book-body-page book-end-page">
        <span className="book-kicker">THE STORY IS STILL UNFOLDING</span>
        <h2>想法很多，<br />更想<span>做出来。</span></h2>
        <p>我希望未来继续在内容策略、用户增长、AI 产品与个人 IP 商业化的真实场景里工作。</p>
        <p>不只提出观点，也参与执行；不只展示成绩，也认真面对没做好的地方。</p>
        <p>好奇心决定我会不断问问题，行动和结果决定这些问题有没有意义。</p>
        <div className="book-ending-mark">未完待续<span>...</span></div>
      </div>
    ),
    right: (
      <div className="book-body-page book-contact-page">
        <span className="book-kicker">WORK / COLLABORATE / SAY HELLO</span>
        <h3>一起把想法，<br /><span>做成点什么。</span></h3>
        <p>如果你正在招聘内容、增长或产品运营相关的人，或想交流个人 IP、营销创意与 AI 应用，欢迎联系我。</p>
        <a href={"mailto:" + email} className="book-contact-action">写一封邮件 <span aria-hidden="true">↗</span></a>
        <div className="book-social-links">
          <a href={careerUrl}>完整求职作品集 ↗</a>
          <a href={xUrl} target="_blank" rel="noreferrer">X / 思考与复盘原文 ↗</a>
          <a href="https://github.com/jiamiaomiao029-gif" target="_blank" rel="noreferrer">GITHUB / 项目 ↗</a>
        </div>
        <p className="book-tiny-note">所有公开图片沿用仓库现有文件，未使用 AI 修改照片；客户隐私及未公开记录不作展示。</p>
      </div>
    )
  }
]

export default function BookApp() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [tocOpen, setTocOpen] = useState(false);
  const spread = spreads[current];

  const turnTo = (index: number) => {
    if (index < 0 || index >= spreads.length || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setCurrent(index);
    setTocOpen(false);
  };

  useEffect(() => {
    document.title = "不止想想 · Curious at Heart. | 六水";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setDirection("next");
        setCurrent(index => Math.min(index + 1, spreads.length - 1));
      } else if (event.key === "ArrowLeft") {
        setDirection("prev");
        setCurrent(index => Math.max(index - 1, 0));
      } else if (event.key === "Escape") {
        setTocOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="book-shell">
      <header className="book-header">
        <a href="/" className="book-logo" aria-label="不止想想，返回扉页" onClick={event => { event.preventDefault(); turnTo(0); }}>不止想想<span> / CURIOUS AT HEART.</span></a>
        <nav className="book-top-nav" aria-label="网站导航">
          <button type="button" onClick={() => setTocOpen(value => !value)} aria-expanded={tocOpen}>章节目录 <span aria-hidden="true">⌄</span></button>
          <a href={careerUrl}>作品与项目 ↗</a>
        </nav>
      </header>

      {tocOpen && (
        <div className="book-toc" role="dialog" aria-label="章节目录">
          <div className="book-toc-header"><strong>目录 / CONTENTS</strong><button onClick={() => setTocOpen(false)} aria-label="关闭目录">×</button></div>
          {spreads.map((item, index) => <button key={item.id} type="button" className={index === current ? "selected" : ""} onClick={() => turnTo(index)}><span>{String(index).padStart(2, "0")}</span>{item.chapter}<span aria-hidden="true">↗</span></button>)}
        </div>
      )}

      <main className="book-main">
        <div className="book-intro-line"><span>一本持续更新的个人创作手账</span><span>LIUSHUI · VOLUME 01</span></div>
        <div className="book-scene">
          <div className={"book-spread book-turn-" + direction} key={spread.id} aria-live="polite">
            <section className={"book-page book-page-left " + (current === 0 ? "is-cover" : "")} aria-label={spread.chapter + "前页"}>
              {spread.left}
              <span className="book-corner-number">{String(current * 2 + 1).padStart(2, "0")}</span>
            </section>
            <section className={"book-page book-page-right " + (current === 0 ? "is-cover" : "")} aria-label={spread.chapter + "后页"}>
              {spread.right}
              <span className="book-corner-number">{String(current * 2 + 2).padStart(2, "0")}</span>
            </section>
          </div>
        </div>

        <div className="book-controls">
          <button className="book-turn-button" disabled={current === 0} onClick={() => turnTo(current - 1)} aria-label="上一章"><span aria-hidden="true">←</span> 上一页</button>
          <div className="book-pagination"><div className="book-progress" aria-label={"阅读进度 " + Math.round(((current + 1) / spreads.length) * 100) + "%"}><span style={{ width: ((current + 1) / spreads.length) * 100 + "%" }} /></div><p>{spread.eyebrow} · {current + 1} / {spreads.length}</p></div>
          <button className="book-turn-button" disabled={current === spreads.length - 1} onClick={() => turnTo(current + 1)}>下一页 <span aria-hidden="true">→</span></button>
        </div>
      </main>

      <footer className="book-footer"><span>© 2026 六水 · 用好奇打开世界</span><span>用左右方向键也可以翻页 <span aria-hidden="true">← →</span></span></footer>
    </div>
  );
}
