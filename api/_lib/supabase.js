const { httpError } = require("./http");

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function env() {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.SUPABASE_ANON_KEY || serviceKey;
  if (!url || !serviceKey) {
    throw httpError(500, "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }
  return {
    url: url.replace(/\/$/, ""),
    serviceKey,
    anonKey
  };
}

async function rest(path, options = {}) {
  const { url, serviceKey } = env();
  const headers = {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    "Content-Type": "application/json",
    ...(options.headers || {})
  };
  const response = await fetch(`${url}/rest/v1/${path}`, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    const message = await response.text();
    throw httpError(response.status, message || "Supabase request failed.");
  }

  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

async function getUser(req) {
  const { url, anonKey } = env();
  const authorization = req.headers.authorization || "";
  if (!authorization.toLowerCase().startsWith("bearer ")) {
    throw httpError(401, "Missing bearer token.");
  }

  const response = await fetch(`${url}/auth/v1/user`, {
    headers: {
      apikey: anonKey,
      Authorization: authorization
    }
  });

  if (!response.ok) throw httpError(401, "Invalid bearer token.");
  return response.json();
}

async function getMembership(mapId, userId) {
  const rows = await rest(
    `map_members?map_id=eq.${encodeURIComponent(mapId)}&user_id=eq.${encodeURIComponent(userId)}&select=role&limit=1`
  );
  return rows?.[0] || null;
}

async function canReadMap(map, userId) {
  if (map.owner_id === userId) return true;
  return Boolean(await getMembership(map.id, userId));
}

async function canEditMap(map, userId) {
  if (map.owner_id === userId) return true;
  const membership = await getMembership(map.id, userId);
  return ["owner", "editor"].includes(membership?.role);
}

async function canManageMap(map, userId) {
  return map.owner_id === userId;
}

async function findMap(mapId, user, options = {}) {
  const create = Boolean(options.create);
  if (UUID_PATTERN.test(mapId)) {
    const rows = await rest(`maps?id=eq.${encodeURIComponent(mapId)}&select=*&limit=1`);
    const map = rows?.[0];
    if (!map) {
      if (!create) throw httpError(404, "Map not found.");
      return createMap(user.id, options.title, options.state, mapId);
    }
    if (!(await canReadMap(map, user.id))) throw httpError(403, "No access to this map.");
    return map;
  }

  const owned = await rest(
    `maps?owner_id=eq.${encodeURIComponent(user.id)}&select=*&order=created_at.asc&limit=1`
  );
  if (owned?.[0]) return owned[0];
  if (!create) throw httpError(404, "Map not found.");
  return createMap(user.id, options.title, options.state);
}

async function createMap(ownerId, title = "山河小记", state = {}, id) {
  const body = {
    owner_id: ownerId,
    title: title || "山河小记",
    state: state || {},
    visibility: "private",
    ...(id ? { id } : {})
  };
  const rows = await rest("maps?select=*", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body
  });
  return rows[0];
}

async function updateMap(mapId, body) {
  const rows = await rest(`maps?id=eq.${encodeURIComponent(mapId)}&select=*`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: {
      ...body,
      updated_at: new Date().toISOString()
    }
  });
  return rows[0];
}

module.exports = {
  canEditMap,
  canManageMap,
  createMap,
  findMap,
  getMembership,
  getUser,
  rest,
  updateMap
};
