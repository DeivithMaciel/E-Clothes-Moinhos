import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/index'

import { close, remove } from '../../store/reducers/cart'

import { LinkItem } from '../HeaderHome/styles'
import { formatPrice } from '../Food'

import { AsidePage, List, ListItem, Overlay, TotalPrice, Trash } from './styles'

import trash from '../../assets/images/lixeira.png'

const Aside = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const totalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <>
      {isOpen && <Overlay onClick={closeCart} />}
      <AsidePage className={isOpen ? 'is-open' : ''}>
        <List>
          {items.map((food) => (
            <ListItem key={food.id}>
              <img src={food.foto} alt={food.nome} />
              <div>
                <h3>{food.nome}</h3>
                <p>{formatPrice(food.preco)}</p>
                <Trash
                  src={trash}
                  alt="Remover"
                  onClick={() => removeItem(food.id)}
                />
              </div>
            </ListItem>
          ))}
        </List>
        <TotalPrice>
          <p>Valor total</p>
          <p>{formatPrice(totalPrice())}</p>
        </TotalPrice>
        <LinkItem to={'/'}>Continuar com a entrega</LinkItem>
      </AsidePage>
    </>
  )
}

export default Aside
