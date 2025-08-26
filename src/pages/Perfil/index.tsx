import { useEffect, useState } from 'react'
import FoodList from '../../Components/foodsList'
import { MenuGallery } from '../Home'
import { useParams } from 'react-router-dom'
import Headerbar from '../../Components/HeaderPerfil'
import Hero from '../../Components/HeroRestaurant'

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
    return <h3>Carregando...</h3>
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
