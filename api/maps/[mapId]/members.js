const crypto = require("node:crypto");
const { errorResponse, getBody, handleOptions, httpError, json, methodNotAllowed, setCors } = require("../../_lib/http");
const { canManageMap, findMap, getUser, rest } = require("../../_lib/supabase");

module.exports = async function handler(req, res) {
  setCors(req, res);
  if (handleOptions(req, res)) return;

  if (req.method !== "POST") {
    methodNotAllowed(res);
    return;
  }

  try {
    const user = await getUser(req);
    const map = await findMap(req.query.mapId || "default", user, { create: false });
    if (!(await canManageMap(map, user.id))) {
      throw httpError(403, "Only the map owner can invite collaborators.");
    }

    const body = await getBody(req);
    const email = String(body.email || "").trim().toLowerCase();
    const role = ["editor", "viewer"].includes(body.role) ? body.role : "viewer";
    if (!email || !email.includes("@")) throw httpError(400, "A valid email is required.");

    const token = crypto.randomBytes(24).toString("base64url");
    await rest("map_invitations", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: {
        map_id: map.id,
        email,
        role,
        token,
        expires_at: new Date(Date.now() + 14 * 86400_000).toISOString(),
        created_by: user.id
      }
    });

    json(res, 201, {
      email,
      role,
      status: "pending"
    });
  } catch (error) {
    errorResponse(res, error);
  }
};
