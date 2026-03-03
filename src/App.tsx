import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TermsOfContent } from "./pages/TermsOfContent";
import { ScrollToTop } from "./components/ScrollToTop";
import { TermsOfUse } from "./pages/TermsOfUse";

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
