import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ICONS from "./voidbusiness/ionicons";
import {
  BASE_EARN_PER_TAP,
  BOOST_DURATION,
  BOOST_MULTIPLIER,
  BUSINESSES,
  BUSINESS_MAX_LEVEL,
  CARD_SKINS,
  JOB_COOLDOWN_MS,
  JOB_REFRESH_MS,
  JOB_REJECT_COOLDOWN_MS,
  RANGES,
  SECTORS,
  STOCKS,
  createInitialMarketState,
  formatMoney,
  formatPercent,
  formatPrice,
  formatQty,
  generateNewsItem,
  getAvailableJobs,
  getChangePercent,
  getHourlyDividend,
  getTickerColor,
  getUpgradeCost,
  sliceHistory,
  stepMarket,
} from "./voidbusiness/data";

// An interactive copy of the Void Business app (Home, Invest and Business tabs),
// laid out at the app's own 375pt size and scaled into a phone frame.
const SCREEN_W = 375;
const SCREEN_H = 780;
const SCALE = 0.8;
const BEZEL = 10;
const ACCENT = "#fbbf24";
const MARKET_TICK_MS = 3000; // one simulated market minute

function Icon({ name, size = 20, color = "#fff", style }) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      style={{ color, display: "block", flexShrink: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: ICONS[name] || "" }}
    />
  );
}

function gradient(colors, angle = 135) {
  return `linear-gradient(${angle}deg, ${colors.join(", ")})`;
}

const row = { display: "flex", flexDirection: "row", alignItems: "center" };

/* ---------------------------------- Home ---------------------------------- */

function VoidPayCard({ skin, money, earnPerTap, boostActive, boostLeft, currentJob, jobTapsLeft, income, onPalette }) {
  const dot = { color: "rgba(255,255,255,0.35)", fontSize: 14, letterSpacing: 2 };
  const label = { color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, marginBottom: 2 };
  return (
    <div
      style={{
        height: 220,
        borderRadius: 20,
        padding: 22,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: gradient(skin.colors),
        boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: -60, right: -40, width: 200, height: 200, borderRadius: 100, background: "rgba(255,255,255,0.05)" }} />
      <div style={{ ...row, justifyContent: "space-between", position: "relative" }}>
        <div style={{ ...row, gap: 10 }}>
          <div style={{ width: 40, height: 30, borderRadius: 6, background: "linear-gradient(135deg, #fbbf24, #b45309)", opacity: 0.8 }} />
          <Icon name="wifi" size={18} color="rgba(255,255,255,0.4)" style={{ transform: "rotate(90deg)" }} />
        </div>
        <div style={{ ...row, gap: 10 }}>
          <button type="button" onClick={onPalette} aria-label="Card skins" style={{ ...btnReset, padding: 4 }}>
            <Icon name="color-palette" size={16} color="rgba(255,255,255,0.5)" />
          </button>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 900, letterSpacing: 4, fontStyle: "italic" }}>VOIDPAY</span>
        </div>
      </div>
      <div style={{ ...row, gap: 14, position: "relative" }}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} style={dot}>
            {"••••"}
          </span>
        ))}
      </div>
      <div style={{ ...row, justifyContent: "space-between", alignItems: "flex-end", position: "relative" }}>
        <div>
          <div style={label}>BALANCE</div>
          <div style={{ color: "#fff", fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>{formatMoney(money)}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={label}>PER TAP</div>
          <div style={{ color: boostActive ? ACCENT : "#fff", fontSize: 16, fontWeight: 700 }}>{formatMoney(earnPerTap)}</div>
        </div>
      </div>
      <div style={{ ...row, justifyContent: "space-between", position: "relative" }}>
        <div style={{ ...row, gap: 6 }}>
          {boostActive && (
            <span style={{ ...row, gap: 3, background: "rgba(251,191,36,0.2)", padding: "3px 8px", borderRadius: 8 }}>
              <Icon name="flash" size={10} color={ACCENT} />
              <span style={{ color: ACCENT, fontSize: 10, fontWeight: 800 }}>
                {BOOST_MULTIPLIER}x {boostLeft}s
              </span>
            </span>
          )}
          {currentJob && (
            <span style={{ ...row, gap: 3, background: "rgba(74,222,128,0.15)", padding: "3px 8px", borderRadius: 8 }}>
              <span style={{ fontSize: 10 }}>{currentJob.emoji}</span>
              <span style={{ color: "#4ade80", fontSize: 10, fontWeight: 800 }}>{jobTapsLeft}</span>
            </span>
          )}
          {!boostActive && !currentJob && (
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: 2 }}>GUEST</span>
          )}
        </div>
        <div style={{ ...row, gap: 8 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 8, fontWeight: 700, letterSpacing: 1 }}>INCOME / HR</div>
            <div style={{ color: "#4ade80", fontSize: 12, fontWeight: 800 }}>{formatMoney(income)}</div>
          </div>
          <div style={{ ...row, width: 38 }}>
            <div style={{ width: 22, height: 22, borderRadius: 11, background: "rgba(239,68,68,0.6)" }} />
            <div style={{ width: 22, height: 22, borderRadius: 11, background: "rgba(251,191,36,0.6)", marginLeft: -8 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkinStrip({ skinId, onPick }) {
  return (
    <div className="vb-hscroll" style={{ ...row, gap: 10, overflowX: "auto", padding: "12px 2px 2px" }}>
      {Object.entries(CARD_SKINS).map(([id, skin]) => {
        const active = id === skinId;
        return (
          <button key={id} type="button" onClick={() => onPick(id)} style={{ ...btnReset, flexShrink: 0, textAlign: "center" }}>
            <div
              style={{
                width: 54,
                height: 34,
                borderRadius: 8,
                background: gradient(skin.colors),
                border: active ? `2px solid ${ACCENT}` : "2px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {active && <span style={{ color: ACCENT, fontSize: 14, fontWeight: 900 }}>{"\u2713"}</span>}
            </div>
            <div style={{ color: active ? ACCENT : "#64748b", fontSize: 9, fontWeight: 700, marginTop: 4 }}>{skin.name}</div>
          </button>
        );
      })}
    </div>
  );
}

function NewsTicker({ items }) {
  if (!items.length) return <div style={{ height: 130 }} />;
  const loop = [...items, ...items];
  return (
    <div style={{ height: 130, overflow: "hidden", position: "relative" }}>
      <div className="vb-news-track" style={{ display: "flex", gap: 10, width: "max-content", animationDuration: `${items.length * 6}s` }}>
        {loop.map((n, i) => {
          const up = n.change >= 0;
          const c = up ? "#4ade80" : "#f87171";
          return (
            <div
              key={`${n.id}-${i}`}
              style={{
                width: 220,
                height: 124,
                flexShrink: 0,
                borderRadius: 16,
                padding: 14,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ ...row, justifyContent: "space-between" }}>
                <span style={{ color: "#fff", fontSize: 12, fontWeight: 900, letterSpacing: 1, background: "rgba(255,255,255,0.08)", padding: "2px 7px", borderRadius: 6 }}>{n.ticker}</span>
                <span style={{ color: c, fontSize: 12, fontWeight: 800 }}>{formatPercent(n.change)}</span>
              </div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700, lineHeight: "17px" }}>{n.headline}</div>
              <div style={{ ...row, justifyContent: "space-between" }}>
                <span style={{ color: "#64748b", fontSize: 10, fontWeight: 600 }}>{n.source}</span>
                <span style={{ color: "#475569", fontSize: 9, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{n.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TapZone({ earnPerTap, boostActive, onTap, floats }) {
  const ringBorder = boostActive ? "rgba(251,191,36,0.35)" : "rgba(255,255,255,0.06)";
  return (
    <button
      type="button"
      className="vb-tapzone"
      onPointerDown={onTap}
      style={{
        ...btnReset,
        flex: 1,
        minHeight: 130,
        width: "100%",
        borderRadius: 24,
        position: "relative",
        overflow: "hidden",
        background: boostActive ? "linear-gradient(180deg, rgba(251,191,36,0.12), rgba(251,191,36,0.03))" : "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
        border: boostActive ? "1px solid rgba(251,191,36,0.3)" : "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "manipulation",
      }}
    >
      {[260, 190, 120].map((d, i) => (
        <div
          key={d}
          className={boostActive ? "vb-ring-pulse" : undefined}
          style={{ position: "absolute", width: d, height: d, borderRadius: d / 2, border: `1px solid ${ringBorder}`, opacity: 1 - i * 0.15, pointerEvents: "none" }}
        />
      ))}
      <div style={{ position: "relative", textAlign: "center", pointerEvents: "none" }}>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 800, letterSpacing: 3 }}>TAP TO EARN</div>
        <div style={{ color: boostActive ? ACCENT : "#fff", fontSize: 30, fontWeight: 900, margin: "4px 0" }}>+{formatMoney(earnPerTap)}</div>
        <div style={{ width: 30, height: 2, background: "rgba(255,255,255,0.15)", margin: "6px auto" }} />
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600 }}>Tap anywhere</div>
      </div>
      {floats.map((f) => (
        <span
          key={f.id}
          className="vb-float"
          style={{ position: "absolute", left: f.x, top: f.y, color: f.boost ? ACCENT : "#4ade80", fontSize: 22, fontWeight: 900, pointerEvents: "none", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
        >
          +{formatMoney(f.amount)}
        </span>
      ))}
    </button>
  );
}

function HomeScreen(p) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "50px 24px 96px" }}>
      <VoidPayCard
        skin={CARD_SKINS[p.skinId]}
        money={p.money}
        earnPerTap={p.earnPerTap}
        boostActive={p.boostActive}
        boostLeft={p.boostLeft}
        currentJob={p.currentJob}
        jobTapsLeft={p.jobTapsLeft}
        income={p.income}
        onPalette={() => p.setShowSkins((s) => !s)}
      />
      {p.showSkins ? (
        <SkinStrip skinId={p.skinId} onPick={p.setSkinId} />
      ) : (
        <div style={{ marginTop: 16 }}>
          <div style={{ ...row, gap: 6, marginBottom: 8 }}>
            <Icon name="newspaper-outline" size={13} color="#64748b" />
            <span style={{ color: "#64748b", fontSize: 11, fontWeight: 800, letterSpacing: 1.5 }}>MARKET NEWS</span>
          </div>
          <NewsTicker items={p.news} />
        </div>
      )}
      <div style={{ height: 12 }} />
      <TapZone earnPerTap={p.earnPerTap} boostActive={p.boostActive} onTap={p.onTap} floats={p.floats} />
      {!p.boostActive && (
        <button type="button" onClick={p.onBoost} style={{ ...btnReset, ...row, justifyContent: "center", gap: 6, padding: "9px 0 3px" }}>
          <Icon name="play-circle-outline" size={15} color={ACCENT} />
          <span style={{ color: ACCENT, fontSize: 12, fontWeight: 700 }}>Watch ad for 7x boost</span>
        </button>
      )}
      {p.boostActive && <div style={{ height: 27 }} />}
      <div style={{ marginTop: 8 }}>
        {p.currentJob ? (
          <div style={{ ...row, gap: 10, background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 14, padding: "10px 12px" }}>
            <span style={{ fontSize: 20 }}>{p.currentJob.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontSize: 13, fontWeight: 800 }}>{p.currentJob.title}</div>
              <div style={{ color: "#4ade80", fontSize: 11, fontWeight: 700 }}>
                {p.jobTapsLeft} taps left · +{formatMoney(p.currentJob.perTapBonus)}/tap
              </div>
            </div>
            <button type="button" onClick={p.onQuit} style={{ ...btnReset, ...row, gap: 4, padding: "6px 10px", borderRadius: 10, background: "rgba(248,113,113,0.12)" }}>
              <Icon name="log-out-outline" size={13} color="#f87171" />
              <span style={{ color: "#f87171", fontSize: 11, fontWeight: 800 }}>Quit</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={p.onFindWork}
            style={{ ...btnReset, ...row, justifyContent: "center", gap: 8, width: "100%", height: 46, borderRadius: 14, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Icon name="briefcase-outline" size={17} color="#fff" />
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>Find Work</span>
          </button>
        )}
      </div>
    </div>
  );
}

function JobSheet({ jobs, refreshMins, onApply, onClose }) {
  return (
    <Sheet onClose={onClose} title="Find Work" subtitle={`Refreshes in ${refreshMins}m`}>
      {jobs.length === 0 && <div style={{ color: "#64748b", fontSize: 13, padding: "20px 0", textAlign: "center" }}>No openings right now. Check back soon.</div>}
      {jobs.map((job) => {
        const pct = Math.round(job.successRate * 100);
        const chanceColor = pct >= 60 ? "#4ade80" : pct >= 30 ? ACCENT : "#f87171";
        return (
          <button
            key={job.id}
            type="button"
            onClick={() => onApply(job)}
            style={{ ...btnReset, ...row, gap: 12, width: "100%", textAlign: "left", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "12px 14px", marginBottom: 8 }}
          >
            <span style={{ fontSize: 24, width: 30, textAlign: "center" }}>{job.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{job.title}</div>
              <div style={{ color: "#64748b", fontSize: 11, marginTop: 1 }}>{job.description}</div>
              <div style={{ ...row, gap: 10, marginTop: 5 }}>
                <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 800 }}>+{formatMoney(job.perTapBonus)}/tap</span>
                <span style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700 }}>{job.totalTaps} taps</span>
              </div>
            </div>
            <span style={{ color: chanceColor, fontSize: 14, fontWeight: 900 }}>{pct}%</span>
          </button>
        );
      })}
    </Sheet>
  );
}

/* --------------------------------- Invest --------------------------------- */

function PriceChart({ data, color, width = 300, height = 130 }) {
  if (!data || data.length < 2) return <div style={{ height }} />;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((v, i) => [(i / (data.length - 1)) * width, 6 + (1 - (v - min) / span) * (height - 12)]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const gid = `vbg-${color.replace("#", "")}`;
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ display: "block" }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L${width},${height} L0,${height} Z`} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function TickerAvatar({ asset, size = 40 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 12, background: getTickerColor(asset.id), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ color: "#fff", fontSize: size * 0.24, fontWeight: 900, letterSpacing: 0.3 }}>{asset.ticker.slice(0, 4)}</span>
    </div>
  );
}

function DetailPanel({ asset, state, holding, money, onBuy, onSell }) {
  const [range, setRange] = useState("1D");
  const [side, setSide] = useState("buy");
  const [qty, setQty] = useState(1);
  const frac = RANGES.find((r) => r.id === range).frac;
  const data = sliceHistory(state.history, frac);
  const change = getChangePercent(state.price, data[0]);
  const up = change >= 0;
  const color = up ? "#4ade80" : "#f87171";
  const owned = holding ? holding.qty : 0;
  const maxQty = side === "buy" ? Math.floor(money / state.price) : owned;
  const total = qty * state.price;
  const canAct = qty > 0 && (side === "buy" ? total <= money : qty <= owned);
  const hi = Math.max(...data);
  const lo = Math.min(...data);
  const lbl = { color: "#64748b", fontSize: 10, fontWeight: 700, letterSpacing: 0.6, marginBottom: 2 };
  const val = { color: "#e2e8f0", fontSize: 13, fontWeight: 800 };

  return (
    <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)" }} onClick={(e) => e.stopPropagation()}>
      <div style={{ ...row, gap: 8, marginBottom: 6 }}>
        <span style={{ color: "#fff", fontSize: 26, fontWeight: 800 }}>{formatPrice(state.price)}</span>
        <span style={{ color, fontSize: 12, fontWeight: 800, background: up ? "rgba(74,222,128,0.12)" : "rgba(248,113,113,0.12)", padding: "3px 8px", borderRadius: 8 }}>{formatPercent(change)}</span>
      </div>
      <PriceChart data={data} color={color} />
      <div style={{ ...row, gap: 6, margin: "10px 0" }}>
        {RANGES.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRange(r.id)}
            style={{ ...btnReset, flex: 1, padding: "6px 0", borderRadius: 8, fontSize: 11, fontWeight: 800, background: range === r.id ? "rgba(255,255,255,0.12)" : "transparent", color: range === r.id ? "#fff" : "#64748b" }}
          >
            {r.id}
          </button>
        ))}
      </div>
      <div style={{ ...row, marginBottom: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={lbl}>HIGH</div>
          <div style={val}>{formatPrice(hi)}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={lbl}>LOW</div>
          <div style={val}>{formatPrice(lo)}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={lbl}>DIVIDEND / HR</div>
          <div style={{ ...val, color: "#4ade80" }}>{formatMoney(getHourlyDividend(asset, state))}</div>
        </div>
      </div>
      {owned > 0 && (
        <div style={{ ...row, background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "10px 12px", marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={lbl}>POSITION</div>
            <div style={val}>{formatQty(owned)} shares</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={lbl}>AVG COST</div>
            <div style={val}>{formatPrice(holding.avgCost)}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={lbl}>VALUE</div>
            <div style={{ ...val, color: state.price >= holding.avgCost ? "#4ade80" : "#f87171" }}>{formatMoney(owned * state.price)}</div>
          </div>
        </div>
      )}
      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ ...row, background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 3, marginBottom: 10 }}>
          {["buy", "sell"].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setSide(s);
                setQty(1);
              }}
              style={{
                ...btnReset,
                flex: 1,
                padding: "7px 0",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 800,
                background: side === s ? (s === "buy" ? "#4ade80" : "#f87171") : "transparent",
                color: side === s ? "#000" : "#94a3b8",
              }}
            >
              {s === "buy" ? "Buy" : "Sell"}
            </button>
          ))}
        </div>
        <div style={{ ...row, gap: 8, marginBottom: 8 }}>
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} style={qtyBtn}>
            <Icon name="remove" size={16} color="#fff" />
          </button>
          <div style={{ flex: 1, textAlign: "center", color: "#fff", fontSize: 18, fontWeight: 800 }}>{qty}</div>
          <button type="button" onClick={() => setQty((q) => q + 1)} style={qtyBtn}>
            <Icon name="add" size={16} color="#fff" />
          </button>
          <button
            type="button"
            onClick={() => setQty(Math.max(1, maxQty))}
            style={{ ...btnReset, padding: "8px 10px", borderRadius: 10, background: "rgba(251,191,36,0.12)", color: ACCENT, fontSize: 11, fontWeight: 900 }}
          >
            MAX
          </button>
        </div>
        <div style={{ ...row, justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ color: "#64748b", fontSize: 12, fontWeight: 700 }}>Total</span>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 800 }}>{formatMoney(total)}</span>
        </div>
        <button
          type="button"
          disabled={!canAct}
          onClick={() => (side === "buy" ? onBuy(asset, qty) : onSell(asset, qty))}
          style={{
            ...btnReset,
            width: "100%",
            padding: "12px 0",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 900,
            background: side === "buy" ? "#4ade80" : "#f87171",
            color: "#000",
            opacity: canAct ? 1 : 0.35,
            cursor: canAct ? "pointer" : "default",
          }}
        >
          {canAct
            ? `${side === "buy" ? "Buy" : "Sell"} ${qty} ${asset.ticker}`
            : side === "buy"
              ? "Not enough cash"
              : "No shares to sell"}
        </button>
      </div>
    </div>
  );
}

function InvestScreen({ market, holdings, money, onBuy, onSell }) {
  const [sector, setSector] = useState("All");
  const [selected, setSelected] = useState(null);
  const list = STOCKS.filter((a) => sector === "All" || a.sector === sector);
  const best = list.reduce((b, a) => {
    const c = getChangePercent(market[a.id].price, market[a.id].history[0]);
    return !b || c > b.c ? { a, c } : b;
  }, null);
  const holdingsValue = Object.entries(holdings).reduce((s, [id, h]) => s + h.qty * market[id].price, 0);
  const positions = Object.values(holdings).filter((h) => h.qty > 0).length;
  const toggle = (id) => setSelected((s) => (s === id ? null : id));

  const renderRow = (asset) => {
    const st = market[asset.id];
    const ch = getChangePercent(st.price, st.prevPrice);
    const up = ch >= 0;
    const open = selected === asset.id;
    return (
      <div key={asset.id} onClick={() => toggle(asset.id)} style={{ background: open ? "rgba(255,255,255,0.05)" : "transparent", borderRadius: 16, padding: "10px 10px", marginBottom: 4, cursor: "pointer" }}>
        <div style={{ ...row, gap: 12 }}>
          <TickerAvatar asset={asset} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>{asset.ticker}</div>
            <div style={{ color: "#64748b", fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {asset.emoji} {asset.name}
              {holdings[asset.id] && holdings[asset.id].qty > 0 ? ` · ${formatQty(holdings[asset.id].qty)} owned` : ""}
            </div>
          </div>
          <div style={{ width: 54, height: 26 }}>
            <PriceChart data={st.history.slice(-14)} color={up ? "#4ade80" : "#f87171"} width={54} height={26} />
          </div>
          <div style={{ textAlign: "right", minWidth: 72 }}>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>{formatPrice(st.price)}</div>
            <div style={{ color: up ? "#4ade80" : "#f87171", fontSize: 11, fontWeight: 800 }}>{formatPercent(ch)}</div>
          </div>
        </div>
        {open && <DetailPanel asset={asset} state={st} holding={holdings[asset.id]} money={money} onBuy={onBuy} onSell={onSell} />}
      </div>
    );
  };

  return (
    <div className="vb-scroll" style={{ height: "100%", overflowY: "auto", padding: "54px 20px 110px" }}>
      <div style={{ color: "#64748b", fontSize: 11, fontWeight: 800, letterSpacing: 1.5 }}>PORTFOLIO</div>
      <div style={{ color: "#fff", fontSize: 34, fontWeight: 800, letterSpacing: -0.8, margin: "2px 0 10px" }}>{formatMoney(holdingsValue)}</div>
      <div style={{ ...row, gap: 8, marginBottom: 18 }}>
        <span style={{ ...row, gap: 5, background: "rgba(255,255,255,0.06)", padding: "6px 10px", borderRadius: 10 }}>
          <Icon name="wallet-outline" size={13} color="#94a3b8" />
          <span style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 800 }}>Cash {formatMoney(money)}</span>
        </span>
        <span style={{ background: "rgba(255,255,255,0.06)", padding: "6px 10px", borderRadius: 10, color: "#e2e8f0", fontSize: 12, fontWeight: 800 }}>
          {positions} {positions === 1 ? "position" : "positions"}
        </span>
      </div>
      <div className="vb-hscroll" style={{ ...row, gap: 8, overflowX: "auto", marginBottom: 16, paddingBottom: 2 }}>
        {SECTORS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setSector(s);
              setSelected(null);
            }}
            style={{
              ...btnReset,
              flexShrink: 0,
              padding: "7px 13px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 800,
              background: sector === s ? ACCENT : "rgba(255,255,255,0.06)",
              color: sector === s ? "#000" : "#94a3b8",
            }}
          >
            {s}
          </button>
        ))}
      </div>
      {best && (
        <div
          onClick={() => toggle(`best-${best.a.id}`)}
          style={{ borderRadius: 20, padding: 16, marginBottom: 18, cursor: "pointer", background: "linear-gradient(135deg, rgba(74,222,128,0.14), rgba(74,222,128,0.03))", border: "1px solid rgba(74,222,128,0.2)" }}
        >
          <div style={{ ...row, justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ ...row, gap: 5 }}>
              <Icon name="trending-up" size={14} color="#4ade80" />
              <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 900, letterSpacing: 1.2 }}>TODAY&apos;S LEADER</span>
            </span>
            <span style={{ color: best.c >= 0 ? "#4ade80" : "#f87171", fontSize: 12, fontWeight: 900 }}>{formatPercent(best.c)}</span>
          </div>
          <div style={{ ...row, gap: 12 }}>
            <TickerAvatar asset={best.a} size={46} />
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>{best.a.ticker}</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>{best.a.name}</div>
            </div>
            <div style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>{formatPrice(market[best.a.id].price)}</div>
          </div>
          {selected === `best-${best.a.id}` && (
            <DetailPanel asset={best.a} state={market[best.a.id]} holding={holdings[best.a.id]} money={money} onBuy={onBuy} onSell={onSell} />
          )}
        </div>
      )}
      <div style={{ color: "#64748b", fontSize: 11, fontWeight: 800, letterSpacing: 1.5, marginBottom: 6 }}>WATCHLIST</div>
      {list.map(renderRow)}
    </div>
  );
}

/* -------------------------------- Business -------------------------------- */

function BusinessScreen({ money, income, skinId, owned, onNew }) {
  const skin = CARD_SKINS[skinId];
  const lbl = { color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, marginBottom: 2 };
  return (
    <div className="vb-scroll" style={{ height: "100%", overflowY: "auto", padding: "54px 16px 110px" }}>
      <div style={{ color: "#fff", fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Business</div>
      <div style={{ height: 195, borderRadius: 20, padding: 18, display: "flex", flexDirection: "column", justifyContent: "space-between", background: gradient(skin.colors), boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}>
        <div style={{ ...row, justifyContent: "space-between" }}>
          <div style={{ width: 40, height: 30, borderRadius: 6, background: "linear-gradient(135deg, #fbbf24, #b45309)", opacity: 0.8 }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 900, letterSpacing: 4, fontStyle: "italic" }}>VOIDPAY</span>
        </div>
        <div style={{ ...row, gap: 14 }}>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, letterSpacing: 2 }}>
              {"••••"}
            </span>
          ))}
        </div>
        <div style={{ ...row, justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={lbl}>BALANCE</div>
            <div style={{ color: "#fff", fontSize: 26, fontWeight: 800, letterSpacing: -0.5 }}>{formatMoney(money)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 900, letterSpacing: 3, fontStyle: "italic", marginBottom: 4 }}>VOIDPAY</div>
            <div style={lbl}>INCOME / HR</div>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{formatMoney(income)}</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onNew}
        style={{ ...btnReset, ...row, justifyContent: "center", gap: 6, width: "100%", margin: "16px 0 22px", padding: "14px 0", borderRadius: 16, background: ACCENT, boxShadow: "0 6px 12px rgba(251,191,36,0.25)" }}
      >
        <Icon name="rocket" size={18} color="#000" />
        <span style={{ color: "#000", fontWeight: 800, fontSize: 14 }}>New Business</span>
      </button>
      {owned.length === 0 && (
        <div style={{ textAlign: "center", padding: "18px 10px", color: "#64748b", fontSize: 13, lineHeight: "19px" }}>
          You don&apos;t own a business yet. Start with a Local Cafe for {formatMoney(BUSINESSES[0].cost)}.
        </div>
      )}
      {owned.map((b) => (
        <div
          key={b.id}
          className="vb-pop"
          style={{ borderRadius: 24, marginBottom: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: `linear-gradient(135deg, ${b.color}22, rgba(255,255,255,0.02) 60%)`, padding: 18 }}
        >
          <div style={{ ...row, marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: `${b.color}26`, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 14 }}>
              <Icon name={b.icon} size={22} color={b.color} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 800, letterSpacing: -0.3, marginBottom: 3 }}>{b.name}</div>
              <div style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, letterSpacing: 0.8 }}>
                {b.category.toUpperCase()} · LV {b.level}/{BUSINESS_MAX_LEVEL}
              </div>
            </div>
          </div>
          <div style={row}>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#64748b", fontSize: 10, fontWeight: 700, letterSpacing: 0.8, marginBottom: 4 }}>NEXT UPGRADE</div>
              <div style={{ color: ACCENT, fontSize: 17, fontWeight: 800 }}>{formatMoney(getUpgradeCost(b))}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#64748b", fontSize: 10, fontWeight: 700, letterSpacing: 0.8, marginBottom: 4 }}>TAX RATE</div>
              <div style={{ color: "#e2e8f0", fontSize: 17, fontWeight: 800 }}>{Math.round(b.taxRate * 100)}%</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StartBusinessSheet({ money, owned, onStart, onClose }) {
  return (
    <Sheet onClose={onClose} title="Start a Business">
      {BUSINESSES.map((b) => {
        const have = owned.some((o) => o.type === b.type);
        const disabled = have || money < b.cost;
        return (
          <div key={b.type}>
            <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "6px 0 8px" }}>{b.section}</div>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onStart(b)}
              style={{
                ...btnReset,
                ...row,
                width: "100%",
                textAlign: "left",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.05)",
                padding: 14,
                borderRadius: 16,
                marginBottom: 10,
                border: "1px solid rgba(255,255,255,0.08)",
                opacity: disabled ? 0.4 : 1,
                cursor: disabled ? "default" : "pointer",
              }}
            >
              <div style={{ ...row, gap: 12, flex: 1, minWidth: 0, marginRight: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 11, background: `${b.color}26`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={b.icon} size={18} color={b.color} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{b.name}</div>
                  <div style={{ color: "#64748b", fontSize: 11 }}>{have ? "Owned" : b.desc}</div>
                </div>
              </div>
              <span style={{ color: disabled ? "#64748b" : ACCENT, fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{formatMoney(b.cost)}</span>
            </button>
          </div>
        );
      })}
    </Sheet>
  );
}

/* --------------------------------- Shared --------------------------------- */

const btnReset = { appearance: "none", border: "none", background: "none", margin: 0, padding: 0, font: "inherit", cursor: "pointer", WebkitTapHighlightColor: "transparent" };
const qtyBtn = { ...btnReset, width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" };

function Sheet({ title, subtitle, onClose, children }) {
  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", flexDirection: "column", justifyContent: "flex-end", zIndex: 20 }}>
      <div
        className="vb-sheet"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "#0f0f0f", borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: "20px 20px 30px", borderTop: "1px solid rgba(255,255,255,0.1)", maxHeight: "78%", display: "flex", flexDirection: "column" }}
      >
        <div style={{ ...row, justifyContent: "space-between", marginBottom: 14 }}>
          <div>
            <div style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>{title}</div>
            {subtitle && <div style={{ color: "#64748b", fontSize: 12, marginTop: 2 }}>{subtitle}</div>}
          </div>
          <button type="button" onClick={onClose} aria-label="Close" style={{ ...btnReset, width: 32, height: 32, borderRadius: 16, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="close" size={18} color="#94a3b8" />
          </button>
        </div>
        <div className="vb-scroll" style={{ overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "invest", label: "Invest", icon: "trending-up" },
  { id: "business", label: "Business", icon: "briefcase" },
];

function NavBar({ tab, setTab }) {
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", justifyContent: "center", zIndex: 10, pointerEvents: "none" }}>
      <div style={{ ...row, gap: 4, padding: 6, borderRadius: 30, background: "rgba(24,24,27,0.92)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", backdropFilter: "blur(20px)", pointerEvents: "auto" }}>
        {TABS.map((t) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-label={t.label}
              style={{ ...btnReset, ...row, gap: 6, height: 44, padding: active ? "0 16px" : "0 14px", borderRadius: 22, background: active ? "rgba(251,191,36,0.15)" : "transparent", transition: "all 0.2s ease" }}
            >
              <Icon name={active ? t.icon : `${t.icon}-outline`} size={20} color={active ? ACCENT : "#71717a"} />
              {active && <span style={{ color: ACCENT, fontSize: 13, fontWeight: 800 }}>{t.label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------- Root ---------------------------------- */

export default function VoidBusinessVisual() {
  const [tab, setTab] = useState("home");
  const [money, setMoney] = useState(0);
  const [now, setNow] = useState(0);
  const [boostEndsAt, setBoostEndsAt] = useState(0);
  const [currentJob, setCurrentJob] = useState(null);
  const [jobTapsLeft, setJobTapsLeft] = useState(0);
  const [appliedJobs, setAppliedJobs] = useState({});
  const [showJobs, setShowJobs] = useState(false);
  const [jobResult, setJobResult] = useState(null);
  const [skinId, setSkinId] = useState("default");
  const [showSkins, setShowSkins] = useState(false);
  const [market, setMarket] = useState(null);
  const [news, setNews] = useState([]);
  const [holdings, setHoldings] = useState({});
  const [owned, setOwned] = useState([]);
  const [showStart, setShowStart] = useState(false);
  const [floats, setFloats] = useState([]);
  const [toast, setToast] = useState(null);
  const floatId = useRef(0);
  const holdingsRef = useRef(holdings);
  holdingsRef.current = holdings;
  const marketRef = useRef(market);
  marketRef.current = market;

  // Market, news and clock start on the client only (keeps server render deterministic)
  useEffect(() => {
    const initial = createInitialMarketState();
    setMarket(initial);
    setNews(Array.from({ length: 10 }, () => generateNewsItem(initial)));
    setNow(Date.now());
    const clock = setInterval(() => setNow(Date.now()), 500);
    const tick = setInterval(() => {
      const m = marketRef.current;
      if (!m) return;
      const next = stepMarket(m, 1);
      setMarket(next);
      // one simulated minute of dividends
      const perHour = Object.entries(holdingsRef.current).reduce((s, [id, h]) => s + h.qty * getHourlyDividend(STOCKS.find((a) => a.id === id), next[id]), 0);
      if (perHour > 0) setMoney((v) => v + perHour / 60);
    }, MARKET_TICK_MS);
    return () => {
      clearInterval(clock);
      clearInterval(tick);
    };
  }, []);

  const boostActive = now > 0 && boostEndsAt > now;
  const boostLeft = boostActive ? Math.ceil((boostEndsAt - now) / 1000) : 0;
  const earnPerTap = (BASE_EARN_PER_TAP + (currentJob ? currentJob.perTapBonus : 0)) * (boostActive ? BOOST_MULTIPLIER : 1);

  const dividendIncome = useMemo(() => {
    if (!market) return 0;
    return Object.entries(holdings).reduce((s, [id, h]) => s + h.qty * getHourlyDividend(STOCKS.find((a) => a.id === id), market[id]), 0);
  }, [holdings, market]);

  const showToast = useCallback((text, color) => {
    setToast({ text, color, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (!jobResult) return undefined;
    const t = setTimeout(() => setJobResult(null), 2500);
    return () => clearTimeout(t);
  }, [jobResult]);

  const handleTap = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / SCALE - 30;
    const y = (e.clientY - rect.top) / SCALE - 20;
    const amount = earnPerTap;
    const id = ++floatId.current;
    setMoney((m) => m + amount);
    setFloats((f) => [...f.slice(-14), { id, x, y, amount, boost: boostActive }]);
    setTimeout(() => setFloats((f) => f.filter((fl) => fl.id !== id)), 800);
    if (currentJob) {
      if (jobTapsLeft <= 1) {
        showToast(`${currentJob.title} shift complete`, "#4ade80");
        setCurrentJob(null);
        setJobTapsLeft(0);
      } else {
        setJobTapsLeft(jobTapsLeft - 1);
      }
    }
  };

  const isOnCooldown = (id) => {
    const a = appliedJobs[id];
    if (!a) return false;
    const cd = a.rejected ? JOB_REJECT_COOLDOWN_MS : JOB_COOLDOWN_MS;
    return now - a.at < cd;
  };
  const jobSeed = now ? Math.floor(now / JOB_REFRESH_MS) : 1;
  const refreshMins = now ? Math.max(1, Math.ceil((JOB_REFRESH_MS - (now % JOB_REFRESH_MS)) / 60000)) : 15;
  const availableJobs = showJobs ? getAvailableJobs(jobSeed, isOnCooldown, currentJob && currentJob.id) : [];

  const applyForJob = (job) => {
    const hired = Math.random() < job.successRate;
    setAppliedJobs((a) => ({ ...a, [job.id]: { at: Date.now(), rejected: !hired } }));
    setShowJobs(false);
    if (hired) {
      setCurrentJob(job);
      setJobTapsLeft(job.totalTaps);
    }
    setJobResult({ hired, job });
  };

  const buy = (asset, qty) => {
    const price = market[asset.id].price;
    const cost = price * qty;
    if (cost > money) return;
    setMoney((m) => m - cost);
    setHoldings((h) => {
      const cur = h[asset.id] || { qty: 0, avgCost: 0 };
      const nq = cur.qty + qty;
      return { ...h, [asset.id]: { qty: nq, avgCost: (cur.qty * cur.avgCost + cost) / nq } };
    });
    showToast(`Bought ${qty} ${asset.ticker} for ${formatMoney(cost)}`, "#4ade80");
  };

  const sell = (asset, qty) => {
    const cur = holdings[asset.id];
    if (!cur || cur.qty < qty) return;
    const proceeds = market[asset.id].price * qty;
    setMoney((m) => m + proceeds);
    setHoldings((h) => {
      const nq = h[asset.id].qty - qty;
      const next = { ...h };
      if (nq <= 0) delete next[asset.id];
      else next[asset.id] = { ...h[asset.id], qty: nq };
      return next;
    });
    showToast(`Sold ${qty} ${asset.ticker} for ${formatMoney(proceeds)}`, "#f87171");
  };

  const startBusiness = (b) => {
    if (money < b.cost || owned.some((o) => o.type === b.type)) return;
    setMoney((m) => m - b.cost);
    setOwned((o) => [...o, { ...b, id: `${b.type}-${Date.now()}`, level: 1 }]);
    setShowStart(false);
    showToast(`${b.name} opened`, ACCENT);
  };

  const outerW = SCREEN_W * SCALE + BEZEL * 2;
  const outerH = SCREEN_H * SCALE + BEZEL * 2;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <style>{`
        .vb-scroll, .vb-hscroll { scrollbar-width: none; -ms-overflow-style: none; }
        .vb-scroll::-webkit-scrollbar, .vb-hscroll::-webkit-scrollbar { display: none; }
        .vb-news-track { animation-name: vbTicker; animation-timing-function: linear; animation-iteration-count: infinite; }
        .vb-news-track:hover { animation-play-state: paused; }
        @keyframes vbTicker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .vb-tapzone { transition: transform 0.08s ease; user-select: none; -webkit-user-select: none; }
        .vb-tapzone:active { transform: scale(0.97); }
        .vb-float { animation: vbFloat 0.8s ease-out forwards; }
        @keyframes vbFloat { from { opacity: 1; transform: translateY(0) scale(1); } to { opacity: 0; transform: translateY(-80px) scale(1.1); } }
        .vb-ring-pulse { animation: vbPulse 1.2s ease-in-out infinite; }
        @keyframes vbPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        .vb-sheet { animation: vbSheet 0.25s ease-out; }
        @keyframes vbSheet { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .vb-pop { animation: vbPop 0.35s ease-out; }
        @keyframes vbPop { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }
        .vb-toast { animation: vbToast 0.25s ease-out; }
        @keyframes vbToast { from { opacity: 0; transform: translate(-50%, -10px); } to { opacity: 1; transform: translate(-50%, 0); } }
        @media (prefers-reduced-motion: reduce) { .vb-news-track, .vb-ring-pulse { animation: none; } }
      `}</style>
      <div
        style={{
          width: outerW,
          height: outerH,
          borderRadius: 48,
          padding: BEZEL,
          background: "linear-gradient(145deg, #2a2a2e, #0c0c0e)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), 0 0 80px rgba(251,191,36,0.12)",
          flexShrink: 0,
        }}
      >
        <div style={{ width: SCREEN_W * SCALE, height: SCREEN_H * SCALE, borderRadius: 38, overflow: "hidden", position: "relative", background: "#0a0a0a" }}>
          <div
            style={{
              width: SCREEN_W,
              height: SCREEN_H,
              transform: `scale(${SCALE})`,
              transformOrigin: "top left",
              position: "absolute",
              top: 0,
              left: 0,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif",
              background: "#0a0a0a",
              color: "#fff",
              textAlign: "left",
            }}
          >
            {/* status bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 44, ...row, justifyContent: "space-between", padding: "0 30px", zIndex: 30, pointerEvents: "none" }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>9:41</span>
              <div style={{ position: "absolute", left: "50%", top: 10, transform: "translateX(-50%)", width: 110, height: 30, borderRadius: 15, background: "#000" }} />
              <div style={{ ...row, gap: 5 }}>
                <Icon name="wifi" size={16} color="#fff" />
                <div style={{ width: 24, height: 11, borderRadius: 3, border: "1.5px solid rgba(255,255,255,0.8)", padding: 1 }}>
                  <div style={{ width: "80%", height: "100%", borderRadius: 1, background: "#fff" }} />
                </div>
              </div>
            </div>

            {tab === "home" && (
              <HomeScreen
                money={money}
                earnPerTap={earnPerTap}
                boostActive={boostActive}
                boostLeft={boostLeft}
                currentJob={currentJob}
                jobTapsLeft={jobTapsLeft}
                income={dividendIncome}
                skinId={skinId}
                setSkinId={setSkinId}
                showSkins={showSkins}
                setShowSkins={setShowSkins}
                news={news}
                floats={floats}
                onTap={handleTap}
                onBoost={() => setBoostEndsAt(Date.now() + BOOST_DURATION * 1000)}
                onFindWork={() => setShowJobs(true)}
                onQuit={() => {
                  setCurrentJob(null);
                  setJobTapsLeft(0);
                }}
              />
            )}
            {tab === "invest" && market && <InvestScreen market={market} holdings={holdings} money={money} onBuy={buy} onSell={sell} />}
            {tab === "business" && <BusinessScreen money={money} income={dividendIncome} skinId={skinId} owned={owned} onNew={() => setShowStart(true)} />}

            <NavBar
              tab={tab}
              setTab={(t) => {
                setTab(t);
                setShowJobs(false);
                setShowStart(false);
              }}
            />

            {showJobs && <JobSheet jobs={availableJobs} refreshMins={refreshMins} onApply={applyForJob} onClose={() => setShowJobs(false)} />}
            {showStart && <StartBusinessSheet money={money} owned={owned} onStart={startBusiness} onClose={() => setShowStart(false)} />}

            {jobResult && (
              <div onClick={() => setJobResult(null)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 40 }}>
                <div
                  className="vb-pop"
                  style={{ width: 280, borderRadius: 24, padding: "26px 22px", textAlign: "center", background: "#111", border: `1px solid ${jobResult.hired ? "rgba(74,222,128,0.35)" : "rgba(248,113,113,0.35)"}` }}
                >
                  <div style={{ fontSize: 40, marginBottom: 8 }}>{jobResult.job.emoji}</div>
                  <div style={{ color: jobResult.hired ? "#4ade80" : "#f87171", fontSize: 20, fontWeight: 900, marginBottom: 6 }}>{jobResult.hired ? "You're hired!" : "Rejected"}</div>
                  <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: "19px" }}>
                    {jobResult.hired
                      ? `${jobResult.job.title}: +${formatMoney(jobResult.job.perTapBonus)} per tap for ${jobResult.job.totalTaps} taps.`
                      : `The ${jobResult.job.title} role went to someone else. You can reapply in 5 minutes.`}
                  </div>
                </div>
              </div>
            )}

            {toast && (
              <div
                key={toast.id}
                className="vb-toast"
                style={{ position: "absolute", top: 50, left: "50%", transform: "translateX(-50%)", zIndex: 50, whiteSpace: "nowrap", background: "rgba(17,17,17,0.95)", border: `1px solid ${toast.color}55`, color: toast.color, fontSize: 13, fontWeight: 800, padding: "9px 16px", borderRadius: 14, pointerEvents: "none" }}
              >
                {toast.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
