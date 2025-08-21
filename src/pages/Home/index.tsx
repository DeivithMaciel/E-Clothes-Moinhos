import { useEffect, useState } from 'react'

import RestaurantList from '../../Components/RestaurantList'

export interface FoodItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type MenuGallery = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: FoodItem[]
}

export const Home = () => {
  const [restaurantes, setRestaurantes] = useState<MenuGallery[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <RestaurantList restaurant={restaurantes} />
    </>
  )
}
