function sanitizeSharedState(state, options = {}) {
  const allowPrivateNotes = Boolean(options.allowPrivateNotes);
  const allowPhotos = Boolean(options.allowPhotos);
  const cities = state?.cities || {};

  return {
    cities: Object.fromEntries(
      Object.entries(cities).map(([name, city]) => [
        name,
        {
          name: city.name,
          lon: city.lon,
          lat: city.lat,
          province: city.province,
          icon: city.icon,
          status: city.status,
          title: city.title,
          tags: city.tags || [],
          days: city.days || "",
          budget: allowPrivateNotes ? city.budget || "" : "",
          notes: allowPrivateNotes ? city.notes || "" : "",
          plan: allowPrivateNotes ? city.plan || "" : "",
          photos: allowPhotos ? city.photos || [] : [],
          favorite: Boolean(city.favorite)
        }
      ])
    ),
    selectedCity: state?.selectedCity || null,
    filter: state?.filter || "all",
    query: ""
  };
}

module.exports = {
  sanitizeSharedState
};
