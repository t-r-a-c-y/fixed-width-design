
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Statistics from "./pages/Statistics";
import PandemicsPage from "./pages/Pandemics";
import HospitalsPage from "./pages/Hospitals";
import PredictionsPage from "./pages/Predictions";
import VaccinationsPage from "./pages/Vaccinations";
import SettingsPage from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/pandemics" element={<PandemicsPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
          <Route path="/vaccinations" element={<VaccinationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
