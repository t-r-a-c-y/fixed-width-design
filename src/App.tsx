
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Statistics from "./pages/Statistics";
import PandemicsPage from "./pages/Pandemics";
import HospitalsPage from "./pages/Hospitals";
import PredictionsPage from "./pages/Predictions";
import VaccinationsPage from "./pages/Vaccinations";
import SettingsPage, { AppContext } from "./pages/Settings";

const queryClient = new QueryClient();

// Define a type for country data
type CountryOption = {
  value: string;
  label: string;
  flag: string;
};

const App = () => {
  // State for dark mode and country
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>({ 
    value: 'rw', 
    label: 'Rwanda', 
    flag: 'RW' 
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContext.Provider value={{ darkMode, setDarkMode, selectedCountry, setSelectedCountry }}>
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
        </AppContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
