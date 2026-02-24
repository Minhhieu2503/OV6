import React, { useEffect, useRef, useState, useCallback } from 'react';

const PROXY_URL = 'http://localhost:5000/api/market/ticker';

const MarketTicker = () => {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const intervalRef = useRef(null);

    const loadPrices = useCallback(async () => {
        try {
            const res = await fetch(PROXY_URL);
            if (!res.ok) throw new Error(`Server error ${res.status}`);
            const json = await res.json();
            if (json.error) throw new Error(json.error);
            setPrices(json.data);
            setError(null);
        } catch (err) {
            console.error('[MarketTicker]', err.message);
            setError('Live data unavailable');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPrices();
        intervalRef.current = setInterval(loadPrices, 30_000);
        return () => clearInterval(intervalRef.current);
    }, [loadPrices]);

    // Duplicate for seamless loop: animation moves -50% of total width
    const items = prices.length > 0 ? [...prices, ...prices] : [];

    return (
        <>
            {/* Inline keyframes — guaranteed to work regardless of Tailwind JIT */}
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
