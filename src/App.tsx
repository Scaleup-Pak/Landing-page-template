import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TermsOfUse } from "./pages/TermsOfUse";
import { TermsOfContent } from "./pages/TermsOfContent";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/content-terms" element={<TermsOfContent />} />
      </Routes>
    </Router>
  );
}

export default App;
