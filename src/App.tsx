
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Deals from "./pages/Deals";
import DealProfitability from "./pages/DealProfitability";
import ClientInsights from "./pages/ClientInsights";
import ProductEffectiveness from "./pages/ProductEffectiveness";
import SalesFunnel from "./pages/SalesFunnel";
import AiRecommendations from "./pages/AiRecommendations";
import ReportsExport from "./pages/ReportsExport";
import ProductRegistry from "./pages/ProductRegistry";
import ClientRegistry from "./pages/ClientRegistry";
import IndividualConditions from "./pages/IndividualConditions";
import NotFound from "./pages/NotFound";
import AboutSystem from "./pages/AboutSystem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<AboutSystem />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/deal-profitability" element={<DealProfitability />} />
            <Route path="/client-insights" element={<ClientInsights />} />
            <Route path="/product-effectiveness" element={<ProductEffectiveness />} />
            <Route path="/sales-funnel" element={<SalesFunnel />} />
            <Route path="/ai-recommendations" element={<AiRecommendations />} />
            <Route path="/reports-export" element={<ReportsExport />} />
            <Route path="/product-registry" element={<ProductRegistry />} />
            <Route path="/client-registry" element={<ClientRegistry />} />
            <Route path="/individual-conditions" element={<IndividualConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
