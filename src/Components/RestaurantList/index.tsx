import Product from '../Card'
import { List } from './styles'

import { MenuGallery } from '../../pages/Home'

type Props = {
  restaurant: MenuGallery[]
}

const RestaurantList = ({ restaurant }: Props) => {
  return (
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Product
            key={restaurant.id}
            description={restaurant.descricao}
            image={restaurant.capa}
            infos={restaurant.avaliacao}
            estilo={restaurant.tipo}
            title={restaurant.titulo}
            id={restaurant.id}
            destacado={restaurant.destacado ?? false}
          />
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
