
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import LongTermConsulting from "./pages/LongTermConsulting";
import CollegeBundles from "./pages/CollegeBundles";
import ALaCarte from "./pages/ALaCarte";
import Impact from "./pages/Impact";
import OnePager from "./pages/OnePager";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consulting" element={<LongTermConsulting />} />
          <Route path="/bundles" element={<CollegeBundles />} />
          <Route path="/mentorship" element={<ALaCarte />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/one-pager" element={<OnePager />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
