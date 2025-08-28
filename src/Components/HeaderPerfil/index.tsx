import { Header, LinkPointer, Navbar } from './styles'
import logo from '../../assets/images/logo.png'
import { LinkItem } from '../HeaderHome/styles'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Headerbar = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Header>
      <Navbar className="container">
        <LinkItem to={'/'}>Restaurantes</LinkItem>
        <LinkPointer href="/">
          <img src={logo} alt="Efood" />
        </LinkPointer>
        <button onClick={openCart}>
          {items.length} produto(s) no carrinho
        </button>
      </Navbar>
    </Header>
  )
}

export default Headerbar
