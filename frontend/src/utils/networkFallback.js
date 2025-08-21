// src/utils/networkFallback.js
const PRIMARY = 'https://lukaserver.com';
const FALLBACK = 'https://lilserver.vercel.app/';

async function isReachable(url, timeout = 3000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    // no-cors -> 'opaque' igualmente indica que hay conectividad a ese host
    await fetch(`${url}/favicon.ico?ping=${Date.now()}`, {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store',
      signal: controller.signal,
    });
    clearTimeout(id);
    return true;
  } catch (e) {
    clearTimeout(id);
    return false;
  }
}

(async () => {
  const onPrimary = location.hostname.includes('lukaserver.com');
  const ok = await isReachable(PRIMARY);
  if (onPrimary && !ok) {
    // estamos en primary pero caído -> redirige a vercel
    location.href = FALLBACK + location.pathname + location.search + location.hash;
  }
  // Si estás en Vercel y el primary va bien, puedes forzar regreso al primary:
  else if (!onPrimary && ok) location.href = PRIMARY + location.pathname + location.search + location.hash;
})();
