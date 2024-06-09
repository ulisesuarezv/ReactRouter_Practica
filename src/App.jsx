import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import Casita from "./pages/Casita/Casita"
import AcercaDe from "./pages/AcercaDe/AcercaDe"
import Contacto from "./pages/Contacto/Contacto"
import NotFound from "./pages/NotFound/NotFound"

const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Casita/>}/>
        <Route path="/about" element={<AcercaDe/>}/>
        <Route path="/contact/:title" element={<Contacto/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App