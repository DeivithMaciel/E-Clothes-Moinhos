import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { FoodItem } from '../../pages/Home'

import closeIcon from '../../assets/images/close.png'
import * as S from './styles'

type FoodProps = {
  food: FoodItem
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Food = ({ food }: FoodProps) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  return (
    <>
      <S.Card key={food.id}>
        <img src={food.foto} alt={food.nome} />
        <S.Title>{food.nome}</S.Title>
        <S.Description>{food.descricao}</S.Description>
        <S.Button onClick={() => setModalEstaAberta(true)}>
          Mais detalhes
        </S.Button>
      </S.Card>
      <S.Modal className={modalEstaAberta ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <S.FoodImage src={food.foto} />
          <S.InfosFood>
            <S.CloseButton
              onClick={() => setModalEstaAberta(false)}
              src={closeIcon}
              alt="Fechar"
            />
            <h4>{food.nome}</h4>
            <p>{food.descricao}</p>
            <p>serve: de {food.porcao}</p>
            <button
              onClick={() => {
                addToCart()
                setModalEstaAberta(false)
              }}
            >
              Adicionar ao carrinho - {formatPrice(food.preco)}
            </button>
          </S.InfosFood>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberta(false)}
        ></div>
      </S.Modal>
    </>
  )
}

export default Food
