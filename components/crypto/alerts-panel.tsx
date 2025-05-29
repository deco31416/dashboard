"use client"

import { AlertTriangle, TrendingUp, DollarSign } from "lucide-react"

export default function AlertsPanel() {
  const alerts = [
    {
      id: 1,
      title: "BTC - Discrepancia Alta",
      description: "Diferencia de $140.5 entre proveedores",
      value: "3.2%",
      type: "error",
      icon: AlertTriangle,
    },
    {
      id: 2,
      title: "ETH - Volumen Anómalo",
      description: "Volumen 15% superior al promedio",
      value: "+15%",
      type: "warning",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "USDT - Desviación Precio",
      description: "Precio fuera del rango estable",
      value: "0.02%",
      type: "info",
      icon: DollarSign,
    },
  ]

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "error":
        return "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800"
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
      case "error":
        return "text-red-600 dark:text-red-400"
      case "warning":
        return "text-amber-600 dark:text-amber-400"
      case "info":
        return "text-blue-600 dark:text-blue-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const getValueColor = (type: string) => {
    switch (type) {
      case "error":
        return "text-red-700 dark:text-red-300"
      case "warning":
        return "text-amber-700 dark:text-amber-300"
      case "info":
        return "text-blue-700 dark:text-blue-300"
      default:
        return "text-gray-700 dark:text-gray-300"
    }
  }

  return (
    <div className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23]">
      <div className="p-6 border-b border-gray-200 dark:border-[#1F1F23]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          🚨 Alertas Críticas
        </h3>
      </div>

      <div className="p-6 space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-4 rounded-lg border ${getAlertStyles(alert.type)}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <alert.icon className={`w-5 h-5 mt-0.5 ${getIconColor(alert.type)}`} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{alert.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{alert.description}</p>
                </div>
              </div>
              <span className={`text-sm font-bold ${getValueColor(alert.type)}`}>{alert.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
