const CITY_CATALOG = [
  { name: "北京", lon: 116.4074, lat: 39.9042, icon: "museum", tags: ["博物馆", "古建"] },
  { name: "天津", lon: 117.2008, lat: 39.0842, icon: "coast", tags: ["海河", "洋楼"] },
  { name: "哈尔滨", lon: 126.6424, lat: 45.7567, icon: "snow", tags: ["冰雪", "俄式建筑"] },
  { name: "沈阳", lon: 123.4315, lat: 41.8057, icon: "museum", tags: ["故宫", "历史"] },
  { name: "大连", lon: 121.6147, lat: 38.914, icon: "coast", tags: ["海滨", "Citywalk"] },
  { name: "呼和浩特", lon: 111.7492, lat: 40.8426, icon: "nature", tags: ["草原", "自驾"] },
  { name: "西安", lon: 108.9398, lat: 34.3416, icon: "heritage", tags: ["古城", "美食"] },
  { name: "兰州", lon: 103.8343, lat: 36.0611, icon: "food", tags: ["黄河", "牛肉面"] },
  { name: "敦煌", lon: 94.6619, lat: 40.1421, icon: "desert", tags: ["沙漠", "壁画"] },
  { name: "银川", lon: 106.2309, lat: 38.4872, icon: "sunrise", tags: ["西北", "酒庄"] },
  { name: "成都", lon: 104.0665, lat: 30.5728, icon: "food", tags: ["松弛", "美食"] },
  { name: "重庆", lon: 106.5516, lat: 29.563, icon: "food", tags: ["山城", "夜景"] },
  { name: "昆明", lon: 102.8329, lat: 24.8801, icon: "flower", tags: ["花季", "慢游"] },
  { name: "大理", lon: 100.2676, lat: 25.6065, icon: "nature", tags: ["洱海", "松弛"] },
  { name: "丽江", lon: 100.233, lat: 26.8721, icon: "nature", tags: ["古城", "雪山"] },
  { name: "拉萨", lon: 91.1172, lat: 29.6469, icon: "nature", tags: ["高原", "寺庙"] },
  { name: "贵阳", lon: 106.6302, lat: 26.6477, icon: "nature", tags: ["避暑", "酸汤"] },
  { name: "桂林", lon: 110.2902, lat: 25.2736, icon: "nature", tags: ["山水", "竹筏"] },
  { name: "长沙", lon: 112.9388, lat: 28.2282, icon: "food", tags: ["美食", "夜生活"] },
  { name: "武汉", lon: 114.3054, lat: 30.5931, icon: "museum", tags: ["江城", "樱花"] },
  { name: "郑州", lon: 113.6254, lat: 34.7466, icon: "custom", tags: ["中原", "交通"] },
  { name: "洛阳", lon: 112.4539, lat: 34.6197, icon: "heritage", tags: ["牡丹", "古都"] },
  { name: "济南", lon: 117.1201, lat: 36.6512, icon: "museum", tags: ["泉水", "老城"] },
  { name: "青岛", lon: 120.3826, lat: 36.0671, icon: "coast", tags: ["海滨", "啤酒"] },
  { name: "南京", lon: 118.7969, lat: 32.0603, icon: "museum", tags: ["梧桐", "博物馆"] },
  { name: "苏州", lon: 120.5853, lat: 31.2989, icon: "heritage", tags: ["园林", "古镇"] },
  { name: "上海", lon: 121.4737, lat: 31.2304, icon: "custom", tags: ["都市", "展览"] },
  { name: "杭州", lon: 120.1551, lat: 30.2741, icon: "flower", tags: ["西湖", "茶"] },
  { name: "黄山", lon: 118.3375, lat: 29.7147, icon: "nature", tags: ["山川", "日出"] },
  { name: "厦门", lon: 118.0894, lat: 24.4798, icon: "coast", tags: ["海岛", "Citywalk"] },
  { name: "福州", lon: 119.2965, lat: 26.0745, icon: "coast", tags: ["老街", "温泉"] },
  { name: "泉州", lon: 118.6759, lat: 24.8741, icon: "heritage", tags: ["世遗", "古城"] },
  { name: "广州", lon: 113.2644, lat: 23.1291, icon: "food", tags: ["早茶", "老城"] },
  { name: "深圳", lon: 114.0579, lat: 22.5431, icon: "custom", tags: ["都市", "海边"] },
  { name: "珠海", lon: 113.5767, lat: 22.2707, icon: "coast", tags: ["海滨", "轻松"] },
  { name: "海口", lon: 110.3312, lat: 20.0311, icon: "coast", tags: ["海岛", "骑楼"] },
  { name: "三亚", lon: 109.5119, lat: 18.2528, icon: "coast", tags: ["海岛", "度假"] },
  { name: "乌鲁木齐", lon: 87.6168, lat: 43.8256, icon: "nature", tags: ["新疆", "自驾"] }
];

const ROUTE_TEMPLATES = [
  {
    id: "jiangnan",
    name: "江南水乡线",
    caption: "上海 · 苏州 · 杭州 · 南京",
    cities: ["上海", "苏州", "杭州", "南京"],
    tags: ["江南", "Citywalk", "园林"]
  },
  {
    id: "northwest",
    name: "西北大环线",
    caption: "兰州 · 敦煌 · 银川 · 西安",
    cities: ["兰州", "敦煌", "银川", "西安"],
    tags: ["西北", "沙漠", "自驾"]
  },
  {
    id: "food",
    name: "川渝美食线",
    caption: "成都 · 重庆 · 长沙 · 广州",
    cities: ["成都", "重庆", "长沙", "广州"],
    tags: ["美食", "夜生活", "松弛"]
  },
  {
    id: "coast",
    name: "山海度假线",
    caption: "青岛 · 厦门 · 珠海 · 三亚",
    cities: ["青岛", "厦门", "珠海", "三亚"],
    tags: ["海滨", "度假", "摄影"]
  }
];

const STATUS_LABELS = {
  visited: "已旅行",
  planned: "计划中",
  wishlist: "想去"
};

const STATUS_COLORS = {
  visited: "#ff2442",
  planned: "#5a8dee",
  wishlist: "#f4ae3d"
};

const STATUS_THEMES = {
  visited: ["#ff2442", "#ff715c"],
  planned: ["#5a8dee", "#8cc6ff"],
  wishlist: ["#f4ae3d", "#ffd37d"]
};

const ICON_THEMES = {
  heritage: ["#c96f43", "#f0b66f"],
  nature: ["#5f9b7b", "#9bcf9a"],
  coast: ["#4d9ccf", "#8ed7df"],
  food: ["#ff5f57", "#ffb15d"],
  museum: ["#6d77c5", "#b0a7ff"],
  flower: ["#ff6fa3", "#ffc0d6"],
  photo: ["#5b6f88", "#b3c7da"],
  slow: ["#8b7c63", "#d8c3a3"],
  snow: ["#75a9d6", "#d7eefc"],
  desert: ["#d99042", "#f4cf8a"],
  sunrise: ["#ff7a45", "#ffd36b"],
  custom: ["#ff2442", "#ff8a76"]
};

const STORAGE_KEY = "china-travel-map-v3";
const LEGACY_KEYS = ["china-travel-map-v2", "china-travel-map-v1"];
const PHOTO_DB_NAME = "china-travel-map-photos";
const PHOTO_STORE_NAME = "photos";
const CITY_PROVINCES = {
  北京: "北京",
  天津: "天津",
  哈尔滨: "黑龙江",
  沈阳: "辽宁",
  大连: "辽宁",
  呼和浩特: "内蒙古",
  西安: "陕西",
  兰州: "甘肃",
  敦煌: "甘肃",
  银川: "宁夏",
  成都: "四川",
  重庆: "重庆",
  昆明: "云南",
  大理: "云南",
  丽江: "云南",
  拉萨: "西藏",
  贵阳: "贵州",
  桂林: "广西",
  长沙: "湖南",
  武汉: "湖北",
  郑州: "河南",
  洛阳: "河南",
  济南: "山东",
  青岛: "山东",
  南京: "江苏",
  苏州: "江苏",
  上海: "上海",
  杭州: "浙江",
  黄山: "安徽",
  厦门: "福建",
  福州: "福建",
  泉州: "福建",
  广州: "广东",
  深圳: "广东",
  珠海: "广东",
  海口: "海南",
  三亚: "海南",
  乌鲁木齐: "新疆"
};

let mapGeoJson = null;
let mapBounds = null;
let deletedSnapshot = null;
let photoDbPromise = null;
const photoCache = new Map();
const pendingPhotoLoads = new Set();
let state = {
  cities: {},
  selectedCity: null,
  filter: "all",
  query: ""
};

const elements = {
  cityLayer: document.querySelector("#cityLayer"),
  mapCanvas: document.querySelector("#mapCanvas"),
  mapBoard: document.querySelector("#mapBoard"),
  mapTooltip: document.querySelector("#mapTooltip"),
  cityForm: document.querySelector("#cityForm"),
  cityName: document.querySelector("#cityName"),
  cityIcon: document.querySelector("#cityIcon"),
  cityStatus: document.querySelector("#cityStatus"),
  themeInput: document.querySelector("#themeInput"),
  cityOptions: document.querySelector("#cityOptions"),
  searchInput: document.querySelector("#searchInput"),
  templateGrid: document.querySelector("#templateGrid"),
  visitedCount: document.querySelector("#visitedCount"),
  plannedCount: document.querySelector("#plannedCount"),
  photoCount: document.querySelector("#photoCount"),
  noteCount: document.querySelector("#noteCount"),
  mobileVisitedCount: document.querySelector("#mobileVisitedCount"),
  mobilePlannedCount: document.querySelector("#mobilePlannedCount"),
  mobilePhotoCount: document.querySelector("#mobilePhotoCount"),
  mobileNoteCount: document.querySelector("#mobileNoteCount"),
  heroText: document.querySelector("#heroText"),
  personaName: document.querySelector("#personaName"),
  emptyState: document.querySelector("#emptyState"),
  cityDetails: document.querySelector("#cityDetails"),
  detailStatus: document.querySelector("#detailStatus"),
  detailTitle: document.querySelector("#detailTitle"),
  detailStatusSelect: document.querySelector("#detailStatusSelect"),
  detailIconSelect: document.querySelector("#detailIconSelect"),
  daysInput: document.querySelector("#daysInput"),
  budgetInput: document.querySelector("#budgetInput"),
  titleInput: document.querySelector("#titleInput"),
  tagsInput: document.querySelector("#tagsInput"),
  notesInput: document.querySelector("#notesInput"),
  planInput: document.querySelector("#planInput"),
  albumGrid: document.querySelector("#albumGrid"),
  photoInput: document.querySelector("#photoInput"),
  favoriteButton: document.querySelector("#favoriteButton"),
  removeCityButton: document.querySelector("#removeCityButton"),
  quickNoteButton: document.querySelector("#quickNoteButton"),
  copyCaptionButton: document.querySelector("#copyCaptionButton"),
  seedButton: document.querySelector("#seedButton"),
  mobileQuickAddButton: document.querySelector("#mobileQuickAddButton"),
  copyShareButton: document.querySelector("#copyShareButton"),
  posterButton: document.querySelector("#posterButton"),
  posterDialog: document.querySelector("#posterDialog"),
  closePosterButton: document.querySelector("#closePosterButton"),
  posterCanvas: document.querySelector("#posterCanvas"),
  feedGrid: document.querySelector("#feedGrid"),
  feedCount: document.querySelector("#feedCount"),
  toast: document.querySelector("#toast")
};

bootstrap();

async function bootstrap() {
  hydrateFromUrl();
  hydrateFromStorage();
  populateCityOptions();
  renderTemplateGrid();
  bindEvents();
  render();
  await loadMapData();
  await migrateLegacyPhotos();
  render();
}

async function loadMapData() {
  try {
    const response = await fetch("./data/china.json");
    mapGeoJson = await response.json();
    mapBounds = getGeoBounds(mapGeoJson);
  } catch {
    showToast("本地地图数据加载失败，已保留城市点位。");
  }
}

function hydrateFromUrl() {
  const shared = new URLSearchParams(window.location.search).get("map");
  if (!shared) return;

  try {
    const decoded = JSON.parse(base64UrlDecode(shared));
    if (!decoded.cities) return;
    state.cities = Object.fromEntries(
      Object.entries(decoded.cities).map(([name, city]) => [name, normalizeCity(city)])
    );
    showToast("已载入分享地图，照片原图与私密正文不会同步。");
  } catch {
    showToast("分享链接无法识别。");
  }
}

function hydrateFromStorage() {
  if (Object.keys(state.cities).length > 0) return;
  const saved =
    safeParse(localStorage.getItem(STORAGE_KEY)) ||
    LEGACY_KEYS.map((key) => safeParse(localStorage.getItem(key))).find(Boolean);
  if (!saved?.cities) return;

  state = {
    ...state,
    ...saved,
    cities: Object.fromEntries(Object.entries(saved.cities).map(([name, city]) => [name, normalizeCity(city)]))
  };
}

function safeParse(value) {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function populateCityOptions() {
  elements.cityOptions.innerHTML = CITY_CATALOG.map((city) => `<option value="${escapeHtml(city.name)}"></option>`).join("");
}

function renderTemplateGrid() {
  elements.templateGrid.innerHTML = ROUTE_TEMPLATES.map(
    (template) => `
      <button class="template-button" data-template="${template.id}" type="button">
        <strong>${template.name}</strong>
        <span>${template.caption}</span>
      </button>
    `
  ).join("");
}

function bindEvents() {
  elements.cityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = elements.cityName.value.trim();
    if (!name) return;

    const catalogCity = findCatalogCity(name);
    const cityBase = catalogCity || createCustomCity(name);
    upsertCity(cityBase.name, {
      ...cityBase,
      icon: elements.cityIcon.value || cityBase.icon,
      status: elements.cityStatus.value,
      tags: uniqueTags([...(cityBase.tags || []), elements.themeInput.value])
    });

    state.selectedCity = cityBase.name;
    elements.cityForm.reset();
    saveState();
    render();
  });

  elements.searchInput.addEventListener("input", () => {
    state.query = elements.searchInput.value.trim();
    render();
  });

  document.querySelectorAll(".sidebar-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activateSidebarTab(button.dataset.sidebarTab);
    });
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      render();
    });
  });

  elements.templateGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-template]");
    if (!button) return;
    applyRouteTemplate(button.dataset.template);
  });

  [
    elements.detailStatusSelect,
    elements.detailIconSelect,
    elements.daysInput,
    elements.budgetInput,
    elements.titleInput,
    elements.tagsInput,
    elements.notesInput,
    elements.planInput
  ].forEach((input) => input.addEventListener("input", updateSelectedCity));

  elements.detailStatusSelect.addEventListener("change", updateSelectedCity);
  elements.detailIconSelect.addEventListener("change", updateSelectedCity);

  elements.favoriteButton.addEventListener("click", () => {
    const city = getSelectedCity();
    if (!city) return;
    city.favorite = !city.favorite;
    saveState();
    render();
  });

  elements.photoInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files || []);
    const city = getSelectedCity();
    if (!city || files.length === 0) return;

    const photos = await Promise.all(files.slice(0, 8).map(storeCompressedImage));
    city.photos = [...(city.photos || []), ...photos].slice(-12);
    saveState();
    render();
    elements.photoInput.value = "";
  });

  elements.removeCityButton.addEventListener("click", () => {
    const city = getSelectedCity();
    if (!city) return;
    deletedSnapshot = { city: structuredClone(city), selectedCity: state.selectedCity };
    delete state.cities[city.name];
    state.selectedCity = null;
    saveState();
    render();
    showToast(`已移除 ${city.name}`, {
      label: "撤销",
      onClick: () => {
        if (!deletedSnapshot) return;
        state.cities[deletedSnapshot.city.name] = deletedSnapshot.city;
        state.selectedCity = deletedSnapshot.selectedCity;
        deletedSnapshot = null;
        saveState();
        render();
      },
      onExpire: finalizeDeletedCity
    });
  });

  elements.seedButton.addEventListener("click", seedDemoRoute);
  elements.mobileQuickAddButton?.addEventListener("click", () => {
    activateSidebarTab("add");
    elements.cityForm.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => elements.cityName.focus({ preventScroll: true }), 350);
  });
  elements.quickNoteButton.addEventListener("click", copySelectedCaption);
  elements.copyCaptionButton.addEventListener("click", copySelectedCaption);
  elements.copyShareButton.addEventListener("click", copyShareLink);
  elements.posterButton.addEventListener("click", openPoster);
  elements.closePosterButton.addEventListener("click", () => elements.posterDialog.close());
  window.addEventListener("resize", () => {
    renderMapCanvas();
    renderCityPins();
  });
}

function findCatalogCity(name) {
  return CITY_CATALOG.find((city) => city.name === name);
}

function createCustomCity(name) {
  const hash = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return {
    name,
    lon: 101 + (hash % 22),
    lat: 24 + (hash % 16),
    icon: "custom",
    tags: ["自定义"]
  };
}

function normalizeCity(city) {
  const catalogCity = findCatalogCity(city.name) || {};
  const fallback = createCustomCity(city.name);
  const tags = Array.isArray(city.tags) ? city.tags : splitTags(city.tags || "");
  return {
    name: city.name,
    lon: Number(city.lon || catalogCity.lon || fallback.lon),
    lat: Number(city.lat || catalogCity.lat || fallback.lat),
    province: city.province || catalogCity.province || CITY_PROVINCES[city.name] || "自定义",
    icon: normalizeIcon(city.icon || catalogCity.icon || "custom"),
    status: city.status || "visited",
    title: city.title || defaultTitle(city.name, city.status || "visited"),
    tags: uniqueTags(tags.length ? tags : catalogCity.tags || []),
    days: city.days || "",
    budget: city.budget || "",
    notes: city.notes || "",
    plan: city.plan || "",
    photos: city.photos || [],
    favorite: Boolean(city.favorite)
  };
}

function normalizeIcon(icon) {
  const iconMap = {
    "🏯": "heritage",
    "⛰️": "nature",
    "⛰": "nature",
    "🌊": "coast",
    "🍜": "food",
    "🏛️": "museum",
    "🏛": "museum",
    "🌸": "flower",
    "📷": "photo",
    "☕": "slow",
    "❄️": "snow",
    "❄": "snow",
    "🏜️": "desert",
    "🏜": "desert",
    "🌄": "sunrise",
    "📍": "custom",
    "🚄": "custom"
  };
  return iconMap[icon] || icon || "custom";
}

function upsertCity(name, overrides = {}) {
  const existing = state.cities[name] || {};
  state.cities[name] = normalizeCity({
    ...existing,
    ...overrides,
    name
  });
}

function getSelectedCity() {
  return state.cities[state.selectedCity];
}

function updateSelectedCity() {
  const city = getSelectedCity();
  if (!city) return;

  city.status = elements.detailStatusSelect.value;
  city.icon = elements.detailIconSelect.value;
  city.days = elements.daysInput.value;
  city.budget = elements.budgetInput.value;
  city.title = elements.titleInput.value;
  city.tags = uniqueTags(splitTags(elements.tagsInput.value));
  city.notes = elements.notesInput.value;
  city.plan = elements.planInput.value;
  saveState();
  render();
}

function render() {
  renderMapCanvas();
  renderCityPins();
  renderStats();
  renderDetails();
  renderFilterControls();
  renderFeed();
}

function renderMapCanvas() {
  const canvas = elements.mapCanvas;
  const rect = elements.mapBoard.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
  gradient.addColorStop(0, "#fffefd");
  gradient.addColorStop(0.52, "#ffffff");
  gradient.addColorStop(1, "#f7efe6");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, rect.width, rect.height);

  if (!mapGeoJson || !mapBounds) {
    drawMapSkeleton(ctx, rect.width, rect.height);
    return;
  }

  drawGeoJson(ctx, mapGeoJson, mapBounds, {
    x: rect.width * 0.04,
    y: rect.height * 0.05,
    width: rect.width * 0.92,
    height: rect.height * 0.86,
    fill: "#fff7f1",
    stroke: "#eadbd0",
    highlightedFill: "#ffe4e8"
  });
}

function renderCityPins() {
  const allCities = mergeCatalogWithSaved();
  elements.cityLayer.innerHTML = allCities
    .map((catalogCity) => {
      const saved = state.cities[catalogCity.name];
      const city = saved || catalogCity;
      const status = saved?.status || "wishlist";
      const matches = cityMatchesFilter(city);
      const point = projectCity(city);
      const classes = ["city-pin", status];
      const [pinA, pinB] = saved ? STATUS_THEMES[status] || STATUS_THEMES.visited : ICON_THEMES[city.icon] || ICON_THEMES.custom;
      classes.push(saved ? "saved" : "catalog");
      if (state.selectedCity === city.name) classes.push("active");
      if (!matches) classes.push("filtered");

      return `
        <button
          class="${classes.join(" ")}"
          style="left:${point.x}px;top:${point.y}px;--pin-a:${pinA};--pin-b:${pinB}"
          title="${escapeHtml(city.name)}"
          aria-label="${escapeHtml(city.name)}，${STATUS_LABELS[status]}"
          data-city="${escapeHtml(city.name)}"
          type="button"
        >
          ${badgeSvg(city.icon || "custom")}
          <span class="pin-label">${escapeHtml(city.name)}</span>
        </button>
      `;
    })
    .join("");

  elements.cityLayer.querySelectorAll(".city-pin").forEach((pin) => {
    pin.addEventListener("mouseenter", () => {
      const name = pin.dataset.city;
      const city = state.cities[name] || findCatalogCity(name) || createCustomCity(name);
      showMapTooltip(city, pin);
    });
    pin.addEventListener("mouseleave", hideMapTooltip);
    pin.addEventListener("click", () => {
      const name = pin.dataset.city;
      if (!state.cities[name]) {
        const catalogCity = findCatalogCity(name) || createCustomCity(name);
        upsertCity(name, { ...catalogCity, status: "wishlist" });
      }
      state.selectedCity = name;
      saveState();
      render();
      if (window.innerWidth <= 1100) {
        elements.cityDetails.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (Object.keys(state.cities).length === 0) {
    state.selectedCity = null;
  }
}

function mergeCatalogWithSaved() {
  const savedOnly = Object.values(state.cities).filter((city) => !findCatalogCity(city.name));
  return [...CITY_CATALOG, ...savedOnly];
}

function projectCity(city) {
  const rect = elements.mapBoard.getBoundingClientRect();
  const target = {
    x: rect.width * 0.04,
    y: rect.height * 0.05,
    width: rect.width * 0.92,
    height: rect.height * 0.86
  };
  const bounds = mapBounds || { minLon: 73, maxLon: 135, minLat: 18, maxLat: 54 };
  return projectLonLat(city.lon, city.lat, bounds, target);
}

function cityMatchesFilter(city) {
  const statusMatches = state.filter === "all" || city.status === state.filter || !state.cities[city.name];
  const query = state.query.toLowerCase();
  const queryMatches =
    !query ||
    city.name.toLowerCase().includes(query) ||
    (city.tags || []).join(" ").toLowerCase().includes(query) ||
    (city.title || "").toLowerCase().includes(query);
  return statusMatches && queryMatches;
}

function renderStats() {
  const cities = Object.values(state.cities);
  const visitedCount = cities.filter((city) => city.status === "visited").length;
  const plannedCount = cities.filter((city) => city.status === "planned").length;
  const photoCount = cities.reduce((sum, city) => sum + (city.photos?.length || 0), 0);
  const noteCount = cities.filter((city) => city.notes || city.title).length;
  setText(elements.visitedCount, visitedCount);
  setText(elements.plannedCount, plannedCount);
  setText(elements.photoCount, photoCount);
  setText(elements.noteCount, noteCount);
  setText(elements.mobileVisitedCount, visitedCount);
  setText(elements.mobilePlannedCount, plannedCount);
  setText(elements.mobilePhotoCount, photoCount);
  setText(elements.mobileNoteCount, noteCount);

  const topCity = cities.find((city) => city.favorite) || cities[0];
  elements.heroText.textContent = topCity
    ? `${topCity.name} · ${topCity.title || defaultTitle(topCity.name, topCity.status)}`
    : "点亮第一座城市，生成你的旅行笔记流。";
  elements.personaName.textContent = computePersona(cities);
}

function computePersona(cities) {
  if (cities.length === 0) return "旅行人格待生成";
  const tagText = cities.flatMap((city) => city.tags || []).join(" ");
  const iconText = cities.map((city) => city.icon).join(" ");
  if (/博物馆|古建|古城|世遗|heritage|museum/.test(`${tagText} ${iconText}`)) return "古城文化收藏家";
  if (/山川|高原|雪山|草原|nature/.test(`${tagText} ${iconText}`)) return "山海漫游者";
  if (/美食|早茶|牛肉面|food/.test(`${tagText} ${iconText}`)) return "城市美食侦探";
  if (/海滨|海岛|度假|coast/.test(`${tagText} ${iconText}`)) return "海边出逃选手";
  if (/Citywalk|咖啡|展览|都市/.test(tagText)) return "Citywalk 灵感捕手";
  return "中国旅行版图玩家";
}

function renderDetails() {
  const city = getSelectedCity();
  const hasCity = Boolean(city);
  elements.emptyState.classList.toggle("hidden", hasCity);
  elements.cityDetails.classList.toggle("hidden", !hasCity);
  if (!city) return;

  elements.detailStatus.textContent = STATUS_LABELS[city.status];
  elements.detailTitle.textContent = city.name;
  elements.detailStatusSelect.value = city.status;
  elements.detailIconSelect.value = city.icon;
  elements.daysInput.value = city.days || "";
  elements.budgetInput.value = city.budget || "";
  elements.titleInput.value = city.title || "";
  elements.tagsInput.value = (city.tags || []).join(", ");
  elements.notesInput.value = city.notes || "";
  elements.planInput.value = city.plan || "";
  elements.favoriteButton.textContent = city.favorite ? "♥" : "♡";

  elements.albumGrid.innerHTML = city.photos?.length
    ? city.photos
        .map(
          (photo, index) => `
            <div class="photo-tile">
              ${photoSrc(photo) ? `<img src="${photoSrc(photo)}" alt="${escapeHtml(city.name)}旅行照片 ${index + 1}" />` : `<div class="photo-placeholder">加载中</div>`}
              <button type="button" data-photo-index="${index}" aria-label="删除照片">×</button>
            </div>
          `
        )
        .join("")
    : `<p class="hint">还没有照片。上传几张后，它会自动成为笔记流封面。</p>`;

  elements.albumGrid.querySelectorAll("button[data-photo-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const [removed] = city.photos.splice(Number(button.dataset.photoIndex), 1);
      removeStoredPhoto(removed);
      saveState();
      render();
    });
  });

  ensureCityPhotos(city);
}

function renderFilterControls() {
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
}

function renderFeed() {
  const cities = Object.values(state.cities)
    .filter(cityMatchesFilter)
    .sort((a, b) => Number(b.favorite) - Number(a.favorite) || statusWeight(a.status) - statusWeight(b.status));

  elements.feedCount.textContent = `${cities.length} 篇`;
  elements.feedGrid.innerHTML = cities.length
    ? cities.map(renderNoteCard).join("")
    : `<div class="empty-feed">还没有旅行笔记。先点亮一座城市，或者点击左侧示例按钮。</div>`;

  elements.feedGrid.querySelectorAll("[data-feed-city]").forEach((card) => {
    const selectCard = () => {
      state.selectedCity = card.dataset.feedCity;
      saveState();
      render();
      if (window.innerWidth <= 1100) {
        elements.cityDetails.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    card.addEventListener("click", selectCard);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectCard();
    });
  });

  cities.forEach(ensureCityPhotos);
}

function renderNoteCard(city) {
  const coverPhoto = city.photos?.[0] ? photoSrc(city.photos[0]) : "";
  const cover = coverPhoto
    ? `<img src="${coverPhoto}" alt="${escapeHtml(city.name)}封面" />`
    : badgeSvg(city.icon || "custom");
  const text = city.notes || city.plan || makeCaption(city, { compact: true });
  const likes = 18 + city.name.length * 7 + (city.photos?.length || 0) * 12 + (city.favorite ? 66 : 0);
  const [coverA, coverB] = ICON_THEMES[city.icon] || ICON_THEMES.custom;

  return `
    <article class="note-card" data-feed-city="${escapeHtml(city.name)}" tabindex="0">
      <div class="note-cover" style="--cover-a:${coverA};--cover-b:${coverB}">${cover}</div>
      <div class="note-body">
        <h3 class="note-title">${escapeHtml(city.title || defaultTitle(city.name, city.status))}</h3>
        <p class="note-text">${escapeHtml(text)}</p>
        <div class="tag-row">${(city.tags || []).slice(0, 4).map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="note-meta">
          <span>${city.name} · ${STATUS_LABELS[city.status]}</span>
          <span>${city.favorite ? "♥" : "♡"} ${likes}</span>
        </div>
      </div>
    </article>
  `;
}

function statusWeight(status) {
  return { visited: 0, planned: 1, wishlist: 2 }[status] ?? 3;
}

function applyRouteTemplate(templateId) {
  const template = ROUTE_TEMPLATES.find((item) => item.id === templateId);
  if (!template) return;

  template.cities.forEach((name, index) => {
    const catalogCity = findCatalogCity(name) || createCustomCity(name);
    upsertCity(name, {
      ...catalogCity,
      status: index < 2 ? "visited" : "planned",
      tags: uniqueTags([...(catalogCity.tags || []), ...template.tags]),
      title: `${template.name} · ${name}`,
      notes: index < 2 ? `${name}已经收入我的${template.name}，适合做成一张可分享的路线卡。` : ""
    });
  });

  state.selectedCity = template.cities[0];
  saveState();
  render();
  showToast(`已生成「${template.name}」。`);
}

function seedDemoRoute() {
  [
    ["北京", "visited", "北京三天两晚博物馆路线", ["博物馆", "胡同", "Citywalk"]],
    ["西安", "visited", "西安真的适合慢慢逛", ["古城", "美食", "夜游"]],
    ["成都", "visited", "成都松弛感周末计划", ["美食", "茶馆", "松弛"]],
    ["泉州", "planned", "泉州世遗古城想去清单", ["世遗", "古城", "小吃"]],
    ["大理", "wishlist", "想在大理住进风里", ["洱海", "骑行", "松弛"]],
    ["上海", "visited", "上海展览和咖啡路线", ["展览", "咖啡", "都市"]],
    ["杭州", "planned", "杭州春天赏花地图", ["西湖", "茶", "花季"]]
  ].forEach(([name, status, title, tags]) => {
    const catalogCity = findCatalogCity(name) || createCustomCity(name);
    upsertCity(name, {
      ...catalogCity,
      status,
      title,
      tags,
      days: status === "visited" ? "3" : "",
      budget: status === "visited" ? "1200/人" : "",
      notes: status === "visited" ? `${name}很适合做一条轻量路线：上午看城市肌理，下午留给街区和咖啡，晚上再去找本地小吃。` : ""
    });
  });

  state.selectedCity = "北京";
  saveState();
  render();
  showToast("已生成一组精细地图示例笔记。");
}

async function storeCompressedImage(file) {
  const dataUrl = await compressImage(file);
  return storeDataUrl(dataUrl);
}

async function storeDataUrl(dataUrl) {
  const id = `photo-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  photoCache.set(id, dataUrl);
  try {
    await putPhoto(id, dataUrl);
    return id;
  } catch {
    showToast("照片存储空间不可用，已临时保存在本次会话。");
    return dataUrl;
  }
}

async function migrateLegacyPhotos() {
  let changed = false;
  for (const city of Object.values(state.cities)) {
    const migrated = [];
    for (const photo of city.photos || []) {
      if (String(photo).startsWith("data:")) {
        migrated.push(await storeDataUrl(photo));
        changed = true;
      } else {
        migrated.push(photo);
      }
    }
    city.photos = migrated;
  }
  if (changed) saveState();
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 1280;
        const ratio = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * ratio));
        canvas.height = Math.max(1, Math.round(image.height * ratio));
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function photoSrc(photoRef) {
  if (!photoRef) return "";
  if (String(photoRef).startsWith("data:")) return photoRef;
  return photoCache.get(photoRef) || "";
}

function ensureCityPhotos(city) {
  (city.photos || []).forEach((photoRef) => {
    if (!photoRef || String(photoRef).startsWith("data:") || photoCache.has(photoRef) || pendingPhotoLoads.has(photoRef)) return;
    pendingPhotoLoads.add(photoRef);
    getPhoto(photoRef)
      .then((dataUrl) => {
        if (dataUrl) {
          photoCache.set(photoRef, dataUrl);
          render();
        }
      })
      .finally(() => pendingPhotoLoads.delete(photoRef));
  });
}

function openPhotoDb() {
  if (!("indexedDB" in window)) return Promise.reject(new Error("IndexedDB unavailable"));
  if (photoDbPromise) return photoDbPromise;
  photoDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(PHOTO_DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(PHOTO_STORE_NAME);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return photoDbPromise;
}

async function putPhoto(id, dataUrl) {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PHOTO_STORE_NAME, "readwrite");
    tx.objectStore(PHOTO_STORE_NAME).put(dataUrl, id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function getPhoto(id) {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PHOTO_STORE_NAME, "readonly");
    const request = tx.objectStore(PHOTO_STORE_NAME).get(id);
    request.onsuccess = () => resolve(request.result || "");
    request.onerror = () => reject(request.error);
  });
}

async function removeStoredPhoto(photoRef) {
  if (!photoRef || String(photoRef).startsWith("data:")) return;
  photoCache.delete(photoRef);
  try {
    const db = await openPhotoDb();
    const tx = db.transaction(PHOTO_STORE_NAME, "readwrite");
    tx.objectStore(PHOTO_STORE_NAME).delete(photoRef);
  } catch {
    // Non-critical cleanup.
  }
}

async function copySelectedCaption() {
  const city = getSelectedCity() || Object.values(state.cities)[0];
  if (!city) {
    showToast("先点亮一座城市，再生成文案。");
    return;
  }
  await copyText(makeCaption(city));
  showToast("旅行文案已复制。");
}

function makeCaption(city, options = {}) {
  const tags = uniqueTags([city.name, ...(city.tags || []), "中国旅行地图"]).map((tag) => `#${tag}`).join(" ");
  const title = city.title || defaultTitle(city.name, city.status);
  const days = city.days ? `${city.days}天` : "适合周末或小长假";
  const budget = city.budget ? `预算：${city.budget}` : "预算可按季节灵活调整";
  const body = city.notes || city.plan || `${city.name}已经加入我的旅行地图，准备把路线、照片和攻略慢慢补齐。`;

  if (options.compact) return `${title}。${body}`;

  return `${title}\n\n城市：${city.name}\n状态：${STATUS_LABELS[city.status]}\n建议时长：${days}\n${budget}\n\n${body}\n\n${tags}`;
}

function defaultTitle(name, status) {
  if (status === "planned") return `${name}旅行计划清单`;
  if (status === "wishlist") return `想去${name}的理由`;
  return `${name}旅行小记`;
}

async function copyShareLink() {
  const shareState = {
    cities: Object.fromEntries(
      Object.entries(state.cities).map(([name, city]) => [
        name,
        {
          name: city.name,
          lon: city.lon,
          lat: city.lat,
          province: city.province,
          icon: city.icon,
          status: city.status,
          title: city.title,
          tags: city.tags,
          days: city.days,
          budget: city.budget,
          favorite: city.favorite
        }
      ])
    )
  };
  const encoded = base64UrlEncode(JSON.stringify(shareState));
  const url = `${window.location.origin}${window.location.pathname}?map=${encodeURIComponent(encoded)}`;
  await copyText(url);
  showToast("地图链接已复制。");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    window.prompt("复制文本", text);
  }
}

function openPoster() {
  drawPoster();
  elements.posterDialog.showModal();
}

function drawPoster() {
  const canvas = elements.posterCanvas;
  const ctx = canvas.getContext("2d");
  const cities = Object.values(state.cities);
  const visited = cities.filter((city) => city.status === "visited");
  const planned = cities.filter((city) => city.status === "planned");
  const favorite = cities.find((city) => city.favorite) || cities[0];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#fff7f6");
  gradient.addColorStop(0.52, "#ffffff");
  gradient.addColorStop(1, "#ffe9ed");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff2442";
  roundRect(ctx, 74, 70, 150, 54, 27);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 28px Microsoft YaHei, sans-serif";
  ctx.fillText("山河小记", 98, 107);

  ctx.fillStyle = "#222222";
  ctx.font = "900 74px Microsoft YaHei, sans-serif";
  ctx.fillText("我的中国旅行灵感图", 74, 205);
  ctx.fillStyle = "#7a7373";
  ctx.font = "400 34px Microsoft YaHei, sans-serif";
  ctx.fillText(`已去 ${visited.length} 座 · 计划 ${planned.length} 座 · ${computePersona(cities)}`, 78, 265);

  if (mapGeoJson && mapBounds) {
    drawGeoJson(ctx, mapGeoJson, mapBounds, {
      x: 70,
      y: 330,
      width: 940,
      height: 600,
      fill: "#fff2f4",
      stroke: "#ffd0d8",
      highlightedFill: "#ffe2e7"
    });
  } else {
    drawMapSkeleton(ctx, 940, 600, 70, 330);
  }

  cities.forEach((city) => {
    const point = projectLonLat(city.lon, city.lat, mapBounds || { minLon: 73, maxLon: 135, minLat: 18, maxLat: 54 }, {
      x: 70,
      y: 330,
      width: 940,
      height: 600
    });
    drawPosterBadge(ctx, point.x, point.y, city.status, city.icon);
  });

  ctx.fillStyle = "#222222";
  ctx.font = "900 42px Microsoft YaHei, sans-serif";
  ctx.fillText(favorite ? favorite.title || defaultTitle(favorite.name, favorite.status) : "还没有点亮城市", 78, 1086);

  ctx.fillStyle = "#5f5656";
  ctx.font = "400 30px Microsoft YaHei, sans-serif";
  wrapText(ctx, favorite ? makeCaption(favorite, { compact: true }) : "点亮城市后，这里会生成你的旅行笔记摘要。", 78, 1142, 900, 42);

  ctx.fillStyle = "#ff2442";
  ctx.font = "800 28px Microsoft YaHei, sans-serif";
  wrapText(ctx, cities.slice(0, 8).map((city) => `#${city.name}`).join(" "), 78, 1324, 900, 36);
}

function getGeoBounds(geojson) {
  const bounds = { minLon: Infinity, maxLon: -Infinity, minLat: Infinity, maxLat: -Infinity };
  walkCoordinates(geojson, ([lon, lat]) => {
    if (lon < bounds.minLon) bounds.minLon = lon;
    if (lon > bounds.maxLon) bounds.maxLon = lon;
    if (lat < bounds.minLat) bounds.minLat = lat;
    if (lat > bounds.maxLat) bounds.maxLat = lat;
  });
  return bounds;
}

function walkCoordinates(geojson, visitor) {
  geojson.features.forEach((feature) => {
    const geometry = feature.geometry;
    if (!geometry) return;
    if (geometry.type === "Polygon") {
      geometry.coordinates.forEach((ring) => ring.forEach(visitor));
    }
    if (geometry.type === "MultiPolygon") {
      geometry.coordinates.forEach((polygon) => polygon.forEach((ring) => ring.forEach(visitor)));
    }
  });
}

function drawGeoJson(ctx, geojson, bounds, target) {
  const savedNames = new Set(Object.keys(state.cities));
  geojson.features.forEach((feature) => {
    const rings = [];
    const geometry = feature.geometry;
    if (!geometry) return;
    if (geometry.type === "Polygon") rings.push(...geometry.coordinates);
    if (geometry.type === "MultiPolygon") geometry.coordinates.forEach((polygon) => rings.push(...polygon));

    ctx.beginPath();
    rings.forEach((ring) => {
      ring.forEach(([lon, lat], index) => {
        const point = projectLonLat(lon, lat, bounds, target);
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.closePath();
    });
    ctx.fillStyle = provinceHasSavedCity(feature, savedNames) ? target.highlightedFill : target.fill;
    ctx.strokeStyle = target.stroke;
    ctx.lineWidth = 1.2;
    ctx.fill();
    ctx.stroke();
  });
}

function provinceHasSavedCity(feature, savedNames) {
  const province = feature.properties?.name || "";
  return Object.values(state.cities).some((city) => savedNames.has(city.name) && province.includes(city.province || ""));
}

function projectLonLat(lon, lat, bounds, target) {
  const widthRatio = target.width / (bounds.maxLon - bounds.minLon);
  const heightRatio = target.height / (bounds.maxLat - bounds.minLat);
  const scale = Math.min(widthRatio, heightRatio);
  const mapWidth = (bounds.maxLon - bounds.minLon) * scale;
  const mapHeight = (bounds.maxLat - bounds.minLat) * scale;
  const offsetX = target.x + (target.width - mapWidth) / 2;
  const offsetY = target.y + (target.height - mapHeight) / 2;
  return {
    x: offsetX + (lon - bounds.minLon) * scale,
    y: offsetY + (bounds.maxLat - lat) * scale
  };
}

function drawMapSkeleton(ctx, width, height, x = 0, y = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#fff7f1";
  ctx.strokeStyle = "#eadbd0";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.48, width * 0.36, height * 0.28, -0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawPosterBadge(ctx, x, y, status) {
  ctx.beginPath();
  ctx.arc(x, y, 17, 0, Math.PI * 2);
  ctx.fillStyle = STATUS_COLORS[status] || "#ff2442";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#fff";
  ctx.stroke();
}

function badgeSvg(type) {
  const icons = {
    heritage: '<path d="M4 19h16"/><path d="M6 19V9l6-4 6 4v10"/><path d="M9 19v-6h6v6"/><path d="M8 9h8"/>',
    nature: '<path d="M3 19h18"/><path d="M5 17l5-9 4 6 2-3 4 6"/>',
    coast: '<path d="M3 16c2 0 2-1.5 4-1.5S9 16 11 16s2-1.5 4-1.5S17 16 21 16"/><path d="M4 20c2 0 2-1.5 4-1.5S10 20 12 20s2-1.5 4-1.5S18 20 21 20"/><path d="M12 4v8"/>',
    food: '<path d="M7 3v8"/><path d="M10 3v8"/><path d="M7 7h3"/><path d="M15 3v18"/><path d="M15 3c3 2 4 5 1 8"/>',
    museum: '<path d="M4 9h16"/><path d="M5 9l7-5 7 5"/><path d="M7 9v9"/><path d="M12 9v9"/><path d="M17 9v9"/><path d="M4 18h16"/>',
    flower: '<circle cx="12" cy="12" r="2"/><path d="M12 5c2 2 2 4 0 6-2-2-2-4 0-6"/><path d="M19 12c-2 2-4 2-6 0 2-2 4-2 6 0"/><path d="M12 19c-2-2-2-4 0-6 2 2 2 4 0 6"/><path d="M5 12c2-2 4-2 6 0-2 2-4 2-6 0"/>',
    photo: '<rect x="4" y="6" width="16" height="13" rx="3"/><path d="M8 6l1.5-2h5L16 6"/><circle cx="12" cy="13" r="3"/>',
    slow: '<path d="M6 8h10a4 4 0 0 1 0 8H8a5 5 0 0 1-2-9"/><path d="M6 20h12"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/>',
    snow: '<path d="M12 3v18"/><path d="M4 7l16 10"/><path d="M20 7L4 17"/><path d="M8 5l4 3 4-3"/><path d="M8 19l4-3 4 3"/>',
    desert: '<path d="M3 18c4-4 8-4 12 0 2 2 4 2 6 0"/><path d="M7 15c1-5 4-7 8-6"/><path d="M15 9c1 3 1 6-1 9"/><path d="M10 11l-3-2"/>',
    sunrise: '<path d="M3 18h18"/><path d="M7 18a5 5 0 0 1 10 0"/><path d="M12 5v3"/><path d="M5 11l2 2"/><path d="M19 11l-2 2"/>',
    custom: '<path d="M12 21s6-5.1 6-11a6 6 0 0 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/>'
  };
  return `<svg class="badge-icon badge-${type || "custom"}" viewBox="0 0 24 24" aria-hidden="true">${icons[type] || icons.custom}</svg>`;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/(\s+)/);
  let line = "";
  words.forEach((word, index) => {
    const testLine = line + word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, y);
      line = word;
      y += lineHeight;
    } else {
      line = testLine;
    }
    if (index === words.length - 1) ctx.fillText(line.trim(), x, y);
  });
}

function splitTags(value) {
  return String(value)
    .split(/[,，#\s]+/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function uniqueTags(tags) {
  return [...new Set(tags.map((tag) => String(tag).trim()).filter(Boolean))];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function base64UrlEncode(text) {
  return window
    .btoa(unescape(encodeURIComponent(text)))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(value) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return decodeURIComponent(escape(window.atob(padded)));
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function showMapTooltip(city, pin) {
  if (!elements.mapTooltip) return;
  const status = state.cities[city.name]?.status || "候选城市";
  elements.mapTooltip.innerHTML = `<strong>${escapeHtml(city.name)}</strong><span>${escapeHtml(STATUS_LABELS[status] || status)} · ${(city.tags || []).slice(0, 2).join(" / ")}</span>`;
  elements.mapTooltip.style.left = pin.style.left;
  elements.mapTooltip.style.top = pin.style.top;
  elements.mapTooltip.classList.add("visible");
}

function hideMapTooltip() {
  elements.mapTooltip?.classList.remove("visible");
}

function activateSidebarTab(target) {
  document.querySelectorAll(".sidebar-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.sidebarTab === target);
  });
  document.querySelectorAll(".sidebar-tab-panel").forEach((panel) => {
    panel.classList.toggle("active-panel", panel.dataset.panel === target);
  });
}

function finalizeDeletedCity() {
  if (!deletedSnapshot) return;
  (deletedSnapshot.city.photos || []).forEach(removeStoredPhoto);
  deletedSnapshot = null;
}

function showToast(message, action) {
  if (showToast.expireHandler) {
    showToast.expireHandler();
    showToast.expireHandler = null;
  }
  elements.toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
  elements.toast.classList.toggle("has-action", Boolean(action));
  if (action) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action.label;
    button.addEventListener("click", () => {
      action.onClick();
      showToast.expireHandler = null;
      elements.toast.classList.remove("visible", "has-action");
    });
    elements.toast.appendChild(button);
  }
  elements.toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.expireHandler = action?.onExpire || null;
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("visible", "has-action");
    if (showToast.expireHandler) {
      showToast.expireHandler();
      showToast.expireHandler = null;
    }
  }, action ? 5200 : 2400);
}
