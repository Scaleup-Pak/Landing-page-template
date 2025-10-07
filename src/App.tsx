import { About } from "./components/About"
import { Header } from "./components/Header"
import { FontTest } from "./components/FontTest"
//  after the header there will be component of about section
function App() {
  return (
    <>
      {/* <FontTest /> */}
      <Header />
      <section id="about">
       <About />
      </section>
    </>
  )
}

export default App
