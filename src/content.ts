// ============================================================
// 网站全部文案集中在这里 —— 直接替换即可
// ============================================================

export const site = {
  name: "六水六水",
  role: "AI 营销实战派",
  xhsId: "94153102792",
  douyinId: "43948457966",
  wechatId: "M18391980882",
};

export const nav = [
  { label: "首页", href: "#top" },
  { label: "关于", href: "#about" },
  { label: "实践", href: "#work" },
  { label: "联系", href: "#contact", modal: true },
];

export const hero = {
  tagline: "帮 AI 创业者，解决自媒体营销问题。",
  tags: ["04 女大学生", "每天在直播间分享项目和验证过的方法", "怎么起号", "怎么表达", "怎么把 AI 变成你的营销杠杆"],
  aboutLink: "了解我",
  liveCta: "直播间聊聊",
  liveNote: "每天晚上 8 点开播，直播间见",
  stats: [
    { value: "100", suffix: "场", label: "暑假直播挑战" },
    { value: "20", suffix: ":00", label: "每晚固定开播" },
    { value: "AI", suffix: "+", label: "营销实战方向" },
  ],
};

export const about = {
  kicker: "关于我",
  title: "我为何大学期间便投身自媒体创业？",
  bio: [
    "自媒体，是普通人能把握住的最大成长杠杆。而 AI 与自媒体叠加，两个杠杆提供了更强的破局捷径，让内容赛道拥有了前所未有的想象空间。",
    "所以今年暑假我要：完成 100 场直播。摒弃噱头，只做干货输出，把亲身总结的经验与方法论，一场场拆解透彻。",
    "为 AI 创业者赋能。",
  ],
  tiles: {
    focus: { label: "我在做的事", lines: ["AI 创业营销 · 自媒体起号", "直播实战 · 内容策划"] },
    location: { label: "常驻", value: "小红书 · 每晚 20:00" },
    status: { label: "目前状态", value: "直播挑战进行中", dot: true },
    tool: { label: "擅长", value: "内容策划 / 账号诊断 / AI 工具落地" },
  },
};

export const philosophy = {
  line1: "想，都是问题；",
  line2: "做，才有答案。",
  cite1: "我直播一场场站起来的起点，",
  cite2: "也想送给每一个在路上的人。",
};

export const works = {
  kicker: "实战方向",
  title: "我能帮你解决的事。",
  photo: "/images/work-profile.jpg",
  photoCaption: "六水的直播间日常 · 每晚 20:00",
  items: [
    { img: "/images/work-1.png", title: "账号从 0 到 1", category: "自媒体起号", desc: "定位、人设、第一批内容怎么发，陪你把账号从白纸做到有血有肉。" },
    { img: "/images/work-2.png", title: "AI 营销落地", category: "AI 工具实战", desc: "不让 AI 停在玩具阶段——把它装进选题、文案、私域的每一天里。" },
    { img: "/images/work-3.png", title: "内容系统搭建", category: "内容策划", desc: "从想到什么发什么，到一套能持续产出的内容系统。" },
    { img: "/images/work-4.png", title: "直播间方法论", category: "直播实战", desc: "100 场直播里验证过的：开场、留人、转化，全是真实数据换来的。" },
    { img: "/images/work-5.png", title: "创业者表达力", category: "个人 IP", desc: "你做的产品很好，下一步是让更多人听懂它为什么好。" },
  ],
};

export const contact = {
  kicker: "找到我",
  title: "每晚 8 点，直播间见。",
  sub: "在小红书搜索「六水六水」，或搜小红书号，关注我并进入直播间。有营销问题，欢迎随时来聊。",
  cta: "复制小红书号",
  idLabel: "小红书号",
  channels: [
    { label: "小红书", img: "/images/qr-xhs.jpg", hint: "扫码关注 · 每晚 20:00 直播" },
    { label: "抖音", img: "/images/qr-douyin.jpg", hint: "扫码关注 · 同步开播" },
    { label: "微信", img: "/images/qr-wechat.jpg", hint: "扫码添加 · 备注来意" },
  ],
};

export const modal = {
  title: "添加我的微信",
  hint: "微信扫一扫，备注来意",
};

export const footer = {
  copy: "© 2026 六水六水 · 想都是问题，做才有答案。",
};
