import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'

import Rotas from './pages/routes'

import EstiloGlobal from './styles'
import Footer from './Components/Footer'
import Aside from './Components/Aside'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Aside />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
