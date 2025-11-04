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
      <main>
        <h1 style={{display: 'none'}}>Lalalaugh – Social Entertainment App for Content Creators & Communities</h1>
        <section className="pt-16">
          <About />
        </section>
        <section>
          <Creators />
        </section>
        <section>
          <Features />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
        <section>
          <DownloadBanner />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
