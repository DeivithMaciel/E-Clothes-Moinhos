import logo from '../../assets/images/logo.png'

import { Final, Items, Logo, Sociais } from './styles'
import { Link } from '../HeaderHome/styles'

import instagram from '../../assets/images/logo_instagram.png'
import facebook from '../../assets/images/logo_facebook.png'
import twitter from '../../assets/images/logo_twitter.png'

const Footer = () => (
  <Final>
    <div className="container">
      <Link to="/">
        <Logo src={logo} alt="E-Clothes Moinhos" />
      </Link>
      <Sociais>
        <Items>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </Items>
      </Sociais>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </Final>
)

export default Footer
