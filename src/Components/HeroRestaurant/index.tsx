import { Imagem, Overlay, Tipo, Titulo } from './styles'
import { MenuGallery } from '../../pages/Home'

const Hero = ({
  capa,
  titulo,
  tipo
}: Omit<MenuGallery, 'id' | 'avaliacao' | 'descricao' | 'cardapio'>) => (
  <>
    <Imagem style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <Overlay></Overlay>
        <Tipo>{tipo}</Tipo>
        <Titulo>{titulo}</Titulo>
      </div>
    </Imagem>
  </>
)

export default Hero
