# Work Profile Image Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace only the desktop Work-section heading image with the supplied portrait and publish the change to `main`.

**Architecture:** Store the supplied JPEG as a separate public asset and update the existing content configuration to reference it. Preserve `work-3.png` for the third work card and keep the current layout and caption unchanged.

**Tech Stack:** React 19, TypeScript, Vite, static assets in `public/images`, Playwright CLI

---

### Task 1: Add and reference the profile image

**Files:**
- Create: `public/images/work-profile.jpg`
- Modify: `src/content.ts:59`
- Modify: `src/index.css:442`
- Modify: `src/sections/Work.tsx:14`

- [x] **Step 1: Verify the new asset is absent before implementation**

Run:

```bash
test ! -e public/images/work-profile.jpg
```

Expected: exit 0 because the new asset does not exist yet.

- [x] **Step 2: Copy the supplied JPEG into the public image directory**

Run:

```bash
cp "/Users/zhangnanfan/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/wxid_bh0plvelk2dl22_95ff/temp/RWTemp/2026-07/47b20b3627067aeadde436cc85dcf0f3/f715bbdffecce69a1c996031b5365d9f.jpg" public/images/work-profile.jpg
```

Expected: `file public/images/work-profile.jpg` reports a 1080 x 1620 JPEG.

- [x] **Step 3: Point the Work-section heading photo at the new asset**

Change the `works` configuration to:

```ts
photo: "/images/work-profile.jpg",
```

Keep the third work-card entry unchanged:

```ts
{ img: "/images/work-3.png", title: "内容系统搭建", category: "内容策划", desc: "从想到什么发什么，到一套能持续产出的内容系统。" },
```

- [x] **Step 4: Set the portrait focus and accessible text**

Add this declaration to `.hero-photo-frame img` in `src/index.css`:

```css
object-position: center 8%;
```

Change the heading image alt text in `src/sections/Work.tsx` to:

```tsx
<img src={works.photo} alt="六水个人形象照" />
```

- [x] **Step 5: Verify path isolation**

Run:

```bash
rg -n 'work-profile\.jpg|work-3\.png' src/content.ts
```

Expected: `works.photo` references `work-profile.jpg`; the third card still references `work-3.png`.

### Task 2: Verify and publish

**Files:**
- Verify: `dist/images/work-profile.jpg`
- Create: `/tmp/liushui-work-profile-desktop-final.png` (local verification artifact, not committed)

- [x] **Step 1: Build the production site**

Run:

```bash
npm run build
```

Expected: TypeScript and Vite finish with exit 0, and `dist/images/work-profile.jpg` is non-empty.

- [x] **Step 2: Verify the desktop Work section in a browser**

Start Vite preview on an available local port, open it with Playwright at a desktop viewport, scroll to `#work`, and save `/tmp/liushui-work-profile-desktop-final.png`.

Expected: the supplied portrait appears beside the heading, the third card retains its original image, and no text or images overlap.

- [x] **Step 3: Commit the approved change**

Run:

```bash
git add docs/superpowers/plans/2026-07-27-work-profile-image.md docs/superpowers/specs/2026-07-27-work-profile-image-design.md public/images/work-profile.jpg src/content.ts src/index.css src/sections/Work.tsx
git commit -m "Update work profile image"
```

Expected: one implementation commit containing the updated documentation, new JPEG, content path, portrait focus, and alt-text changes.

- [x] **Step 4: Push and verify `main`**

Run:

```bash
git push origin main
git ls-remote origin refs/heads/main
```

Expected: the remote `main` hash matches local `HEAD`.
