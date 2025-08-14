import Roupa from '../../../models/Product'
import Product from '../Clothes'
import { Container, List } from './styles'

export type Props = {
  title: string
  outfit: Roupa[]
}

const ClothesList = ({ title, outfit }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {outfit.map((dress) => (
          <Product
            key={dress.id}
            category={dress.category}
            description={dress.description}
            image={dress.image}
            infos={dress.infos}
            estilo={dress.estilo}
            title={dress.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ClothesList
