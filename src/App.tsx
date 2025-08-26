import { BrowserRouter } from 'react-router-dom'

import Rotas from './pages/routes'

import EstiloGlobal from './styles'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
