"use client";

import SectionHeading from "@/components/SectionHeading";
import TradingViewWidget from "@/components/TradingViewWidget";
import { useTheme } from "@/context/ThemeContext";

export default function LiveMarketPage() {
  const { theme } = useTheme();
  const colorTheme = theme === "dark" ? "dark" : "light";

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <SectionHeading
        eyebrow="Live Market"
        title="Real-Time Market Data, Right Here"
        subtitle="Powered by TradingView widgets — track indices, watchlists, heatmaps, and more without leaving the page."
      />

      {/* Market Overview */}
      <div>
        <h3 className="mb-4 font-semibold text-lg">Market Overview</h3>
        <TradingViewWidget
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
          height={450}
          config={{
            colorTheme,
            dateRange: "12M",
            showChart: true,
            locale: "en",
            width: "100%",
            height: 450,
            tabs: [
              {
                title: "Indices",
                symbols: [
                  { s: "BSE:SENSEX", d: "SENSEX" },
                  { s: "BSE:RELIANCE", d: "RELIANCE" },
                  { s: "BSE:HDFCBANK", d: "HDFC BANK" },
                ],
              },
            ],
          }}
        />
      </div>

      {/* NIFTY / BANK NIFTY / SENSEX symbol overview */}
      <div>
        <h3 className="mb-4 font-semibold text-lg">Market Snapshot — SENSEX & Top Stocks</h3>
        <TradingViewWidget
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
          height={400}
          config={{
            symbols: [
              ["SENSEX", "BSE:SENSEX|1D"],
              ["RELIANCE", "BSE:RELIANCE|1D"],
              ["HDFC BANK", "BSE:HDFCBANK|1D"],
            ],
            chartOnly: false,
            width: "100%",
            height: 400,
            locale: "en",
            colorTheme,
            autosize: true,
            showVolume: true,
          }}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Watchlist */}
        <div>
          <h3 className="mb-4 font-semibold text-lg">Watchlist</h3>
          <TradingViewWidget
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
            height={450}
            config={{
              width: "100%",
              height: 450,
              symbolsGroups: [
                {
                  name: "Popular Stocks",
                  symbols: [
                    { name: "BSE:RELIANCE" },
                    { name: "BSE:TCS" },
                    { name: "BSE:HDFCBANK" },
                    { name: "BSE:INFY" },
                    { name: "BSE:ICICIBANK" },
                  ],
                },
              ],
              colorTheme,
              locale: "en",
            }}
          />
        </div>

        {/* Heatmap */}
        <div>
          <h3 className="mb-4 font-semibold text-lg">Sector Heatmap</h3>
          <TradingViewWidget
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
            height={450}
            config={{
              exchanges: [],
              dataSource: "NSEIndia",
              grouping: "sector",
              blockSize: "market_cap_basic",
              blockColor: "change",
              locale: "en",
              symbolUrl: "",
              colorTheme,
              hasTopBar: true,
              isDataSetEnabled: true,
              isZoomEnabled: true,
              hasSymbolTooltip: true,
              width: "100%",
              height: 450,
            }}
          />
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Top Gainers / Losers via Screener widget */}
        <div>
          <h3 className="mb-4 font-semibold text-lg">Top Gainers & Losers</h3>
          <TradingViewWidget
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
            height={450}
            config={{
              width: "100%",
              height: 450,
              defaultColumn: "overview",
              defaultScreen: "top_gainers",
              market: "india",
              showToolbar: true,
              colorTheme,
              locale: "en",
            }}
          />
        </div>

        {/* Economic Calendar */}
        <div>
          <h3 className="mb-4 font-semibold text-lg">Economic Calendar</h3>
          <TradingViewWidget
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
            height={450}
            config={{
              width: "100%",
              height: 450,
              colorTheme,
              isTransparent: false,
              locale: "en",
              importanceFilter: "-1,0,1",
              countryFilter: "in,us",
            }}
          />
        </div>
      </div>

      {/* Live advanced chart */}
      <div>
        <h3 className="mb-4 font-semibold text-lg">Live Stock Chart — SENSEX</h3>
        <TradingViewWidget
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
          height={550}
          config={{
            autosize: true,
            symbol: "BSE:SENSEX",
            interval: "D",
            timezone: "Asia/Kolkata",
            theme: colorTheme,
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            calendar: false,
            support_host: "https://www.tradingview.com",
          }}
        />
      </div>
    </div>
  );
}
