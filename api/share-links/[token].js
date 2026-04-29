const { errorResponse, handleOptions, httpError, json, methodNotAllowed, setCors } = require("../_lib/http");
const { rest } = require("../_lib/supabase");
const { sanitizeSharedState } = require("../_lib/share");

module.exports = async function handler(req, res) {
  setCors(req, res);
  if (handleOptions(req, res)) return;

  if (req.method !== "GET") {
    methodNotAllowed(res);
    return;
  }

  try {
    const token = req.query.token;
    const links = await rest(
      `share_links?token=eq.${encodeURIComponent(token)}&revoked_at=is.null&select=*,maps(id,title,state,visibility)&limit=1`
    );
    const link = links?.[0];
    if (!link) throw httpError(404, "Share link not found.");
    if (link.expires_at && new Date(link.expires_at).getTime() < Date.now()) {
      throw httpError(410, "Share link expired.");
    }

    const map = link.maps;
    json(res, 200, {
      id: map.id,
      title: map.title,
      permission: link.permission,
      state: sanitizeSharedState(map.state || {}, {
        allowPhotos: link.allow_photos,
        allowPrivateNotes: link.allow_private_notes
      })
    });
  } catch (error) {
    errorResponse(res, error);
  }
};
