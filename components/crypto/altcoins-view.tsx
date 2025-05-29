"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Search, TrendingUp, TrendingDown } from "lucide-react"
import { Input } from "@/components/ui/input"

interface AltcoinData {
  id: string
  symbol: string
  name: string
  price: string
  change24h: number
  change7d: number
  volume24h: string
  marketCap: string
  category: string
}

const altcoinsData: AltcoinData[] = [
  {
    id: "ada",
    symbol: "ADA",
    name: "Cardano",
    price: "$0.4850",
    change24h: -1.24,
    change7d: 5.2,
    volume24h: "$420.00M",
    marketCap: "$17.1B",
    category: "Smart Contract",
  },
  {
    id: "dot",
    symbol: "DOT",
    name: "Polkadot",
    price: "$7.85",
    change24h: 4.1,
    change7d: -2.3,
    volume24h: "$180.00M",
    marketCap: "$9.8B",
    category: "Interoperability",
  },
  {
    id: "link",
    symbol: "LINK",
    name: "Chainlink",
    price: "$14.32",
    change24h: 2.8,
    change7d: 8.5,
    volume24h: "$320.00M",
    marketCap: "$8.2B",
    category: "Oracle",
  },
  {
    id: "matic",
    symbol: "MATIC",
    name: "Polygon",
    price: "$0.8945",
    change24h: -3.2,
    change7d: 12.1,
    volume24h: "$280.00M",
    marketCap: "$8.8B",
    category: "Layer 2",
  },
  {
    id: "avax",
    symbol: "AVAX",
    name: "Avalanche",
    price: "$36.78",
    change24h: 6.5,
    change7d: -1.8,
    volume24h: "$450.00M",
    marketCap: "$14.2B",
    category: "Smart Contract",
  },
  {
    id: "atom",
    symbol: "ATOM",
    name: "Cosmos",
    price: "$10.45",
    change24h: 1.9,
    change7d: 4.7,
    volume24h: "$95.00M",
    marketCap: "$4.1B",
    category: "Interoperability",
  },
]

export default function AltcoinsView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedAltcoin, setSelectedAltcoin] = useState<AltcoinData | null>(null)

  const categories = ["all", "Smart Contract", "Interoperability", "Oracle", "Layer 2"]

  const filteredAltcoins = altcoinsData.filter((altcoin) => {
    const matchesSearch =
      altcoin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      altcoin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || altcoin.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Smart Contract":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
      case "Interoperability":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "Oracle":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
      case "Layer 2":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
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
            placeholder="Buscar altcoins..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-xs"
            >
              {category === "all" ? "Todas" : category}
            </Button>
          ))}
        </div>

        <Badge variant="outline" className="text-xs self-start">
          {filteredAltcoins.length} altcoins encontradas
        </Badge>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Mejores 24h</span>
          </div>
          <p className="text-lg font-bold text-emerald-600">+6.5%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">AVAX liderando</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-red-600" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Peores 24h</span>
          </div>
          <p className="text-lg font-bold text-red-600">-3.2%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">MATIC bajando</p>
        </div>

        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-4 border border-gray-200 dark:border-[#1F1F23]">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Promedio 7d</span>
          </div>
          <p className="text-lg font-bold text-blue-600">+4.4%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Tendencia alcista</p>
        </div>
      </div>

      {/* Altcoins Table */}
      <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23]">
        <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">⚡ Altcoins - Análisis de Rendimiento</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#1F1F23]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Altcoin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  24h %
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  7d %
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Volumen 24h
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Market Cap
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-[#1F1F23]">
              {filteredAltcoins.map((altcoin) => (
                <tr key={altcoin.id} className="hover:bg-gray-50 dark:hover:bg-[#1F1F23] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {altcoin.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{altcoin.symbol}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{altcoin.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="secondary" className={getCategoryColor(altcoin.category)}>
                      {altcoin.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{altcoin.price}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm font-medium flex items-center gap-1 ${
                        altcoin.change24h >= 0 ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {altcoin.change24h >= 0 ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {altcoin.change24h >= 0 ? "+" : ""}
                      {altcoin.change24h}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm font-medium flex items-center gap-1 ${
                        altcoin.change7d >= 0 ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {altcoin.change7d >= 0 ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {altcoin.change7d >= 0 ? "+" : ""}
                      {altcoin.change7d}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {altcoin.volume24h}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {altcoin.marketCap}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="outline" size="sm" onClick={() => setSelectedAltcoin(altcoin)} className="text-xs">
                      Analizar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Altcoin Detail */}
      {selectedAltcoin && (
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Análisis Detallado: {selectedAltcoin.name} ({selectedAltcoin.symbol})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Precio Actual</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{selectedAltcoin.price}</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Cambio 24h</p>
              <p
                className={`text-xl font-bold ${selectedAltcoin.change24h >= 0 ? "text-emerald-600" : "text-red-600"}`}
              >
                {selectedAltcoin.change24h >= 0 ? "+" : ""}
                {selectedAltcoin.change24h}%
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Cambio 7d</p>
              <p className={`text-xl font-bold ${selectedAltcoin.change7d >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                {selectedAltcoin.change7d >= 0 ? "+" : ""}
                {selectedAltcoin.change7d}%
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Categoría</p>
              <Badge variant="secondary" className={getCategoryColor(selectedAltcoin.category)}>
                {selectedAltcoin.category}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
