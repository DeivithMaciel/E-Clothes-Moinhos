import Tag from '../Tag'
import { Botao, Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  estilo: string
  description: string
  infos: string[]
  image: string
}

const ProductCasamento = ({
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
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default ProductCasamento
