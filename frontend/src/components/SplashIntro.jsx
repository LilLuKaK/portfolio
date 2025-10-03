// SplashIntro.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * SplashIntro
 * - Fondo granulado (#68171d por defecto)
 * - A los 500 ms: zoom-in del logo (tu cambio)
 * - A los 1500 ms: desvanecer fondo + logo y revelar la página (tu cambio)
 *
 * Uso:
 *   <SplashIntro />
 *   // Opcional: <SplashIntro bg="#ffffff" showDelay={500} hideDelay={1500} logoSrc="https://i.imgur.com/BS2CRHs.png" />
 */
export default function SplashIntro({
  logoSrc = "https://i.imgur.com/BS2CRHs.png",
  bg = "#68171d",          // si quieres blanco: "#ffffff" (ojo, "#fffff" no es válido)
  showDelay = 500,         // tu ajuste
  hideDelay = 1500,        // tu ajuste
  fadeDuration = 600,      // ms del CSS transition del overlay
}) {
  const overlayRef = useRef(null);
  const [showLogo, setShowLogo] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [imgTriedJpg, setImgTriedJpg] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.add("no-scroll");

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const SHOW_AT = reduce ? 0 : showDelay;
    const HIDE_AT = reduce ? 0 : hideDelay;

    const t1 = setTimeout(() => setShowLogo(true), SHOW_AT);
    const t2 = setTimeout(() => {
      setHidden(true);
      body.classList.remove("no-scroll");
    }, HIDE_AT);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      body.classList.remove("no-scroll");
    };
  }, [showDelay, hideDelay]);

  useEffect(() => {
    if (!hidden || !overlayRef.current) return;
    const el = overlayRef.current;

    const onEnd = (e) => {
      if (e.propertyName === "opacity") setRemoved(true);
    };
    el.addEventListener("transitionend", onEnd);
    // Fallback por si no dispara transitionend
    const failSafe = setTimeout(() => setRemoved(true), fadeDuration + 100);

    return () => {
      el.removeEventListener("transitionend", onEnd);
      clearTimeout(failSafe);
    };
  }, [hidden, fadeDuration]);

  if (removed) return null;

  // onError: si el .png falla, intenta .jpg una sola vez.
  const handleImgError = (e) => {
    if (imgTriedJpg) return;
    setImgTriedJpg(true);
    const url = new URL(e.currentTarget.src);
    url.pathname = url.pathname.replace(/\.png$/i, ".jpg");
    e.currentTarget.src = url.toString();
  };

  return (
    <>
      <style>{`
        /* Evita scroll mientras el splash está visible */
        body.no-scroll { overflow: hidden; }

        .sintro-overlay{
          position: fixed; inset: 0; z-index: 9999;
          display: grid; place-items: center;
          background: var(--sintro-bg, #68171d);
          opacity: 1;
          transition: opacity ${fadeDuration}ms ease;
          pointer-events: auto;
        }
        /* Granulado (ruido fractal con SVG) */
        .sintro-overlay::after{
          content: "";
          position: absolute; inset: 0; pointer-events: none;
          opacity: .22; mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 100 100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          background-size: cover;
        }

        .sintro-logo{
          width: min(40vmin, 260px);
          opacity: 0;
          transform: translateY(12px) scale(.85);
          transition:
            transform 600ms cubic-bezier(.2,.7,.2,1),
            opacity 600ms ease;
          will-change: transform, opacity;
          image-rendering: -webkit-optimize-contrast;
        }
        .sintro-overlay.show .sintro-logo{
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .sintro-overlay.hide{
          opacity: 0;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce){
          .sintro-overlay, .sintro-logo{ transition: none !important; }
        }
      `}</style>

      <div
        ref={overlayRef}
        className={`sintro-overlay${showLogo ? " show" : ""}${hidden ? " hide" : ""}`}
        aria-hidden={hidden ? "true" : "false"}
        style={{ "--sintro-bg": bg }}
      >
        <img
          src={logoSrc}
          alt="Logo"
          className="sintro-logo"
          loading="eager"
          decoding="sync"
          onError={handleImgError}
        />
      </div>
    </>
  );
}
