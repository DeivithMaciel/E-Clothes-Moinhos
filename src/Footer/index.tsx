import logo from '../assets/images/logo_moinho.png'
import facebook from '../assets/images/facebook.png'
import whatsapp from '../assets/images/whatsapp.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import { Final, Items, Logo, Sociais } from './styles'
import { Link } from '../Components/Header/styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Final>
    <div className="container">
      <Link href="/">
        <Logo src={logo} alt="E-Clothes Moinhos" />
      </Link>
      <Sociais>
        <Items>
          <Link>
            <img src={facebook} alt="Facebook" />
          </Link>
        </Items>
        <Items>
          <Link>
            <img src={whatsapp} alt="Whats app" />
          </Link>
        </Items>
        <Items>
          <Link>
            <img src={twitter} alt="Twitter(X)" />
          </Link>
        </Items>
        <Items>
          <Link>
            <img src={instagram} alt="Instagram" />
          </Link>
        </Items>
      </Sociais>
      <p>E-Clothes Moinhos, a sua loga e-commerce de roupas e acessórios</p>
      <p>
        {currentYear} - &copy; E-Clothes Moinhos todos os direitos reservados
      </p>
    </div>
  </Final>
)

export default Footer
