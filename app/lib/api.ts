const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getRiskMetrics() {
    const res = await fetch(`${API_URL}/risk`)
    if (!res.ok) throw new Error("Failed to fetch risk metrics")
    return res.json()
}

export async function getStocks() {
    const res = await fetch(`${API_URL}/stocks`)
    if (!res.ok) throw new Error("Failed to fetch stocks")
    return res.json()
}

export async function getStockPrices(ticker: string) {
    const res = await fetch(`${API_URL}/stocks/${ticker}/prices`)
    if (!res.ok) throw new Error("Failed to fetch prices")
    return res.json()
}