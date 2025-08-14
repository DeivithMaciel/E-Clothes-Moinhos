import banner from '../../assets/images/banner_roupas.jpg'
import { Frase, Imagem, Titulo } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Titulo>E-Clothes Moinhos</Titulo>
      <Frase>Elegância e conforto</Frase>
    </div>
  </Imagem>
)

export default Hero
