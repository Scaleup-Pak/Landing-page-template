import { About } from "./components/About";
import { Header } from "./components/Header";
import { Creators } from "./components/Creators";
import { Features } from "./components/Feature";
import { ContactUs } from "./components/ContactUs";
//  after the header there will be component of about section
function App() {
  return (
    <>
      {/* <FontTest /> */}
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
    </>
  );
}

export default App;
