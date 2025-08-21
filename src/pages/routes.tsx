import { Routes, Route } from 'react-router-dom'

import { Home } from './Home/index'
import { RestauranteSelecionado } from './Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestauranteSelecionado />} />
  </Routes>
)

export default Rotas
