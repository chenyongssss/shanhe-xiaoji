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

## 云同步配置

复制 `config.example.json` 为部署环境中的 `config.json`，并填入后端 API 地址：

```json
{
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
