# 山河小记

山河小记是一个中国旅行地图 MVP。当前版本支持本地优先编辑、静态部署、可配置云同步、隐私分享链接、协作邀请入口、海报生成和数据导出。

## 本地运行

```powershell
npm.cmd run dev
```

也可以继续使用：

```powershell
.\start.ps1
```

## 构建验证

```powershell
npm.cmd run build
```

## 静态部署

项目已经包含 `vercel.json`，可直接部署到 Vercel。未配置 `config.json` 时，应用会以本地优先模式运行。

如果要把它做成“人人都可以部署自己的旅行地图”的轻量模板，见：

```text
docs/lite-self-deploy.md
```

## 轻量自部署

1. Fork 或下载本项目。
2. 复制 `config.example.json` 为 `config.json`。
3. 修改 `siteTitle`、`siteSubtitle`、`ownerName`、`defaultMapName`。
4. 按需复制并修改 `data/starter-map.example.json`，再把 `seedDataUrl` 指向你的初始地图文件。
5. 部署到 GitHub Pages、Vercel 或 Netlify。

未配置后端时，网站会以本地优先模式运行。用户录入的数据保存在当前浏览器中，可通过“分享 - 导出数据 / 导入数据”迁移。

## 云同步配置

复制 `config.example.json` 为部署环境中的 `config.json`，并填入后端 API 地址：

```json
{
  "siteTitle": "我的旅行地图",
  "siteSubtitle": "把去过的地方做成一张旅行主页",
  "ownerName": "旅行者",
  "defaultMapName": "我的中国旅行灵感图",
  "seedDataUrl": "./data/starter-map.example.json",
  "apiBaseUrl": "/api",
  "mapId": "default",
  "accessToken": ""
}
```

后端 API 契约见 `docs/backend-contract.md`，Supabase 表结构见 `supabase/schema.sql`。

## Vercel 环境变量

在 Vercel Project Settings 里设置：

```text
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
PUBLIC_APP_URL
```

`SUPABASE_SERVICE_ROLE_KEY` 只用于 `api/` 服务端函数，不会发到浏览器。
