import { LinkItem } from '../HeaderHome/styles'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.png'

import * as S from './styles'

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
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {destacado && <Tag>Destque da semana</Tag>}
      <Tag>{estilo}</Tag>
    </S.Infos>
    <div>
      <S.Title>{title}</S.Title>
      <S.Score>
        {infos} <img src={estrela} />
      </S.Score>
    </div>
    <S.Description>{description}</S.Description>
    <LinkItem to={`/restaurante/${id}`}>Saiba mais</LinkItem>
  </S.Card>
)

export default Product
