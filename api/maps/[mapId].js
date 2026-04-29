const { errorResponse, getBody, handleOptions, httpError, json, methodNotAllowed, setCors } = require("../_lib/http");
const { canEditMap, findMap, getUser, updateMap } = require("../_lib/supabase");

module.exports = async function handler(req, res) {
  setCors(req, res);
  if (handleOptions(req, res)) return;

  try {
    const user = await getUser(req);
    const mapId = req.query.mapId || "default";

    if (req.method === "GET") {
      const map = await findMap(mapId, user, { create: false });
      json(res, 200, {
        id: map.id,
        title: map.title,
        visibility: map.visibility,
        state: map.state || {}
      });
      return;
    }

    if (req.method === "PUT") {
      const body = await getBody(req);
      const map = await findMap(mapId, user, {
        create: true,
        title: body.title,
        state: body.state
      });

      if (!(await canEditMap(map, user.id))) throw httpError(403, "No edit access to this map.");

      const updated = await updateMap(map.id, {
        title: body.title || map.title || "山河小记",
        state: body.state || {},
        visibility: body.visibility || map.visibility || "private"
      });

      json(res, 200, {
        id: updated.id,
        title: updated.title,
        visibility: updated.visibility,
        state: updated.state || {}
      });
      return;
    }

    methodNotAllowed(res);
  } catch (error) {
    errorResponse(res, error);
  }
};
