import AcercaDeMi from "./pages/AcercaDeMi"
import Button from "./components/Button"
import Contactame from "./pages/Contactame"
import Habilidades from "./pages/Habilidades"
import Navbar from "./pages/Navbar"
import Presentacion from "./pages/Presentacion"
import Proyectos from "./pages/Proyectos"
import Experiencia from "./pages/Experiencia"
import Noticias from "./pages/Noticias"

function App() {


  return (
    <>
      <Navbar/>
      <Button/>
      <Presentacion />
      <AcercaDeMi/>
      <Experiencia/>
      <Proyectos/>
      <Habilidades/>
      <Contactame/>
      <Noticias/>
    </>
  )
}

export default App
