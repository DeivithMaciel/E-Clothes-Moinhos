import { Frase, Imagem, Titulo } from './styles'
import BannerCasamento from '../../assets/images/casamento/banner_aliança.jpg'

const HeroCasamento = () => (
  <Imagem style={{ backgroundImage: `url(${BannerCasamento})` }}>
    <div className="container">
      <Titulo>E-Clothes Moinhos</Titulo>
      <Frase>Juntos, no melhor dia da sua vida.</Frase>
    </div>
  </Imagem>
)

export default HeroCasamento
