import { About } from "../components/About";
import { Header } from "../components/Header";
import { Creators } from "../components/Creators";
import { Features } from "../components/Feature";
import { ContactUs } from "../components/ContactUs";
import { DownloadBanner } from "../components/DownloadBanner";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="creators">
        <Creators />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="advertiser">
        <DownloadBanner />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
