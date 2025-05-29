"use client"

import { CheckCircle, Zap, TrendingUp, BarChart3 } from "lucide-react"

export default function RecommendationsPanel() {
  const recommendations = [
    {
      id: 1,
      title: "Usar CoinGecko para BTC",
      description: "Precio más conservador y estable",
      type: "success",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "ETH - Todos los proveedores alineados",
      description: "Discrepancia mínima, datos confiables",
      type: "success",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Monitorear ADA",
      description: "Tendencia bajista en los 3 proveedores",
      type: "warning",
      icon: Zap,
    },
    {
      id: 4,
      title: "DOT - Oportunidad",
      description: "Tendencia alcista consistente +4%",
      type: "info",
      icon: BarChart3,
    },
  ]

  const getRecommendationStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800"
      case "warning":
        return "bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800"
      case "info":
        return "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800"
      default:
        return "bg-gray-50 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800"
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-emerald-600 dark:text-emerald-400"
      case "warning":
        return "text-amber-600 dark:text-amber-400"
      case "info":
        return "text-blue-600 dark:text-blue-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23]">
      <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Recomendaciones Técnicas
        </h3>
      </div>

      <div className="p-6 space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className={`p-4 rounded-lg border ${getRecommendationStyles(rec.type)}`}>
            <div className="flex items-start gap-3">
              <rec.icon className={`w-5 h-5 mt-0.5 ${getIconColor(rec.type)}`} />
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">{rec.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{rec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
