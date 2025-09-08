import { Link } from '../HeaderHome/styles'

import instagram from '../../assets/images/logo_instagram.png'
import facebook from '../../assets/images/logo_facebook.png'
import twitter from '../../assets/images/logo_twitter.png'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Footer = () => (
  <S.Final>
    <div className="container">
      <Link to="/">
        <S.Logo src={logo} alt="E-Clothes Moinhos" />
      </Link>
      <S.SocialMedia>
        <S.Items>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </S.Items>
      </S.SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </S.Final>
)

export default Footer
