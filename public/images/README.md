# 图片素材说明

仓库中的网站代码引用了以下图片（位于本目录）：

| 文件 | 用途 |
|---|---|
| avatar.jpg | 首屏头像 + 微信弹窗头像 |
| qr-xhs.jpg | 小红书二维码（底部） |
| qr-douyin.jpg | 抖音二维码（底部） |
| qr-wechat.jpg | 微信二维码（弹窗 + 底部） |
| work-1.jpg ~ work-5.jpg | 「实战方向」横滑卡片配图 |

这些图片当前随源码包 `liushui-website.zip` 一起提供。将 zip 解压后，把 `public/images/` 下的 9 张图片提交到本目录即可完成完整部署：

```bash
unzip liushui-website.zip
cd liushui-website  # 或解压目录
git clone <本仓库> deploy && cp -r public/images deploy/public/
cd deploy && git add -A && git commit -m "Add images" && git push
```

之后 Vercel 重新部署即可显示全部图片。
