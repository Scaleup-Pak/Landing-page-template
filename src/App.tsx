import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TermsOfContent } from "./pages/TermsOfContent";
import { ScrollToTop } from "./components/ScrollToTop";
import { TermsOfUse } from "./pages/TermsOfUse";
import { WaitlistPage } from "./pages/WaitlistPage";
import { Advertiser } from "./pages/Advertiser";
import { CreatorProposal } from "./pages/CreatorProposal";
import { PostDetailPage } from "./pages/PostDetailPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/content-terms" element={<TermsOfContent />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/creator-proposal" element={<CreatorProposal />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
