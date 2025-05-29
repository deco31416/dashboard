"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Coins, Zap, DollarSign } from "lucide-react"
import MarketOverview from "./market-overview"
import ConsolidatedView from "./consolidated-view"
import CoinsView from "./coins-view"
import AltcoinsView from "./altcoins-view"
import StablecoinsView from "./stablecoins-view"

export default function CryptoDashboard() {
  const [activeTab, setActiveTab] = useState("consolidated")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard de Precios de Criptomonedas</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Seguimiento en tiempo real de precios de múltiples proveedores autorizados
        </p>
      </div>

      {/* Market Overview */}
      <MarketOverview />

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-[#1F1F23]">
          <TabsTrigger
            value="consolidated"
            className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-[#0F0F12]"
          >
            <TrendingUp className="w-4 h-4" />
            Consolidado
          </TabsTrigger>
          <TabsTrigger
            value="coins"
            className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-[#0F0F12]"
          >
            <DollarSign className="w-4 h-4" />
            Coins
          </TabsTrigger>
          <TabsTrigger
            value="altcoins"
            className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-[#0F0F12]"
          >
            <Zap className="w-4 h-4" />
            Altcoins
          </TabsTrigger>
          <TabsTrigger
            value="stablecoins"
            className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-[#0F0F12]"
          >
            <Coins className="w-4 h-4" />
            Stablecoins
          </TabsTrigger>
        </TabsList>

        <TabsContent value="consolidated" className="mt-6">
          <ConsolidatedView />
        </TabsContent>

        <TabsContent value="coins" className="mt-6">
          <CoinsView />
        </TabsContent>

        <TabsContent value="altcoins" className="mt-6">
          <AltcoinsView />
        </TabsContent>

        <TabsContent value="stablecoins" className="mt-6">
          <StablecoinsView />
        </TabsContent>
      </Tabs>
    </div>
  )
}
