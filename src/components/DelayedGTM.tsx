"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: object[];
  }
}

const GTM_ID = "GTM-K9G8W3CJ";

// Carrega o GTM (~570KB com Ads+GA4) só na primeira interação do usuário,
// com fallback de 8s — tira o stack de tags do caminho crítico do mobile
// sem perder rastreamento: quem converte sempre interage antes.
export default function DelayedGTM() {
  useEffect(() => {
    if (window.dataLayer) return;

    let loaded = false;
    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "touchstart",
      "mousedown",
      "keydown",
      "pointermove",
    ];

    const cleanup = () =>
      events.forEach((e) => window.removeEventListener(e, load));

    function load() {
      if (loaded) return;
      loaded = true;
      cleanup();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(s);
    }

    events.forEach((e) =>
      window.addEventListener(e, load, { once: true, passive: true })
    );
    const timer = window.setTimeout(load, 8000);

    return () => {
      window.clearTimeout(timer);
      cleanup();
    };
  }, []);

  return null;
}
