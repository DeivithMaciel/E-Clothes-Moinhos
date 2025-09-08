import { MenuGallery } from '../../pages/Home'

import * as S from './styles'

const Hero = ({
  capa,
  titulo,
  tipo
}: Omit<MenuGallery, 'id' | 'avaliacao' | 'descricao' | 'cardapio'>) => (
  <>
    <S.Image style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <S.Overlay></S.Overlay>
        <S.Type>{tipo}</S.Type>
        <S.Title>{titulo}</S.Title>
      </div>
    </S.Image>
  </>
)

export default Hero
