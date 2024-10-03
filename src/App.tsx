import Navbar from "./components/Navbar"
import Contacto from "./screens/Contacto-screen"
import Footer from "./screens/Footer-screen"
import Inicio from "./screens/Inicio-screen"
import Producto from "./screens/Producto-screen"
import TeamVrWonders from "./screens/TeamVrWonders-screen"

function App() {

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Inicio />
        <TeamVrWonders />
        <Producto />
        <Contacto />
        <Footer />
      </div>

    </div>
  )
}

export default App
