"use client"

import { useState } from "react"
import { Clock, TrendingUp } from "lucide-react"

interface CryptoData {
  id: string
  symbol: string
  name: string
  avgPrice: string
  change24h: number
}

interface CryptoChartProps {
  selectedCrypto: CryptoData
}

export default function CryptoChart({ selectedCrypto }: CryptoChartProps) {
  const [selectedInterval, setSelectedInterval] = useState("24h")

  const intervals = [
    { label: "1 Hora", value: "1h", volume: "$1.20B" },
    { label: "6 Horas", value: "6h", volume: "$7.13B" },
    { label: "12 Horas", value: "12h", volume: "$14.25B" },
    { label: "24 Horas", value: "24h", volume: "$28.50B" },
  ]

  // Simulated price data for chart
  const generatePriceData = () => {
    const basePrice = Number.parseFloat(selectedCrypto.avgPrice.replace(/[$,]/g, ""))
    const points = 24
    const data = []

    for (let i = 0; i < points; i++) {
      const variation = (Math.random() - 0.5) * 0.02 // ±1% variation
      const price = basePrice * (1 + variation)
      data.push({
        time: `${String(i).padStart(2, "0")}:00`,
        price: price,
        x: (i / (points - 1)) * 100,
      })
    }
    return data
  }

  const priceData = generatePriceData()
  const minPrice = Math.min(...priceData.map((d) => d.price))
  const maxPrice = Math.max(...priceData.map((d) => d.price))
  const priceRange = maxPrice - minPrice

  return (
    <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23]">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              {selectedCrypto.symbol.slice(0, 2)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {selectedCrypto.name} ({selectedCrypto.symbol}) - Precio Promedio
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{selectedCrypto.avgPrice}</span>
                <span
                  className={`text-sm font-medium flex items-center gap-1 ${
                    selectedCrypto.change24h >= 0 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  {selectedCrypto.change24h >= 0 ? "+" : ""}
                  {selectedCrypto.change24h}%
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400">Volumen Promedio 24h</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">$28.50B</p>
          </div>
        </div>
      </div>

      {/* Provider Comparison */}
      <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">CoinMarketCap</h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">$43,250.50</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">↗ +2.45%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Vol: $28.50B</p>
          </div>
          <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">CoinGecko</h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">$43,180.25</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">↗ +2.38%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Vol: $28.20B</p>
          </div>
          <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">CryptoCompare</h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">$43,320.75</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">↗ +2.52%</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Vol: $28.80B</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
            📊 Comparación de Precios - Últimas 24h
          </h4>
        </div>

        {/* Simple SVG Chart */}
        <div className="h-64 bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
          <svg width="100%" height="100%" viewBox="0 0 800 200" className="overflow-visible">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y * 2}
                x2="800"
                y2={y * 2}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-300 dark:text-gray-600"
                strokeDasharray="2,2"
              />
            ))}

            {/* Price line */}
            <polyline
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              points={priceData
                .map((d) => `${(d.x / 100) * 800},${200 - ((d.price - minPrice) / priceRange) * 180}`)
                .join(" ")}
            />

            {/* Price points */}
            {priceData.map((d, i) => (
              <circle
                key={i}
                cx={(d.x / 100) * 800}
                cy={200 - ((d.price - minPrice) / priceRange) * 180}
                r="3"
                fill="#f59e0b"
              />
            ))}
          </svg>

          {/* Time labels */}
          <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>24:00</span>
          </div>
        </div>
      </div>

      {/* Volume Intervals */}
      <div className="p-6 border-t border-gray-200 dark:border-[#1F1F23]">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Registro de Volumen por Intervalos
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {intervals.map((interval) => (
            <div
              key={interval.value}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedInterval === interval.value
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                  : "border-gray-200 dark:border-[#1F1F23] hover:border-gray-300 dark:hover:border-gray-600"
              }`}
              onClick={() => setSelectedInterval(interval.value)}
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400">{interval.label}</span>
              </div>
              <p
                className={`text-lg font-bold ${
                  selectedInterval === interval.value
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {interval.volume}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
