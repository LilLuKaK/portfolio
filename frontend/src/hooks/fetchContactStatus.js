// hooks/fetchContactStatus.js

// Valores permitidos (en minúsculas)
export const VALID_STATUSES = ["online", "offline", "ausente"];

/**
 * Obtiene el estado de contacto.
 * @param {string} [overrideText=""] - Texto opcional que puede contener 'online', 'offline' o 'ausente'.
 * @param {string[]} [fallbackList=["online", "ausente", "offline"]] - Lista para fallback si algo falla.
 * @returns {Promise<"online"|"offline"|"ausente">}
 */
export async function fetchContactStatus(
  overrideText = "",
  fallbackList = ["online", "ausente", "offline"]
) {
  try {
    // 1) Si hay texto y contiene un estado válido, respetarlo.
    if (overrideText && typeof overrideText === "string") {
      const norm = normalize(overrideText);
      const hit = VALID_STATUSES.find((s) => norm.includes(s));
      if (hit) return hit;
    }

    // 2) Sin texto válido → decidir por hora de Madrid
    const hourInMadrid = getHourInEuropeMadrid();

    // Reglas pedidas (inclusivas tal como indicas):
    // 08–21 => online
    // 00–06 => offline
    // 22–23 y 07 => ausente
    if (hourInMadrid >= 8 && hourInMadrid <= 21) return "online";
    if (hourInMadrid >= 0 && hourInMadrid <= 6) return "offline";
    // 07, 22, 23
    return "ausente";
  } catch (_err) {
    // 3) Fallback por lista si algo falla (p.ej. fecha/huso no disponible)
    const idx = dayOfYear(new Date()) % fallbackList.length;
    const candidate = (fallbackList[idx] || "").toLowerCase();
    return VALID_STATUSES.includes(candidate) ? candidate : "ausente";
  }
}

/* ----------------- helpers ----------------- */

// Normaliza: minúsculas + sin acentos
function normalize(str) {
  return String(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

// Hora 0–23 en Europe/Madrid de forma robusta en navegador y Node
function getHourInEuropeMadrid(date = new Date()) {
  // Intl formatea según zona horaria sin mutar el objeto Date
  const hStr = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    hour12: false,
  }).format(date);
  // Asegura entero (puede venir "07", "23", etc.)
  const h = parseInt(hStr, 10);
  if (Number.isNaN(h)) throw new Error("No se pudo calcular la hora en Europe/Madrid");
  return h;
}

// Día del año 0–365 (para fallback determinístico)
function dayOfYear(d) {
  const start = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const diff = (Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - start) / 86400000;
  return Math.floor(diff);
}
