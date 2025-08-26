import { Header, LinkPointer, Navbar } from './styles'
import logo from '../../assets/images/logo.png'
import { LinkItem } from '../HeaderHome/styles'

const Headerbar = () => (
  <Header>
    <Navbar className="container">
      <LinkItem to={'/'}>Restaurantes</LinkItem>
      <LinkPointer href="/">
        <img src={logo} alt="Efood" />
      </LinkPointer>
      <LinkItem to={'/'}>0 produto(s) no carrinho</LinkItem>
    </Navbar>
  </Header>
)

export default Headerbar
