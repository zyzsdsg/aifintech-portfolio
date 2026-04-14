"use client";

import { useEffect, useState } from "react";

interface RiskMetric {
    ticker: string;
    name: string;
    calc_date: string;
    volatility_30d: number;
    var_95: number;
    sharpe_30d: number;
    beta: number;
    max_drawdown: number;
}

export default function RiskDashboard() {
    const [metrics, setMetrics] = useState<RiskMetric[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState<keyof RiskMetric>("volatility_30d");

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/risk`)
            .then(res => res.json())
            .then(data => {
                setMetrics(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const sorted = [...metrics].sort(
        (a, b) => (b[sortBy] as number) - (a[sortBy] as number)
    );

    if (loading) return (
        <div className="text-center py-8 text-[#6e6e73] text-[14px]">
            Loading live risk data...
        </div>
    );

    return (
        <div className="mt-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[17px] font-semibold">
                    Live Risk Monitor — AU/NZ Equities
                </h3>
                <span className="text-[12px] text-[#6e6e73]">
                    {metrics.length} stocks · {metrics[0]?.calc_date}
                </span>
            </div>

            {/* Sort buttons */}
            <div className="flex gap-2 mb-4 flex-wrap">
                {[
                    { key: "volatility_30d", label: "Volatility" },
                    { key: "var_95", label: "VaR 95%" },
                    { key: "sharpe_30d", label: "Sharpe" },
                    { key: "max_drawdown", label: "Max Drawdown" },
                ].map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setSortBy(key as keyof RiskMetric)}
                        className={`px-3 py-1 rounded-full text-[12px] border transition-all ${sortBy === key
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f]"
                            : "text-[#6e6e73] border-[#d2d2d7] hover:border-[#1d1d1f]"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-[16px] border border-black/5">
                <table className="w-full text-[13px]">
                    <thead>
                        <tr className="border-b border-black/5 text-[#6e6e73] text-left bg-[#f5f5f7]">
                            <th className="py-3 px-4 font-medium">Ticker</th>
                            <th className="py-3 px-4 font-medium">Name</th>
                            <th className="py-3 px-4 font-medium">Volatility</th>
                            <th className="py-3 px-4 font-medium">VaR 95%</th>
                            <th className="py-3 px-4 font-medium">Sharpe</th>
                            <th className="py-3 px-4 font-medium">Max DD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.slice(0, 10).map(m => (
                            <tr
                                key={m.ticker}
                                className="border-b border-black/5 hover:bg-[#f5f5f7] transition-colors"
                            >
                                <td className="py-3 px-4 font-semibold">{m.ticker}</td>
                                <td className="py-3 px-4 text-[#6e6e73] max-w-[160px] truncate">
                                    {m.name}
                                </td>
                                <td className="py-3 px-4">
                                    <span className={
                                        m.volatility_30d > 0.3
                                            ? "text-red-500"
                                            : m.volatility_30d > 0.2
                                                ? "text-orange-500"
                                                : "text-green-600"
                                    }>
                                        {(m.volatility_30d * 100).toFixed(1)}%
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-red-500">
                                    {(m.var_95 * 100).toFixed(2)}%
                                </td>
                                <td className="py-3 px-4">
                                    <span className={
                                        m.sharpe_30d > 1
                                            ? "text-green-600"
                                            : m.sharpe_30d > 0
                                                ? "text-orange-500"
                                                : "text-red-500"
                                    }>
                                        {m.sharpe_30d.toFixed(2)}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-red-500">
                                    {(m.max_drawdown * 100).toFixed(1)}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-[12px] text-[#6e6e73] mt-3">
                Showing top 10 by {sortBy.replace("_", " ")} ·
                Powered by Azure Container Apps + PostgreSQL
            </p>
        </div>
    );
}