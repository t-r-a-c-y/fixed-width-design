
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import NotFound from "./pages/NotFound";
import Statistics from "./pages/Statistics";
import PandemicsPage from "./pages/Pandemics";
import HospitalsPage from "./pages/Hospitals";
import PredictionsPage from "./pages/Predictions";
import VaccinationsPage from "./pages/Vaccinations";
import SettingsPage, { AppContext } from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

// Initialize Clerk with publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "";

if (!PUBLISHABLE_KEY) {
  console.warn("Missing Clerk Publishable Key");
}

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
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      signInUrl="/login"
      signInFallbackRedirectUrl="/"
      signInForceRedirectUrl="/">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContext.Provider value={{ darkMode, setDarkMode, selectedCountry, setSelectedCountry }}>
            <BrowserRouter>
              <Routes>
                {/* Auth routes - accessible without authentication */}
                <Route path="/login" element={<Login />} />
                <Route path="/verify" element={<VerifyEmail />} />
                
                {/* Protected routes - require authentication */}
                <Route path="/" element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                } />
                <Route path="/statistics" element={
                  <ProtectedRoute>
                    <Statistics />
                  </ProtectedRoute>
                } />
                <Route path="/pandemics" element={
                  <ProtectedRoute>
                    <PandemicsPage />
                  </ProtectedRoute>
                } />
                <Route path="/hospitals" element={
                  <ProtectedRoute>
                    <HospitalsPage />
                  </ProtectedRoute>
                } />
                <Route path="/predictions" element={
                  <ProtectedRoute>
                    <PredictionsPage />
                  </ProtectedRoute>
                } />
                <Route path="/vaccinations" element={
                  <ProtectedRoute>
                    <VaccinationsPage />
                  </ProtectedRoute>
                } />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                } />
                
                {/* Catch-all for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </AppContext.Provider>
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
