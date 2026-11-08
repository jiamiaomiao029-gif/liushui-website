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
        <span className="book-seal">六水的私人创作手账 · VOL. 01</span>
        <p className="book-overline">CURIOUS AT HEART.</p>
        <h1>不止<span>想想</span><span className="book-cover-dot">.</span></h1>
        <p className="book-cover-lead">把复杂的事想明白，<br />把有趣的想法做出来。</p>
        <p className="book-cover-desc">关于一个年轻女孩的好奇、尝试、思考与创造。<br />不是简历，也不是已经写好的成功故事。</p>
        <span className="book-handnote">你好呀，翻开看看。↗</span>
      </div>
    ),
    right: (
      <div className="book-cover-photo">
        <img src={portrait} alt="六水的个人肖像" />
        <div className="book-photo-overlay">
          <span>CHAPTER ZERO</span>
          <p>认真生活，保持好奇。</p>
        </div>
      </div>
    )
  },
  {
    id: "hello",
    chapter: "认识我",
    eyebrow: "01 / HELLO, I'M LIUSHUI",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">A LITTLE ABOUT ME</span>
        <h2>你好，<br />我是<span>六水。</span></h2>
        <p>我喜欢认识有趣的人，听不同的故事，也喜欢追着一个问题不断往下想。</p>
        <p>有时候，我会把这些好奇变成一条视频、一个项目、一篇文章；有时候，它们只是 Flomo 里一条没头没尾的碎碎念。</p>
        <p>我想做的事情还有很多，已经做成的事情也远没有想象中那么多。但我很享受观察、思考、尝试，再从头来过的过程。</p>
        <div className="book-tagline-tags"><span>好奇</span><span>表达</span><span>行动</span><span>自由</span></div>
        <p className="book-aside">我不是一个已经完成的人。<br />这本书也不需要一个确定的结局。</p>
      </div>
    ),
    right: (
      <div className="book-body-page book-perspectives">
        <span className="book-kicker">THROUGH DIFFERENT EYES</span>
        <h3>他们眼里的我，<br />好像有点不一样。</h3>
        <div className="book-lens"><span>01 / 朋友与同龄人</span><strong>鲜活，健谈，爱折腾。</strong><p>一个总有新想法、很会聊天，也敢试试别人只是想想的事情的女孩。</p></div>
        <div className="book-lens"><span>02 / 曾经教导我的人</span><strong>有主见，也还在长大。</strong><p>做过选择，走过弯路，记得别人的鼓励，也认真学习承担自己的决定。</p></div>
        <div className="book-lens"><span>03 / 一起做事的人</span><strong>喜欢把问题拆开，再做出来。</strong><p>在内容、个人 IP、增长与表达中积累实践，让想法接受真实的反馈。</p></div>
        <p className="book-tiny-note">这些是基于个人文字、过往经历和公开反馈的归纳，而非第三方背书。</p>
      </div>
    )
  },
  {
    id: "world",
    chapter: "看看世界",
    eyebrow: "02 / THE WORLD IS A BOOK",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">STAY CURIOUS</span>
        <h2>世界这本书，<br />还想<span>多读几篇。</span></h2>
        <p>2023 年，我去一家民宿体验酒店前台的工作，又采访了街头卖红薯的嬢嬢和清洁工嬢嬢。</p>
        <p>后来我也尝试过非遗体验、旅行、拍摄和不同的工作。对我来说，“见世面”不只意味着走得远，也意味着愿意理解另一种生活怎样运转。</p>
        <div className="book-quote-block">
          <span>FROM WECHAT MOMENTS · 2023.09.29</span>
          <blockquote>“当你想要去感受这个世界的善意与美好，那就勇敢去做！<br />世界这本书今天我又多读了一篇！”</blockquote>
        </div>
      </div>
    ),
    right: (
      <div className="book-image-page">
        <img src={imageOne} alt="六水个人相册中的真实照片" loading="lazy" />
        <div className="book-image-caption"><span>CURIOUS IN EVERY DIRECTION</span><p>世界不只一种打开方式。</p></div>
        <p className="book-image-footnote">生活、城市、陌生人，以及那些值得停下来观察的瞬间。</p>
      </div>
    )
  },
  {
    id: "make",
    chapter: "让想法发生",
    eyebrow: "03 / MAKE THINGS HAPPEN",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">FROM THINKING TO MAKING</span>
        <h2>不止想想，<br />还要<span>做点什么。</span></h2>
        <p>我很喜欢从一团模糊的想法里找到可以落地的切口：观察受众、寻找选题、组织表达、反复修改，然后发布和复盘。</p>
        <p>从自己的成长类账号，到产品内容推广、传统行业个人 IP、团队 SOP，我尝试过不同的内容与业务场景。</p>
        <p>我也逐渐意识到：传播、咨询与成交不是一回事。真正值得相信的判断，需要经得起结果检验。</p>
        <a className="book-inline-link" href={careerUrl}>查看完整项目与证据 <span aria-hidden="true">↗</span></a>
      </div>
    ),
    right: (
      <div className="book-body-page">
        <span className="book-kicker">SMALL, REAL PROOFS</span>
        <h3>做过的事，<br />留下的痕迹。</h3>
        <div className="book-proof"><span>01 / 个人内容</span><strong>47.5 万</strong><p>一条大学生成长视频的播放量（截图时点）</p></div>
        <div className="book-proof"><span>02 / 产品推广</span><strong>数百名</strong><p>SnapVee 内容带来新增粉丝，并产生主动咨询</p></div>
        <div className="book-proof"><span>03 / 内容服务</span><strong>3 位</strong><p>传统行业个人 IP 的付费陪跑客户（本人项目记录）</p></div>
        <div className="book-proof"><span>04 / 团队协作</span><strong>30+ 人</strong><p>TikTok 业务 SOP 供内部团队参考使用</p></div>
        <p className="book-tiny-note">数据来自已有作品截图和个人项目记录；未独立核验的客户成效不作推算。</p>
      </div>
    )
  },
  {
    id: "notes",
    chapter: "思考的痕迹",
    eyebrow: "04 / NOTES TO MYSELF",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">FLOMO / AN ONGOING DIALOGUE</span>
        <h2>有些想法，<br />值得<span>留下来。</span></h2>
        <p>我习惯把突然冒出来的念头记进 Flomo。关于内容与商业、成长与选择、生活中的不确定，也关于那些很小却舍不得忘记的感受。</p>
        <div className="book-notes-count"><strong>640<span>+</span></strong><p>条笔记的积累<br /><small>截至 2026 年 7 月的原始导出</small></p></div>
        <p>这些记录并不总是正确，甚至常常彼此矛盾。可是回头看时，我能看见自己怎样一步步修正答案。</p>
        <div className="book-quote-block"><span>FLOMO · 2026.06.29</span><blockquote>“选择了，确定了，就一直干下去。直到落地，直到拿出结果。”</blockquote></div>
      </div>
    ),
    right: (
      <div className="book-body-page book-note-paper">
        <span className="book-kicker">SELECTED LINES / 手记摘录</span>
        <div className="book-note-entry"><time>2026.06.08 · FLOMO</time><blockquote>见世面就是要见世界的每一面。</blockquote><small>不是只有往上看，才叫见世面。</small></div>
        <div className="book-note-entry"><time>2026.02.02 · 朋友圈</time><blockquote>只有今天的生活才是实相。</blockquote><small>关于成长、当下和那些寻常的日子。</small></div>
        <div className="book-note-entry"><time>2023.12.25 · 朋友圈</time><blockquote>爱让生命滋养出血肉！</blockquote><small>谢谢过去的尝试，也谢谢曾经遇见的人。</small></div>
        <div className="book-note-entry"><time>2026.07.03 · 朋友圈</time><blockquote>理解的再多不做出来，就不是真正的理解。</blockquote><small>写给那个容易想太多的自己。</small></div>
        <p className="book-tiny-note">以上为本人文字摘录，按原意选取，日期来自导出记录。</p>
      </div>
    )
  },
  {
    id: "life",
    chapter: "认真生活",
    eyebrow: "05 / THE JOY OF PRACTICE",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">BEYOND THE WORK</span>
        <h2>有些进步，<br /><span>不需要观众。</span></h2>
        <p>我喜欢游泳。喜欢在水里暂时放下那些需要思考和解决的问题，只专心感受呼吸、动作与节奏。</p>
        <p>2024 年，我用三个月自学自由泳，从连 10 米都游不出去，到可以完成 1.5 公里。后来，我还记下了自己自由泳 1000 米游进半小时的那一天。</p>
        <div className="book-swim-progress"><div><small>START</small><strong>10<span>m</span></strong><p>最初游不了的距离</p></div><i aria-hidden="true">→</i><div><small>AFTER 3 MONTHS</small><strong>1.5<span>km</span></strong><p>2024 年的自学成果</p></div></div>
        <p className="book-aside">不必每件喜欢的事，<br />都被解释成某种生产力。</p>
      </div>
    ),
    right: (
      <div className="book-image-page">
        <img src={imageTwo} alt="六水个人相册中的真实照片" loading="lazy" />
        <div className="book-image-caption"><span>LITTLE THINGS, BIG JOY</span><p>认真地过，慢慢地好。</p></div>
        <div className="book-quote-block book-image-quote"><span>朋友圈 · 2025.04.04</span><blockquote>“可惜你不游泳不知道我自由泳1000m下半小时的成就感有多强”</blockquote></div>
      </div>
    )
  },
  {
    id: "people",
    chapter: "一路遇见",
    eyebrow: "06 / THE PEOPLE I MET",
    left: (
      <div className="book-body-page">
        <span className="book-kicker">ABOUT GRATITUDE</span>
        <h2>长大以后，<br />还记得<span>来时的路。</span></h2>
        <p>我遇见过很多愿意鼓励我的人。有老师、朋友，也有在互联网和工作中认识的新伙伴。</p>
        <p>2026 年的教师节，我写过从小学到高中的老师如何影响了我。后来自己开始给学生讲课，才更加理解那种影响。</p>
        <div className="book-quote-block"><span>朋友圈 · 2026.09.10</span><blockquote>“以前老师给我授的业很多都忘了<br />可是所解的惑，永远的刻在了我的脑子里”</blockquote></div>
        <p>我希望自己保持独立，也保留记得别人善意的能力。</p>
      </div>
    ),
    right: (
      <div className="book-letter-page">
        <span className="book-kicker">A LETTER TO THE FUTURE</span>
        <p className="book-letter-salute">亲爱的未来的我：</p>
        <p>希望你仍然会为了一个有趣的新发现而兴奋。</p>
        <p>希望你能完成重要的事情，也允许自己偶尔无所事事。</p>
        <p>希望你继续认识不同的人，认真生活，不把所有日子都交给结果。</p>
        <p>至于前方究竟会发生什么，现在还不知道。</p>
        <p>不过，这也正是这本书值得继续翻下去的原因。</p>
        <span className="book-signature">六水 · 写在二十二岁</span>
      </div>
    )
  },
  {
    id: "contact",
    chapter: "未完待续",
    eyebrow: "07 / TO BE CONTINUED",
    left: (
      <div className="book-body-page book-end-page">
        <span className="book-kicker">THE STORY IS STILL UNFOLDING</span>
        <h2>故事还长，<br /><span>下页见。</span></h2>
        <p>我还没有成为某个确定的人，还有很多故事没有结局。</p>
        <p>但只要还愿意保持好奇、认真思考，并亲手做点什么，就总有下一页。</p>
        <div className="book-ending-mark">未完待续<span>...</span></div>
      </div>
    ),
    right: (
      <div className="book-body-page book-contact-page">
        <span className="book-kicker">LET'S MAKE SOMETHING</span>
        <h3>你好，<br />很高兴<span>遇见你。</span></h3>
        <p>如果你也关心内容、个人 IP、创意策划，或有一个想聊聊的点子，欢迎来找我。</p>
        <a href={"mailto:" + email} className="book-contact-action">写一封邮件 <span aria-hidden="true">↗</span></a>
        <div className="book-social-links">
          <a href={xUrl} target="_blank" rel="noreferrer">X / @Clara_J_0529 ↗</a>
          <a href="https://github.com/jiamiaomiao029-gif" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href={careerUrl}>项目作品集 ↗</a>
        </div>
        <p className="book-tiny-note">不定期更新。感谢你认真翻完这本小书。</p>
      </div>
    )
  }
];

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
