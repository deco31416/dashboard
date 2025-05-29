"use client"

import { TrendingUp, TrendingDown, AlertTriangle, Activity } from "lucide-react"

export default function MarketOverview() {
  const stats = [
    {
      title: "Capitalización Total",
      value: "$1.85T",
      change: "+2.4% (24h)",
      positive: true,
      icon: TrendingUp,
      color: "emerald",
    },
    {
      title: "Volumen Total 24h",
      value: "$98.2B",
      change: "+5.1% vs ayer",
      positive: true,
      icon: Activity,
      color: "blue",
    },
    {
      title: "Discrepancias Activas",
      value: "3",
      change: "Alertas de precio",
      positive: false,
      icon: AlertTriangle,
      color: "amber",
    },
    {
      title: "Volatilidad Promedio",
      value: "2.8%",
      change: "Últimas 24h",
      positive: null,
      icon: TrendingDown,
      color: "purple",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30`}>
              <stat.icon className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`} />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p
              className={`text-xs font-medium ${
                stat.positive === true
                  ? "text-emerald-600 dark:text-emerald-400"
                  : stat.positive === false
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {stat.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
