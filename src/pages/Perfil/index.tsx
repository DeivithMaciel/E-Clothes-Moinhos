import { useEffect, useState } from 'react'
import FoodList from '../../Components/foodsList'
import HeroCasamento from '../../Components/HeroRestaurant'
import { MenuGallery } from '../Home'
import { useParams } from 'react-router-dom'

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
      <HeroCasamento titulo={selecionado.titulo} capa={selecionado.capa} />
      <FoodList foods={selecionado.cardapio} />
    </>
  )
}
