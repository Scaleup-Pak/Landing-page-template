import { About } from "./components/About";
import { Header } from "./components/Header";
import { Creators } from "./components/Creators";
import { Features } from "./components/Feature";
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
    </>
  );
}

export default App;
