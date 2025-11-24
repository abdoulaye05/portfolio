export const resolveAssetPath = (path = "") => {
  if (!path) return "";

  // Laisser passer les URLs absolues (http, https)
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  // Nettoyer le chemin fourni (retirer / initiaux et préfixe portfolio/)
  let normalizedPath = path.replace(/^\/+/, "");
  if (normalizedPath.startsWith("portfolio/")) {
    normalizedPath = normalizedPath.replace(/^portfolio\//, "");
  }

  const base = import.meta.env.BASE_URL || "/";
  const basePrefix = base.endsWith("/") ? base : `${base}/`;

  return `${basePrefix}${normalizedPath}`.replace(/\/{2,}/g, "/");
};

