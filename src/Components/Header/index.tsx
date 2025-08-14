import { BotaoCarrinho, Header, Link, LinkItem, Navbar } from './styles'
import logo from '../../assets/images/logo_moinho.png'

const Headerbar = () => (
  <Header>
    <Navbar className="container">
      <LinkItem>Categorias de roupa</LinkItem>
      <Link href="/">
        <img src={logo} alt="E-Clothes Moinhos" />
      </Link>
      <BotaoCarrinho> Produto(s) no carrinho: 0 </BotaoCarrinho>
    </Navbar>
  </Header>
)

export default Headerbar
