import { LinkItem } from '../Header/styles'
import Tag from '../Tag'
import { Card, DescriBut, Descricao, Infos, Titulo } from './styles'

type Props = {
  description: string
  image: string
  infos: number
  estilo: string
  title: string
  id: number
}

const Product = ({ description, image, infos, estilo, title, id }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      <Tag>{infos}</Tag>
    </Infos>
    <Tag>{estilo}</Tag>
    <Titulo>{title}</Titulo>
    <DescriBut>
      <Descricao>{description}</Descricao>
      <LinkItem to={`/restaurante/${id}`}>Saiba mais...</LinkItem>
    </DescriBut>
  </Card>
)

export default Product
