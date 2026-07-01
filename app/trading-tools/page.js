"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Percent,
  Shield,
  TrendingUp,
  PiggyBank,
  Wallet,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const TABS = [
  { id: "brokerage", label: "Brokerage Calculator", icon: Wallet },
  { id: "riskreward", label: "Risk Reward Calculator", icon: Shield },
  { id: "position", label: "Position Size Calculator", icon: TrendingUp },
  { id: "compound", label: "Compound Interest", icon: Percent },
  { id: "sip", label: "SIP Calculator", icon: PiggyBank },
];

function Field({ label, value, onChange, suffix, type = "number" }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground/70">{label}</span>
      <div className="mt-1.5 flex items-center rounded-xl border border-border-color bg-surface focus-within:border-primary transition-colors">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent px-4 py-2.5 text-sm outline-none"
        />
        {suffix && <span className="pr-4 text-sm text-foreground/40">{suffix}</span>}
      </div>
    </label>
  );
}

function ResultCard({ label, value, highlight = false }) {
  return (
    <div
      className={`rounded-xl p-4 ${
        highlight ? "bg-primary text-white" : "bg-surface-2"
      }`}
    >
      <p className={`text-xs ${highlight ? "text-white/70" : "text-foreground/50"}`}>{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

const inr = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(
    isFinite(n) ? n : 0
  );

/* ---------------- Brokerage Calculator ---------------- */
function BrokerageCalculator() {
  const [buyPrice, setBuyPrice] = useState(1500);
  const [sellPrice, setSellPrice] = useState(1550);
  const [quantity, setQuantity] = useState(50);
  const [brokeragePerOrder, setBrokeragePerOrder] = useState(20);

  const result = useMemo(() => {
    const turnover = (buyPrice + sellPrice) * quantity;
    const brokerage = brokeragePerOrder * 2;
    const stt = sellPrice * quantity * 0.001; // approx 0.1% on sell side
    const stampDuty = buyPrice * quantity * 0.00015;
    const gst = brokerage * 0.18;
    const sebiCharges = turnover * 0.0000005;
    const totalCharges = brokerage + stt + stampDuty + gst + sebiCharges;
    const grossPnl = (sellPrice - buyPrice) * quantity;
    const netPnl = grossPnl - totalCharges;
    return { turnover, totalCharges, grossPnl, netPnl };
  }, [buyPrice, sellPrice, quantity, brokeragePerOrder]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="Buy Price" value={buyPrice} onChange={setBuyPrice} suffix="₹" />
        <Field label="Sell Price" value={sellPrice} onChange={setSellPrice} suffix="₹" />
        <Field label="Quantity" value={quantity} onChange={setQuantity} suffix="shares" />
        <Field label="Brokerage per Order" value={brokeragePerOrder} onChange={setBrokeragePerOrder} suffix="₹" />
      </div>
      <div className="grid grid-cols-2 gap-4 content-start">
        <ResultCard label="Turnover" value={inr(result.turnover)} />
        <ResultCard label="Total Charges" value={inr(result.totalCharges)} />
        <ResultCard label="Gross P&L" value={inr(result.grossPnl)} />
        <ResultCard label="Net P&L" value={inr(result.netPnl)} highlight />
      </div>
    </div>
  );
}

/* ---------------- Risk Reward Calculator ---------------- */
function RiskRewardCalculator() {
  const [entry, setEntry] = useState(1000);
  const [stopLoss, setStopLoss] = useState(970);
  const [target, setTarget] = useState(1090);

  const result = useMemo(() => {
    const risk = Math.abs(entry - stopLoss);
    const reward = Math.abs(target - entry);
    const ratio = risk === 0 ? 0 : reward / risk;
    return { risk, reward, ratio };
  }, [entry, stopLoss, target]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="Entry Price" value={entry} onChange={setEntry} suffix="₹" />
        <Field label="Stop Loss" value={stopLoss} onChange={setStopLoss} suffix="₹" />
        <Field label="Target Price" value={target} onChange={setTarget} suffix="₹" />
      </div>
      <div className="grid grid-cols-2 gap-4 content-start">
        <ResultCard label="Risk per Share" value={inr(result.risk)} />
        <ResultCard label="Reward per Share" value={inr(result.reward)} />
        <ResultCard label="Risk:Reward Ratio" value={`1 : ${result.ratio.toFixed(2)}`} highlight />
        <ResultCard
          label="Verdict"
          value={result.ratio >= 2 ? "Good Trade ✅" : result.ratio >= 1 ? "Acceptable ⚠️" : "Poor ❌"}
        />
      </div>
    </div>
  );
}

/* ---------------- Position Size Calculator ---------------- */
function PositionSizeCalculator() {
  const [capital, setCapital] = useState(100000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entry, setEntry] = useState(500);
  const [stopLoss, setStopLoss] = useState(485);

  const result = useMemo(() => {
    const riskAmount = (capital * riskPercent) / 100;
    const riskPerShare = Math.abs(entry - stopLoss);
    const shares = riskPerShare === 0 ? 0 : Math.floor(riskAmount / riskPerShare);
    const positionValue = shares * entry;
    return { riskAmount, shares, positionValue };
  }, [capital, riskPercent, entry, stopLoss]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="Total Capital" value={capital} onChange={setCapital} suffix="₹" />
        <Field label="Risk per Trade" value={riskPercent} onChange={setRiskPercent} suffix="%" />
        <Field label="Entry Price" value={entry} onChange={setEntry} suffix="₹" />
        <Field label="Stop Loss Price" value={stopLoss} onChange={setStopLoss} suffix="₹" />
      </div>
      <div className="grid grid-cols-2 gap-4 content-start">
        <ResultCard label="Risk Amount" value={inr(result.riskAmount)} />
        <ResultCard label="Shares to Buy" value={result.shares} highlight />
        <ResultCard label="Position Value" value={inr(result.positionValue)} />
        <ResultCard
          label="% of Capital"
          value={`${((result.positionValue / capital) * 100 || 0).toFixed(1)}%`}
        />
      </div>
    </div>
  );
}

/* ---------------- Compound Interest Calculator ---------------- */
function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [frequency, setFrequency] = useState(1);

  const result = useMemo(() => {
    const amount = principal * Math.pow(1 + rate / 100 / frequency, frequency * years);
    return { amount, interest: amount - principal };
  }, [principal, rate, years, frequency]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="Principal Amount" value={principal} onChange={setPrincipal} suffix="₹" />
        <Field label="Annual Interest Rate" value={rate} onChange={setRate} suffix="%" />
        <Field label="Time Period" value={years} onChange={setYears} suffix="years" />
        <Field label="Compounding Frequency / Year" value={frequency} onChange={setFrequency} suffix="x" />
      </div>
      <div className="grid grid-cols-2 gap-4 content-start">
        <ResultCard label="Invested Amount" value={inr(principal)} />
        <ResultCard label="Est. Interest Earned" value={inr(result.interest)} />
        <ResultCard label="Maturity Value" value={inr(result.amount)} highlight />
      </div>
    </div>
  );
}

/* ---------------- SIP Calculator ---------------- */
function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const n = years * 12;
    const i = rate / 100 / 12;
    const futureValue = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = monthly * n;
    return { futureValue, invested, gains: futureValue - invested };
  }, [monthly, rate, years]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <Field label="Monthly Investment" value={monthly} onChange={setMonthly} suffix="₹" />
        <Field label="Expected Annual Return" value={rate} onChange={setRate} suffix="%" />
        <Field label="Investment Duration" value={years} onChange={setYears} suffix="years" />
      </div>
      <div className="grid grid-cols-2 gap-4 content-start">
        <ResultCard label="Invested Amount" value={inr(result.invested)} />
        <ResultCard label="Est. Gains" value={inr(result.gains)} />
        <ResultCard label="Total Value" value={inr(result.futureValue)} highlight />
      </div>
    </div>
  );
}

const PANELS = {
  brokerage: BrokerageCalculator,
  riskreward: RiskRewardCalculator,
  position: PositionSizeCalculator,
  compound: CompoundInterestCalculator,
  sip: SipCalculator,
};

export default function TradingToolsPage() {
  const [active, setActive] = useState("brokerage");
  const ActivePanel = PANELS[active];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        eyebrow="Trading Tools"
        title="Free Calculators for Smarter Trading Decisions"
        subtitle="Plan your trades and investments with these easy-to-use, real-time calculators."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              active === t.id
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "border border-border-color hover:bg-surface-2"
            }`}
          >
            <t.icon size={15} /> {t.label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-4xl rounded-2xl border border-border-color bg-surface p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-2 text-lg font-bold">
              <Calculator size={20} className="text-primary" />
              {TABS.find((t) => t.id === active)?.label}
            </div>
            <ActivePanel />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-6 text-center text-xs text-foreground/40 max-w-2xl mx-auto">
        These calculators provide approximate estimates for educational purposes only. Actual
        brokerage, taxes, and returns may vary by broker and market conditions.
      </p>
    </div>
  );
}
