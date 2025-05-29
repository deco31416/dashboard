"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Search, Shield, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"

interface StablecoinData {
  id: string
  symbol: string
  name: string
  price: string
  deviation: number
  volume24h: string
  marketCap: string
  backing: string
  stability: "excellent" | "good" | "warning" | "critical"
}

const stablecoinsData: StablecoinData[] = [
  {
    id: "usdt",
    symbol: "USDT",
    name: "Tether",
    price: "$1.0001",
    deviation: 0.01,
    volume24h: "$45.00B",
    marketCap: "$91.2B",
    backing: "USD Reserves",
    stability: "excellent",
  },
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    price: "$0.9999",
    deviation: -0.01,
    volume24h: "$8.50B",
    marketCap: "$25.8B",
    backing: "USD Reserves",
    stability: "excellent",
  },
  {
    id: "busd",
    symbol: "BUSD",
    name: "Binance USD",
    price: "$1.0002",
    deviation: 0.02,
    volume24h: "$2.1B",
    marketCap: "$4.2B",
    backing: "USD Reserves",
    stability: "excellent",
  },
  {
    id: "dai",
    symbol: "DAI",
    name: "Dai",
    price: "$0.9995",
    deviation: -0.05,
    volume24h: "$180.00M",
    marketCap: "$5.1B",
    backing: "Crypto Collateral",
    stability: "good",
  },
  {
    id: "frax",
    symbol: "FRAX",
    name: "Frax",
    price: "$0.9988",
    deviation: -0.12,
    volume24h: "$45.00M",
    marketCap: "$650M",
    backing: "Algorithmic",
    stability: "warning",
  },
  {
    id: "ust",
    symbol: "UST",
    name: "TerraUSD",
    price: "$0.0234",
    deviation: -97.66,
    volume24h: "$1.2M",
    marketCap: "$45M",
    backing: "Algorithmic",
    stability: "critical",
  },
]

export default function StablecoinsView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStability, setSelectedStability] = useState("all")
  const [selectedStablecoin, setSelectedStablecoin] = useState<StablecoinData | null>(null)

  const stabilityLevels = ["all", "excellent", "good", "warning", "critical"]

  const filteredStablecoins = stablecoinsData.filter((stablecoin) => {
    const matchesSearch =
      stablecoin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stablecoin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStability = selectedStability === "all" || stablecoin.stability === selectedStability
    return matchesSearch && matchesStability
  })

  const getStabilityColor = (stability: string) => {
    switch (stability) {
      case "excellent":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
      case "good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "warning":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const getStabilityIcon = (stability: string) => {
    switch (stability) {
      case "excellent":
      case "good":
        return <Shield className="w-3 h-3" />
      case "warning":
      case "critical":
        return <AlertTriangle className="w-3 h-3" />
      default:
        return <Shield className="w-3 h-3" />
    }
  }

  const getBackingColor = (backing: string) => {
    switch (backing) {
      case "USD Reserves":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Crypto Collateral":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "Algorithmic":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar stablecoins..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {stabilityLevels.map((level) => (
            <Button
              key={level}
              variant={selectedStability === level ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedStability(level)}
              className="text-xs"
            >
              {level === "all" ? "Todas" : level.charAt(0).toUpperCase() + level.slice(1)}
            </Button>
          ))}
        </div>

        <Badge variant="outline" className="text-xs self-start">
          {filteredStablecoins.length} stablecoins encontradas
        </Badge>
      </div>

      {/* Stability Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Excelente</span>
          </div>
          <p className="text-lg font-bold text-emerald-600">3</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Estables</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Buena</span>
          </div>
          <p className="text-lg font-bold text-blue-600">1</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Estable</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Advertencia</span>
          </div>
          <p className="text-lg font-bold text-amber-600">1</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Monitorear</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Crítica</span>
          </div>
          <p className="text-lg font-bold text-red-600">1</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Evitar</p>
        </div>
      </div>

      {/* Stablecoins Table */}
      <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23]">
        <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            🪙 Stablecoins - Análisis de Estabilidad
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#1F1F23]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Stablecoin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Desviación
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Respaldo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Volumen 24h
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Market Cap
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Estabilidad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-[#1F1F23]">
              {filteredStablecoins.map((stablecoin) => (
                <tr key={stablecoin.id} className="hover:bg-gray-50 dark:hover:bg-[#1F1F23] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {stablecoin.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{stablecoin.symbol}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{stablecoin.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{stablecoin.price}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm font-medium flex items-center gap-1 ${
                        Math.abs(stablecoin.deviation) <= 0.05
                          ? "text-emerald-600"
                          : Math.abs(stablecoin.deviation) <= 0.2
                            ? "text-amber-600"
                            : "text-red-600"
                      }`}
                    >
                      {stablecoin.deviation >= 0 ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {stablecoin.deviation >= 0 ? "+" : ""}
                      {stablecoin.deviation}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="secondary" className={getBackingColor(stablecoin.backing)}>
                      {stablecoin.backing}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {stablecoin.volume24h}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {stablecoin.marketCap}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant="secondary"
                      className={`${getStabilityColor(stablecoin.stability)} flex items-center gap-1`}
                    >
                      {getStabilityIcon(stablecoin.stability)}
                      {stablecoin.stability.charAt(0).toUpperCase() + stablecoin.stability.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedStablecoin(stablecoin)}
                      className="text-xs"
                    >
                      Analizar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Stablecoin Detail */}
      {selectedStablecoin && (
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Análisis de Estabilidad: {selectedStablecoin.name} ({selectedStablecoin.symbol})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Precio Actual</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{selectedStablecoin.price}</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Desviación del Peg</p>
              <p
                className={`text-xl font-bold ${
                  Math.abs(selectedStablecoin.deviation) <= 0.05
                    ? "text-emerald-600"
                    : Math.abs(selectedStablecoin.deviation) <= 0.2
                      ? "text-amber-600"
                      : "text-red-600"
                }`}
              >
                {selectedStablecoin.deviation >= 0 ? "+" : ""}
                {selectedStablecoin.deviation}%
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Tipo de Respaldo</p>
              <Badge variant="secondary" className={getBackingColor(selectedStablecoin.backing)}>
                {selectedStablecoin.backing}
              </Badge>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Nivel de Estabilidad</p>
              <Badge
                variant="secondary"
                className={`${getStabilityColor(selectedStablecoin.stability)} flex items-center gap-1`}
              >
                {getStabilityIcon(selectedStablecoin.stability)}
                {selectedStablecoin.stability.charAt(0).toUpperCase() + selectedStablecoin.stability.slice(1)}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
