import { Frase, Imagem, Titulo } from './styles'
import { MenuGallery } from '../../pages/Home'

const HeroCasamento = ({
  capa,
  titulo
}: Omit<
  MenuGallery,
  'id' | 'tipo' | 'avaliacao' | 'descricao' | 'cardapio'
>) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Titulo>{titulo}</Titulo>
      <Frase>Juntos, nos melhores momentos da sua vida.</Frase>
    </div>
  </Imagem>
)

export default HeroCasamento
