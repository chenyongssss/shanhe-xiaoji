const crypto = require("node:crypto");
const { errorResponse, getBody, handleOptions, httpError, json, publicBaseUrl, methodNotAllowed, setCors } = require("./_lib/http");
const { canManageMap, findMap, getUser, rest } = require("./_lib/supabase");

module.exports = async function handler(req, res) {
  setCors(req, res);
  if (handleOptions(req, res)) return;

  if (req.method !== "POST") {
    methodNotAllowed(res);
    return;
  }

  try {
    const user = await getUser(req);
    const body = await getBody(req);
    const map = await findMap(body.mapId || "default", user, { create: false });

    if (!(await canManageMap(map, user.id))) {
      throw httpError(403, "Only the map owner can create share links.");
    }

    const permission = ["view", "comment", "edit"].includes(body.permission) ? body.permission : "view";
    const expiresInDays = Number(body.expiresInDays || 7);
    const expiresAt = expiresInDays > 0 ? new Date(Date.now() + expiresInDays * 86400_000).toISOString() : null;
    const token = crypto.randomBytes(24).toString("base64url");

    const rows = await rest("share_links?select=*", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: {
        map_id: map.id,
        token,
        permission,
        allow_photos: Boolean(body.allowPhotos),
        allow_private_notes: false,
        expires_at: expiresAt,
        created_by: user.id
      }
    });

    const share = rows[0];
    const url = `${publicBaseUrl(req)}/share/${encodeURIComponent(share.token)}`;
    json(res, 201, {
      token: share.token,
      url,
      permission: share.permission,
      expiresAt: share.expires_at
    });
  } catch (error) {
    errorResponse(res, error);
  }
};
