# 山河小记云同步 API 契约

前端在项目根目录发现 `config.json`，且其中存在 `apiBaseUrl` 时，会从本地优先模式切换到云同步模式。

## 配置示例

```json
{
  "apiBaseUrl": "https://api.example.com",
  "mapId": "default",
  "accessToken": ""
}
```

`accessToken` 可以不写，前端会优先读取浏览器中的 `shanhe-cloud-token`。后续接入 Supabase Auth 后，只需要把登录后的 JWT 放入同名 key。

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
