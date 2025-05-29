"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface CoinData {
  id: string
  symbol: string
  name: string
  price: string
  change24h: number
  volume24h: string
  marketCap: string
  rank: number
}

const coinsData: CoinData[] = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    price: "$43,250.50",
    change24h: 2.45,
    volume24h: "$28.50B",
    marketCap: "$847.2B",
    rank: 1,
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,651.73",
    change24h: 3.25,
    volume24h: "$15.20B",
    marketCap: "$318.9B",
    rank: 2,
  },
  {
    id: "bnb",
    symbol: "BNB",
    name: "BNB",
    price: "$308.45",
    change24h: -1.2,
    volume24h: "$1.2B",
    marketCap: "$47.3B",
    rank: 3,
  },
  {
    id: "sol",
    symbol: "SOL",
    name: "Solana",
    price: "$98.32",
    change24h: 5.8,
    volume24h: "$2.1B",
    marketCap: "$42.1B",
    rank: 4,
  },
  {
    id: "xrp",
    symbol: "XRP",
    name: "XRP",
    price: "$0.6234",
    change24h: 1.5,
    volume24h: "$1.8B",
    marketCap: "$35.2B",
    rank: 5,
  },
]

export default function CoinsView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCoin, setSelectedCoin] = useState<CoinData | null>(null)

  const filteredCoins = coinsData.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar coins..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Badge variant="outline" className="text-xs">
          {filteredCoins.length} coins encontradas
        </Badge>
      </div>

      {/* Coins Table */}
      <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23]">
        <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            💰 Top Coins por Capitalización de Mercado
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-[#1F1F23]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Coin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  24h %
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
              {filteredCoins.map((coin) => (
                <tr key={coin.id} className="hover:bg-gray-50 dark:hover:bg-[#1F1F23] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">#{coin.rank}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {coin.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{coin.symbol}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{coin.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{coin.price}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm font-medium flex items-center gap-1 ${
                        coin.change24h >= 0 ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {coin.change24h >= 0 ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {coin.change24h >= 0 ? "+" : ""}
                      {coin.change24h}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {coin.volume24h}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {coin.marketCap}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="outline" size="sm" onClick={() => setSelectedCoin(coin)} className="text-xs">
                      Analizar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Coin Detail */}
      {selectedCoin && (
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Análisis Detallado: {selectedCoin.name} ({selectedCoin.symbol})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Precio Actual</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{selectedCoin.price}</p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Cambio 24h</p>
              <p className={`text-xl font-bold ${selectedCoin.change24h >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                {selectedCoin.change24h >= 0 ? "+" : ""}
                {selectedCoin.change24h}%
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#1F1F23] rounded-lg p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Market Cap</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{selectedCoin.marketCap}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
