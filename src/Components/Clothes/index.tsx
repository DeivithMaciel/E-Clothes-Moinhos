import { LinkItem } from '../Header/styles'
import Tag from '../Tag'
import { Card, DescriBut, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  estilo: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  estilo,
  title
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Tag>{category}</Tag>
    <Tag>{estilo}</Tag>
    <Titulo>{title}</Titulo>
    <DescriBut>
      <Descricao>{description}</Descricao>
      <LinkItem href="/Casamentos">Saiba mais...</LinkItem>
    </DescriBut>
  </Card>
)

export default Product
