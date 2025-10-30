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
      <section id="">
        <About />
      </section>
      <section id="">
        <Creators />
      </section>
      <section id="">
        <Features />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="">
        <DownloadBanner />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
