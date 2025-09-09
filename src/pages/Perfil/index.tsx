import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { MenuGallery } from '../Home'
import FoodList from '../../Components/foodsList'
import Headerbar from '../../Components/HeaderPerfil'
import Hero from '../../Components/HeroRestaurant'
import Loader from '../../Components/Loader'

export const RestauranteSelecionado = () => {
  const { id } = useParams<{ id: string }>()
  const [selecionado, setSelecionado] = useState<MenuGallery>()

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: MenuGallery[]) => {
        const restaurante = res.find((r) => r.id === Number(id))
        setSelecionado(restaurante)
      })
  }, [id])

  if (!selecionado) {
    return <Loader />
  }

  return (
    <>
      <Headerbar />
      <Hero
        titulo={selecionado.titulo}
        capa={selecionado.capa}
        tipo={selecionado.tipo}
      />
      <FoodList foods={selecionado.cardapio} />
    </>
  )
}
