/**
 * ALT-RH & Carrière – Application principale
 * Routes complètes avec Navigation et Footer
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Prestations from "./pages/Prestations";
import Methodologie from "./pages/Methodologie";
import FinancementsCPF from "./pages/FinancementsCPF";
import APropos from "./pages/APropos";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import LandingDistanciel from "./pages/LandingDistanciel";
import LandingPresentielParis from "./pages/LandingPresentielParis";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/prestations" component={Prestations} />
        <Route path="/methodologie" component={Methodologie} />
        <Route path="/financements-cpf" component={FinancementsCPF} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/faq" component={FAQ} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        {/* Pages SEO landing */}
        <Route path="/bilan-competences-distance" component={LandingDistanciel} />
        <Route path="/bilan-competences-presentiel-paris" component={LandingPresentielParis} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
