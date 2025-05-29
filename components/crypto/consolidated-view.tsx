"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, AlertTriangle, CheckCircle, Zap } from "lucide-react"
import CryptoChart from "./crypto-chart"
import AlertsPanel from "./alerts-panel"
import RecommendationsPanel from "./recommendations-panel"

interface CryptoData {
  id: string
  symbol: string
  name: string
  category: "coin" | "altcoin" | "stablecoin"
  avgPrice: string
  cmc: string
  coingecko: string
  cryptocompare: string
  discrepancy: string
  volume24h: string
  status: "normal" | "medium" | "high"
  change24h: number
}

const cryptoData: CryptoData[] = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    category: "coin",
    avgPrice: "$43,250.50",
    cmc: "$43,250.50",
    coingecko: "$43,180.25",
    cryptocompare: "$43,320.75",
    discrepancy: "0.32%",
    volume24h: "$28.50B",
    status: "normal",
    change24h: 2.45,
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    category: "coin",
    avgPrice: "$2,651.73",
    cmc: "$2,650.80",
    coingecko: "$2,645.50",
    cryptocompare: "$2,658.90",
    discrepancy: "0.51%",
    volume24h: "$15.20B",
    status: "medium",
    change24h: 3.25,
  },
  {
    id: "ada",
    symbol: "ADA",
    name: "Cardano",
    category: "altcoin",
    avgPrice: "$0.4850",
    cmc: "$0.4850",
    coingecko: "$0.4820",
    cryptocompare: "$0.4880",
    discrepancy: "1.24%",
    volume24h: "$420.00M",
    status: "high",
    change24h: -1.2,
  },
  {
    id: "dot",
    symbol: "DOT",
    name: "Polkadot",
    category: "altcoin",
    avgPrice: "$7.85",
    cmc: "$7.85",
    coingecko: "$7.82",
    cryptocompare: "$7.88",
    discrepancy: "0.76%",
    volume24h: "$180.00M",
    status: "medium",
    change24h: 4.1,
  },
  {
    id: "usdt",
    symbol: "USDT",
    name: "Tether",
    category: "stablecoin",
    avgPrice: "$1.00",
    cmc: "$1.00",
    coingecko: "$0.9999",
    cryptocompare: "$1.00",
    discrepancy: "0.03%",
    volume24h: "$45.00B",
    status: "normal",
    change24h: 0.01,
  },
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    category: "stablecoin",
    avgPrice: "$1.00",
    cmc: "$1.00",
    coingecko: "$0.9999",
    cryptocompare: "$1.00",
    discrepancy: "0.02%",
    volume24h: "$8.50B",
    status: "normal",
    change24h: 0.02,
  },
]

export default function ConsolidatedView() {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData>(cryptoData[0])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
      case "medium":
        return <Zap className="w-4 h-4 text-amber-600" />
      case "high":
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      default:
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return (
          <Badge
            variant="secondary"
            className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
          >
            ✅ Normal
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
            ⚡ Media
          </Badge>
        )
      case "high":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            ⚠️ Alta
          </Badge>
        )
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "coin":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
          >
            Coin
          </Badge>
        )
      case "altcoin":
        return (
          <Badge
            variant="outline"
            className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800"
          >
            Altcoin
          </Badge>
        )
      case "stablecoin":
        return (
          <Badge
            variant="outline"
            className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800"
          >
            Stablecoin
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Resumen Ejecutivo */}
      <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23]">
        <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            📊 Resumen Ejecutivo - Comparación de Proveedores
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#1F1F23]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Precio Promedio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  CMC
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  CoinGecko
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  CryptoCompare
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Discrepancia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Volumen 24h
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-[#1F1F23]">
              {cryptoData.map((crypto) => (
                <tr key={crypto.id} className="hover:bg-gray-50 dark:hover:bg-[#1F1F23] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {crypto.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{crypto.symbol}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{crypto.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getCategoryBadge(crypto.category)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{crypto.avgPrice}</div>
                    <div
                      className={`text-xs flex items-center gap-1 ${crypto.change24h >= 0 ? "text-emerald-600" : "text-red-600"}`}
                    >
                      {crypto.change24h >= 0 ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {crypto.change24h >= 0 ? "+" : ""}
                      {crypto.change24h}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{crypto.cmc}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {crypto.coingecko}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {crypto.cryptocompare}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-medium ${
                        Number.parseFloat(crypto.discrepancy) > 1
                          ? "text-red-600"
                          : Number.parseFloat(crypto.discrepancy) > 0.5
                            ? "text-amber-600"
                            : "text-emerald-600"
                      }`}
                    >
                      {crypto.discrepancy}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {crypto.volume24h}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(crypto.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="outline" size="sm" onClick={() => setSelectedCrypto(crypto)} className="text-xs">
                      Ver Detalles
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Crypto Detail Chart */}
      <CryptoChart selectedCrypto={selectedCrypto} />

      {/* Alerts and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsPanel />
        <RecommendationsPanel />
      </div>
    </div>
  )
}
