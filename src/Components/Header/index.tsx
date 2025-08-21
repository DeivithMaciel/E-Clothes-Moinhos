import { BotaoCarrinho, Header, LinkPointer, Navbar } from './styles'
import logo from '../../assets/images/logo_moinho.png'

const Headerbar = () => (
  <Header>
    <Navbar className="container">
      <h1>E-Goumet Moinhos</h1>
      <LinkPointer href="/">
        <img src={logo} alt="E-Gourmet Moinhos" />
      </LinkPointer>
      <BotaoCarrinho> Produto(s) no carrinho: 0 </BotaoCarrinho>
    </Navbar>
  </Header>
)

export default Headerbar
