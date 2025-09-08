import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Headerbar = () => (
  <S.Header>
    <S.Navbar className="container">
      <S.LinkPointer href="/">
        <img src={logo} alt="Efood" />
      </S.LinkPointer>
      <h1>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </h1>
    </S.Navbar>
  </S.Header>
)

export default Headerbar
