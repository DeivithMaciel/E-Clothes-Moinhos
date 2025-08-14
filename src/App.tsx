import { BrowserRouter } from 'react-router-dom'

import Rotas from './pages/routes'

import Headerbar from './Components/Header'
import EstiloGlobal from './styles'
import Footer from './Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Headerbar />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
