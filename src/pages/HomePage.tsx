import { Header } from "../components/Header";
import { Features } from "../components/Feature";
import { ContactUs } from "../components/ContactUs";
import { DownloadBanner } from "../components/DownloadBanner";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonial } from "../components/Testimonial";
import { Faqs } from "../components/Faqs";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />\
        <section>
          <Features />
        </section>
        <section>
          <Testimonial />
        </section>
        <section>
          <Faqs />
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
