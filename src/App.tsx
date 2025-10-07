import { About } from "./components/About"
import { Header } from "./components/Header"

import { FontTest } from "./components/FontTest"
import { Creators } from "./components/Creators"
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
    </>
  )
}

export default App
