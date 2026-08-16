import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductPreview } from "./components/ProductPreview";
import { DownloadSection } from "./components/DownloadSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { HarnessSection } from "./components/HarnessSection";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { QuickstartSection } from "./components/QuickstartSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { FaqSection } from "./components/FaqSection";
import { FeedbackBanner } from "./components/FeedbackBanner";
import { Footer } from "./components/Footer";
import type { Language } from "./types";

export function App() {
  const [lang, setLang] = useState<Language>("zh");

  const toggleLanguage = () => {
    setLang((current) => (current === "zh" ? "en" : "zh"));
  };

  return (
    <div className="site-wrapper">
      <Header lang={lang} onToggleLang={toggleLanguage} />
      <main>
        <Hero lang={lang} />
        <ProductPreview lang={lang} />
        <DownloadSection lang={lang} />
        <HarnessSection lang={lang} />
        <ArchitectureSection lang={lang} />
        <FeaturesGrid lang={lang} />
        <QuickstartSection lang={lang} />
        <ComparisonSection lang={lang} />
        <FaqSection lang={lang} />
        <FeedbackBanner lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
