import React, { useEffect, useRef, useState, useCallback } from 'react';

// ── Binance symbols ──────────────────────────────────────────────────
const BINANCE_SYMBOLS = [
    { symbol: 'BTCUSDT', label: 'BTC/USD' },
    { symbol: 'ETHUSDT', label: 'ETH/USD' },
    { symbol: 'XAUUSDT', label: 'XAU/USD' },
];

// ── Forex pairs ──────────────────────────────────────────────────────
const FOREX_PAIRS = [
    { from: 'EUR', to: 'USD', label: 'EUR/USD' },
    { from: 'GBP', to: 'USD', label: 'GBP/USD' },
    { from: 'USD', to: 'JPY', label: 'USD/JPY' },
];

const fmt = (num, decimals = 2) => {
    const n = parseFloat(num);
    if (isNaN(n)) return '—';
    return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
};

// ── Fetch crypto from Binance (CORS-enabled) ─────────────────────────
async function fetchBinance() {
    const results = await Promise.all(
        BINANCE_SYMBOLS.map(async ({ symbol, label }) => {
            try {
                const res = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`);
                if (!res.ok) return { label, price: '—', change_p: '—', up: null };
                const d = await res.json();
                const price = parseFloat(d.lastPrice);
                const changePct = parseFloat(d.priceChangePercent);
                return {
                    label,
                    price: fmt(price),
                    change_p: `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%`,
                    up: changePct >= 0,
                };
            } catch {
                return { label, price: '—', change_p: '—', up: null };
            }
        })
    );
    return results;
}

// ── Fetch forex from ExchangeRate API (CORS-enabled) ─────────────────
let prevForexRates = null;

async function fetchForex() {
    try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!res.ok) throw new Error('ExchangeRate API error');
        const json = await res.json();
        const rates = json.rates;

        const results = FOREX_PAIRS.map(({ from, to, label }) => {
            let price;
            if (from === 'USD') {
                price = rates[to];
            } else {
                price = rates[from] ? 1 / rates[from] : null;
            }
            if (!price) return { label, price: '—', change_p: '—', up: null };

            const key = `${from}${to}`;
            let changePct = null;
            let up = null;
            if (prevForexRates && prevForexRates[key]) {
                changePct = ((price - prevForexRates[key]) / prevForexRates[key] * 100);
                up = changePct >= 0;
            }

            if (!prevForexRates) prevForexRates = {};
            prevForexRates[key] = price;

            const decimals = to === 'JPY' ? 4 : 4;
            return {
                label,
                price: fmt(price, decimals),
                change_p: changePct !== null ? `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%` : '~0.00%',
                up: up ?? true,
            };
        });
        return results;
    } catch {
        return FOREX_PAIRS.map(({ label }) => ({ label, price: '—', change_p: '—', up: null }));
    }
}

// ── Component ────────────────────────────────────────────────────────
const MarketTicker = () => {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const intervalRef = useRef(null);

    const loadPrices = useCallback(async () => {
        try {
            const [binanceData, forexData] = await Promise.all([
                fetchBinance(),
                fetchForex(),
            ]);
            const data = [...binanceData, ...forexData];
            // Check if we got at least some valid data
            const hasData = data.some(d => d.price !== '—');
            if (!hasData) throw new Error('No data available');
            setPrices(data);
            setError(null);
        } catch (err) {
            console.error('[MarketTicker]', err.message);
            if (prices.length === 0) setError('Live data unavailable');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPrices();
        intervalRef.current = setInterval(loadPrices, 30_000);
        return () => clearInterval(intervalRef.current);
    }, [loadPrices]);

    // Duplicate for seamless loop
    const items = prices.length > 0 ? [...prices, ...prices] : [];

    return (
        <>
            <style>{`
        @keyframes ov6-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ov6-ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ov6-ticker 35s linear infinite;
        }
        .ov6-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

            <div
                style={{ height: 44, overflow: 'hidden', position: 'relative' }}
                className="w-full bg-black/95 border-b border-yellow-500/25"
            >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Loading state */}
                {loading && (
                    <div className="flex items-center justify-center h-full gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                )}

                {/* Error state */}
                {!loading && error && (
                    <div className="flex items-center justify-center h-full text-red-400/70 text-xs tracking-widest">
                        {error}
                    </div>
                )}

                {/* Scrolling ticker */}
                {!loading && !error && (
                    <div className="ov6-ticker-track h-full">
                        {items.map((item, i) => (
                            <div
                                key={i}
                                style={{ whiteSpace: 'nowrap' }}
                                className="mx-6 flex items-center gap-2.5 text-sm h-full"
                            >
                                <span className="text-yellow-400 font-bold tracking-wide">{item.label}</span>
                                <span className="text-gray-100 font-mono">{item.price}</span>
                                <span
                                    className={`font-semibold text-xs ${item.up === null
                                        ? 'text-gray-500'
                                        : item.up
                                            ? 'text-emerald-400'
                                            : 'text-red-400'
                                        }`}
                                >
                                    {item.up === true ? '▲' : item.up === false ? '▼' : ''} {item.change_p}
                                </span>
                                <span className="text-yellow-500/25 ml-4">│</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default MarketTicker;
