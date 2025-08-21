import Product from '../Restaurant'
import { Container, List } from './styles'

import { MenuGallery } from '../../pages/Home'

type Props = {
  restaurant: MenuGallery[]
}

const RestaurantList = ({ restaurant }: Props) => {
  return (
    <Container>
      <div className="container">
        <h2>{'Lista de nossos restaurantes'}</h2>
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
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
