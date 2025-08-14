import { Routes, Route } from 'react-router-dom'

import { Lobby } from './Home/index'
import { DressCasamentos } from './VestidosCasamentos'

// import Categories from '../Pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Lobby />} />
    <Route path="/casamentos" element={<DressCasamentos />} />
  </Routes>
)

export default Rotas
