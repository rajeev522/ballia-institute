"use client";

import { useEffect, useRef } from "react";

/**
 * Generic TradingView widget loader.
 * `scriptSrc` = the widget's embed script URL (from tradingview.com/widget)
 * `config` = the JSON config object required by that widget
 * `height` = container height in px
 */
export default function TradingViewWidget({ scriptSrc, config, height = 400 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    el.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify(config);
    el.appendChild(script);

    return () => {
      el.innerHTML = "";
    };
  }, [scriptSrc, config]);

  return (
    <div className="tradingview-widget-container rounded-2xl overflow-hidden border border-border-color bg-surface">
      <div ref={containerRef} style={{ height }} />
    </div>
  );
}
