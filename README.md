# 六水六水 · 个人网站

帮 AI 创业者解决自媒体营销问题的个人品牌站。白 / 深蓝 / 灰三色体系，Apple 官网式极简风格。

## 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS
- GSAP（ScrollTrigger）+ Lenis 平滑滚动

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build   # 产物输出到 dist/
```

## 部署到 Vercel

仓库已包含 `vercel.json`（Vite 框架、构建命令 `npm run build`、输出目录 `dist`），Vercel 导入本仓库即可自动识别，无需任何额外配置：

1. 登录 [vercel.com](https://vercel.com)，选择 **Add New → Project**
2. **Import** 这个 GitHub 仓库
3. Framework Preset 会自动识别为 **Vite**，直接点 **Deploy**

## 内容修改

所有文案（名字、标签、关于我、金句、作品、联系方式）集中在 `src/content.ts`，改文字即可；图片在 `public/images/`，同名替换。
