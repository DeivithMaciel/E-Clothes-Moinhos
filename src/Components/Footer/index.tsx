import logo from '../../assets/images/logo_moinho.png'
import facebook from '../../assets/images/facebook.png'
import whatsapp from '../../assets/images/whatsapp.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import { Final, Items, Logo, Sociais } from './styles'
import { Link } from '../Header/styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Final>
    <div className="container">
      <Link to="/">
        <Logo src={logo} alt="E-Clothes Moinhos" />
      </Link>
      <Sociais>
        <Items>
          <Link to={'/'}>
            <img src={facebook} alt="Facebook" />
          </Link>
        </Items>
        <Items>
          <Link to={'/'}>
            <img src={whatsapp} alt="Whats app" />
          </Link>
        </Items>
        <Items>
          <Link to={'/'}>
            <img src={twitter} alt="Twitter(X)" />
          </Link>
        </Items>
        <Items>
          <Link to={'/'}>
            <img src={instagram} alt="Instagram" />
          </Link>
        </Items>
      </Sociais>
      <p>E-Gourmet Moinhos, o seu canal com os melhores restaurantes.</p>
      <p>
        {currentYear} - &copy; E-Gourmet Moinhos todos os direitos reservados
      </p>
    </div>
  </Final>
)

export default Footer
