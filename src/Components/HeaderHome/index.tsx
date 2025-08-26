import { Header, LinkPointer, Navbar } from './styles'
import logo from '../../assets/images/logo.png'

const Headerbar = () => (
  <Header>
    <Navbar className="container">
      <LinkPointer href="/">
        <img src={logo} alt="Efood" />
      </LinkPointer>
      <h1>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </h1>
    </Navbar>
  </Header>
)

export default Headerbar
