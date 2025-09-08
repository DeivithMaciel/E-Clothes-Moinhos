import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { LinkItem } from '../HeaderHome/styles'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Headerbar = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.Header>
      <S.Navbar className="container">
        <LinkItem to={'/'}>Restaurantes</LinkItem>
        <S.LinkPointer href="/">
          <img src={logo} alt="Efood" />
        </S.LinkPointer>
        <button onClick={openCart}>
          {items.length} produto(s) no carrinho
        </button>
      </S.Navbar>
    </S.Header>
  )
}

export default Headerbar
