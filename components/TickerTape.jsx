"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function TickerTape() {
  const containerRef = useRef(null);
  const { theme, mounted } = useTheme();

  useEffect(() => {
    if (!mounted) return;
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    el.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "OANDA:IN50INR", title: "NIFTY 50" },
        { proName: "BSE:SENSEX", title: "SENSEX" },
        { proName: "BSE:RELIANCE", title: "RELIANCE" },
        { proName: "BSE:HDFCBANK", title: "HDFC BANK" },
        { proName: "BSE:TCS", title: "TCS" },
        { proName: "BSE:INFY", title: "INFY" },
        { proName: "BSE:ICICIBANK", title: "ICICI BANK" },
        { proName: "BSE:SBIN", title: "SBIN" }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: theme === "dark" ? "dark" : "light",
      locale: "en"
    });
    
    el.appendChild(script);

    return () => {
      el.innerHTML = "";
    };
  }, [theme, mounted]);

  if (!mounted) return <div style={{ height: 72 }} className="w-full border-b border-border-color bg-background" />;

  return (
    <div className="w-full border-b border-border-color bg-background overflow-hidden flex items-center justify-center">
      <div className="tradingview-widget-container w-full">
        <div ref={containerRef} style={{ height: 72 }} />
      </div>
    </div>
  );
}
