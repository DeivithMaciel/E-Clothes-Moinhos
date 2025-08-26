import { LinkItem } from '../HeaderHome/styles'
import Tag from '../Tag'
import { Card, Descricao, Infos, Score, Titulo } from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  description: string
  image: string
  infos: number
  estilo: string
  title: string
  id: number
  destacado: boolean
}

const Product = ({
  description,
  destacado,
  image,
  infos,
  estilo,
  title,
  id
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {destacado && <Tag>Destque da semana</Tag>}
      <Tag>{estilo}</Tag>
    </Infos>
    <div>
      <Titulo>{title}</Titulo>
      <Score>
        {infos} <img src={estrela} />
      </Score>
    </div>
    <Descricao>{description}</Descricao>
    <LinkItem to={`/restaurante/${id}`}>Saiba mais</LinkItem>
  </Card>
)

export default Product
