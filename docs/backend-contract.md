# 山河小记云同步 API 契约

前端在项目根目录发现 `config.json`，且其中存在 `apiBaseUrl` 时，会从本地优先模式切换到云同步模式。

本项目已经在 `api/` 目录实现了 Vercel Serverless Functions 版本的后端 API。部署到 Vercel 后，推荐使用同源配置：

## 配置示例

```json
{
  "apiBaseUrl": "/api",
  "mapId": "default",
  "accessToken": ""
}
```

`accessToken` 可以不写，前端会优先读取浏览器中的 `shanhe-cloud-token`。后续接入 Supabase Auth 后，只需要把登录后的 JWT 放入同名 key。

## 环境变量

```text
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
PUBLIC_APP_URL
```

`SUPABASE_SERVICE_ROLE_KEY` 只允许存在于 Vercel 后端环境变量中，不能写入任何前端配置文件。

## GET /maps/:mapId

返回当前用户可访问的地图状态。

```json
{
  "id": "default",
  "title": "我的山河小记",
  "state": {
    "cities": {},
    "selectedCity": null,
    "filter": "all",
    "query": ""
  }
}
```

## PUT /maps/:mapId

保存地图状态。前端会发送完整状态快照，但不上传 IndexedDB 中的照片原图。

```json
{
  "title": "山河小记",
  "state": {
    "cities": {},
    "selectedCity": null,
    "filter": "all",
    "query": ""
  }
}
```

服务端应该根据登录用户校验 owner/editor 权限。

## POST /share-links

创建可撤销的分享链接。前端永远发送 `allowPrivateNotes: false`。

```json
{
  "mapId": "default",
  "permission": "view",
  "expiresInDays": 7,
  "allowPhotos": false,
  "allowPrivateNotes": false
}
```

返回：

```json
{
  "token": "opaque-share-token",
  "url": "https://app.example.com/share/opaque-share-token"
}
```

## GET /share-links/:token

返回经过权限过滤后的地图状态。服务端必须移除私密字段，例如 `budget`、`notes`、`plan` 和未公开照片。

## POST /maps/:mapId/members

邀请协作成员。服务端应该只允许 owner 发起邀请，或允许 editor 邀请 viewer。

```json
{
  "email": "friend@example.com",
  "role": "editor"
}
```

推荐返回：

```json
{
  "email": "friend@example.com",
  "role": "editor",
  "status": "pending"
}
```
